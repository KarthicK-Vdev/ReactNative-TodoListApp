//import { StatusBar } from 'expo-status-bar';
{/* <script src="http://localhost:8097"></script> */}
{/* <script src="http://192.168.141.232:8097"></script> */}
import { useState } from 'react';
import {StyleSheet, View,  FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([])
  
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals=> [...currentCourseGoals, {text: enteredGoalText, id:Math.random().toString()}])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal)=> goal.id!==id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.mainButton}>
        <Button title="Add New Goal" color="rgb(20, 108, 91)" onPress={startAddGoalHandler}></Button>
      </View>
      {modalIsVisible && <GoalInput
       visible={modalIsVisible}
       onAddGoal={addGoalHandler}
       onCancel={endAddGoalHandler}
       />}
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals}
        renderItem={itemData =>{
          return <GoalItem 
          text={itemData.item.text}
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler}
          />
          
        }}
        keyExtractor={(item, index)=>{
          return index;
        }}
        />
             
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    backgroundColor:"rgb(18, 171, 140)",
    // paddingHorizontal:16
  },
  mainButton:{
    // display:"flex",
    alignItems:"center",
    width:350,
    paddingLeft:20,
    // marginTop:10
  },
  goalsContainer:{
    flex:5,
  },
  
});
