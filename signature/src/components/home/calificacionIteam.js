import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const CalificacionIteam = () => {
  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Leslie Sarahy Cazares Mendoza</div>
          Programación Avanzada
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
        <abbr title="Perfil Profesor" id="PerfilProfesor">
          <Link
            to="/perfilcalificacion"
            className="categoriaPC"
            id="PerfilProfesorA"
          >
            <img
              src={require("../../recursos/images/icons/comment-check-solid-24.png")}
            />
          </Link>
        </abbr>
      </ListGroup.Item>
    </>
  );
};

export default CalificacionIteam;
