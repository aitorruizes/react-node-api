import Navbar from "../../components/Navbar/Navbar";
import User from "../../components/User/User";
import Footer from "../../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <User/>
            <Footer developerName="Aitor Ruiz"/>
        </div>
    );
}

export default App;
