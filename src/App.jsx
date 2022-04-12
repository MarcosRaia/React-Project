import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from './Components/Form/form.jsx';
import NavComponent from './Components/navbar/menu.jsx';
import Footer from './Components/footer/footer.jsx';
import {Link, Router, Route, Routes} from "react-router-dom"

function App() {

  return <>
        <NavComponent />
        <FormComponent />
        <Footer />
  </>;

}

export default App;
