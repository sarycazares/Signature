import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import './style.css';

const Perfil = () => {
  return (
    
    <>
   
   <main>

    

    <NavBar/>    

    <section className="contenedor">
            <br/><br/><br/><br/><br/>              
                             
                    <div className="pregunta-fondoPerfil">  
                        <img style={{maxHeight: "500px"}} id="imagen-descripcionPerfil" src={require('../../recursos/images/fotoPerfil/gatico_01.jpg')}/> 
                        <h3 id="MiPerfilTitulo">Mi Perfil</h3>                                 
                        <h4 id="UsuarioPerfil">AryMistery</h4> 
                        <h3 id="NombrePerfil"> Leslie Sarahy Cazares Mendoza</h3>                                      
                        <h3 id="CorreoPerfil"> sarycazares@live.com.mx</h3>
                        <h3 id="FechaNacimientoPerfil"> 14/07/1998</h3>                       
                        <a href="#">Modificar Perfil</a>
                        <a href="#">Modificar Foto</a>
                        <a href="#">Eliminar Usuario</a>
                        <br/>                   
                    </div>                                        

    </section>
    
    <Footer/>
    
</main>

    
    </>
  );
};

export default Perfil;