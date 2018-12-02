import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6AA',
  },
  loadingUpper: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingLower: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  loadingText: {
    fontSize: 28,
    marginBottom: 100,
    textAlign: 'center',
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
