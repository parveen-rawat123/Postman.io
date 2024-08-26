import Form from "./component/Form"
import Header from "./component/Header"
import SelecTab from "./component/CustomTabPanel"
import Response from "./component/Response"
import ErrorQueen from "./component/ErrorQueen"

const Home = () => {
  return (
    <>
    <Header/>
    <div className="w-[60%] mx-auto my-4">
    <Form/>
    <SelecTab/>
    {/* <Response/> */}
    <ErrorQueen/>
    </div>
    </>
  )
}

export default Home
