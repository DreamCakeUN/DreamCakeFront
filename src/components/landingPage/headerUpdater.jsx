import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import campana from "../../static/images/campana.svg"
import { Notifications } from "./notifications/notifications"
import { Register } from '../login/register';
import { Login } from '../login/login';
import Cookies from 'js-cookie';
import logo from '../../static/images/logo3.svg';

export class HeaderUpdater extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo: null,
            open: true,
            open1: true,
            notification: ''
        }
        //this.userInfo = null;
    }

    componentDidMount(e) {
        

        fetch('http://localhost:8000/users/api/auth/user/', {
            method: 'GET',
            credentials: 'include',
            headers: {
            },
        }).then((response) => response.json())
            .then(responseJson => {
               this.setState({ userInfo: responseJson })
            }).catch(error => console.error('Error:', error));
    }

    registrarse() {
        window.location.pathname = "/accounts/signup/"
    }

    iniciarSesion() {
        this.openModal();
    }

    openModal = (e) => {
        let mod = document.getElementById(e.target.value);
        mod.append("body")
        console.log(e.target.value);
    };

    putData = (e) => {
        this.setState({ notification: e });
    }
    
    logOut(e){
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-CSRFToken':Cookies.get('csrftoken')
            },
            credentials: "include",
            body: JSON.stringify({
                likes:this.state.like+1
            })
        };
        fetch('http://localhost:8000/users/api/auth/logout/', requestOptions)
        .then(res => res.json())
        .then(json =>{
            window.location.pathname = "/"
            window.location.reload()
        })
        
    }
    


    render() {
        // <Notification putData={this.putData}/> 
        //var user_name = this.state.userInfo.short_name;
        console.log('isNull?' + this.state.userInfo == null);
        if (this.state.userInfo == null || this.state.userInfo.hasOwnProperty('detail')) {
            return (
               <div className="justify-content-between d-flex align-items-center">
                    <a class = "navbar-brand" href = "/">
                                <img class="img-fluid rounded-circle header-logo" src={logo} alt="logo DreamCake"/>
                    </a>
      
                    <div className="col-4 col-sm-4">

                        <button type="button" className="btn btn-lg btn-login " data-toggle="modal" data-target="#register" value="register" data-backdrop="false" data-dismiss="modal" >Registrarse</button>
                        <button type="button" className="btn btn-lg  btn-primary" data-toggle="modal" data-target="#login" value="login" data-backdrop="false" y data-dismiss="modal">Iniciar Sesión</button>
                        <Register />                       
                        <Login />
                    </div>

               </div>
            );
        }
        else {
            return (
                
                   <div className="col-lg-6 col-sm-6 col-9 row justify-content-end f-wrap"> 
                  
                       {/*  <div className="col-lg-1 col-sm-2 col-2">
                            <img type="button" className="menubtn img-fluid" src={campana} alt="notificacion" data-toggle="collapse" data-target="#notification" aria-expanded="false" aria-controls="" />
                            <div className="collapse multi-collapse   badge pop-notification" id="notification">
                                <Notifications  notifications = {this.props.notifications}></Notifications>
                            </div>
                        
                        </div>
                        <div className="col-lg-2 col-sm-4 col-4">
                            <img className="img-fluid rounded-circle" src={this.state.userInfo.foto} />
                        </div>
                        <div className="menubtn">
                            <span className=" btn badge btname-user">{this.state.userInfo.email}</span>
                            <select type="select" className=" arrow btn  badge " id="perfil" onClick={e=>this.menuSelect(e)}>
                                <option select  className="btn-dark" value=""></option>
                                <option className="btn btn-dark" value="Inicio">Inicio</option>
                                <option className="btn btn-dark" value="Pastel">Crear Pastel</option>
                                <option className="btn btn-dark" value="Social">Social</option>
                                <option className="btn btn-dark" value="Perfil">Perfil</option>
                                <option className="btn btn-dark" value="Salir" >Salir</option>
                            </select>
                        </div> */}




                        <nav class="navbar navbar-dark  jumbotron-header navbar-expand-md fixed-top justify-content-around" >
                            <a class = "navbar-brand" href = "./">
                                <img class="img-fluid rounded-circle header-logo" src={logo} alt="one piece"/>
                            </a>

                            
                                
                                <button class ="navbar-toggler" type ="button" data-toggle ="collapse" data-target ="#navbarSupportedContend" aria-controls="navbarNavDropdown"  aria-expanded="false" aria-label="Toggle navigation">
                                    <spam class ="navbar-toggler-icon"/>
                                </button>
                                <div class = "collapse navbar-collapse" id ="navbarSupportedContend">
                                    <ul class ="navbar-nav mr-auto">
                                    <li class =" nav-item"><a class="nav-link" href ="/">Inicio</a></li>
                                    <li class =" nav-item"><a class="nav-link" href ="/crearPastel/">Crear Patel</a></li>
                                    <li class =" nav-item"><a class="nav-link" href ="/social">Social Cake</a></li>
                                    <li class =" nav-item"><a class="nav-link" href ="/profile">Perfil</a></li>
                                    <li class =" nav-item"><a class="nav-link" href="#" onClick ={e=>this.logOut(e)}>Salir</a></li>
                                    
                                    {/* <li class =" nav-item "><a class="nav-link" href ="./about.html">About</a></li> */}
                                    </ul>
                                </div> 
                            <div className="row">   
                                <img type="button" className="menubtn img-fluid rounded-circle" src={campana} alt="notificacion" data-toggle="collapse" data-target="#notification" aria-expanded="false" aria-controls="" />
                                <img className="img-fluid rounded-circle header-profile" style={{width:100}} src={this.state.userInfo.foto} />
                                        <div className="collapse multi-collapse   badge pop-notification" id="notification">
                                            <Notifications  notifications = {this.props.notifications}></Notifications>
                                        </div>
                            </div>
                           

                        </nav>

                       



                      
                        
                    </div>
                    
        
            );
        }
    }
}
export default HeaderUpdater;