import React from 'react'
// inyectar en root nuestros componentes con ReactDom
import ReactDom from 'react-dom'

// funciones son componentes wtf
// importante que empiecen por mayúscula

// es un componente sin estado
// debemos devolver siempre JSX

// function Greeting() {
//   // debemos devolver html
//   return (
//     <div>
//       <h1>Hola mundo de nuevo</h1>
//     </div>
//   )
// }

// Reglas JSX
// return single element
// div /section /article or Fragment
// usa camelCase for html atributo
// cierra cada tag (obvio)
// formatea el código!!
// fragment para agrupar varios divs en un componente

function Greeting() {
  return (
    <section>
      <article>
        <div className=''>
          <h1> Esto es una lista</h1>
          <ul>
            <li>hola...</li>
          </ul>
        </div>
      </article>
    </section>
  )
}
// With React.createElement
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hola desde un div con JSX')
//   )
// }

// Nesteando componentes
function Goodbye() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

// Componentes a nestear dentro de Goodbyue
const Person = () => <h2>Álvaro domínguez</h2>
const Message = () => {
  return <p>Me despido por hoy de React</p>
}
// renderiza el componente Greeting en el root del index.html. Terminado en slash

ReactDom.render(<Goodbye />, document.getElementById('root'))
