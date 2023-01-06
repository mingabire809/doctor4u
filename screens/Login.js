import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, View } from "react-native"
import Logo from '../assets/images/logo.jpeg'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import Google from '../assets/images/google.png'
import Facebook from '../assets/images/facebook.png'

export default (props)=>{
    const [seen, setSeen] = useState(true)
    return(
        <ScrollView style={styles.container}>
           <View style={styles.logoContainer}>
            <Image source={Logo} style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}}/>
            
           </View>
           <Text style={{textAlign: 'center', fontSize: 17}} appearance="hint">Welcome to</Text>
           <Text style={{textAlign: 'center', fontSize: 22, fontWeight: '700'}}>Doctor4you</Text>

            <View style={styles.form}>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10
                }}>
                    <FontAwesome name="envelope-o" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Email</Text>
                </View>
                <Input style={styles.input} placeholder="johndoe@gmail.com"/>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    <Feather name="lock" size={24} color="rgba(0,152,153,255)" />
                    <Text appearance="hint" style={{marginLeft: 10}}>Password</Text>
                </View>
                <Input style={styles.input} placeholder="Enter password" secureTextEntry={seen} accessoryRight={()=> seen ? <AntDesign name="eyeo" size={24} color="gray" onPress={()=>setSeen(false)}/>:<Feather name="eye-off" size={24} color="gray" onPress={()=>{setSeen(true)}}/>}/>
                <Text style={{color: 'gray', textAlign: 'right'}} onPress={()=>props.navigation.navigate('Forgot')}>Forgot Password?</Text>
                <Button style={{
                    marginTop: 20,
                    height: 60,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(0,152,153,255)',
                    borderRadius: 10
                }} onPress={()=>props.navigation.navigate("Root")}>Sign In</Button>

<View style={{flexDirection: 'row', marginTop: 20}}>
    <View style={{backgroundColor: 'gray', height: 1, flex: 1, alignSelf: 'center'}} />
    <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 15 }}>Or</Text>
    <View style={{backgroundColor: 'gray', height: 1, flex: 1, alignSelf: 'center'}} />
</View>

<View style={{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: Dimensions.get("screen").width /2,
    marginLeft: 'auto',
    marginRight: 'auto',
    
}}>
    <View style={styles.socialContainer}>
        <Image source={Google} style={{height: 30, width: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}}/>
    </View>

    <View style={styles.socialContainer}>
        <Image source={Facebook} style={{height: 30, width: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}}/>
    </View>
</View>


            </View>
            <Text style={{textAlign: 'center', marginTop: 20, marginBottom: 60}} appearance="hint">Don't have an account?  <Text style={{color: 'rgba(0,152,153,255)'}} onPress={()=>props.navigation.navigate("SignIn")}>Create New</Text></Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        padding: 10,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'transparent'
    },

    logoContainer:{
        width: 280,
        height: 280,
        borderRadius: 210,
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100
    },
    form:{
        marginTop: 100,
    },
    input:{
        borderBottomColor: 'gray',
        
        backgroundColor: 'transparent'
    },
    socialContainer:{
        width: 40,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10
    }
})