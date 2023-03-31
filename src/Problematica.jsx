import { useState } from 'react'

function Problematica(props) {


  function showbutton(param){

    if( param ){
      return(
            <button className="info" data-bs-toggle="modal" style={{fontFamily: 'floane', backgroundColor: '#008055', color:'white', fontSize:'20px', border: '#008055', width:'200px', height:'50px', borderRadius: '10px'}} data-bs-target="#exampleModal">{props.button}</button>
          )
    }
   
  }
    return (
        <div className='container-fluid'>
        <div className="row mt-5 problema-caja" style={{backgroundColor: `${props.color}`}} >
        <div className="col-12 col-lg-6">
        <img src={`./images/${props.img}`}alt="" className='d-flex justify-content-space-between img-fluid d-flex justify-content-center'/>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className=" mt-4 pe-4" id="explora">
                <h1 className=" mt-5 text-center text-lg-start problema">{props.Titulo}</h1>
                <p className="text mt-3">{props.Text}</p>
                <div className="d-flex justify-content-center">
                  {
                   
                      showbutton(props.visible)
                    
                  }
                  
                </div>
              </div>
              <div className="modal fade" id="exampleModal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Más información</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <img src="./images/taurus-problematica.png"  className="card-img-top" alt="..."/>
                          </div>
                          <div className="col-12 col-lg-6 mas-info">
                            <p> La sobreexplotación de los recursos naturales está generando un enorme déficit, ya que cada año se consume un 20 % más de los que se pueden regenerar y ese porcentaje no deja de crecer.</p>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
        </div>
    )
}

export default Problematica