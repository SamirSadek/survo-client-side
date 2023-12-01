import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateSurveyItem = () => {
  const { register, handleSubmit } = useForm();

  const { _id,title, category, options, description } = useLoaderData();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    const surveyItem = {
        title: data.title,
        description: data.description,
        options: data.options,
        category: data.category,


    }
    const surveys = await axiosPublic.patch(`/surveys/${_id}`,surveyItem)
    console.log(surveys.data)
    if(surveys.data.modifiedCount){
        // 
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Survey Updated Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        
    }

  };
  return (
    <div className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">Refresh Info</p>
        <h2 className="title">Update A Survey</h2>
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
              defaultValue={title}
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
                defaultValue={category}
                {...register("category")}
                className="select select-bordered w-full"
                required
              >
                <option disabled value="default">
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
                defaultValue={options}
                {...register("options")}
                className="select select-bordered w-full"
                required
              >
                <option value="default">Options</option>
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
              defaultValue={description}
              required
            ></textarea>
          </div>

          <div className="text-center mt-10">
            <button className="btn bg-green text-white">Update Survey</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSurveyItem;
