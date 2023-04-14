import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styless.container}>
    <TextInput>Email</TextInput>
    <TextInput>Senha</TextInput>
    <Text style={styless.paragraph2}>
      Forgot your Password?
      </Text>
    </View>
    
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

   paragraph2: {
    color:'white',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
