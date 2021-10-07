const FaqCard = () => {
  return (
    <div style={{background: "hsl(273, 75%, 66%)", height: "100vh"}}>
      <div className="container">
        <div className="row space">
        <div className="col-12"></div>
        </div>
        <div className="row faq-box" >
            <div className="col-md-6 bg-pattern" >
            <img src="../../images/FaqC/bgPattern.svg" alt="bg-pattern-image" className=" bg-pattern-image"/>
            <img
              src="../../images/FaqC/womanOnline.svg"
              alt="woman-online-img"
              class="img-fluid"
              className="woman-online-image"
            />
            </div>
          <div className="col-md-6 faq-text">
            <h1>FAQ</h1>
            <p>How many team members can I invite?</p>
            <p>How many team members can I invite?</p>
            <p>How do I reset my password?</p>
            <p>Can I cancel my subscription?</p>
            <p>Do you provide additional support?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
