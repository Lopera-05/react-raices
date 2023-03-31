import { useState } from 'react'

function Header() {
    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-between  menu-container'>
                <div className='col-12 col-lg-4 mt-4 ms-5 d-flex justify-content-between'>
                    <img src="./images/Logo_2.png" className='logo' alt="" />
                </div>
                <div className='col-12 col-lg-6 mt-5 d-flex justify-content-start'>
                    <ul className='nav nav-pills nav-fill barra navbar navbar-expand-lg' id="menu" >
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a className='nav-link' href="#explora">Explora</a>
                                </li>
                                <li className='nav-item' >
                                    <a className='nav-link' href="#descubrenos">Descúbrenos</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="#aventurate">Aventúrate</a>
                                </li>

                                <li className='nav-item'>
                                    <a className='nav-link' href="#!">Jugar</a>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Header