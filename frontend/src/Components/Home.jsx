import { useState } from "react";
import AddFormation from "./AddFormation";
import Formation from "./Formation"
import HeaderPage from "./HeaderPage"
import Layaout from "../Layaout/Layaout";

function Home({ data, addData, updatedata, deleteData }) {
    const [isOpen, setIsOpen] = useState(false);
    const [controlleBtn, setControlleBtn] = useState(true); // Par défaut en mode ajout
    const [selectedFormation, setSelectedFormation] = useState(null); // Pour gérer la formation sélectionnée à modifier

    const formations = data;

    // Fonction pour ouvrir un modal
    const handleIsOpen = () => {
        setIsOpen(true);
    };

    // Fonction pour fermer un modal
    const handleIsClose = () => {
        setIsOpen(false);
        setSelectedFormation(null); // Réinitialiser la formation sélectionnée après fermeture du modal
    };

    // Fonction pour passer en mode modification
    const handleChangeFormulaire = (formation = null) => {
        if (formation) {
            // Si une formation est passée en paramètre, cela signifie que nous modifions une formation
            setSelectedFormation(formation);
            setControlleBtn(false); // Mode modification
        } else {
            setControlleBtn(true); // Mode ajout
        }
        handleIsOpen();
    };
    // console.log(data);

    return (
        <Layaout>
            <div className="pt-10">
                <HeaderPage open={handleIsOpen} />
                {isOpen && (
                    <AddFormation
                        controlleBtn={controlleBtn}
                        addData={addData}
                        updatedata={updatedata}
                        close={handleIsClose}
                        selectedFormation={selectedFormation}
                    />
                )}
            </div>
            <div className="flex justify-center w-full">
                <div className="flex flex-wrap w-full  sm:justify-around md:gap-2 lg:justify-start lg:gap-6 lg:w-11/12 pb-10">
                    {formations.map((formation, index) => {
                        const formattedDate = new Date(formation.dateForm).toLocaleDateString();
                        return (
                            <Formation
                                key={index}
                                index={index}
                                id={formation._id}
                                isOpen={() => handleChangeFormulaire(formation)} // Passe la formation pour modification
                                titre={formation.nomForm}
                                thematique={formation.themForm}
                                date={formattedDate}
                                prix={formation.prix}
                                data={formations}
                                deleteData={deleteData}
                            />
                        );
                    })}
                </div>
            </div>
        </Layaout>
    );
}

export default Home