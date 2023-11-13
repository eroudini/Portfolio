import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"


// ICI J'IMPORTE LES LOGOS DES SKILLS
import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import javascript from "../assets/skills/javascript.svg"
import php from "../assets/skills/php.svg"
import mysql from "../assets/skills/mysql.svg"
import symfony from "../assets/skills/symfony.svg"
import linux from "../assets/skills/linux.svg"
import reactIcon from "../assets/skills/react.svg"
import git from "../assets/skills/git.svg"
import figma from "../assets/skills/figma.svg"

import hr from "../assets/curve-hr.svg"


export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };


      // ICI JE DEFINIE MES IMPORT
    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
  

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="HTML"  img={html} /> 
                <SkillCard name="CSS" img={css} /> 
                <SkillCard name="Javascript"  img={javascript} />
                <SkillCard name="PHP" img={php} />
                <SkillCard name="Mysql" img={mysql} />
                <SkillCard name="Linux"  img={linux} />
                <SkillCard name="Symfony" img={symfony} />
                <SkillCard name="React"  img={reactIcon} />
                <SkillCard name="Git"  img={git} />
                <SkillCard name="Figma" img={figma} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}