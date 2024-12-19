import { useState } from "react";
import AddFormation from "./AddFormation";
import Formation from "./Formation";
import HeaderPage from "./HeaderPage";
import Layaout from "../Layaout/Layaout";
import FormationItem from "./FormationItem";

function Home({ data, addData, updatedata, deleteData }) {
    const [isOpen, setIsOpen] = useState(false);
    const [controlleBtn, setControlleBtn] = useState(true); // Par défaut en mode ajout
    const [selectedFormation, setSelectedFormation] = useState(null); // Formation sélectionnée pour modification
    const [searchQuery, setSearchQuery] = useState(""); // État pour le filtre

    const formations = data;

    // Fonction pour ouvrir un modal
    const handleIsOpen = () => {
        setIsOpen(true);
    };

    // Fonction pour fermer un modal
    const handleIsClose = () => {
        setIsOpen(false);
        setSelectedFormation(null); // Réinitialiser après fermeture
    };

    // Fonction pour passer en mode modification
    const handleChangeFormulaire = (formation = null) => {
        if (formation) {
            setSelectedFormation(formation);
            setControlleBtn(false); // Mode modification
        } else {
            setControlleBtn(true); // Mode ajout
        }
        handleIsOpen();
    };

    // Fonction pour mettre à jour la recherche
    const handleFilter = (query) => {
        setSearchQuery(query); // Met à jour l'état pour le filtre
    };

    // Filtrage des formations en fonction de la recherche
    const filteredFormations = formations.filter((formation) =>
        formation.nomForm.toLowerCase().includes(searchQuery.toLowerCase()) || // Recherche par nom
        formation.themForm.toLowerCase().includes(searchQuery.toLowerCase()) // Recherche par thématique
    );

    return (
        <Layaout>
            <div className="pt-10">
                {/* Passage de la fonction handleFilter à HeaderPage */}
                <HeaderPage open={handleIsOpen} filtrer={handleFilter} />
                {isOpen && (
                    <AddFormation
                        controlleBtn={controlleBtn}
                        addData={addData}
                        updatedata={updatedata}
                        close={handleIsClose}
                        btncontroller={setControlleBtn}
                        selectedFormation={selectedFormation}
                    />
                )}
            </div>
            {/* <div className="flex justify-center w-full">
                <div className="flex flex-wrap w-full sm:justify-center sm:gap-3 md:gap-2 lg:justify-start lg:gap-6 lg:w-11/12 pb-10">
                  
                    {filteredFormations.map((formation, index) => {
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
            </div> */}
            <div className="flex justify-center items-center w-full pb-10">
            <div className="flex flex-col md:flex-row items-center justify-start flex-wrap w-11/12">
                {/* Correction de la partie FormationItem */}
                {filteredFormations ? (
                    filteredFormations.map((formation, index) => (
                        <FormationItem 
                            key={index} 
                            data={formation} 
                            isOpenModal={() => handleChangeFormulaire(formation)}
                            deleteData={deleteData}
                            id={formation._id}
                        />
                    ))
                ) : (
                    <div>Aucune formation</div>
                )}
            </div>
            </div>
        </Layaout>
    );
}

export default Home;
