import React from 'react'
import { Link } from 'react-router-dom'
import {Titulo, CntrPrincipal} from '../style/style'

const InicioStar = () => {
  return (
    <CntrPrincipal>
        <Titulo>Personajes Star Wars</Titulo>
        <Link to="/personajes">Consultar personajes</Link>
    </CntrPrincipal>
  )
}

export default InicioStar