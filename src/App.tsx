import { useEffect, useState } from "react";
import "./App.css";
import { AuthService } from "./services/AuthService";
import { JSONTree } from "react-json-tree";
import type { User } from "oidc-client";

function App() {
  const [user, setUser] = useState<User | null>();

  const authService = new AuthService();

  const login = async () => {
    await authService.login();
    const user = await authService.getUser();
    setUser(user);
  };
  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const handleCopy = () => {
    if (!user) return;
    navigator.clipboard.writeText(user.access_token);
    alert("Copied to clipboard");
  };

  useEffect(() => {
    authService
      .getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h3>Token Retriever</h3>

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
        {user && (
          <>
            <button className="btn btn-primary" onClick={handleCopy}>
              Copy access token
            </button>
            <JSONTree
              data={user}
              invertTheme={true}
              shouldExpandNode={() => true}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
