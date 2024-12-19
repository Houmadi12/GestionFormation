import { useState, useEffect } from "react";
import Bouton from "./Bouton";

function AddFormation({ close, controlleBtn, addData, updatedata, selectedFormation, btncontroller }) {
    const date = new Date().toLocaleDateString();

    // State initial pour tout le formulaire
    const initialFormState = {
        formation: "",
        dateFormation: "",
        nombreUtil: "",
        thematique: "",
        prix: "",
        dateCreation: date, // Date actuelle pour une nouvelle formation
        dateModification: date, // Date actuelle
    };

    const [formData, setFormData] = useState(initialFormState);

    // Effet pour remplir les champs lors de la modification
    useEffect(() => {
        if (selectedFormation) {
            setFormData({
                formation: selectedFormation.nomForm,
                dateFormation: selectedFormation.dateForm.split("T")[0],
                nombreUtil: selectedFormation.nbrUtilMax,
                thematique: selectedFormation.themForm,
                prix: selectedFormation.prix,
                dateCreation: selectedFormation.dateAjout, // Garde la date d'ajout
                dateModification: new Date().toLocaleDateString(), // Date actuelle
            });

        }
    }, [selectedFormation]); // Mettre à jour uniquement quand selectedFormation change

    // Gestion des changements dans les champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // console.log("Données avant envoi :", newFormation);

    if (controlleBtn) {
        const newFormation = {
            nomForm: formData.formation,
            dateForm: new Date().toISOString(),
            nbrUtilMax: parseInt(formData.nombreUtil),
            themForm: formData.thematique,
            prix: parseFloat(formData.prix),
            dateAjout: new Date().toISOString(),
            dateModif: new Date().toISOString(),
        };
        // En mode ajout, on appelle addData pour ajouter la nouvelle formation
        addData(newFormation);
    } else {
        const newFormation = {
            nomForm: formData.formation,
            dateForm: formData.dateFormation ,
            nbrUtilMax: parseInt(formData.nombreUtil),
            themForm: formData.thematique,
            prix: parseFloat(formData.prix),
            dateAjout: formData.dateCreation ,
            dateModif: new Date().toISOString(),
        };
        updatedata(selectedFormation._id, newFormation);
    }

    setFormData(initialFormState);
    btncontroller(true);
    close();
};


    return (
        <div className="flex fixed bg-black bg-opacity-60 top-0 right-0 left-0 z-50 justify-center items-center w-full min-h-screen">
            <div className="relative p-4 w-full max-w-lg max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {controlleBtn ? "Ajouter une formation" : "Modifier une formation"}
                        </h3>
                        <Bouton
                            classe="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            text={(
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            )}
                            onClick={()=>{
                                close()
                                btncontroller(true)
                            }}
                        />
                    </div>

                    <div className="p-4 md:p-5">
                        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
                            <div className="flex gap-4">
                                <div className="md:w-6/12">
                                    <label
                                        htmlFor="formation"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Formation
                                    </label>
                                    <input
                                        type="text"
                                        name="formation"
                                        id="formation"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Nom de la formation"
                                        required
                                        value={formData.formation}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="md:w-6/12">
                                    <label
                                        htmlFor="dateFormation"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Date de la formation
                                    </label>
                                    <input
                                        type="date"
                                        name="dateFormation"
                                        id="dateFormation"
                                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                                        required
                                        value={formData.dateFormation}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="md:w-6/12">
                                    <label
                                        htmlFor="nombreUtil"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Nombre d'utilisation maximum
                                    </label>
                                    <input
                                        type="number"
                                        name="nombreUtil"
                                        id="nombreUtil"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Nombre"
                                        required
                                        value={formData.nombreUtil}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="md:w-6/12">
                                    <label
                                        htmlFor="thematique"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Thématique
                                    </label>
                                    <input
                                        type="text"
                                        name="thematique"
                                        id="thematique"
                                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Thématique"
                                        required
                                        value={formData.thematique}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="md:w-6/12">
                                    <label
                                        htmlFor="prix"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Prix
                                    </label>
                                    <input
                                        type="number"
                                        name="prix"
                                        id="prix"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Frais de la formation"
                                        required
                                        value={formData.prix}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="md:w-6/12">
                                    <label
                                        htmlFor="dateCreation"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Date de création
                                    </label>
                                    <input
                                        type="text"
                                        name="dateCreation"
                                        id="dateCreation"
                                        disabled
                                        className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                                        value={formData.dateCreation}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                {controlleBtn ? "Enregistrer une formation" : "Modifier"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFormation;
