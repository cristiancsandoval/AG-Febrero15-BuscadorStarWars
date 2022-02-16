import styled from 'styled-components'

export const CntrPrincipal = styled.main`
    width: 100%;
    height: 100vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Titulo = styled.h1`
    font-size: 35px;
    letter-spacing: 3px;
    color: #FFC600;
    margin: 50px 0;
`
export const HeaderSt = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ParrafoGen = styled.p`
  width: 100%;
  padding: 10px;
  color: white;
  font-size: 20px;
  margin: 15px;
  text-align: center;
`

export const CntrBusqueda = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CntrTarjetas = styled.div`
    width: 100%;
    padding: 0 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const Tarjeta = styled.div`
    margin:15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover{
        border:none;
        box-shadow: 0px 0px 15px 3px #5800FF;
    }

`

