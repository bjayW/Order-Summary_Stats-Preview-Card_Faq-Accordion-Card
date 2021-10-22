const Faq = ({ faq, index, toggleFaq }) => {
  return (
    <div
      className={"faq" + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFaq(index)}
    >
        <div className="qst-arrow">
      <div className="faq-question">
        {faq.question}
        </div>
          <span className="arrow-icon">
          <img
            src="../../images/FaqC/iconArrow.svg"
            alt="arrow-icon"
            className="arrow-icon"
          />
          </span>
      </div>
      <div className="faq-answer">{faq.answer}</div>
      <hr />
    </div>
  );
};

export default Faq;
