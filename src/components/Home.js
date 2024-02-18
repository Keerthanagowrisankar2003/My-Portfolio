import React, { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center ml-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                <h2 className="m-0 font animate-charcter"style={{ fontSize:'38px', fontWeight:'bold' }}>
                  I'm Keerthana GowriSankar,
                </h2>
                <h5 className="ls-2 mt-2 slide-in-bottom">
                  a Computer Science and Engineering student from Kongu Engineering College. Driven by curiosity in
                  exploring the world of technology with a passion for innovation and learning.
                </h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid"
                src="../images/MyPic.jpg"
                alt="..."
                style={{ maxWidth: '75%', height: 'auto', borderRadius: '50%' }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
