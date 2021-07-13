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
                   
                
                    <div className="NoPadding container text-center" style={{backgroundColor: "var(--color-secundario)"}}>
                     <div className="row ">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto text-md-start mb-4">
                             <h6 className="text-uppercase fw-bold">DreamCake</h6>
                             <hr className="hr mb-4 mt-0 d-inline-block mx-auto"/>
                            <p className="footer-text">
                            Somos una pastelería creada en el 2021 y pues ajá, no sé que mas poner acá
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold">Products</h6>
                            <hr className="hr mb-4 mt-0 d-inline-block mx-auto"/>
                            <p><a href="#!" class="text-white">MDBootstrap</a></p>
                            <p><a href="#!" class="text-white">MDWordPress</a></p>
                            <p><a href="#!" class="text-white">BrandFlow</a></p>
                            <p><a href="#!" class="text-white">Bootstrap Angular</a></p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold">Useful links</h6>
                            <hr className="hr mb-4 mt-0 d-inline-block mx-auto"/>
                            <p><a href="#!" class="footer-text">Your Account</a></p>
                            <p><a href="#!" class="text-white">Become an Affiliate</a></p>
                            <p><a href="#!" class="text-white">Shipping Rates</a> </p>
                            <p><a href="#!" class="text-white">Help</a> </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold">Contact</h6>
                            <hr className="hr mb-4 mt-0 d-inline-block mx-auto"/>
                            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
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
