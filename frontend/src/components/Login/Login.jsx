import { Link } from "react-router-dom";

const Login = () => {
    return (
      <div className="login-container">
          <form>
              <div className="login-form-input">
                  <label>Usuário:</label>
                  <br/>
                  <input type="text" placeholder="Usuário"/>
              </div>
              <br/>
              <div className="login-form-input">
                  <label>Senha:</label>
                  <br/>
                  <input type="password" placeholder="Senha"/>
              </div>
              <br/>
              <div className="login-form-link">
                  <span>Não possui uma conta? Clique <Link to="/signup">aqui</Link>.</span>
              </div>
              <br/>
              <div className="login-form-button">
                  <button type="submit">Login</button>
              </div>
          </form>
      </div>  
    );
};

export default Login;