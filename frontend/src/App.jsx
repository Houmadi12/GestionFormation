import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailFormation from "./Components/DetailFormation";

function App() {
  const [mesFormations, setMesFomations] = useState([]);

  // Methode pour récupérer les données
  const getFormations = () => {
    axios.get('https://gstformationbak-2-qwl2.onrender.com/api/formation')
      .then(res => {
        setMesFomations(res.data);
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  // Méthode pour ajouter une formation
  const addFormation = (newFormation) => {
    axios
      .post('https://gstformationbak-2-qwl2.onrender.com/api/formation', newFormation)
      .then((res) => {
        console.log("Formation ajoutée :", res.data);
        // Rafraîchir les formations après ajout
        getFormations();
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de la formation :", error);
      });
  };

  // Méthode pour mettre à jour les données
  const updateFormation = async (id, updatedFormation) => {
    try {
      const response = await axios.put(`https://gstformationbak-2-qwl2.onrender.com/api/formation/${id}`, updatedFormation);
      getFormations();
      console.log("Formation mise à jour avec succès :", response.data);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la formation :", error.response ? error.response.data : error.message);
    }
  };

  // Méthode de suppression d'une formation
  const deletFormation = async (id) => {
    try {
      const response = await axios.delete(`https://gstformationbak-2-qwl2.onrender.com/api/formation/${id}`);
      console.log('Ressource supprimée avec succès:', response.data);
      getFormations();
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  useEffect(() => {
    getFormations();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home deleteData={deletFormation} updatedata={updateFormation} addData={addFormation} data={mesFormations} />} />
      <Route path="/detail/:id" element={<DetailFormation data={mesFormations} />} />
    </Routes>
  );
}

export default App;
