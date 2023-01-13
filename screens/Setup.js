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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "react-native-image-picker"
import { launchImageLibrary } from "react-native-image-picker";


export default(props)=>{
    const [gender, setGender] = useState("");
    const data = ["MALE", "FEMALE", "OTHER"];
    const {colors} = useTheme()
    const [address, setAddress] = useState('')
    const [profile, setProfile] = useState('')

    const [dob, setDob] = useState('Select your date of birth')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDob(date)
        hideDatePicker();
      };

    const symptoms = props.route.params;
    const email = symptoms.text1
    const fullName = symptoms.text2
    const phoneNumber = symptoms.text3
    const password = symptoms.text4

    const addImage = async () => {
        


        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4,3],
    quality: 1,
        });

        console.log(JSON.stringify(_image));
  if (!_image.cancelled) {
    setProfile(_image.assets[0]);
  }
      }

      const selectPhotoTapped = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.launchImageLibrary(options, (response) => {

      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.uri;
        const type = response.type;
        const name = response.fileName;
        const source = {
          uri,
          type,
          name,
        }
        console.log("Image ", source)
      }
    });
  }

    const url = 'http://192.168.0.108:3000/daktari/auth/register'

    const signUp = ()=>{
        const body = JSON.stringify({email, fullName, phoneNumber, gender, dob,address,password,profile})

        console.log(body)
        try {
            fetch(`${url}`,{
                method: 'POST',
                body: body,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
            }).then(res=>{
                if (res.ok){
                    return res.json()
                }else{
                    throw res.json()
                }
            }).then(json =>{
                console.log(json)
                props.navigation.navigate('Login')
            }).catch(err=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
        
    }
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
            <ImageBackground source={profile===''? Profile: profile} style={{width: 140, height: 140, marginLeft: 'auto', marginRight: 'auto', marginTop: 60}} imageStyle={{borderRadius: 35}}>
                <View style={styles.pictureContainer}>
                <MaterialIcons name="photo-camera" size={35} color="white" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}} onPress={selectPhotoTapped}/>
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
							setSelected={setGender}
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
                
                <TouchableOpacity onPress={showDatePicker} style={{
                    
                    width: '100%',
                    height: 50,
                    borderWidth: 1,
                    marginTop: 10,
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomColor: 'gray'
                }}>
                    <Text style={{textAlign: 'center', color: 'gray'}}>{dob.toString()}</Text>
                </TouchableOpacity>

                <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

                <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <Ionicons name="ios-location-outline" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Address</Text>
                </View>
                <Input style={styles.input} placeholder="Lal darwaja, Surat"
                onChangeText={text => setAddress(text)}
                defaultValue={address}
                
                />
                <Button style={{
                    marginTop: 100,
                    height: 60,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(0,152,153,255)',
                    borderRadius: 10,
                    marginBottom: 40,
                }} onPress={signUp}>Complete</Button>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        
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