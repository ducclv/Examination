import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginLeft: 25,
    },
    title: {
        marginTop: 5,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    infor: {
        backgroundColor: 'violet',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 150,
    },
    home: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    setting: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
}
);
