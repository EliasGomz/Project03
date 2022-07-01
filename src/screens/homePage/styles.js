import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? 30 : StatusBar.currentHeight + 10,
        backgroundColor: "#ffffff",
        padding: 19,
        backgroundColor: 'red'
    },
    btn:{
        backgroundColor: "#000000",
        height: 64,
        width: 144,
        borderRadius: 50,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 19,
    },
    btn2:{
        backgroundColor: "#000000",
        height: 64,
        width: 144,
        borderRadius: 50,
        marginLeft: 15,
        marginTop: -60,
        alignItems: 'center',
        justifyContent: 'center', 
        
    },
    view:{
        width: 120,
        height: 60, 
        marginLeft: 220,
        marginTop: 25,
        paddingBottom: 20,
        paddingTop: 10,
        backgroundColor: 'green'
    },
    view1:{
        width: 120,
        height: 60, 
        marginLeft: 220,
        marginTop: 25,
        paddingBottom: 20,
        paddingTop: 10,
        backgroundColor: 'green'
    },
    text:{
        fontSize: 20,
        color: "#FFFFFF",
        fontStyle: 'italic',
    },
    text1:{
        fontSize: 17,
        fontStyle: 'italic',
    },
    container1:{
        backgroundColor: "#ffffff",
        padding: 19,
        backgroundColor: 'yellow'
    },

});

export default styles;