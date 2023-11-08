import CertCard from "./CertCard.js"

import cap1 from "../assets/certs/cap1.png"
import cap2 from "../assets/certs/cap2.png"
import hr from "../assets/curve-hr.svg"



// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projets</h1>
            <p className="font-light text-gray-400">Voci quelques projets réalisé</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Planete web un projet statique en HTML et CSS" img={cap1} date="Juin 2023" />
                <CertCard name="Wolf-Gang, réaliser en cours, afin d'affrondir nos connaissances en HTML et CSS" img={cap2} date="Juin 2023" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
