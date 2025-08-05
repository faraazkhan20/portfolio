import spotifyLogo from "../assets/images/spotify.png";

function Experience() {
  return (
    <div className="mt-5">
      <h5 className="fw-semibold">Experience</h5>
      <div>A brief about my work experiences where I have worked at and where I am currently working at.</div>

      <div className="container p-0">
        <div className="card section my-2" style={{ maxWidth: "100%" }}>
          <div className="p-1 d-flex flex-row">
            {/* Company */}
            <div className="col-md-1 col-sm-2 col-xs-2 p-1">
              <img src={spotifyLogo} alt="Profile" className="img-fluid rounded" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            </div>
            {/* Job */}
            <div className="col-md-7 col-sm-10 col-xs-10 d-flex align-items-center">
              <div className="card-body p-1">
                <div className="card-title mb-0">Software Engineering Intern</div>
                <div className="card-text">TurboML, Inc.</div>
              </div>
            </div>
            {/* Duration */}
            <div className="col-md-4 d-none d-md-flex align-items-center justify-content-end">
              <div className="card-body p-1">
                <div className="card-text text-end">November 2023 - Present</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card section my-2" style={{ maxWidth: "100%" }}>
          <div className="p-1 d-flex flex-row">
            {/* Company */}
            <div className="col-md-1 col-sm-2 col-xs-2 p-1">
              <img src={spotifyLogo} alt="Profile" className="img-fluid rounded" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            </div>
            {/* Job */}
            <div className="col-md-7 col-sm-10 col-xs-10 d-flex align-items-center">
              <div className="card-body p-1">
                <div className="card-title mb-0">Technical Head</div>
                <div className="card-text">Google Developer Groups</div>
              </div>
            </div>
            {/* Duration */}
            <div className="col-md-4 d-none d-md-flex align-items-center justify-content-end">
              <div className="card-body p-1">
                <div className="card-text text-end">August 2024 - October 2024</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card section my-2" style={{ maxWidth: "100%" }}>
          <div className="p-1 d-flex flex-row">
            {/* Company */}
            <div className="col-md-1 col-sm-2 col-xs-2 p-1">
              <img src={spotifyLogo} alt="Profile" className="img-fluid rounded" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            </div>
            {/* Job */}
            <div className="col-md-7 col-sm-10 col-xs-10 d-flex align-items-center">
              <div className="card-body p-1">
                <div className="card-title mb-0">Open Source Contributor</div>
                <div className="card-text">Documenso, Inc.</div>
              </div>
            </div>
            {/* Duration */}
            <div className="col-md-4 d-none d-md-flex align-items-center justify-content-end">
              <div className="card-body p-1">
                <div className="card-text text-end">September 2023 - October 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
