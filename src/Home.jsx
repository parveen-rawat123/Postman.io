import Form from "./component/Form"
import Header from "./component/Header"
import SelecTab from "./component/CustomTabPanel"

const Home = () => {
  return (
    <>
    <Header/>
    <div className="w-[60%] mx-auto my-10">
    <Form/>
    <SelecTab/>
    </div>
    </>
  )
}

export default Home
