import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from "@ui-kitten/components";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';  

export default(props)=>{
    const symptoms = props.route.params;
    return(
        <ScrollView style={styles.container}>
             <Text style={styles.title}>My Symptoms</Text>

             <View style={{
                marginTop: 20
             }}>
                {symptoms.symptoms?.map (symptom =>{
                    return(
                        <View style={{
                            marginTop: 20
                         }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                    <View style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: 'black'
                    }}>

                    </View>

                    <Text style={{color: 'red', fontWeight: '700', marginLeft: 20, fontSize: 18}}>{symptom?.title}</Text>
                        </View>
                    

                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 30,
                        backgroundColor: 'red',
                        
                    }}>
                        <Entypo name="cross" size={24} color="white" style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}/>
                    </View>
                </View>

                <Text style={{
                    fontSize: 13,
                    marginLeft: 30,
                    marginRight: 30
                }}>{symptom?.description}</Text>
                </View>
                    )
                })}
                

                


             </View>

             <TouchableOpacity style={{
                backgroundColor: 'red',
                width: '100%',
                height: 50,
                marginTop: 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingLeft: 90,
                paddingRight: 90
             }} onPress={()=>props.navigation.navigate('Doctors')}>
                <Text style={{
                    fontWeight: '700',
                    color: 'white',
                    fontSize: 18
                }}>Proceed</Text>
                <AntDesign name="arrowright" size={24} color="white" />
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{
                backgroundColor: 'rgba(0,152,153,255)',
                width: '100%',
                height: 50,
                marginTop: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingLeft: 90,
                paddingRight: 90
             }}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={{
                    fontWeight: '700',
                    color: 'white',
                    fontSize: 18
                }}>Add more</Text>
                
             </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        padding: 20,
        paddingTop: StatusBar.currentHeight
    },
    title:{
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(123,125,141,255)',
        textAlign: 'center'
       
    },
    
})