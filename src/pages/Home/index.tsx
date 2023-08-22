import { Text,TextInput ,TouchableOpacity,View } from "react-native";
import {styles} from './styles'
import { Participant } from "../../components/Participant";

export function Home () {

  function handleAdd () {
    console.log('clicou aqui mesmo');
    
  }
  return ( 
    <View style={styles.container}>
      <Text style={styles.eventName}>teste</Text>
      <Text style={styles.eventDate}>Terça, 22 de agosto de 2023</Text>

      <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B" 
        keyboardType="twitter"
      />
      <TouchableOpacity  style={styles.buttonContainer} onPress={handleAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>

      <Participant/>
      <Participant/>

    </View>
  )
}
