import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import Badge from './components/Badge.js'
export const Registroinfo = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const[cedula, setCedula] = useState('')
  const [apellido, setApellido] = useState('')



    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarpacientes', { numid: documento, nombre, apellido });
        console.log(res.data)
        setDocumento('')
        setNombre('')
        setApellido('')

      }
    
      const onChangedc = (e) => {
        setDocumento(e.currentTarget.value);
        console.log(documento)
      };
    
      const onChangenm = (e) => {
        setNombre(e.currentTarget.value);
        console.log(nombre)
      };  

      const onChangeap = (e) => {
        setApellido(e.currentTarget.value)
      }

    const inserta = () => {
        console.log('Se hizo click');
         guardabase()
      }

      const container = document.getElementById('root');
      
    return (
      ReactDOM.render(<Badge/>, container)
      /*
        <div  className="formdb__box-containter">
            <h3 className="auth__title">Envio INFO</h3>
            <form>
               <label for = "cedula"> Cedula </label><br></br>
               <input className ="auth__input" type = "text" id="cedula" name="cedula" value = {cedula}
               autoComplete = "off" placeHolder="cedula"
               onChange={onChangenm}
               ></input>
              <br></br>
              <label for = "Nombre"> Nombre</label> <br></br>
              <input className = "auth__input" type = "text" id = "nombre" value = {nombre} autoComplete = "off" placeholder = "nombre"
              onChange={onChangenm}></input>
              <input></input>
                
                
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}
                > 
                enviar info
                </button>    
            </form>
        </div>
        */
    )
    
    
}
