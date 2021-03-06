export const jitsiConfig = {
  disableSimulcast: false,
  enableRemb: true,
  enableTcc: true,
  resolution: 540,
  constraints: {
    video: {
      height: {
        ideal: 540,
        max: 540,
        min: 180,
      },
      width: {
        ideal: 960,
        max: 960,
        min: 320,
      },
    },
  },
  analytics: false,
  enableP2P: false,
  p2p: {
    enabled: false,
  },
  useStunTurn: true,
  useIPv6: false,
  useNicks: false,
  clientNode: 'http://jitsi.org/jitsimeet',
  desktopSharingChromeDisabled: false,
  desktopSharingChromeSources: ['screen', 'window', 'tab'],
  desktopSharingFirefoxDisabled: false,
  enableLipSync: false,
  disableRtx: false,
  enableRtpStats: false,
  enableScreenshotCapture: false,
  enableStatsID: true,
  channelLastN: 35,
  minHDHeight: 540,
  startBitrate: '800',
  disableAudioLevels: false,
  useRtcpMux: true,
  useBundle: true,
  disableSuspendVideo: true,
  stereo: false,
  forceJVB121Ratio: -1,
  enableTalkWhileMuted: true,
  enableNoAudioDetection: true,
  enableNoisyMicDetection: true,
  enableClosePage: true,
  hiddenDomain: 'recorder.beta.meet.jit.si',
  transcribingEnabled: false,
  enableRecording: false,
  liveStreamingEnabled: false,
  fileRecordingsEnabled: false,
  fileRecordingsServiceEnabled: false,
  fileRecordingsServiceSharingEnabled: false,
  requireDisplayName: false,
  recordingType: 'jibri',
  logStats: false,
  startAudioMuted: 9,
  startVideoMuted: 9,
  enableUserRolesBasedOnToken: false,
  enableLayerSuspension: false,
  feedbackPercentage: 100,
  openBridgeChannel: true,
  serviceUrl: 'https://beta.meet.jit.si/http-bind',
  hosts: {
    domain: 'beta.meet.jit.si',
    muc: 'conference.beta.meet.jit.si',
  },
};
