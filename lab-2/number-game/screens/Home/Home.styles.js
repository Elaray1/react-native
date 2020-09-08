import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#512DA8',
    minWidth: 200,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: '#512DA8',
  },
  input: {
    fontSize: 20,
    marginVertical: 50,
    height: 40,
    paddingHorizontal: 10,
    width: '70%',
    borderRadius: 5,
    borderColor: '#512DA8',
    borderWidth: 1,
  },
});
