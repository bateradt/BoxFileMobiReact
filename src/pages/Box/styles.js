import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 30,
        backgroundColor: "#36393E",
    },

    log: {
        alignSelf: "center",
        alignItems: 'center'
    },

    input:{
        height: 48,
        borderWidth: 1,
        borderColor:"#DDD",
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 30,
        color:"#FFF"
    },

    boxTitle:{
        fontSize: 22,
        marginTop: 50,
        alignItems:"baseline",
        color:"#FFF",
        fontWeight: "bold",
        textAlign: "center"
    },

    separator: {
        height: 1,
        backgroundColor: "#EEE"
    },

    fileInfo: {
        flexDirection:"row",
        alignItems:"center"

    },

    list:{
        fontSize: 16,
        color: "#333"
    },

    fileDate: {
        fontSize: 16,
        color: "#333"
    },

    filteTitle: {
        fontSize: 16,
        color: "#333"
    },

    text:{
        height: 48,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 2,
        alignItems:"center",
        color:"#FFF"
    },

    button:{
        height: 48,
        borderRadius: 4,        
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#7159c1",
        justifyContent:"center",
        alignItems:"center"
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color:"#FFF"
    },

    fab: { 
        position: 'absolute', 
        width: 56, 
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 20, 
        backgroundColor: '#03A9F4', 
        borderRadius: 30, 
        elevation: 8 
        }, 
        fabIcon: { 
          fontSize: 40, 
          color: 'white' 
        }

});

export default styles;