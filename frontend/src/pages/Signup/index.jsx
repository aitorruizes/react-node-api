import Navbar from "../../components/Navbar/Navbar";
import Register from "../../components/Register/Register";
import Footer from "../../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Register/>
            <Footer developerName="Aitor Ruiz"/>
        </div>
    );
}

export default App;