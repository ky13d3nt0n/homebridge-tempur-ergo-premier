/**
 * @module Config
 * @description Our config file
 */
export default {
  port: 50007,
  beds: {
    kyle: '10.20.0.224',
    trevor: '10.20.0.91'
  },
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
     * Vibration Setting #1 - #4
     */
    vibration1: { title: 'Vibration Setting 1', command: '33053203948D007861' },
    vibration2: { title: 'Vibration Setting 2', command: '33053203948D017860' },
    vibration3: { title: 'Vibration Setting 3', command: '33053203948D027863' },
    vibration4: { title: 'Vibration Setting 4', command: '33053203948D037862' },

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
     * Lift
     */
    massage: {
      head: {
        up: { title: 'Increase Head Massage', command: '' },
        down: { title: 'Decrease Head Massage', command: '' }
      },
      lumbar: {
        up: { title: 'Increase Lumbar Massage', command: '' },
        down: { title: 'Decrease Lumbar Massage', command: '' }
      },
      leg: {
        up: { title: 'Increase Leg Massage', command: '' },
        down: { title: 'Decrease Leg Massage', command: '' }
      }
    }
  }
};
