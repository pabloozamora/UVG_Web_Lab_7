import React from 'react'
import laptop from './assets/laptop.svg'
import search from './assets/search.svg'
import mobile from './assets/mobile.svg'
import logo from './assets/logo.svg'
import './App.css'
import MessageSquare from './components/MessageSquare/MessageSquare'
import SearchBar from './components/SearchBar/SearchBar'
import Bulletpoint from './components/Bulletpoint/Bulletpoint'
import Header from './components/Header/Header'

function App() {
  const title1 = "Extensión de Navegador Privada"
  const description1 = "Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una"
  const description2 = "Busca de forma privada con nuestra app o extensión, añade búsqueda web privada a tu navegador preferido o busca en"
  const title2 = "Motor de Búsqueda Privada"
  const title3 = "Navegador Privado"
  const description3 = "Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador de rastreadores, mejora de encriptación y más. Disponible para"
  return (
    <div className="App">
      <Header />
      <div className="SearchWrapper">
        <img alt = "logo" className = "logo" src = {logo} />
        <SearchBar />
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
      <button type="submit" className='addButton'>Añadir DuckDuckGo a Chrome</button>
      <p className='small-info'>¡Con la confianza de decenas de millones de personas en todo el mundo!</p>
      <p className='info2'>Protección de la Privacidad para Cualquier Dispositivo</p>
      <div className='SquareMessageWrapper'>
        <MessageSquare
          icon = {laptop}
          title = {title1}
          description={description1} 
          link="https://duckduckgo.com/app"
          linkText="extensión de Chrome."
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
        <h1 className='footerTitle'>No guardamos tu información <br />
        personal. Y nunca lo haremos.</h1>
        <p className='footerInfo'>Nuestra política de privacidad es simple: No colectamos <br />
        o compartimos ninguna información personal tuya.</p>
        <button type="submit" className='footerButton'>Instalar DuckDuckGo</button>
      </footer>
      <img alt="Footer pic" src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg" style={{ marginTop: '30px', width: '800px' }} />
    </div>
  )
}

export default App
