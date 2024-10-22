import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from 'expo-router';

const Login = () => {
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const navigation = useNavigation()
  return (
    <View style={styles.Back}>

   <SafeAreaView style={tw`flex`,styles.Back}>
    <View>
        <TouchableOpacity style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 w-10`} onPress={()=>{navigation.goBack()}}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={tw`flex-row justify-center`}> 
            <Image source={require('../assets/images/newcookie.png')} style={{width:200,height:200}}/>
        </View>
    </View>
   </SafeAreaView>
   <View style={tw`flex-1 bg-white px-8 pt-8`,styles.Set}>
        <View style={tw`form space-y-2`}>
                <Text style={tw`text-gray-700 ml-4`}>Email Address</Text>
                <TextInput  style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`} value={email}  onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter Email'/>

                <Text style={tw`text-gray-700 ml-4`}>Password</Text>
                <TextInput  style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl`} value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter Password' secureTextEntry/>

                <TouchableOpacity style={tw`flex items-end mb-5 pr-5`}>
                    <Text style={tw`text-gray-700 `}>Forgot Passwords ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`py-3 bg-yellow-400 rounded-xl`}>
                    <Text style={tw`font-xl font-bold text-center text-gray-700`}>
                        Login
                    </Text>
                </TouchableOpacity>
        </View>
        <Text style={tw`text-xl text-gray-700 font-bold text-center py-5`}>
            Or
        </Text>
        <View style={tw`flex-row justify-center`}>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl m-2`}>
                <Image source={require('../assets/images/Google.png')} style={tw`w-10 h-10`}/>
            </TouchableOpacity>

            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl m-2`}>
                <Image source={require('../assets/images/apple (1).png')} style={tw`w-10 h-10`}/>
            </TouchableOpacity>

            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl m-2`}>
                <Image source={require('../assets/images/Facebook.png')} style={tw`w-10 h-10`}/>
            </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center mt-2`}>
                    <Text style={tw`text-gray-500 font-semibold`}>Don't have an account ?</Text>
                    <TouchableOpacity style={tw`ml-2`} onPress={()=>{navigation.navigate('SingUp')}}>
                        <Text style={tw`font-semibold text-yellow-500`}>Sing Up</Text>
                    </TouchableOpacity>
                </View>
   </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    Back:{
        backgroundColor:'#6262df',
        paddingTop:20,
    },
    Set:{
        width:'100%',
        borderTopLeftRadius:50,
        paddingTop:30,
        borderTopRightRadius:50,
        backgroundColor:'white',
        paddingLeft:30,
        padding:30,
    }
})