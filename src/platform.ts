/**
 * @module Platform
 * @description
 */
import { API, DynamicPlatformPlugin, Logger, PlatformAccessory, PlatformConfig, Service, Characteristic } from 'homebridge';

import { PLATFORM_NAME, PLUGIN_NAME } from './settings';
import { TempurErgoPlatformAccessory } from './platformAccessory';

interface TempurErgoAccessory extends PlatformAccessory {
  id: number,
  name: string,
  ip: string
}

/**
 * @class TempurErgoPlatform
 * @description
 */
export class TempurErgoPlatform implements DynamicPlatformPlugin {
  public readonly Service: typeof Service = this.api.hap.Service;
  public readonly Characteristic: typeof Characteristic = this.api.hap.Characteristic;

  // This is used to track restored cached accessories.
  public readonly accessories: TempurErgoAccessory[] = [];

  constructor(
    public readonly log: Logger,
    public readonly config: PlatformConfig,
    public readonly api: API
  ) {
    this.log.debug( 'Finished initializing platform:', this.config.name );

    // When this event is fired it means Homebridge has restored all cached accessories from disk.
    // Dynamic Platform plugins should only register new accessories after this event was fired,
    // in order to ensure they weren't added to homebridge already. This event can also be used
    // to start discovery of new accessories.
    this.api.on( 'didFinishLaunching', () => {
      log.debug( 'Executed didFinishLaunching callback' );
      // run the method to discover / register your devices as accessories
      this.discoverDevices();
    });
  }

  /**
   * @function configureAccessory
   * @description This function is invoked when homebridge restores cached accessories from disk at startup.
   * It should be used to setup event handlers for characteristics and update respective values.
   */
  configureAccessory( accessory: TempurErgoAccessory ) {
    this.log.info( 'Loading accessory from cache:', accessory.displayName );

    // Add the restored accessory to the accessories cache so we can track if it has already been registered
    this.accessories.push( accessory );
  }

  /**
   * @function discoverDevices
   * @description
   */
  discoverDevices() {
    const accessories = this.accessories.length > 0 ? this.accessories : this.config.accessories;

    accessories.forEach( ( accessory ) => {
      const id = accessory.id ? accessory.id.toString() : accessory.context.device.id.toString();
      const uuid = this.api.hap.uuid.generate( id );

      // See if an accessory with the same uuid has already been registered and restored from the cached devices we stored in the `configureAccessory` method above
      const existingAccessory = this.accessories.find( accessory => accessory.UUID === uuid );

      if( existingAccessory ) {
        new TempurErgoPlatformAccessory( this, accessory );
      } else {
        this.createNew( uuid, accessory );
      }
    } );
  }

  /**
   * @function createNew
   * @description The accessory does not yet exist, so we need to create it
   */
  createNew( uuid, device ) {
    this.log.info( 'Adding new accessory:', device.displayName );

    // Create a new accessory
    const accessory = new this.api.platformAccessory( device.displayName, uuid );

    // Store a copy of the device object in the `accessory.context`
    // the `context` property can be used to store any data about the accessory you may need
    accessory.context.device = device;

    // Create the accessory handler for the newly create accessory
    // this is imported from `platformAccessory.ts`
    new TempurErgoPlatformAccessory( this, accessory );

    // Link the accessory to your platform
    this.api.registerPlatformAccessories( PLUGIN_NAME, PLATFORM_NAME, [ accessory ] );
  }
}

export default TempurErgoPlatform;
