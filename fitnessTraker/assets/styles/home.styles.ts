import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createHomeStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: "500",
      color: colors.text,
    },
    header: {
      paddingHorizontal: 24,
      paddingVertical: 30,
      paddingBottom: 24,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
        width: "100%",
    },
    titleWraper:{
      justifyContent: "space-between",
      flexDirection: "row",
      width:"80%",
      alignItems: "center",
    },
    iconContainer: {
      width: 56,
      height: 56,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    titleTextContainer: {
      flex: 1,
    },
    titlehead:{
        width:"100%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        

    },
    title: {
      fontSize: 32,
      fontWeight: "700",
    //   letterSpacing: -1,
    //   marginBottom: 4,
      color: colors.text,
    },
    subtitle: {
      fontSize: 17,
      fontWeight: "500",
      color: colors.textMuted,
    },
    progressContainer: {
      marginTop: 8,
    },
    progressBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    progressBar: {
      flex: 1,
      height: 20,
      borderRadius: 999,
      overflow: "hidden",
      backgroundColor: colors.border,
    },
    progressFill: {
      height: "100%",
      borderRadius: 999,
      minWidth:12
    },
    progressText: {
      fontSize: 16,
      fontWeight: "700",
      minWidth: 40,
      textAlign: "right",
      color: colors.success,
    },
    inputSection: {
      paddingHorizontal: 24,
      paddingBottom: 12,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "flex-end",
      gap: 16,
    },
    // input: {
    //   flex: 1,
    //   borderWidth: 2,
    //   borderRadius: 20,
    //   paddingHorizontal: 20,
    //   paddingVertical: 16,
    //   fontSize: 17,
    //   maxHeight: 120,
    //   fontWeight: "500",
    //   backgroundColor: colors.backgrounds.input,
    //   borderColor: colors.border,
    //   color: colors.text,
    // },
    inputFocused: {
      borderColor: colors.primary,
    },
    addButton: {
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: "center",
      alignItems: "center",
    },
    addButtonDisabled: {
      opacity: 0.5,
    },
    activityList: {
      flex: 1,
    },
    activityListContent: {
      paddingHorizontal: 24,
      paddingBottom: 100,
    },
    emptyListContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
    activityItemWrapper: {
      marginVertical: 12,
    },
    activityItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      // justifyContent:"space-between",
      padding: 20,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
        
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
    checkbox: {
      marginRight: 16,
      marginTop: 2,
    },
    checkboxInner: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    activityTextContainer: {
      flex: 1,
    },
    activityText: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: "500",
      marginBottom: 16,
      color: colors.text,
    },
    // activityItems:{
    //   flexDirection:"row",
    //   justifyContent:"space-between",
    //   width:"80%",
    //   alignItems:"center"
    // },
    activityDate:{
      fontSize: 14,
      lineHeight: 24,
      fontWeight: "500",
      marginBottom: 16,
      color: colors.text,
    },
    activityActions: {
      flexDirection: "row",
      gap: 12,
    },
    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    editContainer: {
      flex: 1,
    },
    editInput: {
      borderWidth: 2,
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 17,
      fontWeight: "500",
      marginBottom: 16,
      backgroundColor: colors.backgrounds.editInput,
      borderColor: colors.primary,
      color: colors.text,
    },
    editButtons: {
      flexDirection: "row",
      gap: 12,
    },
    editButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
    },
    editButtonText: {
      color: "#ffffff",
      fontSize: 14,
      fontWeight: "600",
    },
    emptyContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 80,
    },
    emptyIconContainer: {
      width: 120,
      height: 120,
      borderRadius: 60,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
    },
    emptyText: {
      fontSize: 24,
      fontWeight: "700",
      marginBottom: 8,
      color: colors.text,
    },
    emptySubtext: {
      fontSize: 17,
      textAlign: "center",
      paddingHorizontal: 40,
      lineHeight: 24,
      color: colors.textMuted,
    },

    activityItems: {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  gap: 14,
},

activityIcon: {
  width: 44,
  height: 44,
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.surface,
},

activityTextBlock: {
  flex: 1,
},

activityMeta: {
  alignItems: "center",
  gap: 2,
},

kcalText: {
  fontSize: 12,
  fontWeight: "700",
  color: "#fff",
},

completedText: {
  textDecorationLine: "line-through",
  color: colors.textMuted,
  opacity: 0.6,
},

completedSubText: {
  color: colors.textMuted,
  opacity: 0.6,
},

formCard: {
  marginTop: 20,
  padding: 18,
  borderRadius: 20,
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 8,
  elevation: 6,
},

inputGroup: {
  marginBottom: 14,
},

label: {
  fontSize: 13,
  marginBottom: 6,
  color: colors.textMuted,
  fontWeight: "600",
},

input: {
  height: 48,
  paddingHorizontal: 14,
  borderRadius: 14,
  borderWidth: 1,
  borderColor: colors.border,
  color: colors.text,
  backgroundColor: colors.backgrounds.input,
},

primaryButton: {
  height: 52,
  borderRadius: 16,
  marginTop: 10,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
},

primaryButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
},
update:{
  alignItems:"stretch"
},
icons:{
  flexDirection:"row"
},
clear:{
  color:"#fff"
},
clearWraper:{
  padding:10,
  alignItems:"flex-end"
}



  });

  return styles;
};