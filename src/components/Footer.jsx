// PATH: components/footer.js

import "./Footer.css";

const Footer = () => {
	return (
		<section className="footer-section">
			<div className="contact-container">
				<img src="" alt="" />
			</div>
				<div className="icon-container">
				<a href="https://www.linkedin.com/in/sjdigiambattista/">
					<img className="linkedin-icon" src="https://i.imgur.com/RIefvk9.png" />
				</a> 

				<a href="https://github.com/SJDiggs">
					<img className="github-icon" src="https://i.imgur.com/vUiouM8.png" />
				</a> 
				<a href="https://docs.google.com/document/d/e/2PACX-1vRqwhzi2oNJWQDCjUqO42mbrdoG1Fb8FWHGManC2RPX9MhEzZ645DQVUQ-rlY9LbGcG6ZyKb6DnRQmM/pub">
					<img className="resume-icon" src="https://i.imgur.com/YEjSCqW.png" />
				</a> 
				</div>
				<div className="copyright">
				Designed & Developed by Steve DiGiambattista - © 2023
			</div>
		</section>
	);
};

export default Footer;