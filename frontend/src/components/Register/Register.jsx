import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div className="register-container">
          <form>
              <div className="register-form-input">
                  <label>Usuário:</label>
                  <br/>
                  <input type="text" placeholder="Usuário"/>
              </div>
              <br/>
              <div className="register-form-input">
                  <label>Email:</label>
                  <br/>
                  <input type="email" placeholder="Email"/>
              </div>
              <br/>
              <div className="register-form-input">
                  <label>Senha:</label>
                  <br/>
                  <input type="password" placeholder="Senha"/>
              </div>
              <br/>
              <div className="register-form-link">
                  <span>Já possui uma conta? Clique <Link to="/signin">aqui</Link>.</span>
              </div>
              <br/>
              <div className="register-form-button">
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
      </div>  
    );
};

export default Register;