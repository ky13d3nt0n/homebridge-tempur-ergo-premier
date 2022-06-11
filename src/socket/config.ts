/**
 * @module Config
 * @description Our config file
 */

// https://assets-www.tempurpedic.com/media/documents/TEMPUR-Ergo_Premier_WiFi_Reference_REV2.pdf
// http://10.20.0.91/sys

export default {
  port: 50007,
  commands: {
    /**
     * Flat Position
     */
    flat: { title: 'Flat Position', command: '3305320A945C0400CC' },

    /**
     * Memory Position #1 - #4
     */
    memory1: { title: 'Memory Position 1', command: '33053203945C0000C8' },
    memory2: { title: 'Memory Position 2', command: '33053203945C0100C9' },
    memory3: { title: 'Memory Position 3', command: '33053203945c0100CA' }, // NONE SET? - 33053203945C0100CA
    memory4: { title: 'Memory Position 4', command: '33053203945c0100CB' }, // NONE SET? - 33053203945C0100CB

    /**
     * Off
     */
    off: { title: 'Vibration Off', command: '3305320A9486000012' },

    /**
     * Massage Setting #1 - #4
     */
    massage1: { title: 'Massage Setting 1', command: '33053203948D007861' },
    massage2: { title: 'Massage Setting 2', command: '33053203948D017860' },
    massage3: { title: 'Massage Setting 3', command: '33053203948D027863' },
    massage4: { title: 'Massage Setting 4', command: '33053203948D037862' },

    /**
     * Lift
     */
    lift: {
      head: {
        up: { title: 'Lift Head', command: '' },
        down: { title: 'Lower Head', command: '' }
      },
      leg: {
        up: { title: 'Lift Leg', command: '' },
        down: { title: 'Lower Leg', command: '' }
      }
    },

    /**
     * Vibration
     */
    vibration: {
      head: {
        up: { title: 'Increase Head Vibration', command: '' },
        down: { title: 'Decrease Head Vibration', command: '' }
      },
      lumbar: {
        up: { title: 'Increase Lumbar Vibration', command: '' },
        down: { title: 'Decrease Lumbar Vibration', command: '' }
      },
      leg: {
        up: { title: 'Increase Leg Vibration', command: '' },
        down: { title: 'Decrease Leg Vibration', command: '' }
      }
    }
  }
};
