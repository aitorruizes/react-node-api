import Navbar from "../../components/Navbar/Navbar";
import Todo from "../../components/Todo/Todo";
import Footer from "../../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Todo/>
            <Footer developerName="Aitor Ruiz"/>
        </div>
    );
}

export default App;
