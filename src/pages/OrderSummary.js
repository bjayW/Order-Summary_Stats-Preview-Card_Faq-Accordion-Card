const orderSummary = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <img
          src="../../images/Osc/background.svg"
          alt="top-backgroung-img"
          class="img-fluid"
          className="rounded-top"
          style={{borderTopLeftRadius: "15px"}}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 box">
            <img
              src="../../images/Osc/listeningToMusic.svg"
              alt="Listening to Music Image"
              class="img-fluid"
            />
            <div className="row">
              <div className="col-3"> </div>
              <div className="col-7">
                <h3 style={{ marginTop: 30, fontWeight: 750 }}>
                  Order Summary
                </h3>
              </div>
            </div>
            <div className="box-items">
              <p>
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
              <div className="sub-box">
                <div className="">
                  <img
                    src="../../images/Osc/music.svg"
                    alt="music icon"
                    className="music-img"
                    style={{ marginRight: 10 }}
                  />
                </div>
                <div className="col-7">
                <p style={{color: "black", margin: 0, paddingTop: 8}}>Annual Plan</p>
                <p style={{paddingTop: 3}}>$59.99/year</p>
                </div>
                <p className="change">Change</p>
              </div>
              <button className="btn-block">Proceed to Payment</button>
              <p className="cancel">Cancel Order</p>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default orderSummary;
