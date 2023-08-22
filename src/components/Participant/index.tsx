import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'

export function Participant () {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>Fael Cintra</Text>

        <TouchableOpacity style={styles.buttonContainer} >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}