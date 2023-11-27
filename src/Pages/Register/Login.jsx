import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="section-container mt-12">
      <div className="hero min-h-screen bg-base-200">
        
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div>
          <h2 className="uppercase text-center text-green font-bold text-2xl rounded-lg p-2 border-green border-2">
            Login
          </h2>
        </div>
          <form onSubmit={onSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red">This field is required*</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red">This field is required*</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-green text-white border-0 hover:bg-base-200 hover:text-green ">LOGIN</button>
            </div>
          </form>

          <p className="text-center mb-10">
            <small>
              New Here ?{" "}
              <Link className="text-green underline" to="/signup">
                Create a new Account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
