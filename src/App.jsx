import { useState } from 'react'
import './App.css'
import Carrusel from './Carrusel'
import Header from './Header'
import Problematica from './Problematica'
import Solucion from './Solucion'
import Objetivos from './Objetivos'
import Personajes from './Personajes'
import Footer from './Footer.jsx'
import Fecha from './Flecha'


function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <section className='container-fluid'>
      <Header />
      <Carrusel />

      <Problematica
        Text='Evidenciamos una problemática donde encontramos que muchas personas no tienen conocimiento sobre la norma de los recursos naturales y no la ponen en práctica cuando las consecuencias pueden ser irreversibles a futuro.'
        Titulo='Problemática'
        img='Problematica.png'
        button='Más informacion'
        visible={true} />
      <Solucion 
      titsolucion='Solución'
      textsolucion='A través de herramientas prácticas,
      se buscará fomentar el uso de la norma a la protección de los
      recursos naturales, esto con el fin de reducir la contaminación y la
      desinformación ya que por causa de esta las personas son inconcientes
      de los daños a largo y corto plazo que pueden generar.'
      />
      <Problematica
        Titulo='¿Quienes Somos?'
        Text='Somos grupo de jovenes que busca contribuir a la protección de los recursos naturales para el bienestar de toda la sociedad y del medio ambiente esto, por medio de recursos multimodales para contribir con un aprendizaje práctico y estrategico.'
        img='quienes_somos (1).png'
        color='#c3f3b0' 
        visible={false}/>
      <Objetivos />
      <Personajes />
      <Footer />
      <Fecha/>
    </section>
  )
}
export default App
