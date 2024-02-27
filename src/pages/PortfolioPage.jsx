import '../components/UI/portfolioStyle.css'

export default function PortfolioPage() {
    return (
        <div>
            <div className="container">
                <img src="../src/assets/project-recipe.png" alt="recipe-translator" className="image"/>
                <div className="middle">
                    <div class="text"><a href='https://blealan.github.io/recipe-translator/'>GitHub</a> / <a href='https://github.com/BLealan/recipe-translator'>Deployed Link</a></div>
                </div>
            </div>
        </div>
    );
}