import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {Link} from 'expo-router';
import tw from 'twrnc'


export default function App() {
  return (
    <View style={tw ``}>
      <View style={tw`flex bg-neutral-800 `}>
        <Text style={tw`text-2xl text-white mt-10 mx-10`}>Pito guarzon 3 hola y adios</Text>
        <StatusBar style="auto" />
      </View>     
      <View style={tw `bg-neutral-300`}>
        <View>
          
        </View>
        <Link href="/profile" style={tw`flex text-cyan-500 mx-10 `}>Pito perfil</Link>
        
      </View>    
      
      
      
    </View>
    
  );
  
}

