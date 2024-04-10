import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    imageContainer:{
        height: 100,
    },
    image: {
        width: '100%',
        opacity: 0.1,
        height: 250,
        position: 'absolute',
        top: -150,
        resizeMode: 'cover',
    },
    titleContainer: {
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: -10,
    },
})