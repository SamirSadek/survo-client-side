import { useLoaderData } from "react-router-dom";

const ParticipateSurveyItem = () => {
    const { _id,title, category, options, description, like, dislike,vote } = useLoaderData();

    return (
        <div>
            ParticipateSurveyItem
        </div>
    );
};

export default ParticipateSurveyItem;