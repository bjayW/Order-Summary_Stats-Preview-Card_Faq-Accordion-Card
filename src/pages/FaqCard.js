import { useEffect, useState } from "react";
import Faq from "../Faq";

const FaqCard = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How many team members can I invite?",
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      open: false,
    },
    {
      
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
      open: false,
    },

    {
      question: "How do I reset my password?",
      answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      open: false,
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes! Send us a message and we’ll process your request no questions asked.",
      open: false,
    },
    {
      question: "Do you provide additional support?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      open: false,
    },
  ]);

  //useScript("../script.js");

  const toggleFaq = index => {
    setFaqs(faqs.map((faq, i) => {
      if(i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

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
            <img
              src="../../images/FaqC/box.svg"
              alt="box-img"
              class="img-fluid"
              className="box-image"
            />
          </div>
          <div className="col-1"></div>
          <div className="col-md-5 faq-text">
            <h2 className="title-faq">FAQ</h2>
            <div className="col-12">
              <div className="faqs">
                {faqs.map((faq, i) => (
                  <div className="">
                    <Faq faq={faq} index={i}  toggleFaq={toggleFaq}/>
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
