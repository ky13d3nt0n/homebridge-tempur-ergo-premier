/**
 * @module Platform Accessory
 * @description
 */
import { API, Logger, PlatformConfig, Service, PlatformAccessory, CharacteristicValue, Characteristic, CharacteristicEventTypes } from 'homebridge';
import { TempurErgoPlatform } from './platform';
import { AccessorySocket } from './socket/socket';

// import { General } from './lib/general';
// import { Lift } from './lib/lift';
import { Massage } from './lib/massage';
// import { Memory } from './lib/memory';
// import { Vibration } from './lib/vibration';

/**
 * @class TempurErgoPlatformAccessor
 * @description
 */
export class TempurErgoPlatformAccessory {
  public readonly Service: typeof Service = this.platform.Service;
  public readonly Characteristic: typeof Characteristic = this.platform.Characteristic;

  private readonly displayName = this.accessory.displayName;
  private readonly uuid = this.accessory.UUID;
  private readonly switchService;

  private state = {
    On: false
  }

  constructor(
    private readonly platform: TempurErgoPlatform,
    private readonly accessory: PlatformAccessory
  ) {
    const socket = new AccessorySocket( accessory.context.device.ip );
    const lift = new Lift( accessory );
    const massage = new Massage( this, accessory, socket );

    // this.switchService = accessory.getService( this.Service.Switch );
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

export default TempurErgoPlatformAccessory;
