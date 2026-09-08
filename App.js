import { StyleSheet, View } from 'react-native';
import Matriz from './components/Matriz';

export default function App() {
  return (
    <View style={styles.container}>
      <Matriz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});