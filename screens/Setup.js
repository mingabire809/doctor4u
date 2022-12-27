import { Text, Input, Button } from "@ui-kitten/components"
import { ScrollView, StyleSheet, StatusBar, View, ImageBackground, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Profile from '../assets/images/profile.jpeg'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";  
import {SelectList} from "react-native-dropdown-select-list";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';  

export default(props)=>{
    const [selected, setSelected] = useState("");
    const data = ["MALE", "FEMALE", "OTHER"];
    const {colors} = useTheme()
    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <Text style={{
                fontSize: 24,
                fontWeight: "700",
                color: 'rgba(0,152,153,255)'
            }}>Set up your profile</Text>
            <Text style={{fontSize: 16, marginTop: 10}} appearance="hint">Update your profile to connect to your doctor with better impression.</Text>
            <ImageBackground source={Profile} style={{width: 140, height: 140, marginLeft: 'auto', marginRight: 'auto', marginTop: 60}} imageStyle={{borderRadius: 35}}>
                <View style={styles.pictureContainer}>
                <MaterialIcons name="photo-camera" size={35} color="white" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}}/>
                </View>
            </ImageBackground>

            <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <Feather name="users" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Gender</Text>
                </View>
                <SelectList
							setSelected={setSelected}
							data={data}
							search={false}
							boxStyles={{ borderRadius: 5}}
							inputStyles={{color: colors.text}}
							arrowicon={<FontAwesome name="chevron-down" size={12} color={colors.text} />}
							dropdownTextStyles={{color: colors.text}} 
							
						/>

            <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <FontAwesome5 name="calendar" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Calendar</Text>
                </View>
                <Input style={styles.input} placeholder="12 September, 1999"/>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <Ionicons name="ios-location-outline" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Address</Text>
                </View>
                <Input style={styles.input} placeholder="Lal darwaja, Surat"/>
                <Button style={{
                    marginTop: 100,
                    height: 60,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(0,152,153,255)',
                    borderRadius: 10,
                    marginBottom: 10,
                }} onPress={()=>props.navigation.navigate("Root")}>Complete</Button>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'transparent'
    },
    arrowContainer:{
        width: 40,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginTop: 30
    },
    pictureContainer:{
        backgroundColor: 'rgba(0,152,153,255)',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 100,
        marginTop: -10
    },
    input:{
        borderBottomColor: 'gray',
        
        backgroundColor: 'transparent'
    },
})