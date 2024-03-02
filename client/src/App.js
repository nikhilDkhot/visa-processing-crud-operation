import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Dashboard } from "./components/Dashboard";
import { ApplicantsList, PersonList, StudentList } from "./components/ApplicantsList";
import { RegistrationForm } from "./components/RegistrationForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import { EditForm } from "./components/EditForm";
import { ViewApplication } from "./components/ViewApplication";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/applicants-list" element={<ApplicantsList/>}></Route>
        <Route path="/visa-registration" element={<RegistrationForm/>}></Route>
        <Route path="/edit/:adhar" element={<EditForm/>}></Route>
        <Route path="/process/:adhar" element={<ViewApplication/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
