import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from 'convex/react';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const AddActivity = () => {

    const {colors} = useTheme()
  
    const homeStyle = createHomeStyles(colors)

  const addActivity = useMutation(api.fitTrack.addActivity)
  const clearAll = useMutation(api.fitTrack.clearAllActivity)

  const [newTitle,setnewTitle] = useState("")
  const [newDuration,setNewDuration] = useState("")
  const [newCalories,setNewCalories] = useState("")
  const [newDate,setNewDate] = useState("")
    

    const handleAddActivity = async()=>{
        
            try {
                await addActivity({title:newTitle.trim(),duration:newDuration.trim(),calories:newCalories.trim(),date:newDate.trim()})
                setnewTitle("")
                setNewCalories("")
                setNewDate("")
                setNewDuration("")
            } catch (error) {
                console.log("error adding activity",error);
                
                Alert.alert("Error","Failed to add activity")
            }
        
    }
  return (

        <LinearGradient  colors={colors.gradients.background} style={homeStyle.container}>
        <SafeAreaView style={homeStyle.safeArea}>
          <View style={homeStyle.header}>
      <View style={homeStyle.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} style={homeStyle.iconContainer}>
            <Ionicons name='create-outline' size={28} color={"#fff"}/>
        </LinearGradient>

        <View style={homeStyle.titleWraper}>
            <Text style={homeStyle.title}>Add Activity</Text>
            <Ionicons name='person-circle-outline' size={30} color={"#fff"}/>  
        </View>     
      </View>
    </View>

    <View style={homeStyle.formCard}>

  <View style={homeStyle.inputGroup}>
    <Text style={homeStyle.label}>Activity</Text>
    <TextInput
      style={homeStyle.input}
      placeholder="Walking, Cycling..."
      value={newTitle}
      onChangeText={setnewTitle}
      placeholderTextColor={colors.textMuted}
    />
  </View>


  <View style={homeStyle.inputGroup}>
    <Text style={homeStyle.label}>Duration (minutes)</Text>
    <TextInput
      style={homeStyle.input}
      placeholder="30"
      keyboardType="numeric"
      value={newDuration}
      onChangeText={setNewDuration}
      placeholderTextColor={colors.textMuted}
    />
  </View>


  <View style={homeStyle.inputGroup}>
    <Text style={homeStyle.label}>Date</Text>
    <TextInput
      style={homeStyle.input}
      placeholder="DD / MM / YYYY"
      value={newDate}
      placeholderTextColor={colors.textMuted}
      onChangeText={setNewDate}
    />
  </View>


  <View style={homeStyle.inputGroup}>
    <Text style={homeStyle.label}>Calories</Text>
    <TextInput
      style={homeStyle.input}
      placeholder="250"
      keyboardType="numeric"
      value={newCalories}
      placeholderTextColor={colors.textMuted}
      onChangeText={setNewCalories}
    />
  </View>


  <TouchableOpacity
    activeOpacity={0.85}
    onPress={handleAddActivity}
    disabled={!newTitle.trim()}
  >
    <LinearGradient
      colors={
        newTitle.trim()
          ? colors.gradients.primary
          : colors.gradients.muted
      }
      style={homeStyle.primaryButton}
    >
      <Ionicons name="add-circle-outline" size={22} color="#fff" />
      <Text style={homeStyle.primaryButtonText}>Add Activity</Text>
    </LinearGradient>
  </TouchableOpacity>
</View>

        </SafeAreaView>
        </LinearGradient>
  )
}

export default AddActivity


{/* <TouchableOpacity onPress={()=>addActivity({title:"walk",duration:"30min",date:"21/11/1998",calories:"250"})}>
        <Text>Add Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>clearAll()}>
        <Text>Clear All</Text>
      </TouchableOpacity> */}