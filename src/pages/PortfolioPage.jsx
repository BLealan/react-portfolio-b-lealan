import '../components/UI/UIStyle.css';
import passwordGenerator from '../assets/password-generator.png';
import dayScheduler from '../assets/day-scheduler.png';
import projectRecipe from '../assets/project-recipe.png';
import svgLogo from '../assets/SVG-logo-generator-demo.gif'
import projectTravel from '../assets/travel-blog.png';
import pwaTextEditor from '../assets/jate.png';

export default function PortfolioPage() {

    return (
        <div>
            <div className="container">
                <img src={passwordGenerator} alt="Password generator" className="image"/>
                <div className="middle">
                    <div class="text">
                        <b>Password generator</b>
                        </div>
                    <div class="text"><a href='https://github.com/BLealan/week-3-password-generator-b-lealan' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://blealan.github.io/week-3-password-generator-b-lealan/' target="_blank" rel="noopener noreferrer">Deployed Link</a></div>
                </div>
            </div>
            <div className="container">
                <img src={dayScheduler} alt="Work Day Scheduler" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>Work Day Scheduler</b>
                        </div>
                    <div class="text"><a href='https://github.com/BLealan/work-day-scheduler-b-lealan' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://blealan.github.io/work-day-scheduler-b-lealan/ target="_blank" rel="noopener noreferrer"'>Deployed Link</a></div>
                </div>
            </div>
            <div className="container">
                <img src={projectRecipe} alt="Recipe Translator Group Project" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>Recipe Translator Group Project</b>
                        </div>
                    <div class="text"><a href='https://blealan.github.io/recipe-translator/' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://github.com/BLealan/recipe-translator' target="_blank" rel="noopener noreferrer">Deployed Link</a></div>
                </div>
            </div>
            <div className="container">
                <img src={svgLogo} alt="SVG Logo Maker" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>SVG Logo Maker</b>
                        </div>
                    <div class="text"><a href='https://github.com/BLealan/SVG-logo-maker-b-lealan' target="_blank" rel="noopener noreferrer">GitHub</a></div>
                </div>
            </div>
            <div className="container">
                <img src={projectTravel} alt="Travel Blog Group Project" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>Travel Blog Group Project</b>
                        </div>
                    <div class="text"><a href='https://jbtravelblogfinal-84a20cc94acf.herokuapp.com/' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://github.com/MustafeMohamoud1/JBTravelBlog' target="_blank" rel="noopener noreferrer">Deployed Link</a></div>
                </div>
            </div>
            <div className="container">
                <img src={pwaTextEditor} alt="PWA Text Editor" className="image"/>
                <div className="middle">
                <div class="text">
                        <b>PWA Text Editor</b>
                        </div>
                    <div class="text"><a href='https://pwa-text-editor-b-lealan.onrender.com/' target="_blank" rel="noopener noreferrer">GitHub</a> / <a href='https://github.com/BLealan/PWA-text-editor-b-lealan' target="_blank" rel="noopener noreferrer">Deployed Link</a></div>
                </div>
            </div>
        </div>
    );
}