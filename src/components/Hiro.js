import {useState} from 'react'

import profile from '../assets/me.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hellooo World 👋, I'm</h1>
                    <h1 className="text-2xl font-bold">Eroudini Abdillah</h1>
                    <p class="text-xl font-bold text-gray-300">Developpeur web et mobile</p>
                    <p className="text-md font-light text-gray-400 ">
                    Avant toute chose, je me présente 😄. <br></br> 
                   
                    J'ai 22 ans et je suis passionné par l'informatique depuis toujours. Je me forme actuellement au développement web et mobile à la CCI. 
                    Je vous présente mon portfolio qui retrace mon parcours professionnel. <br></br>

                    Toute au long de cette formation, j'apprends plusieurs technologies telles que HTML, CSS, en passant par JavaScript, ou encore PHP,
                     mais également les frameworks JavaScript tels que Vue.

                    J'ai également réalisé plusieurs projets personnels tout au long de mon cursus.</p>
                </div>
               
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/eroudini' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://www.linkedin.com/in/eroudini/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>             
            </div>
        </div> <br></br>
        
        </>    
    )
}
