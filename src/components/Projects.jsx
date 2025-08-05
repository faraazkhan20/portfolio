function Projects() {
  return (
    <div className="mt-5">
      <h5 className="fw-semibold">Projects</h5>
      <div>I've been actively engaged in a few side projects lately, exploring diverse technologies & ideas. Here’s a quick glimpse of my ongoing and completed projects.</div>

      <div className="row px-2 mt-2">
        {/* Card 1 */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-1">
          <div className="card shadow rounded-4 p-3 section">
            <div className="d-flex justify-content-between align-items-start">
              <div className="pe-2">
                <h5 className="fw-semibold mb-0">Payment Processing (UI)</h5>
                <p className="small mb-0">An implementation of Payment Processing UI by baked.design using React.js, Express.js and MongoDB, reducing latency by 25% and improving user experience by 75%.</p>
              </div>
              <a href="#" target="_blank" className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1">
                <i className="fas fa-globe fa-sm"></i> Live
              </a>
            </div>
            <div className="row g-1 my-2">
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">TypeScript</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">Next</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">None</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">Vercel</span>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between small">
                <span className="fw-medium">Progress</span>
                <span>95%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div className="progress-bar bg-primary" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3">
              <a href="#" target="_blank" className="text-decoration-none small d-flex align-items-center gap-1">
                <i className="fab fa-github fa-lg "></i> View Project Details
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-1">
          <div className="card shadow rounded-4 p-3 section">
            <div className="d-flex justify-content-between align-items-start">
              <div className="pe-2">
                <h5 className="fw-semibold mb-0">Payment Processing (UI)</h5>
                <p className="small mb-0">An implementation of Payment Processing UI by baked.design using React.js, Express.js and MongoDB, reducing latency by 25% and improving user experience by 75%.</p>
              </div>
              <a href="#" target="_blank" className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1">
                <i className="fas fa-globe fa-sm"></i> Live
              </a>
            </div>
            <div className="row g-1 my-2">
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">TypeScript</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">Next</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">None</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">Vercel</span>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between small">
                <span className="fw-medium">Progress</span>
                <span>95%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div className="progress-bar bg-primary" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3">
              <a href="#" target="_blank" className="text-decoration-none small d-flex align-items-center gap-1">
                <i className="fab fa-github fa-lg "></i> View Project Details
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-1">
          <div className="card shadow rounded-4 p-3 section">
            <div className="d-flex justify-content-between align-items-start">
              <div className="pe-2">
                <h5 className="fw-semibold mb-0">Payment Processing (UI)</h5>
                <p className="small mb-0">An implementation of Payment Processing UI by baked.design using React.js, Express.js and MongoDB, reducing latency by 25% and improving user experience by 75%.</p>
              </div>
              <a href="#" target="_blank" className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1">
                <i className="fas fa-globe fa-sm"></i> Live
              </a>
            </div>
            <div className="row g-1 my-2">
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">TypeScript</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">Next</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">None</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-outline-secondary border">Vercel</span>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between small">
                <span className="fw-medium">Progress</span>
                <span>95%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div className="progress-bar bg-primary" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3">
              <a href="#" target="_blank" className="text-decoration-none small d-flex align-items-center gap-1">
                <i className="fab fa-github fa-lg "></i> View Project Details
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
