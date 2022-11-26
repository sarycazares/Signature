import { useNavigate } from "react-router-dom";

export default function Redirects() {
  const navigate = useNavigate();

  const irLogin = (event) => {
    event.preventDefault();

    sessionStorage.removeItem ("token");
    sessionStorage.removeItem ("usuario");

    console.log("clic");
    navigate("/");
  };

  const irHome = (event) => {
    event.preventDefault();

    console.log("clic");
    navigate("/home");
  };

  const irAdmin = (event) => {
    event.preventDefault();

    console.log("clic");
    navigate("/admine");
  };

  return {
    irLogin,
    irHome,
    irAdmin,
  };
}
