export const Form = ({handleOnChange, formData, errors, validateForm}) => {

    const handleOnSubmit= (evt) =>{
            evt.preventDefault();

        if (validateForm()) {
            console.log("enviando", formData);
        }
    }

    return(
        <section>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre:"
                    onChange={handleOnChange}
                    value={formData.name}
                /> 

                <br />
                    {errors && errors.name && <span>{errors.name}</span>}
                <br />

                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email:"
                    onChange={handleOnChange}
                    value={formData.email}
                /> 

                <br />
                    {errors && errors.email && <span>{errors.email}</span>}
                <br />

                <button>Enviar</button>
            </form>
        </section>
    )
}