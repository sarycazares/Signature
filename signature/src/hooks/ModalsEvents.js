import {useState}from "react";

export default  function ModalsEvents(){


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return{
    show,handleClose,handleShow

};
}

