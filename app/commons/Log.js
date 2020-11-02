import Reactotron from 'reactotron-react-native';

export const LogTron = (...args) => {
  Reactotron.log(args);
};

export const LogTronWarn = (tag, msg) => {
  Reactotron.warn(`${tag} =======================> ${msg}`);
};

export const LogTronError = (tag, msg) => {
  Reactotron.error(`${tag} =======================> ${msg}`);
};

export const LogConsole = (tag, msg) => {
  console.log(`${tag} =======================> ${msg}`);
};
