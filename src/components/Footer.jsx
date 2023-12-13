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

				<a href="https://github.com/SJDiggs/SJDIggs">
					<img className="github-icon" src="https://i.imgur.com/vUiouM8.png" />
				</a> 
				</div>
				<div className="copyright">
				Designed & Developed by Steve DiGiambattista - © 2023
			</div>
		</section>
	);
};

export default Footer;