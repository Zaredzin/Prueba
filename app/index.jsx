import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pito guarzon 2</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}>Pito perfil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
