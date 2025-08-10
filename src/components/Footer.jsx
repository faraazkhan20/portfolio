import "../styles/Footer.css";

function Footer() {
  return (
    <>
      {/* Fixed Social Bar */}
      <div id="fixed-social-bar" className="container p-4 d-flex justify-content-center gap-3 bg-dark rounded-4 shadow">
        <a href="https://github.com/faraazkhan20/" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
          <i className="fab fa-github fa-lg" />
        </a>
        <a href="https://www.linkedin.com/in/faraazkhan20/" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
          <i className="fab fa-linkedin fa-lg" />
        </a>
        <a href="https://x.com/faraazkhan_20/" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
          <i className="fab fa-x-twitter fa-lg" />
        </a>
        <a href="#" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
          <i className="fab fa-medium fa-lg" />
        </a>
        <a href="mailto:faraazkhan.me@gmail.com" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
          <i className="fas fa-envelope fa-lg" />
        </a>
        <a href="#" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
          <i className="fas fa-rss fa-lg" />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer-border pt-4 pb-5 my-5">
        <div className="container text-center">
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-3 text-secondary small">
            <a href="https://github.com/faraazkhan20/" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
              <i className="fab fa-github" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/faraazkhan20/" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a href="https://x.com/faraazkhan_20/" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
              <i className="fab fa-x-twitter" /> Twitter
            </a>
            <a href="#" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
              <i className="fab fa-medium" /> Medium
            </a>
            <a href="mailto:faraazkhan.me@gmail.com" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
              <i className="fas fa-envelope" /> Email
            </a>
            <a href="#" target="_blank" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2">
              <i className="fas fa-rss" /> RSS
            </a>
          </div>
          <p className="text-secondary small mb-0">© 2025 Faraaz Khan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
