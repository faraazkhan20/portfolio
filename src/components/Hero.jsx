function Hero() {
  return (
    <div className="col-lg-12 p-5 px-md-4 px-sm-3 px-xs-2 text-center section mt-5">
      <div className="fs-1 fw-semibold" style={{ letterSpacing: "-0.6px" }}>
        Faraaz Khan
      </div>
      <div className="fs-4 fw-semibold pb-2">Junior Software Developer</div>

      <div className="pb-2 d-flex justify-content-center gap-1">
        <button className="btn btn-sm btn-outline-primary">
          <i className="fab fa-linkedin fa-lg"></i>
        </button>
        <button className="btn btn-sm btn-outline-primary">
          <i className="fab fa-twitter fa-lg"></i>
        </button>
        <button className="btn btn-sm btn-outline-primary">
          <i className="fab fa-instagram fa-lg"></i>
        </button>
        {/* <button className="btn btn-sm btn-outline-primary">
          <i className="fab fa-reddit fa-lg"></i>
        </button> */}
        {/* <button className="btn btn-sm btn-outline-primary">
          <i className="fab fa-facebook fa-lg"></i>
        </button> */}
        <button className="btn btn-sm btn-outline-primary">
          <i className="fab fa-github fa-lg"></i>
        </button>
        {/* <button className="btn btn-sm btn-outline-primary">
          <i className="fas fa-globe fa-lg"></i>
        </button> */}
        {/* <button className="btn btn-sm btn-outline-primary">
          <i className="fab fa-telegram fa-lg"></i>
        </button> */}
      </div>

      <p className="px-0 px-md-5">I am a skilled and innovative developer with a passion for crafting efficient and user-centric solutions. With a strong foundation in web development and a commitment to excellence, I continuously strive to deliver impactful projects that blend creativity with functionality.</p>
      <button className="btn btn-md btn-outline-primary">
        Say Hello! <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
}

export default Hero;
