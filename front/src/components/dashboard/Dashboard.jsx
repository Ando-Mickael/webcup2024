import "../../assets/css/Dashboard.css";
import tantely from "../../assets/gif/tantely.gif";
import { HeaderDash } from "../header/Header";
import { Circle, IconUI } from "../icon/Icon";

function DashboardUI() {
  return (
    <>
      <div className="dashboard">
        <HeaderDash />
        <div className="first-dash">
          <div className="donation">
            <div className="title-with-icon">
              <h3>Donation</h3>
              <IconUI
                iconNom="fas fa-arrow-right"
                backgroundColor="#fff"
                border="none"
                color="#000"
                width="53px"
                height="53px"
                angle="rotate(-45deg)"
                borderRadius="50px"
              />
            </div>
            <div className="limit-scroll">
              <table className="tableau-style">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Edition</th>
                    <th>Donation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Informa'Tiako</td>
                    <td>2023</td>
                    <td>$1500</td>
                  </tr>
                  <tr>
                    <td>Informa'Tiako</td>
                    <td>2023</td>
                    <td>$1500</td>
                  </tr>
                  <tr>
                    <td>Informa'Tiako</td>
                    <td>2023</td>
                    <td>$1500</td>
                  </tr>
                  <tr>
                    <td>Informa'Tiako</td>
                    <td>2023</td>
                    <td>$1500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tantely-gif">
            <img src={tantely} alt="error" />
          </div>
        </div>
        <div className="second-dash">
          <div className="badge">
            <div className="title-with-icon">
              <h3>Badge request</h3>
              <IconUI
                iconNom="fas fa-arrow-right"
                backgroundColor="#fff"
                border="none"
                color="#000"
                width="53px"
                height="53px"
                angle="rotate(-45deg)"
                borderRadius="50px"
              />
            </div>
            <div className="limit-scroll-2">
              <table className="tableau-style-2">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Edition</th>
                    <th>Donation</th>
                    <th>Link</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Informa'Tiako</td>
                    <td>2023</td>
                    <td>$1500</td>
                    <td>https://InformaTiako.com</td>
                    <td>
                      <IconUI
                        iconNom="fas fa-times"
                        backgroundColor="#FF6666"
                        border="none"
                        color="#000"
                        width="40px"
                        height="40px"
                        borderRadius="10px"
                      />
                    </td>
                    <td>
                      <IconUI
                        iconNom="fas fa-check"
                        backgroundColor="#A4FF84"
                        border="none"
                        color="#000"
                        width="40px"
                        height="40px"
                        borderRadius="10px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Informa'Tiako</td>
                    <td>2023</td>
                    <td>$1500</td>
                    <td>https://InformaTiako.com</td>
                    <td>
                      <IconUI
                        iconNom="fas fa-times"
                        backgroundColor="#FF6666"
                        border="none"
                        color="#000"
                        width="40px"
                        height="40px"
                        borderRadius="10px"
                      />
                    </td>
                    <td>
                      <IconUI
                        iconNom="fas fa-check"
                        backgroundColor="#A4FF84"
                        border="none"
                        color="#000"
                        width="40px"
                        height="40px"
                        borderRadius="10px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Informa'Tiako</td>
                    <td>2023</td>
                    <td>$1500</td>
                    <td>https://InformaTiako.com</td>
                    <td>
                      <IconUI
                        iconNom="fas fa-times"
                        backgroundColor="#FF6666"
                        border="none"
                        color="#000"
                        width="40px"
                        height="40px"
                        borderRadius="10px"
                      />
                    </td>
                    <td>
                      <IconUI
                        iconNom="fas fa-check"
                        backgroundColor="#A4FF84"
                        border="none"
                        color="#000"
                        width="40px"
                        height="40px"
                        borderRadius="10px"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Circle />
      <div className="circle-right">
        <Circle />
      </div>
    </>
  );
}
export default DashboardUI;
