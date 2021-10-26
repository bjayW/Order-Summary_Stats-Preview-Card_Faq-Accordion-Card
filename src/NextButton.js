import { useHistory } from "react-router";

const NextButton = () => {
  let history = useHistory();

  const routeChange = () => {
    let path = "/stats-preview-card";
    history.push(path);
  };

  return (
    <div className="next-button">
      <i class="fas fa-arrow-alt-circle-right" onClick={routeChange} />
    </div>
  );
};

export default NextButton;
