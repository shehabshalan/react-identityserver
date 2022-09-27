import { useEffect, useState } from "react";
import "./App.css";
import { AuthService } from "./services/AuthService";
import { JSONTree } from "react-json-tree";

function App() {
  const [user, setUser] = useState({});

  const authService = new AuthService();

  const login = async () => {
    await authService.login();
  };
  const logout = async () => {
    await authService.logout();
  };

  useEffect(() => {
    authService.getUser().then((user) => {
      setUser(user as Object);
    });
  }, []);

  return (
    <div className="App">
      <h3>Hello world</h3>

      <div>
        {!user && (
          <button onClick={login} className="btn btn-primary">
            Login
          </button>
        )}
        {user && (
          <button onClick={logout} className="btn btn-primary">
            Logout
          </button>
        )}
      </div>

      <div
        style={{ marginTop: "20px", padding: "0 5rem", borderRadius: "5px" }}
      >
        <JSONTree
          data={user}
          invertTheme={true}
          shouldExpandNode={() => true}
        />
      </div>
    </div>
  );
}

export default App;
