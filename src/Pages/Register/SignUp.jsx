import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
//   const {} = useContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext)

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    createUser(data.email, data.password)
    .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
    })
  });
  return (
    <div className="section-container mt-12">
      <div className="hero min-h-screen bg-base-200">
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div>
                <h2 className="uppercase text-center text-green font-bold text-2xl rounded-lg p-2 border-green border-2">Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name",{ required: true })}
                  placeholder="Your Name"
                  className="input input-bordered"
                  
                />
                {errors.name && <span className="text-red">This field is required*</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  {...register("photourl",{ required: true })}
                  className="input input-bordered"
                  
                />
                {errors.photourl && <span className="text-red">This field is required*</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register("email",{ required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red">This field is required*</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register("password",{ required: true,minLength: 6, pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  
                />
                {errors.password?.type === 'required' && <span className="text-red">This field is required*</span>}
                {errors.password?.type === 'minLength' && <span className="text-red">Minimum six characters required*</span>}
                {errors.password?.type === 'pattern' && <span className="text-red">Password must have an uppercase, one special character, one number and one lower case*</span>}
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-green text-white border-0 hover:bg-base-200 hover:text-green">SIGNUP</button>
              </div>


            </form>
            <p className='text-center  mb-10'><small>Already have an account ? <Link className='text-green underline' to='/login'>Please login</Link></small></p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
