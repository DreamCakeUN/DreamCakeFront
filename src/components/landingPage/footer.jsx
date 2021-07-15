import React from 'react';
import face from '../../static/images/face.png';
import insta from '../../static/images/Instagram.png';
import tel from '../../static/images/Telefono.png';
import what from '../../static/images/whatsap.png';
export class Footer extends React.Component {


    render() {
        return (
            <div className="footer ">
                
                <div className="principalF d-flex f-wrap justify-content-center">
                <span className="footer-text">Ten acceso a nuestras redes sociales:</span>
                    <a className="redes-footer" href="https://www.facebook.com/DreamCakeOFICIAL1/"><img src={face} alt="" ></img></a>
                    <a className="redes-footer" href="https://web.whatsapp.com/"><img src={what} alt="" ></img></a>
                    <a className="redes-footer" href="#"><img src={tel} alt="" ></img></a>
                    <a className="redes-footer" href="#"><img src={insta} alt="" ></img></a>
                    
                    
                </div>
                   
                
                    <div className="NoPadding container text-center" style={{backgroundColor: "var(--color-primario)"}}>
                     <div className="row ">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto text-md-start mb-4">
                             <h6 className="text-uppercase fw-bold">DreamCake</h6>
                             <hr className="hr mb-4 mt-0 d-inline-block mx-auto"/>
                            <p className="footer-text">
                            En “Dream Cake” creamos deliciosos postres y pasteles con exquisitas recetas, ingredientes de la más alta calidad y con la más fina elaboración, consiguiendo así que nuestros productos sean una
delicia para los ojos y un capricho para el paladar
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold">Productos</h6>
                            <hr className="hr mb-4 mt-0 d-inline-block mx-auto"/>
                            <p><a href="#!" class="footer-text">Tres Leches</a></p>
                            <p><a href="#!" class="footer-text">Fondant</a></p>
                            <p><a href="#!" class="footer-text">Cheesecake</a></p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold">Atajos</h6>
                            <hr className="hr mb-4 mt-0 d-inline-block mx-auto"/>
                            <p><a href="#!" class="footer-text">Tu cuenta</a></p>
                            <p><a href="#!" class="footer-text">Registrate</a></p>
                            <p><a href="#!" class="footer-text">Ordena tu pastel</a> </p>
                            <p><a href="#!" class="footer-text">Ayuda</a> </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold">Contacto</h6>
                            <hr className="hr mb-4 mt-0 d-inline-block mx-auto"/>
                            <p><a href="#!" class="footer-text"> Cra 45, Bogotá</a></p>
                            <p><a href="#!" class="footer-text">dreamcake@gmail.com</a></p>
                            <p><a href="#!" class="footer-text"> +57 300 612 6830</a></p>
                            <p><a href="#!" class="footer-text"> +57 301 567 8923</a></p>
                        </div>
                    </div>
                </div>
          
                <div className="copyright-bar">
                    <span className="copyright">
                        ©2021 DreamCake - Todos los Derechos reservados
                    </span>
                </div>
            </div>
        );
    }
}
