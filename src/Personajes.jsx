import { useState } from 'react'

function Personajes() {
    return (
        <div className='container-fluid'>
        <div className="row mt-5 d-flex justify-content-center" id="aventurate" >
            <div className="col-12 col-lg-6 info-personajes">
                <div className="row mt-3">
                    <div className="card card1 h-100 flin border border-3">
                        <div className="card-body">
                            <div className="d-flex">
                                <img src="./images/flin-completo2.png" className="img-flin img-fluid " alt=""  style={{width:'250px'}} />
                                <div className="ps-2">
                                    <ul>
                                        <h4>Flin</h4>
                                        <li>Es el último niño del bosque</li>
                                        <li>Es moreno y de cabello ondulado</li>
                                        <li>Es un niño salvaje</li>
                                        <li>Le gusta la acción y las aventuras</li>
                                        <li>Es el último niño del bosque</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="card card1 h-100 taurus border border-3 ">
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <div className="ps-2">
                                    <ul>
                                        <h4>Taurus</h4>
                                        <li>Es el último dinosaurio del bosque</li>
                                        <li>Tiende a tener ataques de pánico</li>
                                        <li>Es muy amigable</li>
                                        <li>Es muy gracioso</li>
                                        <li>Es el último niño del bosque</li>
                                    </ul>
                                </div>
                                <img src="./images/taurus-completo.png" alt="" className="rounded-circle img-fluid"  style={{width:'250px'}} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="card card1 h-100 contaminator border border-3">
                        <div className="card-body">
                            <div className="d-flex">
                                <img src="./images/contaminator-completo.png" className="img-fluid" alt=""  style={{width:'200px'}}/>
                                <div className="ps-2">
                                    <ul>
                                        <h4>Contaminator</h4>
                                        <li>Es el villano del juego</li>
                                        <li>Está hecho de basura</li>
                                        <li>Odia la limpieza</li>
                                        <li>Se alimenta del miedo</li>
                                        <li>Es un remolino</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-12 col-lg-4 mt-3 ">
                <div className="card card1 h-100 Metodologia">
                    <div className="card-body "  style={{width:'400px'}}>
                        <div className=" ">
                            <h1 className="d-flex justify-content-center text-metodologia mt-4">Metodología</h1>
                            <p className="v5.1.0 mt-4 ms-3 parrafo-metodologia"> El bosque mágico está en peligro, sálvalo de la destrucción buscando las semillas
                                mágicas que te otorgan poderes para derrotar a contaminator, un remolino gigante
                                encargado de acabar completamente con el bosque, tu objetivo como jugador es
                                acabar con él y recuperar lo extinto.</p>
                            <div className="d-flex justify-content-center">
                                <button className="button-play mt-3 ms-3">A jugar!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default Personajes
