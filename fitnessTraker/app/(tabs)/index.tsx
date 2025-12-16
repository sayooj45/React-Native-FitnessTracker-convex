import { createHomeStyles } from "@/assets/styles/home.styles";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type fitness = Doc<"fitTrack">

export default function Index() {

    const [editingId,setEditingId] = useState<Id<"fitTrack"> | null>(null)
  const [editTitle,setEditTitle] = useState("")
  const [editCalories,setEditCalories] = useState("")
  const [editDate,setEditDate] = useState("")
  const [editduration,setEditDuration] = useState("")
  
  const activity = useQuery(api.fitTrack.getActivity)
  console.log(activity);

  const {colors} = useTheme()

  const homeStyle = createHomeStyles(colors)

  const toggleActivity = useMutation(api.fitTrack.toggleFitTrack)
  const deleteActivity = useMutation(api.fitTrack.deleteActivity)
  const updateActivity = useMutation(api.fitTrack.updateActivity)
  const clearAllActivity = useMutation(api.fitTrack.clearAllActivity)

  const isLoading = activity === undefined

  if(isLoading){
    return <LoadingSpinner/>
  }

  const handleToggleActivity = async (id:Id<"fitTrack">) =>{
    try {
      await toggleActivity({id})
    } catch (error) {
      console.log("Error completing activity",error);
      Alert.alert("Error","Failed to complete activity")
      
    }
  }

  const handleDeleteActivity = async (id:Id<"fitTrack">)=>{
    Alert.alert("Delete Activity","Are you sure you want to delete this activity?",[
      {text:"Cencel",style:"cancel",onPress:()=>handleCancelActivity()} ,
      {text:"Delete",style:"destructive",onPress:() => deleteActivity({id})}
    ])
  }



  const handleEditActivity = (activity:fitness)=>{
    console.log("clicked");
    
    setEditTitle(activity.title)
    setEditingId(activity._id)
    setEditCalories(activity.calories)
    setEditDate(activity.date)
    setEditDuration(activity.duration)
  }
  const handleSaveActivity = async ()=>{
    if(editingId){
      try {
        await updateActivity({id:editingId,title:editTitle.trim(),duration:editduration.trim(),date:editDate.trim(),calories:editCalories.trim()})
        setEditingId(null)
        setEditTitle("")
        setEditCalories("")
        setEditDate("")
        setEditDuration("")
      } catch (error) {
        console.log("Error updating activity",error);
        Alert.alert("Error","Failed to update activity")
        
      }
    }
  }
  
  const handleCancelActivity = ()=>{
    setEditTitle("")
    setEditingId(null)
    setEditCalories("")
    setEditDate("")
    setEditDuration("")
  }

  const handleClearAll = async ()=>{
    Alert.alert(
      "Reset App",
      "This will delete All your activity permenantly. This action cannot be undone",
      [
        {
          text:"Cencel",style:"cancel"
        },
        {text:"Delete All",style:"destructive",onPress: async ()=>{
          try {
            const result =await clearAllActivity()
            Alert.alert(
              "App Reset",
              "Your app has been reset"
            )
          } catch (error) {
            console.log("Error deleting all activity",error);
            Alert.alert("Error","Failed to reset app")
            
          }
        }},
        
        
      ]
    )
  }
  
  
  const renderActivity = ({item}:{item:fitness}) =>{

    const isEditing = editingId === item._id

    return(
      <View style={homeStyle.activityItemWrapper}>
        <View style={homeStyle.clearWraper}>
          <Text style={homeStyle.clear} onPress={()=>handleClearAll()}>Reset App </Text>
        </View>
        {
          isEditing ?(
               <View style={homeStyle.formCard}>
            
              <View style={homeStyle.inputGroup}>
                <Text style={homeStyle.label}>Activity</Text>
                <TextInput
                  style={homeStyle.input}
                  placeholder="Walking, Cycling..."
                  value={editTitle}
                  onChangeText={setEditTitle}
                  placeholderTextColor={colors.textMuted}
                />
              </View>
            
            
              <View style={homeStyle.inputGroup}>
                <Text style={homeStyle.label}>Duration (minutes)</Text>
                <TextInput
                  style={homeStyle.input}
                  placeholder="30"
                  keyboardType="numeric"
                  value={editduration}
                  onChangeText={setEditDuration}
                  placeholderTextColor={colors.textMuted}
                />
              </View>
            
            
              <View style={homeStyle.inputGroup}>
                <Text style={homeStyle.label}>Date</Text>
                <TextInput
                  style={homeStyle.input}
                  placeholder="DD / MM / YYYY"
                  value={editDate}
                  placeholderTextColor={colors.textMuted}
                  onChangeText={setEditDate}
                />
              </View>
            
            
              <View style={homeStyle.inputGroup}>
                <Text style={homeStyle.label}>Calories</Text>
                <TextInput
                  style={homeStyle.input}
                  placeholder="250"
                  keyboardType="numeric"
                  value={editCalories}
                  placeholderTextColor={colors.textMuted}
                  onChangeText={setEditCalories}
                />
              </View>
            
            
              <TouchableOpacity activeOpacity={0.85} onPress={handleSaveActivity}>
                <LinearGradient
                  colors={colors.gradients.primary}
                  style={homeStyle.primaryButton}
                >
                <Ionicons name="save-outline" size={22} color="#fff" />
              <Text style={homeStyle.primaryButtonText}>Save Activity</Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>
          ):(
                  <LinearGradient
        colors={colors.gradients.surface}
        style={homeStyle.activityItem}
        start={{x:0,y:0}}
        end={{x:1,y:1}}>
          <TouchableOpacity style={homeStyle.checkbox}
          activeOpacity={0.7}
          onPress={()=>handleToggleActivity(item._id)}>
            <LinearGradient 
            colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}
            style={[
              homeStyle.checkboxInner,
              {borderColor:item.isCompleted ? "transparent" :colors.border}
            ]}>
              {item.isCompleted && <Ionicons name="checkmark" size={18} color={"#fff"}/>}
            </LinearGradient>
          </TouchableOpacity>

          <View style={homeStyle.activityItems}>

  <View style={homeStyle.activityIcon}>
    {item.title.toLowerCase() === "walk" ? (
      <Ionicons name="walk" size={28} color={colors.primary} />
    ) : (
      <Ionicons name="bicycle" size={28} color={colors.primary} />
    )}
  </View>


  <View style={homeStyle.activityTextBlock}>
    <Text
      style={[
        homeStyle.activityText,
        item.isCompleted && homeStyle.completedText,
      ]}
    >
      {item.title}
    </Text>

    <Text
      style={[
        homeStyle.activityDate,
        item.isCompleted && homeStyle.completedSubText,
      ]}
    >
      {item.duration} min
    </Text>
  </View>


  <View >
   <View style={homeStyle.icons}>
     <TouchableOpacity onPress={()=>{handleEditActivity(item)}}>
      <Ionicons name="create-outline" size={24} color="#1d4ed8" style={{marginBottom:20,paddingHorizontal:5}}/>
     </TouchableOpacity>
    <TouchableOpacity onPress={()=> handleDeleteActivity(item._id)}>
       <Ionicons name="trash-outline" size={24} color="#ef4444" style={{marginBottom:20,paddingHorizontal:5}}/>
    </TouchableOpacity>
   </View>

    
    <View style={homeStyle.activityMeta}>
    <MaterialCommunityIcons
      name="fire"
      size={20}
      color={colors.primary}
    />
    <Text style={homeStyle.kcalText}>{item.calories}</Text>
  </View>
  </View>
</View>

        </LinearGradient>
          )
        }
      </View>
    )
  }

  return (
    <LinearGradient  colors={colors.gradients.background} style={homeStyle.container}>
    <SafeAreaView style={homeStyle.safeArea}>
      <Header/>
      <FlatList 
      data={activity}
      renderItem={renderActivity}
      keyExtractor={(item)=>item._id}
      style={homeStyle.activityList}
      contentContainerStyle={homeStyle.activityListContent}
      ListEmptyComponent={<EmptyState/>}
      showsHorizontalScrollIndicator={false}/>
    </SafeAreaView>
    </LinearGradient>
  );
}
