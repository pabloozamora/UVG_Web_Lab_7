import { useState } from 'react'
import reactLogo from './assets/react.svg'
import laptop from './assets/laptop.svg'
import search from './assets/search.svg'
import mobile from './assets/mobile.svg'
import logo from './assets/logo.svg'
import './App.css'
import { MessageSquare } from './components/MessageSquare/MessageSquare'

function App() {
  const title1 = "Extensión de Navegador Privada"
  const description1 = "Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una descarga, para los"
  const description2 = "Busca de forma privada con nuestra app o extensión, añade búsqueda web privada a tu navegador preferido o busca en"
  const title2 = "Motor de Búsqueda Privada"
  const title3 = "Navegador Privado"
  const description3 = "Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador de rastreadores, mejora de encriptación y más. Disponible para"
  return (
    <div className="App">
      <div className="SearchWrapper">
        <img className = "logo" src = {logo}></img>
      </div>
      <div className='SquareMessageWrapper'>
        <MessageSquare icon = {laptop} title = {title1} description={description1} link="https://duckduckgo.com/app" linkText="principales navegadores."/>
        <MessageSquare icon = {search} title = {title2} description={description2} link="https://duckduckgo.com/" linkText="duckduckgo.com."/>
        <MessageSquare icon = {mobile} title = {title3} description={description3} link="https://duckduckgo.com/app" linkText="iOS y Android."/>
      </div>
    </div>
  )
}

export default App
