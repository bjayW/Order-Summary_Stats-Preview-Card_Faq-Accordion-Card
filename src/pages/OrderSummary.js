const orderSummary = () => {
  return (
    <div className="container-fluid">
      <span className="row">
        <img
          src="../../images/Osc/background.svg"
          alt="top-backgroung-img"
          class="img-fluid"
        />
      </span>
      <div className="container ">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 box">
            <img src="../../images/Osc/listeningToMusic.svg" alt="Listening to Music Image" class="img-fluid"/>
            <div className="row">
            <div className="col-3"> </div>
            <div className="col-7">
            <h3 style={{marginTop: 30, fontWeight: 750}}>Order Summary</h3>
            </div>
            </div>
            <div className="box-items">
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any  device anywhere you like!</p>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default orderSummary;
