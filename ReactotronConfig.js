import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import {APP_HOST_TRON} from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';

console.disableYellowBox = true;
// First, set some configuration settings on how to connect to the app
const reactotron = Reactotron.configure({
  name: 'TurfOn',
  host: '192.168.1.20',
  port: 9090,
})
  .setAsyncStorageHandler(AsyncStorage)
  .use(sagaPlugin())
  .useReactNative({
    asyncStorage: {ignore: ['secret']},
  })
  .use(reactotronRedux())
  .use(
    networking({
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    }),
  )
  .connect();
export default reactotron;
console.tron = Reactotron;
