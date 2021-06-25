import './style.scss';

import React from 'react';
import { Footer, Header } from '../landingPage';
import { Pedidos } from './pedidos/pedidos';
import { Menu } from './menu';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

import Cookies from 'js-cookie';

export class Admin extends React.Component {

  ws = new WebSocket("ws://localhost:8000/ws/")

  constructor(props) {
    super(props)
    this.state = {
      pedidos: [{
        idpedido: 1,
        fecha_pedido: "2021-Jun-24 ",
        foto: "http://localhost:8000/media/pedido/a_8_69UKEp6.png",
        direccion: "asdfa",
        costo: 2.0,
        aceptado: false,
        estado: 2,
        comentario: "sadfasdf",
        domiciliario: true,
        pasteles: 1,
        user: "admin@admin.com"
      },
      {
        idpedido: 2,
        fecha_pedido: "2020-Jun-24 ",
        foto: "http://localhost:8000/media/pedido/a_8_69UKEp6.png",
        direccion: "asdfa",
        costo: 2.0,
        aceptado: true,
        estado: 2,
        comentario: "sadfasdf",
        domiciliario: true,
        pasteles: 1,
        user: "admin@admin.com"
      }],
      atr: "-fecha_pedido"
    }

    this.send = this.send.bind(this);
    this.cargarPedidos = this.cargarPedidos.bind(this);
  }

  componentDidMount() {
    this.cargarPedidos();
    this.reload();
  }

  send() {
    this.ws.send(JSON.stringify({
      action: "subscribe_to_pedido_activity",
      request_id: new Date().getTime(),
    }))
  }

  addNFT(message) {
    store.addNotification({
      title: "Nuevo pedido",
      message: message.user + " realizo un nuevo pedido",
      type: "success",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  }

  cargarPedidos(event) {
    const requestOptions = {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      credentials: "include",
    };
    fetch("http://localhost:8000/all_pedidos/" + this.state.atr + "/", requestOptions)
      .then(response => response.json())
      .then(json => this.setState({
        pedidos: json
      }))
      .catch(error => console.log(error));
  }

  reload(){
    this.ws = new WebSocket("ws://localhost:8000/ws/") 

    this.ws.onopen = evt => {
      console.log("open");
      this.send();
    };

    this.ws.onclose = evt => { 
      console.log('disconnected reloadiong') 
      this.reload()
    };

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      this.setState({ dataFromServer: message })
      this.addNFT(message);
      this.cargarPedidos();
    };

    this.ws.onerror = evt => { console.log(JSON.stringify(evt)) };
  }

  render() {
    return (
      <div>
        <ReactNotification />
        <Header></Header>
        <Menu></Menu>
        <Pedidos datos={this.state.pedidos}></Pedidos>
        <Footer></Footer>
      </div>
    );
  }

}