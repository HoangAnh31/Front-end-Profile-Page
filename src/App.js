import logo from "./logo.svg";
import "./App.css";
import InfoProfile from "./Components/InfoProfile";
import Form from "./Components/Form";
import { DataProvider } from "./Hooks/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <DataProvider>
        <div className="lg:flex lg:justify-between lg:max-w-[1200px] lg:my-0 lg:mx-auto">
          <div className="px-3 box-border lg:w-[50%]  lg:px-0">
            <InfoProfile></InfoProfile>
          </div>
          <div className="px-3 box-border mt-8 lg:w-[50%] lg:mt-28 lg:px-12 lg:box-border ">
            <Form></Form>
          </div>
        </div>
      </DataProvider>
      <ToastContainer />
    </>
  );
}

export default App;
