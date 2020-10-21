((global) => {
  if (typeof global.$ === 'undefined') {
    const jQuery = require('jquery');

    jQuery(global);
    global.$ = jQuery;
  }
})(global || window || this);

import JitsiMeetJS from './lib-jitsi-meet.min';
export {JitsiMeetJS as default};
