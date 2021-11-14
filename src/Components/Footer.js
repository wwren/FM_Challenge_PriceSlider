import "./Footer.css";
export default function Footer() {
  return (
    <footer role="footer">
      <div>
        <span>Copyright &copy;</span> Ran's Price Slider (FM challenge) 2021
      </div>
      <div className="footer">
        <div>
          <a
            id="profile-link__github"
            href="https://github.com/wwren/FrontendMentor_PriceSlider"
            onClick="window.open(this.href);return false"
            rel="external"
          >
            <i className="fa fa-github">
              <span> GitHub</span>
            </i>
          </a>
        </div>
        <div>
          <a
            id="profile-link__linkedin"
            href="https://www.linkedin.com/in/ding-ran/"
            onClick="window.open(this.href);return false"
            rel="external"
          >
            <i className="fa fa-linkedin-square">
              <span> Linkedin</span>
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
}
