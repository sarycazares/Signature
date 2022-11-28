**Signature** Es una página web programado en la tecnología MERN (Mongo, Express, React y Node.js) con el objetivo principal de recabar información sobre calificar materias y profesores de la FCFM 

**Programado Por**

- Bryan Sebastian Nava Torres 1557299 
- Irma Jetzabel González Toledo 1815335
- Carlos Daniel González Navarrete 1887846
- Alejandro Bazaldúa Gómez 1729604
- Lider: Leslie Sarahy Cazares Mendoza 1673459

**Información De Carpetas**

**BACKEND**
- Src: Contencion de las carpetas Controllers para controladores, Models para modelos y Routes para rutas.
- Controllers: Manejo de codigo que permite generar acciones para poder ser diseñados para el uso, agregacion, eliminar y modificacion de los datos contenidos en la base de datos.
- Models: Modelos usados para la creacion de los Schemas, dichos Schemas son los instanciamientos de los elementos utilizados en la base de datos, mediante ellas definimos los datos que se necesitaran en cada schema hacia Mongo DB.
- Routes: Carpeta que contiene las vias de acceso hacia los controllers para llevar a cabo una ejecucion de estos, realizan el puente de comunicación entre el backend y el frontend.

**FRONTEND**
- Src: Contiene el index del proyecto, cada carpeta que se describira a continuacion y un archivo app donde vienen cada ruta usada en la página.
- Components: Aqui se encontraran cada uno de los componentes donde se desarrollaron las paginas del proyecto, se dividen en orden jerarquico, es decir primero los componentes de uso global y posteriormente las que son especificamente utilizadas en las mismas como hijos.
- CSS: Manejo de estilos de la pagina, se deja aqui el index de los colores y el uso de formularios.
- Hooks: Uso funcional de los componentes.
- Recursos: Archivos utilizados en el proyecto como imagenes e iconos.
- Services: Se describe como parte de la comunicacion entre el backend y frontend, aqui se generan una serie de pasos secuenciales para poder llevar acabo el manejo de datos.
