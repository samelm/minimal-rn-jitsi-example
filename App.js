import React, {useState, useEffect} from 'react';
import JitsiMeetJS from './vendor/jitsi';
import {jitsiConfig} from './jitsiConfig';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

let room;

const App: () => React$Node = () => {
  useEffect(() => {
    JitsiMeetJS.init();

    const connection = new JitsiMeetJS.JitsiConnection(null, null, jitsiConfig);

    function onConferenceJoined() {
      console.log('onConferenceJoined');
      JitsiMeetJS.createLocalTracks(['video', 'audio']).then((tracks) => {
        console.log('tracks', tracks);
      });
    }

    function onConnectionSuccess() {
      console.log('onConnectionSuccess');
      room = connection.initJitsiConference('testabigroominworld', jitsiConfig);
      room.join();
      room.on(
        JitsiMeetJS.events.conference.CONFERENCE_JOINED,
        onConferenceJoined,
      );
    }

    connection.addEventListener(
      JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
      onConnectionSuccess,
    );

    function onConnectionFailed() {
      console.log('onConnectionFailed');
    }

    connection.addEventListener(
      JitsiMeetJS.events.connection.CONNECTION_FAILED,
      onConnectionFailed,
    );

    function disconnect() {
      console.log('disconnect');
    }

    connection.addEventListener(
      JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
      disconnect,
    );
    connection.connect();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>test</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rtcView: {
    width: 350,
    height: 350,
  },
});

export default App;
