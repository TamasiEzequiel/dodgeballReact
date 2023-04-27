import { useState } from "react"

export const formCompra = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(values)
    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                className="txtIngreso"
                type='text'
                placeholder='text'
                value={values.nombre}
                onChange={handleInputChange}
                name= 'nombre'
                />
                
                <input
                className="emailIngreso"
                type='email'
                placeholder="Tu email"
                value={values.email}
                onChange={handleInputChange}
                name= 'email'
                />            

                <button type="submit" className="btnEnviar">
                    Enviar
                </button>
            </form>

        </div>
    )

}