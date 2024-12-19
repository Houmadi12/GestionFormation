import { useState } from "react"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { VscEye } from "react-icons/vsc";

function FormationItem({id, data, isOpenModal, deleteData }) {
    const [isOpen, setIsOpen] = useState(false);
    const [textBtn, setTextBtn] = useState("plus");
    const formation = data;
    console.log(formation);
    // Methode ouvre more
    const open = () => {
        setIsOpen(true)
        isTextBtn()
    }

    const close = () => {
        setIsOpen(false);
    }

    const gstBtn = () => {
        if (textBtn === "plus") {
            open()
        } else {
            changeTextBtn()
            close()
        }
    }

    const changeTextBtn = () => {
        setTextBtn("plus")
    }

    const isTextBtn = () => {
        setTextBtn("moins")
    }

    return (
        <div className="w-8/12 md:w-5/12 md:m-5 lg:m-10 transform border-4 border-gray-200 bg-gray-100 h-full transition duration-300 hover:scale-105 rounded-lg">
            <div className="flex flex-col md:flex-col lg:flex-row items-center border border-gray-200 rounded-lg shadow bg-gray-100">
                <img className="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="http://christianpc.fr/wp-content/uploads/2015/03/base-de-donn%C3%A9es.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Titre : {formation.nomForm}</h5>
                    <p className="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400"><span className="font-bold">Thématique :</span> {formation.themForm}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nombre d'utilisateur Maximum : {formation.nbrUtilMax}</p>
                    <p className="mb-4 p-3 font-bold text-gray-700 bg-lime-300">Date de la formation : {formation.dateForm.slice(0, 10)} </p>

                    <div className="flex items-center">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>

                    <div className="flex justify-between w-full">
                        <button type="button" onClick={() => gstBtn()}>
                            {textBtn === "moins" ? <div className="flex items-center gap-2">voir moins<FaChevronUp /></div> : <div className="flex items-center gap-2">voir plus<FaChevronDown /></div>}
                        </button>
                        <div className="flex gap-3">
                            <button type="button" onClick={() => deleteData(id)} className="transform text-2xl text-red-600 transition duration-300 hover:scale-105"><RiDeleteBin2Fill /></button>
                            <button type="button" onClick={() => isOpenModal()} className="transform text-2xl text-green-600 transition duration-300 hover:scale-105"><RiEdit2Fill /></button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <div className="flex flex-col items-center py-5 gap-3">
                <div className="w-8/12">
                    <span className="bg-lime-300">Prix : {formation.prix}</span>
                </div>
                <div className="w-8/12 flex flex-col gap-3">
                    <p>date d'Ajout : {formation.dateAjout.slice(0, 10)}</p>
                    <p>date de modification : {formation.dateModif.slice(0, 10)}</p>
                </div>
                <div className="w-8/12">
                    <p>Description : Cette cours a  comme objectif de vous rendre professionel dans le domaine</p>
                </div>
            </div>}
        </div>
    )
}

export default FormationItem