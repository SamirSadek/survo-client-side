import { useState } from "react";

const FAQ = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="section-container text-center my-20">
      <div className="my-16">
      <p className="subtitle">Do You Have Questions ??</p>
      <h2 className="title">Frequently Asked Questions(FAQ)</h2>
      </div>
      <div className="collapse collapse-arrow bg-green text-white my-5 ">
        <input type="radio" name="my-accordion-2" checked={isChecked} onChange={handleCheckboxChange} />
        <div className="collapse-title text-xl font-medium">
        What is the main purpose of this Polling and Survey application?
        </div>
        <div className="collapse-content">
          <p className="my-10 md:px-32 text-white">This application serves as a comprehensive platform for creating, conducting, and analyzing surveys. It allows users to create different types of surveys, participate in them, view results, and interact within the community.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-green text-white my-5">
        <input type="radio" name="my-accordion-2" checked={isChecked} onChange={handleCheckboxChange} />
        <div className="collapse-title text-xl font-medium">
        Can anyone participate in the surveys?
        </div>
        <div className="collapse-content">
          <p className="my-10 md:px-32 text-white">Yes, most surveys are open to all users. However, some surveys may have restrictions where only authorized or pro users can vote or comment. Logging in allows you to access additional features based on your user role.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-green text-white my-5">
        <input type="radio" name="my-accordion-2" checked={isChecked} onChange={handleCheckboxChange} />
        <div className="collapse-title text-xl font-medium">
        What are the benefits of becoming a pro user?
        </div>
        <div className="collapse-content">
          <p className="my-10 md:px-32 text-white">Pro users enjoy added privileges such as the ability to comment on surveys, access exclusive content, and engage more actively in the survey community. Additionally, pro users can unlock certain features like advanced survey creation tools.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-green text-white my-5">
        <input type="radio" name="my-accordion-2" checked={isChecked} onChange={handleCheckboxChange} />
        <div className="collapse-title text-xl font-medium">
        How can I upgrade my user role to become a pro user?
        </div>
        <div className="collapse-content">
          <p className="my-10 md:px-32 text-white">To become a pro user, simply navigate to the Pricing page where you'll find details about our membership plans. Upon successful payment, your user role will be upgraded, granting access to additional features and privileges.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
