import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 40,
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24,
  },
});
