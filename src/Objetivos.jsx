import { useState } from 'react'

function Objetivos() {
    return (
        <div className="row mt-5 objetivos">
        <div className="col-12 col-lg-4 d-flex justify-content-center mt-3">
          <div className="card obj align-items-center" style={{width: '18rem'}}>
            <img src="./images/objetivo (2).png" style={{width:'60px'}}  className="card-img-top mt-3" alt="..."/>
            <div className="card-body">
              <h1 className="tit-obj">Objetivo</h1>
              <p className="card-text">Por medio de un video juego queremos dar a conocer la norma a la protección de los 
                recursos naturales con el fin de crear conciencia en las personas.</p>
            </div>
          </div>
        </div>
  
        <div className="col-12 col-lg-4 d-flex justify-content-center mt-3">
          <div className="card vision align-items-center" style={{width: '18rem'}}>
            <img src="./images/ojo.png" style={{width:'60px'}} className="card-img-top mt-3" alt="..."/>
            <div className="card-body">
              <h1 className="tit-obj">Visión</h1>
              <p className="card-text">Buscar que las personas creen buenos hábitos con el cuidado del medio ambiente como: 
                Utilizando las 3R(reduce, reutiliza, recicla)</p>
            </div>
          </div>
        </div>
  
        <div className="col-12 col-lg-4 d-flex justify-content-center mt-3">
          <div className="card mision align-items-center" style={{width: '18rem'}}>
            <img src="./images/crecimiento.png" style={{width:'60px'}} className="card-img-top mt-3" alt="..."/>
            <div className="card-body">
              <h1 className="tit-obj">Misión</h1>
              <p className="card-text">Con este proyecto buscamos contribuir a la preservación y conservación del 
                medio ambiente y los recursos naturales, asegurando su uso racional y sostenible</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Objetivos