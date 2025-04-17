import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main1.png.jpg"
            alt="TalibiMart Banner"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h1 className="card-title fs-1 fw-bold">Welcome to TalibiMart</h1>
              <p className="card-text fs-5 d-none d-sm-block">
                A full-featured eCommerce web app built using ReactJS as part of a final year Computer Science thesis
                project by Talibi Abderrahim. Explore the smart online shopping experience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
