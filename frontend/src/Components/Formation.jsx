import Bouton from "./Bouton"
import Lien from "./Lien"

function Formation({id,titre, thematique, prix, date, isOpen, deleteData}) {

    return (
        <div className="w-full mx-5 sm:max-w-72 sm:mx-0 bg-gray-200 border border-gray-200 rounded-lg shadow">
           <div className="flex justify-between items-center px-4 py-4 border-b-4 border-white">
            <h1 className=" font-semibold">Titre : {titre} </h1>
            <h5 className="bg-blue-100 p-1">Date : {date}</h5>
           </div>
            <div className="px-5 py-5">
                <div className="flex flex-col items-start gap-2">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Thématique :</h5>
                    <h6 className="w-full text-md text-center py-1.5 bg-white">{thematique}</h6>
                </div>
                <div className="flex items-center gap-3 py-4">
                    <span className="text-xl font-bold text-gray-900">Prix : </span>
                    <span className="text-xl">{prix} CFA</span>
                </div>
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
                <div className="flex justify-between pt-4">
                    <Bouton
                        text="Modifier"
                        classe="text-white bg-orange-600 hover:bg-orange-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center"
                        onClick={() => isOpen()}
                    />
                    <Lien 
                        link={`/detail/${id}`}
                        className="text-white bg-green-600 hover:bg-green-800  font-medium rounded-lg text-sm px-2 py-1.5 text-center"
                    >Détail</Lien>
                    <Bouton
                        text="Supprimer" 
                        classe="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center"
                        onClick={() => deleteData(id)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Formation