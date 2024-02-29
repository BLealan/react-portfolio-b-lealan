import portrait from '../assets/portrait.jpg';

export default function AboutPage() {
    return (
        <div className="blur-content">
            <img src={portrait} alt="Picture of Ben Lealan" className="portrait"/>
            <p className="content-box">
                Full stack web development! That's what I've been learning to do, and that's what I want to do. We all need to start somewhere, so this is it. 
                My name is Ben and I've been learning to code and programme since September 2023. Have a look at my Portfolio to see some 
                examples of what I have worked on as well as how to get in touch in Contact 
                (topics may include but are not limited to boardgames, the work of David Lynch
                and why 1977 might be the best year for album releases. And also coding!)
            </p>
        </div>
    );
}