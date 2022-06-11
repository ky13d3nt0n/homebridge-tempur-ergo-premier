/**
 * @module Module
 * @description Module Description
 * Datagram - https://nodejs.org/api/dgram.html
 * Repo - https://github.com/docwho2/java-alexa-tempurpedic-skill
 */
import { Buffer } from 'buffer';
import dgram from 'dgram';
import config from './config.js';
import {
  socketListening,
  socketConnect,
  socketError,
  socketMessage,
  socketClose
} from './lib/events.js';

const socket = dgram.createSocket( 'udp4' );

/**
 * @function bindEvents
 * @description Bind events for this modules functions
 */
const bindEvents = () => {
  socket.on( 'connect', socketConnect );
  socket.on( 'listening', socketListening );
  socket.on( 'error', socketError );
  socket.on( 'message', socketMessage );
  socket.on( 'close', socketClose );
};

/**
 * @function bindEvents
 * @description Bind events for this modules functions
 */
const init = () => {
  console.log( 'init' );

  const message = Buffer.from( config.commands.off.command, 'hex' );
  socket.send( message, ( err ) => {
    if ( err ) { throw err; }
    socket.close();
    console.log( 'callback 2' );
  } );
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Create Socket and connect
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
socket.connect( config.port, config.beds.kyle, ( err ) => {
  if ( err ) { throw err; }
  console.log( 'callback' );
  init();
} );

bindEvents();
