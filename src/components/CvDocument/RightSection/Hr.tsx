import React from "react";
import {StyleSheet, View} from "@react-pdf/renderer";

const Hr: React.FC = () =>{
  return (
    <View style={styles.container} />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#9b9b9b',
    height: 1,
    marginVertical: 15,
  }
})

export default Hr;
