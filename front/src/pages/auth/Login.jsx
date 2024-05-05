import "../../assets/css/Login.css";
import fanou from "../../assets/wave.gif";
import { apiUrl } from "../../libs/api";

export default function Login() {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <section>
        <div className="section-background"></div>{" "}
        {/* Ajoutez une div pour le fond GIF */}
        <div className="section-overlay"></div>{" "}
        {/* Ajoutez une div pour la superposition */}
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-envelope"></i>
                <input type="text" name="email" required />
                <label>Email</label>
              </span>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-unlock"></i>
                <input type="password" name="password" required />
                <label>Password</label>
              </span>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me{" "}
              </label>
              <a href="#">Forgot password ?</a>
            </div>
            <button>Login</button>
            <div className="register-link">
              <p>
                Don't have an account yet ? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </section>
      <img src={fanou} alt="" className="fanou" />
    </>
  );
}
