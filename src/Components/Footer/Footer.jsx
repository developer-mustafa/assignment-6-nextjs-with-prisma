import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-info">
            <span className="footer-label">About Me:</span> All right Reserved{" "}
            <a
              className="footer-link"
              href="https://learnwithmustafa.vercel.app/"
            >
              learnwithmustafa.com
            </a>
          </p>
          <p className="footer-info">
            <span className="footer-label">Favorite Quote:</span> "The only way
            to do great work is to love what you do." - Steve Jobs
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
