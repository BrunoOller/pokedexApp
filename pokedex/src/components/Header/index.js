import { Image, Text, View } from 'react-native'
import { styles } from './styles'

const imageSource = require('../../../assets/header.jpg');

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                Pokédex
            </Text>
            <Text style={{ fontSize: 16 }}>
                Encontre seu pokemon favorito pela aqui.
            </Text>
        </View>
    </View>
  )
}