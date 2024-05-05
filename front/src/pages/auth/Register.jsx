import "../../assets/css/Register.css";
import fanou from "../../assets/wave.gif";
import { apiUrl } from "../../libs/api";

export default function Register() {
  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      nickname: event.target.nickname.value,
    };

    fetch(`${apiUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
            <h2> Register</h2>
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-envelope"></i>
                <input type="text" name="email" required />
                <label>Email</label>
              </span>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-user"></i>
                <input type="text" name="nickname" required />
                <label>Nickname</label>
              </span>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-unlock"></i>
                <input type="password" name="password" required />
                <label>Password</label>
              </span>
            </div>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </section>
      <img src={fanou} alt="" className="fanou" />
    </>
  );
}
