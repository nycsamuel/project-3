import React, { Component } from 'react';
import './Socket.css';

export default class Socket extends Component {
  constructor() {
    super();
    this.exportPlaylist = this.exportPlaylist.bind(this);
  }

  componentWillMount() {
    this.socketFn();
  }

  socketFn() {
    // receive data from server through socket 'chatroom'
    const socket = io();
    socket.on('chatroom', msg => {
      console.log('data on frontend', msg);
      const ul = document.getElementById('messages');
      const li = document.createElement('li');
      li.innerHTML = msg.msg;
      ul.appendChild(li);
    });
  }

  handleSubmit(e) {
    // console.log('submit event', e.target);
    e.preventDefault();
    const socket = io();
    const i = document.getElementById('m');
    // send data to server through socket 'server-chat'
    socket.emit('server-chat', i.value);
    i.value = '';
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    this.setState({
      msg: e.target.value,
    });
  }

  getUserPlaylist(id) {
    // console.log('HITTTT', id);
    return fetch();
  }

  exportPlaylist() {
    // get user_id 
    const user_id = 1; 
    // call server and get the user's playlist
    const pl = this.getUserPlaylist(user_id);
    // send the json object to server through socket
  }


  render() {
    return(
      <div>
        <ul id="messages"></ul>
        <form className='socket-form' onSubmit={event => this.handleSubmit(event)}>
          <input id="m" onChange={event => this.handleInputChange(event)}/>
          <button>Send</button>
        </form>
        <button className="export" onClick={this.exportPlaylist}>Export</button>
      </div>
    )
  }
}
