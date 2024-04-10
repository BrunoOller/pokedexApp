import { Text, View } from 'react-native'
import { darken } from 'polished'
import { styles } from './styles'

export default function Button({ tipo }) {
  return (
    <View style={[styles.button, { backgroundColor: `${darken('0.2', tipo.Cor)}` }]}>
      <Text style={styles.buttonText}>{tipo.Nome}</Text>
    </View>
  )
}
