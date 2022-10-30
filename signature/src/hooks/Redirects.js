import { useNavigate } from "react-router-dom";

export default function Redirects() {
  const navigate = useNavigate();

  const irLogin = (event) => {
    event.preventDefault();

    console.log("clic");
    navigate("/");
  };

  const irHome = (event) => {
    event.preventDefault();

    console.log("clic");
    navigate("/home");
  };

  return {
    irLogin,
    irHome,
  };
}
