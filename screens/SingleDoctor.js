import { ImageBackground, StyleSheet, Dimensions, StatusBar, TouchableOpacity, View, ScrollView } from "react-native"
import Doctor1 from '../assets/images/doctor1.jpg'
import { AntDesign } from '@expo/vector-icons';
import { Text } from "@ui-kitten/components"
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Feather } from '@expo/vector-icons'; 


export default(props)=>{
    const month = [
        {
      name: 'January',
      id: 1
    },

    {
        name: 'February',
        id: 2
      },

      {
        name: 'March',
        id: 3
      },
      {
        name: 'April',
        id: 4
      },

      {
        name: 'May',
        id: 5
      },

      {
        name: 'June',
        id: 6
      },

      {
        name: 'July',
        id: 7
      },

      {
        name: 'August',
        id: 8
      },

      {
        name: 'July',
        id: 7
      },

      {
        name: 'August',
        id: 8
      },

      {
        name: 'September',
        id: 9
      },

      {
        name: 'October',
        id: 10
      },

      {
        name:  'November',
        id: 11
      },

      {
        name: 'December',
        id: 12
      }
]

const day = [
    {
        name: 'Mon',
        date: 16
    },
    {
        name: 'Tue',
        date: 17
    },
    {
        name: 'Wed',
        date: 18
    },
    {
        name: 'Thu',
        date: 19
    },
    {
        name: 'Fri',
        date: 20
    },
]

const [selected, setSelected] = useState('')
const [selectedDay, setSelectedDay] = useState('')
    return(
        <ImageBackground source={Doctor1} style={styles.container}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" style={{marginTop: 3, marginLeft: 3}}/>
            </TouchableOpacity>

            <View style={{
                justifyContent: 'flex-end',
                flex: 1,
                paddingBottom: 30
            }}>
            <View style={styles.content}>
                <View style={styles.detail}>
                    <View style={styles.circle}>
                    <Feather name="users" size={24} color="rgba(0,152,153,255)" style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto'
                    }}/>
                    </View>
                    <View>
                        <Text style={{fontSize: 17}} appearance="hint">1000+</Text>
                        <Text appearance="hint" style={{fontSize: 12}}>Patients</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.circle}>
                    <Feather name="award" size={24} color="rgba(0,152,153,255)" style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto'
                    }}/>
                    </View>

                    <View>
                        <Text style={{fontSize: 17}} appearance="hint">5 Years</Text>
                        <Text appearance="hint" style={{fontSize: 12}}>Experiences</Text>
                    </View>
                </View>
                <ScrollView style={{marginBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}} appearance="hint">
                        Dr. Jane Cooper
                    </Text>
                    <Text style={{fontWeight: '700'}} appearance="hint">Heart Surgeon - Surat Medical College Hospital</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                         <Ionicons name="ios-star-half" size={15} color="orange" />
                         <Text style={{marginLeft: 5}} appearance="hint">4.8 (25 reviews)</Text>
                    </View>

                    <Text style={{fontWeight: '700', fontSize: 16, marginTop: 5}} appearance="hint">About doctor</Text>

                    <Text appearance="hint">Dr. Jane Cooper is the most Cardiologist specialist in Dhaka Medical College Hospital at Accra.
                    She achieved several awards for her wonderful contribution in her own field. She is available for private consultation.
                    </Text>

                    <Text style={{fontWeight: '700', fontSize: 16, marginTop: 5}} appearance="hint">Working time</Text>

                    <Text appearance="hint">Mon - Fri 09.00 AM - 08.00 PM</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
                        {month.map(day =>{
                            return(
                            <Text style={{
                                color: 'gray',
                                marginRight: 16,
                                fontSize: 16,
                                fontWeight: selected === day.id ? '700': '200'
                            }} onPress={()=>setSelected(day.id)}>{day.name}</Text>
                            )
                            
                        })}
                    </ScrollView>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
                        
                        {day.map(name =>{
                            return(
                                <TouchableOpacity style={{
                                    backgroundColor: selectedDay === name.date ? 'rgba(0,152,153,255)' :'white',
                                    width: 70,
                                    height: 90,
                                    borderRadius: 10,
                                    marginRight: 25,
                                    
        
                                }} onPress={()=>setSelectedDay(name.date)}>
                                    <Text style={{textAlign: 'center', marginTop: 16, fontWeight: '700', color: selectedDay === name.date ? 'white' :'gray'}}>{name.name}</Text>
                                    <Text style={{textAlign: 'center', fontWeight: '700', color: selectedDay === name.date ? 'white' :'gray'}}>{name.date}</Text>
        
                                </TouchableOpacity>
                            )
                        })}
                        
                        
                    </ScrollView>
                </ScrollView>
            </View>

            <View style={{
                backgroundColor: 'white',
                height: 130,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <TouchableOpacity style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    backgroundColor: 'rgba(0,152,153,255)'
                }}>
                    <AntDesign name="heart" size={30} color="white" style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto'
                    }}/>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: 'gray',
                    width: 230,
                    height: 60,
                    borderRadius: 10
                }} onPress={()=>props.navigation.navigate('MakeAppointment')}>
                    <Text style={{
                        color: 'white',
                        fontWeight: '700',
                        fontSize: 16,
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        textAlign: 'center'
                    }}>Book appointment</Text>

                    
                </TouchableOpacity>
            </View>
            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        resizeMode: 'cover',
        
        paddingTop: StatusBar.currentHeight,
        
    },
    arrowContainer:{
        width: 40,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: Dimensions.get("screen").width /5,
        marginLeft: 20
    },
    content:{
        backgroundColor: 'rgba(246,246,246,255)',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height/2.6,
        
        justifyContent: 'flex-end',
        padding: 10
        
        
    },
    detail:{
        backgroundColor: 'white',
        height: 80,
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        marginTop: -30,
        borderRadius: 40,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    circle:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'lightgray'
    },
    line:{
        width: 1,
        height: 50,
        backgroundColor: 'gray'
    }
})