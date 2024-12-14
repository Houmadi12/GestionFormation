import Navbar from "../Components/Navbar"

function Layaout({children}) {
  return (
    <div>
    <div>
        <Navbar />
    </div>
    <div>
     {children}
    </div>
</div>
  )
}

export default Layaout