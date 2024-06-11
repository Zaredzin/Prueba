import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {Link} from 'expo-router'


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Pito guarzon 3 hola y adios</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}>Pito perfil</Link>
    </View>
  );
}

