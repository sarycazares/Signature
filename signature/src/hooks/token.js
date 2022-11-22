import React, { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";




const TokenRecaptcha = () => {

    const captchaRef = useRef(null);

    const GenerarToken = (e) =>{
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();

        console.log(token);
    }
    
    return (
        
        <div className='Recaptcha'>
        <ReCAPTCHA sitekey={'6LcbXRojAAAAABf80rZplZkBO92ig5T6AIc-P-ly'} ref={captchaRef}/>
        </div>
    );
  };
  
  export default TokenRecaptcha;


