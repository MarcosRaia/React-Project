import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from './Components/Form/form.jsx';
import NavComponent from './Components/navbar/menu.jsx';
import Footer from './Components/footer/footer.jsx';
import {Link} from "react-router-dom"

function App() {

  return <>
    <NavComponent />
    <FormComponent />
    <Footer />
    <Link to="/sobre">2</Link> |{" "}
    <Link to="/ranking">3</Link>
  </>;

}

export default App;
