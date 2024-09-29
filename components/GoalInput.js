import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoaltext] = useState('');

    function goalInputhandler(enteredText){
        //console.log(enteredText)
        setEnteredGoaltext(enteredText)
      }

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoaltext('')
      }
      // console.log("rendered")
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
          <Image 
          style={styles.image}
          source={require('../assets/images/pngegg.png')}
          />
          <TextInput
          style={styles.textInput}
          placeholder="Your Course goal"
          onChangeText={goalInputhandler}
          value={enteredGoalText}
          ></TextInput>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Add goal' onPress={addGoalHandler} color="rgb(20, 108, 91)" ></Button>
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="rgb(20, 108, 91)"></Button>
            </View>
          </View>
        </View>
    </Modal>
  )
}

export default GoalInput

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgb(18, 171, 140)"
      },
      textInput:{
        borderWidth:1,
        borderColor:"#088676",
        width:"100%",
        margin:8,
        padding:12,
        color:"black",
        backgroundColor:"rgb(105, 213, 192)",
        borderRadius:6
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:"row"
      },
      button:{
        width:100,
        marginHorizontal:8,
      },
      image:{
        width:100,
        height:100,
        margin:20,
      }
})