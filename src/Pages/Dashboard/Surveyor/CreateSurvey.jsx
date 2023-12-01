import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const CreateSurvey = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)

    const onSubmit =async (data) => {
        console.log(data);
        const currentDate = new Date().toISOString();
        console.log(currentDate);

        // image upload to imgbb and then get an url
        const surveyItem = {
            title: data.title,
            description: data.description,
            options: data.options,
            category: data.category,
            like: 0,
            dislike: 0,
            vote: 0,
            timestamp:currentDate,
            email: user.email,
            name: user.displayName

        }
       
        console.log(surveyItem);
        const surveys = await axiosPublic.post('/surveys',surveyItem)
        console.log(surveys.data)
        if(surveys.data.insertedId){
            // 
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Survey Created Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            
        }

    
      };

  return (
    <div className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">New Surveys</p>
        <h2 className="title">Create Your Survey</h2>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-10 bg-base-200 py-10"
        >
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text font-bold">Title*</span>
            </label>
            <input
              {...register("title")}
              type="text"
              placeholder="Survey title"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div className="flex gap-4 my-6">
            {/* category */}
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text font-bold">Category*</span>
              </label>
              <select
              defaultValue='default'
                {...register("category")}
                className="select select-bordered w-full"
                required
              >
                <option disabled value='default'>
                  Select a category
                </option>
                <option value="Demographics">Demographics</option>
                <option value="Education">Education</option>
                <option value="Market Research">Market Research</option>
                <option value="Health">Health</option>
                <option value="Social Issues">Social Issues</option>
              </select>
            </div>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text font-bold">Options*</span>
              </label>
              <select
              defaultValue='default'
                {...register("options")}
                className="select select-bordered w-full"
                required
              >
                <option disabled value='default'>
                  Options
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                
              </select>
            </div>
            
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Survey Description*</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="Survey Description"
              required
            ></textarea>
          </div>

          <div className="text-center mt-10">
          <button className="btn bg-green text-white">Create Survey</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSurvey;
