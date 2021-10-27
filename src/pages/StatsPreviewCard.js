import { useHistory } from "react-router";

const StatsPreviewCard = () => {
  let history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <div style={{background: "hsl(233, 47%, 7%)", height: "100vh", zIndex: "-2", }}>
    <div className="container" >
      <div className="row space">
        <div className="col-12"></div>
      </div>
      <div className="row container-fluid ">
        <div className="col-md-6 card-text ">
          <h1 className="big-card-text">Get <span className='insights-text'>insights</span> that help your business grow.</h1>
          <p className="sm-card-text">Discover the benefits of data analytics and make better decision regarding revenue, customer 
            experience, and overall efficiency.</p>
          <div className="figures">
          <span className="fig"><h4 >10k+</h4> <p className="sm-text">COMPANIES</p></span>
          <span className="fig"><h4 >314</h4> <p className="sm-text">TEMPLATES</p></span>
          <span className="fig"><h4 >12M+</h4> <p className="sm-text">QUERIES</p></span>
          </div>
        </div>
        <div className="col-md-6 card-image">
          <img src="https://raw.githubusercontent.com/saadshaikh1992/stats-preview-card-component/main/image-header-desktop.jpg" alt="main-page-img" class="img-fluid" className="spc-img"/>
        </div>
        </div>
        </div>
        <div className="spc-next">
        <i class="fas fa-arrow-alt-circle-right" onClick={() => routeChange("/faq-card")}/>
        </div>
    </div>
  );
};

export default StatsPreviewCard;
