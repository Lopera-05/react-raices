import { useState } from 'react'


function Solucion(props) {
    return (
        <div className="container-fluid">
            <div className="row mt-5 soluciones">
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <div className="info-solucion mt-4 ps-4">
                        <h1 className=" mt-5 text-center text-lg-start problema">{props.titsolucion}</h1>
                        <p className="text mt-3"> {props.textsolucion}
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-end ">
                    <img src="./images/solucion (2).jpg" alt="" className=" img-solucion img-fluid d-flex justify-content-center " style={{width:'547px', height:'391px'}}/>
                </div>
            </div>
        </div>
    )
}
export default Solucion