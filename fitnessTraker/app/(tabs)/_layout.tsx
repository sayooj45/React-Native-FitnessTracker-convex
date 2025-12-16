import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    const {colors} = useTheme()
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor:colors.primary,
        tabBarInactiveTintColor:colors.text,
        tabBarStyle:{
            backgroundColor:colors.surface,
            borderWidth:1,
            borderTopColor:colors.border,
            height:90,
            paddingBottom:30,
            paddingTop:10
        },
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:"600"
        },
        headerShown:false
    }}>
        <Tabs.Screen name='index' 
        options={{
            title:"FitTrack",
            tabBarIcon:({color,size})=>(
                <Ionicons name='barbell-outline' size={size} color={color}/>
            )
        }}/>
        <Tabs.Screen name='AddActivity' 
        options={{
            title:"Add Activity",
            tabBarIcon:({color,size})=>(
                <Ionicons name='add-circle-outline' size={size} color={color}/>
            )
        }}/>
    </Tabs>
  )
}

export default TabsLayout