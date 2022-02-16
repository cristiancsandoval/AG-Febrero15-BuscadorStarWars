import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { endpoint } from '../helpers/url'
import axios from 'axios'
import useForm from '../hooks/useForm'
import querystring from 'query-string'
import HeaderStar from './HeaderStar'
import {CntrBusqueda, CntrTarjetas, Tarjeta, ParrafoGen} from '../style/style'

const MainStar = () => {

    const [datos, setDatos] = useState([])

    useEffect(()=>{
        getData()
    }, [])

    const getData = () => {
        axios.get(endpoint)
        .then(response => {
            setDatos(response.data.results)
        })
        .catch(error => {
            console.log(error);
        })
    }

    const navigate = useNavigate()
    const location = useLocation()

    const {q = ''} = querystring.parse(location.search)

    const [values, handleInputChange] = useForm({searchText:q})
    const {searchText} = values

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }

    const filtrado = datos.filter(dat => dat.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

  return (
    <CntrBusqueda>
        <HeaderStar/>
        <form onSubmit={handleSubmit}>
             <input 
                type="text"
                name="searchText"
                autoComplete="off"
                placeholder="Buscar personaje"
                value={searchText}
                onChange={handleInputChange}
            />                                            
        </form>
        <CntrTarjetas>
            {
                filtrado.map(pers=>(
                    <Tarjeta key={pers.id}>
                        <img 
                            src={pers.image}
                            alt={pers.name}
                        />
                        <ParrafoGen>{pers.name}</ParrafoGen>
                    </Tarjeta>
                ))
            }
        </CntrTarjetas>
    </CntrBusqueda>
  )
}

export default MainStar