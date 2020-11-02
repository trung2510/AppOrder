import {StyleSheet} from 'react-native';
import {vScale, hScale} from '../commons/PerfectPixel';

export const btnStyle = StyleSheet.create({
  viewLogin: {
    height: vScale(55),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vScale(110),
  },
  viewRegister: {
    height: vScale(55),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vScale(40),
  },
  btnLogin: {
    width: hScale(380),
    height: vScale(55),
    backgroundColor: '#fd2950',
    borderRadius: vScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
