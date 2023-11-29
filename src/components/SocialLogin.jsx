import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
            })

            Swal.fire({
                title: "Logged In Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
                },
              });
              navigate('/')
        })
    }

  return (
    <div >
      <button onClick={handleGoogleSignIn} className="btn  border-2 border-green w-full">
        <FcGoogle className="" />
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
