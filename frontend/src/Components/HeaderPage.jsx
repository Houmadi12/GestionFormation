import { useEffect, useState } from "react";
import Bouton from "./Bouton";

export default function HeaderPage({ open, filtrer }) {
    const [formationSearch, setFormationSearch] = useState("");

    // Fonction pour mettre à jour la recherche
    const handleSearchChange = (event) => {
        setFormationSearch(event.target.value); // Met à jour la recherche avec la valeur du champ
    };

    // Utiliser useEffect pour transmettre la valeur de recherche au parent
    useEffect(() => {
        filtrer(formationSearch); // Appelle la fonction de filtrage du parent à chaque changement
    }, [formationSearch, filtrer]); // Dépendance sur `formationSearch` et `filtrer`

    return (
        <div className="flex flex-col px-9 sm:flex-row sm:justify-around sm:items-center sm:px-0 mt-10">
            <div className="py-2 sm:py-10">
                <form className="max-w-90 mx-auto">
                    <div className="flex">
                        <div className="relative border-4 rounded-lg w-full">
                            <input
                                type="search"
                                id="location-search"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg"
                                placeholder="Chercher..."
                                value={formationSearch}
                                onChange={handleSearchChange} // Met à jour la recherche
                                required
                            />
                            <span
                                type="submit"
                                className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-black border-l bg-slate-100 rounded-e-lg"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <Bouton
                    text="Ajouter"
                    classe="bg-blue-500 py-1.5 px-3 mb-3 sm:mb-0 text-lg text-white font-semibold rounded-lg"
                    onClick={open}
                />
            </div>
        </div>
    );
}
