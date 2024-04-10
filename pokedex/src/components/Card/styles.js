import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 8,
        height: 100,
        elevation: 8,
        marginVertical: 10,
    },
    info: {
        flex: 0.7,
        marginLeft: 20,
        marginTop: 15,
    },
    numero: {
        fontSize: 16,
    },
    nome: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    imageContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 120,
        height: 120,
        right: 10,
        position: 'absolute',
        top: -20
    }
}) 