import { useState } from "react";
import { useUser } from "../context/UserContext";

const User = () => {
  const { user, setUser } = useUser();

  const [load, setLoad] = useState(false);

  const handleLogin = () => {
    setLoad(true);

    setTimeout(() => {
      setUser({
        id: 1,
        firstname: "tolga han",
        lastname: "yilmaz",
      });
      setLoad(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {JSON.stringify(user)}
      <br />
      {!user && (
        <button onClick={handleLogin}>{load ? "loading..." : "login"}</button>
      )}

      {user && <button onClick={handleLogout}>logout</button>}
    </div>
  );
};

export default User;
