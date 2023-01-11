import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import Profile from '../assets/images/profile.jpeg'
import { Button, Text } from "@ui-kitten/components"
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react"; 
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default(props)=>{

    const [brain, setBrain] = useState([
        {
            id: 1,
            title: 'Migraine',
            description: "I'm experiencing a severe, throbbing pain at the front or side of the head, nausea and vomitting",
            checked: false
        },

        {
            id: 2,
            title: 'Headaches',
            description: "I'm experiencing a constant ache that affects both side of the head, as though a tight band is stretched around it",
            checked: false
        },

        {
            id: 3,
            title: 'Dizziness',
            description: "I'm feeling lightheaded/off balance and surroundings are spinning",
            checked: false
        },

        {
            id: 4,
            title: 'Chronic Pain',
            description: "I have a pain that is not going away for more than 2 weeks",
            checked: false
        }
    ]
    )
    const [stomach, setStomach] = useState( [
        {
            id: 5,
            title: 'Stomach / Abdominal Pain',
            description: "I'm experiencing a painful stomach and abdominal pains",
            checked: false
        },

        {
            id: 6,
            title: 'Vomiting',
            description: "I am throwing up",
            checked: false
        },

        {
            id: 7,
            title: 'Flactulance',
            description: "I am gossy",
            checked: false
        },

        {
            id: 8,
            title: 'Constipation',
            description: "My poop is hard that it hurts to poop",
            checked: false
        }
    ])

    const [muscles, setMuscles] = useState([
        {
            id: 9,
            title: 'Back Problems',
            description: "I'm experiencing pain on my backbones",
            checked: false
        },

        {
            id: 10,
            title: 'Knee Problem',
            description: "My knee hurt.  My knees have a cracking sound",
            checked: false
        },

        {
            id: 11,
            title: 'Wrist, hand and finger',
            description: "My wrists and fingers are weak and painful",
            checked: false
        },

        {
            id: 12,
            title: 'Neck Problems',
            description: "My Neck hurts",
            checked: false
        }
    ]
    )
    const [mouth, setMouth] = useState([
        {
            id: 13,
            title: 'Toothache',
            description: "I'm experiencing pain on my backbones",
            checked: false
        },

        {
            id: 14,
            title: 'Mouth Ulcer',
            description: "My knee hurt.  My knees have a cracking sound",
            checked: false
        },

        {
            id: 15,
            title: 'Dry Mouth',
            description: "My wrists and fingers are weak and painful",
            checked: false
        },

        {
            id: 16,
            title: 'Cold Sore',
            description: "My Neck hurts",
            checked: false
        }
    ]
    )
    const [lungs, setLungs] = useState([
        {
            id: 17,
            title: 'Cough',
            description: "I'm experiencing pain on my backbones",
            checked: false
        },

        {
            id: 18,
            title: 'Difficulty Breathing',
            description: "My knee hurt.  My knees have a cracking sound",
            checked: false
        },

        {
            id: 19,
            title: 'Asmatic',
            description: "My wrists and fingers are weak and painful",
            checked: false
        },

        {
            id: 20,
            title: 'Shortness of Breathe',
            description: "My Neck hurts",
            checked: false
        }
    ])

    const [ears, setEars] = useState([
        {
            id: 21,
            title: 'Earache',
            description: "I'm experiencing pain on my backbones",
            checked: false
        },

        {
            id: 22,
            title: 'Nosebleeds',
            description: "My knee hurt.  My knees have a cracking sound",
            checked: false
        },

        {
            id: 23,
            title: 'Sore Throat',
            description: "My wrists and fingers are weak and painful",
            checked: false
        },

        {
            id: 24,
            title: 'Hearing Loss',
            description: "My Neck hurts",
            checked: false
        }
    ])

    const [selected, setSelected] = useState('')

    let selectedStomach;
    let selectedLungs;
    let selectedBrains;
    let selectedEars;
    let selectedMouth;
    let selectedMuscles;

    return(
        <>
        <View style={styles.header}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <Image source={Profile} style={styles.image}/>
            <View style={{
                marginLeft: 10
            }}>
                <Text style={{
                    fontWeight: '800',
                    color: 'rgba(0,152,153,255)',
                    fontSize: 17

                }}>Dr. Phil</Text>
                <Text>Welcome, My Daktari got you.</Text>
            </View>
            </View>
            
            <Ionicons name="md-notifications-sharp" size={40} color="gray" />
        </View>
        <ScrollView style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <Fontisto name="doctor" size={40} color='rgba(0,152,153,255)' />
            <Text style={{marginLeft: 30}}>Let's have a look at you</Text>
            </View>
            <Text style={{
                marginTop: 20,
                fontWeight: '700',
                marginBottom: -20
            }}>Brain, Nerves & Spinal cord</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                {brain.map(brains =>{
                    return(
                        <TouchableOpacity style={styles.symptom} key={brain.id} onPress={()=>{
                            brains.checked = !brains.checked
                            

                            
                        }}>
                {brain.checked ? <View style={styles.circle}></View>: null}
                
                <Text style={{
                    color: 'red',
                    marginBottom: 5,
                    fontWeight: '700'
                }}>{brains.title}</Text>
                <Text style={{
                    fontSize: 13
                }}>{brains.description}</Text>
            </TouchableOpacity>
                    )
                })}

            </View>

            <Text style={{
                marginTop: 20,
                fontWeight: '700',
                marginBottom: -20
            }}>Stomach, Liver and GastroInternal tract</Text>
     <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                {stomach.map(brain =>{
                    return(
                        <TouchableOpacity style={styles.symptom} key={brain.id} onPress={()=>{
                            brain.checked = !brain.checked
                            console.log(brain.checked)
                            console.log(brain.title)

                            setStomach([...stomach])
                            selectedStomach = stomach.filter((name) => name.checked === true)
                            //setSelected(selectedStomach)
                            setSelected(selectedStomach)
                            console.log(selected.length)
                        }}>

                {brain.checked ==true ?  <AntDesign name="checkcircle" size={24} color="rgba(0,152,153,255)" style={styles.circle}/>: null}
               
                 
                
                <Text style={{
                    color: 'red',
                    marginBottom: 5,
                    fontWeight: '700'
                }}>{brain.title}</Text>
                <Text style={{
                    fontSize: 13
                }}>{brain.description}</Text>
            </TouchableOpacity>
                    )
                })}

            </View>

            <Text style={{
                marginTop: 20,
                fontWeight: '700',
                marginBottom: -20
            }}>Muscle, Bone and Joints</Text>
     <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                {muscles.map(brain =>{
                    return(
                        <TouchableOpacity style={styles.symptom} key={brain.id}>
                {brain.checked ? <View style={styles.circle}></View>: null}
                
                <Text style={{
                    color: 'red',
                    marginBottom: 5,
                    fontWeight: '700'
                }}>{brain.title}</Text>
                <Text style={{
                    fontSize: 13
                }}>{brain.description}</Text>
            </TouchableOpacity>
                    )
                })}

            </View>

            <Text style={{
                marginTop: 20,
                fontWeight: '700',
                marginBottom: -20
            }}>Mouth</Text>
     <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                {mouth.map(brain =>{
                    return(
                        <TouchableOpacity style={styles.symptom} key={brain.id}>
                {brain.checked ? <View style={styles.circle}></View>: null}
                
                <Text style={{
                    color: 'red',
                    marginBottom: 5,
                    fontWeight: '700'
                }}>{brain.title}</Text>
                <Text style={{
                    fontSize: 13
                }}>{brain.description}</Text>
            </TouchableOpacity>
                    )
                })}

            </View>

            <Text style={{
                marginTop: 20,
                fontWeight: '700',
                marginBottom: -20
            }}>Lung and Airway</Text>
     <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                {lungs.map(brain =>{
                    return(
                        <TouchableOpacity style={styles.symptom} key={brain.id}>
                {brain.checked ? <View style={styles.circle}></View>: null}
                
                <Text style={{
                    color: 'red',
                    marginBottom: 5,
                    fontWeight: '700'
                }}>{brain.title}</Text>
                <Text style={{
                    fontSize: 13
                }}>{brain.description}</Text>
            </TouchableOpacity>
                    )
                })}

            </View>

            <Text style={{
                marginTop: 20,
                fontWeight: '700',
                marginBottom: -20
            }}>Ear, Nose and Throat</Text>
     <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginBottom: 30
            }}>
                {ears.map(brain =>{
                    return(
                        <TouchableOpacity style={styles.symptom} key={brain.id}>
                {brain.checked ? <View style={styles.circle}></View>: null}
                
                <Text style={{
                    color: 'red',
                    marginBottom: 5,
                    fontWeight: '700'
                }}>{brain.title}</Text>
                <Text style={{
                    fontSize: 13
                }}>{brain.description}</Text>
            </TouchableOpacity>
                    )
                })}

            </View>
            
        </ScrollView>
        {selected.length === 0 ? null: <Button style={styles.button} onPress={()=>props.navigation.navigate('MySymptoms', {symptoms: selected})}>{selected.length} selected</Button>}
        
        </>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent',
        padding: 20,
    },

    header:{
        width: Dimensions.get("screen").width,
        height: 200,
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 7,
        padding: 20,
        flexDirection: 'row',
        paddingTop: StatusBar.currentHeight
    },
    image:{
        borderRadius: 10,
        width: 90,
        height: 90
    },

    symptom:{
        width: '47%',
        height: 160,
        backgroundColor: 'white',
        
        borderWidth: 1,
        borderTopColor: 'red',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        padding: 5,
        marginTop: 40
        
    },

    circle:{
        
        position: 'absolute',
        borderRadius: 30,
        right: 0,
        zIndex: 999999
    },

    button:{
        height: 55,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'rgba(0,152,153,255)',
        borderRadius: 10,
        borderColor: 'transparent',
        width: Dimensions.get("screen").width/2,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})