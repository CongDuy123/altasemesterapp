import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
    },

    item: {
        backgroundColor: '#fff',
        width: '20%',
        aspectRatio: 1/1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    itemZero: {
        backgroundColor: '#fff',
        width: '45%',
        aspectRatio: 2/1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    result: {
        flex: 4
    },

    textResult: {
        color: '#fff',
        fontSize: 30,
    }


    
})