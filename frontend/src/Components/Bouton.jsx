
function Bouton({text, classe, onClick}) {
  return (
    <button type="button" onClick={()=>onClick()} className={classe} >{text}</button>
  )
}

export default Bouton