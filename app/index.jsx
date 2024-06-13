import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {Link} from 'expo-router';
import tw from 'twrnc'
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={tw ``}>
      <View style={tw`flex mt-20 bg-neutral-800 pb-2 `}>
        <Text style={ tw`font-pblack text-center text-4xl text-white mt-10 mx-10 `}>Iniciar sesión</Text>
        <StatusBar style="auto" />
      </View>     
      <View style={tw `bg-neutral-300 mx-10 rounded-md justify-center`}>
        <View>
          <Text>Correo</Text>
          
        </View>
        <Link href="/profile" style={tw`flex text-cyan-500 mx-10 `}>Pito perfil</Link>
        
      </View>

      
      
      
    </View>
    
  );
  
}

