import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = [
    'Rafael',
    'Samuel',
    'Caio',
    'João',
    'Matheus',
    'Charles',
    'Eduardo',
  ];
  function handleParticipantAdd() {
    console.log('clicou aqui mesmo');
  }

  function handleParticipantRemove(name: string) {
    console.log('voce deseja remover', name);
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
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove('teste')}
          />
        ))}
      </ScrollView>
    </View>
  );
}
