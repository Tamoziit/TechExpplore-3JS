import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

//4 different contents to render
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Tamojit Das</span>👋🏽
            <br />
            A Full Stack Engineer from India💻
        </h1>
    ),
    2: (
        <InfoBox
            text="Eager to pursue a career in Software Engineering, aspiring Full Stack Developer and LLM Engineer. Capable of building and designing robust, full stack web applications with efficient utilities."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Explore some of my best and intruiging Web Development Projects!"
            link="/projects"
            btnText="Explore"
        />
    ),
    4: (
        <InfoBox
            text="Wanna get in touch with me? Looking for a Full Stack Dev to get your work done? Well, I might be the perfect fit you are looking  for!"
            link="/contact"
            btnText="Lets Connect"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;