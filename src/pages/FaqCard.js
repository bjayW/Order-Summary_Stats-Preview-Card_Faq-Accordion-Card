const FaqCard = () => {
  return (
    <div style={{background: "linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%))", height: "100vh", }}>
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
              <p className="faq-qst">How many team members can I invite?</p>
              <img src="../../images/FaqC/iconArrow.svg" alt="arrow-icon" className="arrow-icon"/>
            </div>
            <span className="answer">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </span>
            <hr />
            <div className="question">
              <p className="faq-qst">What is the maximum file upload size?</p>
              <img src="../../images/FaqC/iconArrow.svg" alt="arrow-icon" className="arrow-icon"/>
            </div>
            <span className="answer">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </span>
            <hr />
            <div className="question">
              <p className="faq-qst">How do I reset my password?</p>
              <img src="../../images/FaqC/iconArrow.svg" alt="arrow-icon" className="arrow-icon"/>
            </div>
            <div className="answer">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </div>
            <hr />
            <div className="question">
              <p className="faq-qst">Can I cancel my subscription?</p>
              <img src="../../images/FaqC/iconArrow.svg" alt="arrow-icon" className="arrow-icon"/>
            </div>
            <div className="answer">
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </div>
            <hr />
            <div className="question">
              <p className="faq-qst">Do you provide additional support?</p>
              <img src="../../images/FaqC/iconArrow.svg" alt="arrow-icon" className="arrow-icon"/>
            </div>
            <div className="answer">
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </div>
            <hr />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
