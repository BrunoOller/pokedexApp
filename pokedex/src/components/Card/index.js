import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import Button from '../Button'
import { POKEMON_TYPE_COLORS } from '../../utils/colors'

export default function Card({ pokemon }) {
    return (
        <View style={
            [
                styles.container,
                { backgroundColor: `${POKEMON_TYPE_COLORS[pokemon.Tipo[0].Nome]}` }
            ]}
        >
            <View style={styles.info}>
                <Text style={styles.numero}>#{pokemon.Numero}</Text>
                <Text style={styles.nome}>{pokemon.Nome}</Text>
                <ScrollView horizontal>
                    {pokemon.Tipo.map((tipo) => (
                        <Button tipo={tipo} key={tipo.Numero} />
                    ))}
                </ScrollView>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: pokemon.Imagem }} style={styles.imagem} /> 
            </View>
        </View>
    )
}
