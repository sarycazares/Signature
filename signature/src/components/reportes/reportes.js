import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import "./style.css";


const Reportes = () => {
  return (
    <>
      <NavBar />

      <main>
        <section className="contenedor">
          <div className="pregunta-fondoPerfil">
            <h2 className="Admin">Reportes</h2>
            <div className="grupo">
              <select class="categorias-select" name="calificacion"
                   id="menuEtiquetas"> 
                        <option selected value = "1"> 
                        ⭐
                        </option>
                        <option value = "2"> 
                        ⭐⭐
                        </option>
                        <option value = "3"> 
                        ⭐⭐⭐
                        </option>
                        <option value = "4"> 
                        ⭐⭐⭐⭐
                        </option>
                        <option value = "5"> 
                        ⭐⭐⭐⭐⭐
                        </option>
                                    
                    </select>
              </div>
              <br />

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Reportes;
