import { useEffect, useState } from "react";
import useScript from "../useScript";
import Faq from "../Faq";

const FaqCard = () => {
  const [faqs, setFaqs] = useState([
    {
      id: "Q1",
      question: "How many team members can I invite?",
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      id: "Q2",
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },

    {
      id: "Q3",
      question: "How do I reset my password?",
      answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      id: "Q4",
      question: "Can I cancel my subscription?",
      answer: "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      id: "Q5",
      question: "Do you provide additional support?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ]);

  //useScript("../script.js");

  return (
    <div
      style={{
        background: "linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%))",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="row space">
          <div className="col-12"></div>
        </div>
        <div className="row faq-box">
          <div className="col-md-5 bg-pattern">
            <img
              src="../../images/FaqC/bgPattern.svg"
              alt="bg-pattern-image"
              className=" bg-pattern-image"
            />
            <img
              src="../../images/FaqC/womanOnline.svg"
              alt="woman-online-img"
              class="img-fluid"
              className="woman-online-image"
            />
          </div>
          <div className="col-1"></div>
          <div className="col-md-5 faq-text">
            <h2 className="faq">FAQ</h2>
            <div className="col-12">
              <div className="question">
                {faqs.map((faq) => (
                  <div className="">
                    <Faq faq={faq} key={faq.id} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
      {/*<script src="../script.js"></script>*/}
    </div>
  );
};

export default FaqCard;
