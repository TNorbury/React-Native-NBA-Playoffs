import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    teamName: {
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
    },
    seriesScore: {
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
    },
    seriesContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5,
        width: 350,
        backgroundColor: '#eeeeee',
    },
    roundContainer: {
        alignItems: 'center',
    },
    headerBar: {
        height: 50,
        elevation: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        marginBottom: 20,
    },
});
