import {StyleSheet} from 'react-native';
import {vScale, hScale} from '../commons/PerfectPixel';

export const inputStyle = StyleSheet.create({
  inputStyle: {
    color: 'black',
    fontSize: hScale(15),
    
  },
  inputStyle_Register: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    width: hScale(400),
    height: vScale(35),
    marginTop: vScale(5),
  },
});
