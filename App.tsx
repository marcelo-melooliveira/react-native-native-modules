import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  NativeModules,
} from 'react-native';

interface NativeModuleType {
  CounterModule: {
    createCounterEvent: (user: String, callback: any) => {};
    createCounterPromise: () => Promise<string>;
  };
  OpenActivityModule: {
    openActivityEvent: () => Promise<void>;
  };
}
const {CounterModule, OpenActivityModule} = NativeModules as NativeModuleType;

const App = () => {
  const showAlert = (msg: string) =>
    Alert.alert('Alert Title', msg, [
      {
        text: 'Ok',
      },
    ]);

  const nativeModuleEvent = () => {
    CounterModule.createCounterEvent('Marcelo', (res: string) =>
      showAlert(res),
    );
  };

  const nativeModulePromise = async () => {
    try {
      showAlert(await CounterModule.createCounterPromise());
    } catch (e) {
      console.log(e);
    }
  };

  const openActivity = () => {
    OpenActivityModule.openActivityEvent();
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => nativeModuleEvent()}>
        <Text style={styles.TextButton}>Event Button</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => nativeModulePromise()}>
        <Text style={styles.TextButton}>Promise</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={() => openActivity()}>
        <Text style={styles.TextButton}>Open Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    height: 65,
    width: '80%',
    backgroundColor: 'skyblue',
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  TextButton: {
    color: '#4e4e50',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
