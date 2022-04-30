import "./about.css";
import { skill } from "../../data";

const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa impedit velit enim, deleniti at laborum fuga? Amet voluptatum hic atque nulla assumenda, molestiae quibusdam ratione consequatur sunt est distinctio!</p>
                <p className="a-sub">Skills</p>

                <div className="a-skills">
                    {skill.map((item) => (
                        <div className="skill">
                            <img src={item.img} className="icon"/>
                            <p className="skill-sub">{item.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;