import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import './style.css';
import '../../css/index.css';
import ModalAgregarCalificacion from '../navBar/modales/modalAgregarCalificacion'
import ModalModificarCalificacion from './modales/modalModificarCalificacion'
import ModalEliminarCalificacion from "./modales/modalEliminarCalificación";

const PerfilCalificación = () => {
  return (
    
    <>
   
   <main>

    

    <NavBar/>    

    <section className="contenedor">
            <br/><br/><br/><br/><br/>              
                             
                    <div className="pregunta-fondoPerfil">  
                        <h3 id="MiPerfilTitulo">Profesor</h3>                                 
                        <h4 id="UsuarioPerfil">Leslie Sarahy Cazares Mendoza</h4> 
                        <h3 id="NombrePerfil"> Programación Avanzada</h3>                                      
                        <h3 id="CorreoPerfil"> sarycazares@uanl.edu.mx</h3>  

                        <h1 className="titulo">100%</h1>

                        <div className="BotonesCalificacion">                       
                        <ModalAgregarCalificacion/>
                        <b href="#" className="categoriaB"> | </b>
                        <ModalModificarCalificacion/>
                        <b href="#" className="categoriaB"> | </b>
                        <ModalEliminarCalificacion/> 
                        <br/>   
                        </div>                
                    </div>                                        

    </section>
    
    <Footer/>
    
</main>

    
    </>
  );
};

export default PerfilCalificación;