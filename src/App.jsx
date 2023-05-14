import { useState } from 'react'
import reactLogo from './assets/react.svg'
import laptop from './assets/laptop.svg'
import search from './assets/search.svg'
import mobile from './assets/mobile.svg'
import logo from './assets/logo.svg'
import './App.css'
import { MessageSquare } from './components/MessageSquare/MessageSquare'
import { SearchBar } from './components/SearchBar/SearchBar'
import Bulletpoint from './components/Bulletpoint/Bulletpoint'

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
        <SearchBar></SearchBar>
      </div>
      <div className='contenedor-info'>
        <h1>¿Cansado de que te rastreen? Podemos ayudarte.</h1>
        <p className='info1'>Consigue protección continua y gratuita para tu privacidad en el navegador con una descarga:</p>
      </div>
      <div className='contenedor-bulletpoints'>
        <Bulletpoint text='Búsqueda Privada' />
        <Bulletpoint text='Bloqueo De Rastreadores' />
        <Bulletpoint text='Encriptación De Sitios' />
      </div>
      <button className='addButton'>Añadir DuckDuckGo a Chrome</button>
      <div className='SquareMessageWrapper'>
        <MessageSquare
          icon = {laptop}
          title = {title1}
          description={description1} 
          link="https://duckduckgo.com/app"
          linkText="principales navegadores."
        />
        <MessageSquare
          icon = {search}
          title = {title2}
          description={description2}
          link="https://duckduckgo.com/"
          linkText="duckduckgo.com."
        />
        <MessageSquare
          icon = {mobile}
          title = {title3}
          description={description3}
          link="https://duckduckgo.com/app"
          linkText="iOS y Android."
        />
      </div>
      <footer>
        <h1 style = {{fontSize: '44px', lineHeight: '48px', padding: '0px', margin: '0px'}}>No guardamos tu información <br></br>
        personal. Y nunca lo haremos.</h1>
        <p>Nuestra política de privacidad es simple: No colectamos <br></br>
        o compartimos ninguna información personal tuya.</p>
      </footer>
    </div>
  )
}

export default App
