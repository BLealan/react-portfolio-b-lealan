import githubLogo from '../../assets/github-mark-white.png';
import linkedinLogo from '../../assets/linkedin-logo-white.png';
import twitterLogo from '../../assets/twitter-logo-white.png';

export default function Footer(){

    return (
        <div className="footer">
            <h6 className="footerText">B Lealan ©2024</h6>
            <div className="icon-boxes">
                <div>
                    <a href="https://github.com/BLealan" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={githubLogo}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/ben-lealan-5a432aa0/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={linkedinLogo} href=""/>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/NotAboutOwls" target="_blank" rel="noopener noreferrer">
                    <img className="footer-icons" src={twitterLogo}/>
                    </a>
                </div>
            </div>
        </div>
    )
}