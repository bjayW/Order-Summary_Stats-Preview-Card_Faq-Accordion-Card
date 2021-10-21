const Faq = ({ faq }) => {
  return (
    <div>
      <div className="question">{faq.question}</div>
      <div className="answer">
        {faq.answer} 
      </div>
      <hr />
    </div>
  );
};

export default Faq;
