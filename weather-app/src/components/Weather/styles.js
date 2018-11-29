import { StyleSheet } from 'react-native';
import CommonStyles from '../../styles/common';

export default CommonStyles;
export const IndexStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export const UpperStyles = StyleSheet.create({
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  fontIcon: {
    fontSize: 80,
    color: 'white',
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
export const LowerStyles = StyleSheet.create({
  lower: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
});
