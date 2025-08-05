import defaultImage from "../assets/images/default.jpg";

function Aero() {
  return (
    <div className="col-lg-12 p-4 px-md-4 px-sm-3 px-xs-2 section">
      <div className="row m-0">
        {/* Profile Image */}
        <div className="col-lg-1 col-md-6 col-sm-6 col-xs-6 p-0 d-flex align-items-center justify-content-center">
          <img src={defaultImage} alt="Profile" className="img-fluid rounded" style={{ width: "90px", height: "120px", objectFit: "cover" }} />
        </div>

        {/* Profile Details */}
        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6 p-0 ps-3">
          <div>
            <h4 className="mb-0">Faraaz Khan</h4>
            <div>Software Engineer</div>
          </div>

          <div className="my-2">
            <div className="d-flex align-items-center mb-1">
              <i className="fas fa-map-marker-alt me-2"></i>
              <span>New Delhi, India</span>
            </div>
            <div className="d-flex align-items-center mb-1">
              <i className="fas fa-envelope me-2"></i>
              <span>faraazkhan.me@gmail.com</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fab fa-linkedin me-2"></i>
              <span>faraazkhan20</span>
            </div>
          </div>

          <div>Continual. Adaptive. Personalized. AI at TurboML, Inc.</div>
        </div>

        {/* Social Icons */}
        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 p-0 d-flex align-items-center justify-content-center">
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-outline-secondary bg-black p-1">
              <i className="fab fa-linkedin fa-lg text-white"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-black p-1">
              <i className="fab fa-twitter fa-lg text-white"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-black p-1">
              <i className="fab fa-instagram fa-lg text-white"></i>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-black p-1">
              <i className="fab fa-github fa-lg text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aero;
