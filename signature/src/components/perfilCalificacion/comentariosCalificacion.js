import "bootstrap/dist/css/bootstrap.min.css";


const ComentariosCalificacion = () => {
  return (
    
    <>
   
   <div className="ComentarioCalificacion">

   <img className="imagenUsuario" src={require('../../recursos/images/icons/user-solid-60.png')}  style={{backgroundColor: '#49408C'}}width="60" height="60"/>
   <h4 className="nombreUsuario">AryMistery</h4>

   <p className="comentarioUsuario"> De acuerdo con la Fundación Mexicana para la Salud Hepática (FundHepa), un correcto funcionamiento del hígado nos permite tener un organismo libre de toxinas, debido a que éste se encarga de limpiar la sangre y convertir los alimentos en energía. Una dieta poco saludable favorece el desarrollo de enfermedades hepáticas como por ejemplo: hepatitis, cirrosis, hígado graso y cáncer. Algunos de los alimentos que dañan el funcionamiento del hígado son: productos ricos en colesterol, como las carnes rojas, camarones y la yema de huevo, alimentos grasos como, la manteca de cerdo, mantequilla, crema, piel de pollo, aderezos cremosos y mayonesa, comida rápida, azúcar como refrescos, dulces, jarabe de maíz y postres, proteínas, sal, alimentos procesados como el tocino y las salchichas y las bebidas alcohólicas</p> 

   <p className="calificacionUsuario"> Calificación: <p>50</p></p> 
   </div>

    
    </>
  );
};

export default ComentariosCalificacion;