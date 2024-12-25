import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bgImage: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 5,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
    },

    button: {
        backgroundColor: 'gray',
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        borderRadius: 10,
        padding: 10,

    }


})

export default styles;