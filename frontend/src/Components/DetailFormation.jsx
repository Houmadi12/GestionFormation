import { useParams } from "react-router-dom";
import Layaout from "../Layaout/Layaout"
import Lien from "./Lien";
import Image from "/school.png";
import { useEffect, useState } from "react";

function DetailFormation({data}) {
    const [formation, setFormation] = useState("");
    const {id} = useParams();

    const formaDate = (date) => {
        return new Date(date).toLocaleDateString();
    }

    useEffect(()=>{
        // Cherchez la formation par ID dans les données
        setFormation(data.find((form) => form._id === id))
    },[data,id])

    if(formation){
        console.log(formaDate(formation.dateForm))
    }
    return (
        <Layaout>
            <div className="flex items-center justify-center w-flux min-h-screen pt-10">
                <div className="flex flex-col md:flex-row mx-5 sm:mx-0 sm:w-8/12 h-full shadow-2xl bg-white border-2 border-black border-opacity-20 mt-20 mb-10">
                    <div className="w-full md:w-6/12">
                        <img src={Image} className="w-full h-full" alt="School" />
                    </div>
                    <div className="p-5">
                    {formation && (
                     
                        <div className="flex flex-col justify-center h-full">
                            <h1 className="text-xl"> <span className="font-semibold bg-orange-100 px-2">Nom :</span> {formation.nomForm} </h1>
                            <div className="text-xl py-4">
                                <span className="font-semibold bg-orange-100 px-2">Date de la formation :</span> {formaDate(formation.dateForm)}
                            </div>
                            <div className="text-xl py-4">
                                <span className="font-semibold bg-orange-100 px-2">Nombre d'utilisation maximal :</span> {formation.nbrUtilMax}
                            </div>
                            <div className="text-xl py-4">
                                <span className="font-semibold bg-orange-100 px-2">Prix : </span> {formation.prix} CFA
                            </div>
                            <div className="text-xl py-4">
                                <span className="font-semibold bg-orange-100 px-2">Date de création :</span> {formaDate(formation.dateAjout)}
                            </div>
                            <div className="text-xl py-4">
                                <span className="font-semibold bg-orange-100 px-2">Date de modification :</span> {formaDate(formation.dateModif)}
                            </div>
                            <Lien
                                link="/"
                                className="text-white bg-green-600 hover:bg-green-800  font-medium rounded-lg text-sm px-2 py-1.5 mt-10 text-center"
                            >Retour</Lien>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </Layaout>
    )
}

export default DetailFormation