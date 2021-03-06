import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Footer developerName="Aitor Ruiz"/>
        </div>
    );
}

export default App;