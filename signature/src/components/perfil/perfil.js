import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import './style.css';
import ModalModificarPerfil from "./modales/modalmodificarPerfil";
import ModalEliminarPerfil from "./modales/modalEliminarPerfil";

const Perfil = () => {

  return (
    
    <>
  
    <NavBar/> 

    <main>   

    <section className="contenedor">            
                             
                    <div className="pregunta-fondoPerfil">  
                        <img style={{maxHeight: "500px", backgroundColor: '#49408C'}} id="imagen-descripcionPerfil" src={require('../../recursos/images/icons/Icon_user-solid-240.png')}/> 
                        <h3 id="MiPerfilTitulo">Mi Perfil</h3>                                 
                        <h4 id="NombreUsuario">AryMistery</h4> 
                        <h3 id="Nombre"> Leslie Sarahy Cazares Mendoza</h3>                                      
                        <h3 id="Correo"> sarycazares@email.com</h3>
                        <h3 id="Matricula"> 1673469</h3>    
                        <h3 id="Facultad"> FCFM </h3> 
                        <h3 id="Carrera"> LMAD</h3>    
                        <h3 id="Semestre"> <p>Semestre:</p>09</h3>                  
                        
                        <div className="BotonesCalificacion">   
                        <ModalModificarPerfil/>
                        <b href="#" className="categoriaB"> | </b>
                        <ModalEliminarPerfil/>
                        </div>

                        <br/>                   
                    </div>                                        

    </section>
    </main>
     
    <Footer/>
    


    
    </>
  );
};

export default Perfil;
