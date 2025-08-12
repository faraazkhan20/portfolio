import "../styles/ContactMe.css";
import defaultImage from "../assets/images/default.jpg";

function ContactMe() {
  return (
    <div className="card shadow-sm rounded-4 my-5 section">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-4 gap-3">
          <img src={defaultImage} alt="Profile" width={40} height={45} className="rounded-circle border border-white" />
          <div>
            <h6 className="mb-0 fw-semibold">Faraaz Khan</h6>
            <small className="text-secondary">@faraazkhan_20 · 24th Sep</small>
          </div>
        </div>
        <p className="text-secondary">Subscribe by entering your email below to stay updated about the latest things I've created and discover the great finds I've come across on the internet.</p>
        <form className="row g-2 align-items-center">
          <div className="col-md-4">
            <input type="text" className="form-control form-control-sm text-white" placeholder="John Doe" name="name" />
          </div>
          <div className="col-md-5">
            <input type="email" className="form-control form-control-sm text-white" placeholder="your@email.com" name="email" />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-sm btn-light w-100">
              Join now!
            </button>
          </div>
        </form>
      </div>
      <div id="schedule-call-top-border" className="card-footer bg-transparent border-dashed p-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-9">
            <p className="mb-0 text-secondary">Alternatively, you can schedule a call with me to discuss anything you'd like. I'm always open to new ideas and opportunities.</p>
          </div>
          <div className="col-md-3">
            <button className="btn btn-sm btn-outline-success w-100 d-flex align-items-center justify-content-center gap-2">
              <i className="fas fa-phone-alt" /> Cal.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
