/**
 * @module Massage
 * @description
 */
import { PlatformAccessory } from 'homebridge';
import { TempurErgoPlatform } from '../platform';
import { AccessorySocket } from '../socket/socket';

export class Massage {
  private readonly massageService;

  constructor(
    private readonly platform: TempurErgoPlatform,
    private readonly accessory: PlatformAccessory,
    private readonly socket: AccessorySocket
  ) {

    this.massageService = accessory.getService( this.Service.Switch );
    //
    // if( ! this.switchService ) {
    //   this.switchService = accessory.addService( this.Service.Switch, this.displayName );
    // }
    //
    // this.switchService.getCharacteristic( Characteristic.On )
    //   .on( CharacteristicEventTypes.SET, async ( value, callback ) => {
    //     this.switchService.updateCharacteristic( Characteristic.On, value );
    //
    //     const command = ! value ? 'off' : 'vibration1';
    //
    //     socket.send( command );
    //     return callback();
    //   } )
    //   .on( CharacteristicEventTypes.GET, async (callback) => {
    //     return callback(null, this.switchService.getCharacteristic( Characteristic.On ).value);
    //   } );
    // }
  }
}
