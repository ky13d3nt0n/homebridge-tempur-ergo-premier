/**
 * @module Platform Accessory
 * @description
 */
import { API, Logger, PlatformConfig, Service, PlatformAccessory, CharacteristicValue, Characteristic, CharacteristicEventTypes } from 'homebridge';
import { TempurErgoPlatform } from './platform';
import { AccessorySocket } from './socket/socket';

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

    this.switchService = accessory.getService( this.Service.Switch );

    if( ! this.switchService ) {
      this.switchService = accessory.addService( this.Service.Switch, this.displayName );
    }

    this.switchService.getCharacteristic( Characteristic.On )
      .on( CharacteristicEventTypes.SET, async ( value, callback ) => {
        this.switchService.updateCharacteristic( Characteristic.On, value );

        const command = ! value ? 'off' : 'vibration1';

        socket.send( command );
        return callback();
      } )
      .on( CharacteristicEventTypes.GET, async (callback) => {
        return callback(null, this.switchService.getCharacteristic( Characteristic.On ).value);
      } );
    }
}

export default TempurErgoPlatformAccessory;


/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
// export class ExamplePlatformAccessory {
//   private service: Service;
//
//   /**
//    * These are just used to create a working example
//    * You should implement your own code to track the state of your accessory
//    */
//   private states = {
//     On: false
//   };
//
//   constructor(
//     private readonly platform: ExampleHomebridgePlatform,
//     private readonly accessory: PlatformAccessory,
//   ) {
//
//     // Set Accessory Information
//     this.accessory.getService(this.platform.Service.AccessoryInformation)!
//      .setCharacteristic(this.platform.Characteristic.Manufacturer, 'TempurPedic')
//      .setCharacteristic(this.platform.Characteristic.Model, 'Ergo Premier')
//
//     // Get the StatelessProgrammableSwitch service if it exists, otherwise create a new StatelessProgrammableSwitch service. You can create multiple services for each accessory
//     this.service = this.accessory.getService(this.platform.Service.StatelessProgrammableSwitch) || this.accessory.addService(this.platform.Service.StatelessProgrammableSwitch);
//
//     // Set the service name, this is what is displayed as the default name on the Home app.
//     this.service.setCharacteristic(this.platform.Characteristic.Name, accessory.context.device.exampleDisplayName);
//
//     // each service must implement at-minimum the "required characteristics" for the given service type
//     // see https://developers.homebridge.io/#/service/Lightbulb
//     this.service.getCharacteristic(this.Characteristic.ProgrammableSwitchEvent).onGet(this.handleProgrammableSwitchEventGet.bind(this));
//
//     // register handlers for the On/Off Characteristic
//     // this.service.getCharacteristic(this.platform.Characteristic.On)
//     //  .onSet(this.setOn.bind(this))                // SET - bind to the `setOn` method below
//     //  .onGet(this.getOn.bind(this));               // GET - bind to the `getOn` method below
//
//     // register handlers for the Brightness Characteristic
//     // this.service.getCharacteristic(this.platform.Characteristic.Brightness)
//     //  .onSet(this.setBrightness.bind(this));       // SET - bind to the 'setBrightness` method below
//   }
//
//   /**
//    * Handle requests to get the current value of the "Programmable Switch Event" characteristic
//    */
//   handleProgrammableSwitchEventGet() {
//     this.log.debug('Triggered GET ProgrammableSwitchEvent');
//
//     // set this to a valid value for ProgrammableSwitchEvent
//     const currentValue = this.Characteristic.ProgrammableSwitchEvent.SINGLE_PRESS;
//
//     return currentValue;
//   }
// }
