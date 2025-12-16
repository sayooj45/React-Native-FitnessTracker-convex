import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {
    const {colors} = useTheme()
    const homeStyle = createHomeStyles(colors)
    const todayCalories = 500
    const completedColories = 250
    const remainingCalories =todayCalories-completedColories
    const progressPercent = (completedColories / todayCalories) * 100;
  return (
    <View style={homeStyle.header}>
      <View style={homeStyle.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} style={homeStyle.iconContainer}>
            <Ionicons name='barbell-outline' size={28} color={"#fff"}/>
        </LinearGradient>

        <View style={homeStyle.titleWraper}>
            <Text style={homeStyle.title}>FitTrack</Text>
            <Ionicons name='person-circle-outline' size={30} color={"#fff"}/>  
        </View>     
      </View>

     
    </View>
  )
}

export default Header