import { useState } from 'react'

function Footer() {
    return (
            <footer class=" footer text-center text-white mt-5">
                <div class="container p-4 pb-0">
                    <h1 class="text-footer">Siguenos</h1>

                    <section class="mb-4">
                        <div class="btn-fa btn btn-outline-light btn-floating m-1" >
                            <img src="./images/facebook.svg" style={{ width: '20px' }} href="#!" role="button" alt="" />
                        </div>

                        <div class="btn-fa btn btn-outline-light btn-floating m-1" >
                            <img src="./images/instagram.svg" style={{ width: '20px' }} href="#!" role="button" alt="" />
                        </div>


                        <div class="btn-fa btn btn-outline-light btn-floating m-1" >
                            <img src="./images/brand-whatsapp.svg" style={{ width: '20px' }} href="#!" role="button" alt="" />
                        </div>


                        <div class="btn-fa btn btn-outline-light btn-floating m-1" >
                            <img src="./images/ui-email.svg" style={{ width: '20px' }} href="#!" role="button" alt="" />
                        </div>


                        <div class="btn-fa btn btn-outline-light btn-floating m-1" >
                            <img src="./images/logo-github.svg" style={{ width: '22px' }} href="#!" role="button" alt="" />
                        </div>
                    </section>

                </div>

                <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    ©Raices 2023
                </div>
            </footer>
    )
}
export default Footer

