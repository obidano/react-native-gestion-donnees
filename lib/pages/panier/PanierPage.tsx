import { StyleSheet, Text, View } from "react-native";
import AppCtrl from "../../shared/AppCtrl.tsx";
import app from "../../../App.tsx";


const PanierPage=()=>{
  const appCtrl=AppCtrl()
  return (
    <View style={styles.parent}><Text style={styles.text}>{appCtrl.panier.length}</Text></View>
  )
}

const styles=StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 50
  }

})

export default PanierPage
