import { useState } from 'react'


function Carrusel() {
    return (
        <div className='container-fluid'>
            <div className='row mb-5'>
                <div className='col-12 col-lg-12 mt-4 d-flex justify-content-center align-items-center noticias'>
                    <div id="carouselExampleControls" className='carousel slide img-fluid' style={{width:'1350px'}} data-bs-ride="carousel">
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <img src="./images/publicidad-1.png" className='d-block w-100 img-fluid'  style={{width:'1000px', height: '383px' }}    alt="..."/>
                            </div>
                            <div className='carousel-item'>
                                <img src="./images/publicidad2.png" className='d-block w-100 img-fluid '  style={{width:'1000px', height: '383px' }}  alt="..."/>
                            </div>
                            <div className='carousel-item'>
                                <img src="./images/publicidad3.png" className='d-block w-100 img-fluid'  style={{width:'1000px', height: '383px' }} alt="..."/>
                            </div>

                        </div>
                        <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                            <span className='visually-hidden'>Previous</span>
                        </button>
                        <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className='carousel-control-next-icon' aria-hidden="true"></span>
                            <span className='visually-hidden'>Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carrusel