import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"


import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import javascript from "../assets/skills/javascript.svg"
import php from "../assets/skills/php.svg"
import mysql from "../assets/skills/mysql.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
// import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
// import tailwind from "../assets/skills/tailwind.svg"
// import mikrotik from "../assets/skills/mikrotik.svg"
// import kubernetes from "../assets/skills/kubernetes.svg"
// import ansible from "../assets/skills/ansible.svg"
// import windows from "../assets/skills/windows.svg"
// import react from "../assets/skills/react.svg"
// import cisco from "../assets/skills/cisco.svg"
// import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"
import { faPhp } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            {/* <p className="font-light text-gray-400">Here are some of my skills</p> */}

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="HTML"  img={html} /> 
                <SkillCard name="CSS" img={css} /> 
                <SkillCard name="Javascript"  img={javascript} />
                <SkillCard name="PHP" img={php} />
                <SkillCard name="Mysql" img={mysql} />
                <SkillCard name="Linux"  img={linux} />
                <SkillCard name="bash"  img={bash} />
                {/* <SkillCard name="python"  img={python} /> */}
                <SkillCard name="React"  img={reactIcon} />
                {/* <SkillCard name="tailwind"  img={tailwind} /> */}
                {/* <SkillCard name="kvm"  img={kvm} /> */}
                {/* <SkillCard name="mikrotik"  img={mikrotik} /> */}
                {/* <SkillCard name="kubernetes"  img={kubernetes} />
                <SkillCard name="ansible"  img={ansible} />
                <SkillCard name="windows"  img={windows} />
                <SkillCard name="react"  img={react} />
                <SkillCard name="cisco"  img={cisco} />
                <SkillCard name="docker"  img={docker} /> */}
                <SkillCard name="Git"  img={git} />
                {/* <SkillCard name="express" experience="1 years" img={express} />
                <SkillCard name="gitlab" experience="1 years" img={gitlab} /> */}
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}