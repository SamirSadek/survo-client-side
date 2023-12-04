import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");

    

  const stripe = useStripe();
  const elements = useElements();
   const axiosPublic = useAxiosPublic()
   const {user} = useContext(AuthContext)
   const totalPrice = 200.00;
   const { data: users = []  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const loggedUser = users.find(i => i.email === user.email)

  useEffect(()=>{
      axiosPublic.post('/create-payment-intent',  {price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
  }, [axiosPublic])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log('[error]', error);
        setError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }
    //   confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: card,
            billing_details: {
                   email: user?.email || 'anonymous',
                   name: user?.displayName || 'anonymous'
            }
        }
    })

    if(confirmError){
        console.log('confirm error')
    }else{
        console.log('payment intent', paymentIntent)
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id' , paymentIntent.id)
            setTransactionId(paymentIntent.id)



            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(), 
                status: 'pending'
            }
            const res = await axiosPublic.post('/payments',payment)
            console.log('payment saved', res.data)


            const role = await axiosPublic.put(`/users/${loggedUser._id}`, {role : 'ProUser'})
            console.log('role Changes', role.data)

            if(res.data?.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Payment Successful, Now you are Pro user",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }
    
  };

  return (
    <form className="px-20" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-center">
        <button className="my-10 text-center bg-green text-white btn hover:text-green" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </div>
      <p className="text-red text-center">{error}</p>
      {
        transactionId && <p className="text-green text-center">Your Transaction id : {transactionId}</p>
      }
    </form>
  );
};

export default CheckoutForm;
