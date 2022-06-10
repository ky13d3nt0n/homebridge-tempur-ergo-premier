/**
 * @module Socket
 * @description
 */
import { DgramAsPromised } from 'dgram-as-promised';
import { Buffer } from 'buffer';
import config from './config';

export class AccessorySocket {
  private readonly socket = DgramAsPromised.createSocket( 'udp4' );
  private readonly port = 50007;

  constructor(
    public readonly ip
  ) {

  }

  /**
   * @function bindEvents
   * @description Bind events for this modules functions
   */
  async send( command ) {
    const message = Buffer.from( config.commands[ command ].command, 'hex' );
    await this.socket.send( message, 0, message.length, this.port, this.ip );
  };
}

export default AccessorySocket;
