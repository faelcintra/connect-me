import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1, backgroundColor:'#131016',padding:24
    },
  
    eventName: {
    color: '#fdfcfe',
      fontWeight:'bold',
      fontSize:24,
      marginTop:48
    },
  
    eventDate: {
      color: '#6b6b6b',
      fontSize:16
    },

    input: {
      backgroundColor: '#1f1e25',
      height:56,
      color:'#fdfcfe',
      borderRadius:5,
      padding: 16,
      fontSize: 16
    },

    buttonText: {
      color:"#FAFAFA",
      fontSize: 36
    },

    buttonContainer: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor:"#31CF67",
      justifyContent:'center',
      alignItems:'center',
    },
  })