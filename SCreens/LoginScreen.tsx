import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  // 
  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email,pass)
    .then((userCredentials: { user: any }) => {
      const user = userCredentials.user
      console.log(user.email)
    })
    .catch((error: { message: any }) => alert(error.message))
  }
  
  return (
    <KeyboardAvoidingView
    style={styles.container}
    enabled
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        inputMode={'email'}
        keyboardType={'email-address'}
        />
        <TextInput
        placeholder='Password'
        value={pass}
        onChangeText={pas => setPass(pas)}
        style={styles.input}
        secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}  >
        <Text style={[styles.buttonText, styles.buttonTextOutline]}>Register</Text>
      </TouchableOpacity>
      </View>
    
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  inputContainer:{
    width:"80%",
  },
  input:{
    paddingHorizontal:10,
    paddingVertical:15,
    marginTop:6,
    borderRadius:10,
    backgroundColor:"#fff"
  },
  buttonContainer:{
    width:"45%",
    marginTop:35
  },
  button:{
    backgroundColor:"#0782F9",
    borderRadius:10,
    marginTop:6,
    paddingVertical:10,
    paddingHorizontal:15, 
    alignItems:"center"
  },
  buttonOutline:{
    backgroundColor:"#fff",
    borderWidth:2,
    borderColor:"#0782F9"
  },
  buttonText:{
    color:"#fff",
    fontWeight:"700"
  },
  buttonTextOutline:{
    color:"#0782F9"
  }
})