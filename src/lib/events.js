/**
 * @module Events
 * @description Event Handling
 */

/**
 * @function socketListening
 * @description
 */
export const socketListening = ( e ) => {
  console.log( 'Socket Listening', e );
};

/**
 * @function socketConnect
 * @description
 */
export const socketConnect = ( e ) => {
  console.log( 'Socket Connected', e );
};

/**
 * @function socketErrir
 * @description
 */
export const socketError = ( e ) => {
  console.log( 'Socket Error', e );
};

/**
 * @function socketMessage
 * @description
 */
export const socketMessage = ( e ) => {
  console.log( 'Socket Message', e );
};

/**
 * @function socketClose
 * @description
 */
export const socketClose = ( e ) => {
  console.log( 'Socket Close', e );
};
