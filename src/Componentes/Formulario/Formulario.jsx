import { useState } from "react";
import { Form } from "./Form";
import { formWhitValidation } from "./formWhitValidation";


const FormWhitValidation = formWhitValidation(Form)

export function Formulario (){
    
    const [formData, setFormData] = useState({
        name:'',
        email:''
    })

    const handleOnChange = (evt) =>{
    
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return (
            <FormWhitValidation 
                formData={formData} 
                handleOnChange={handleOnChange}
            />
    )
}