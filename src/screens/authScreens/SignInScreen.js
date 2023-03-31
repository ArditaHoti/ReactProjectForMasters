import { Button, Icon, Text, SocialIcon, ButtonGroup } from "@rneui/base";
import {React, useState, useRef} from "react";
import { View, StyleSheet, TextInput} from "react-native";
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/style";
import * as Animatable from "react-native-animatable";

export default function SignInScreen({navigation}) {
    const[textInput2Focussed, setTextInput2Focussed] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

  return (
    <View style={styles.container}>
      <Header title="MY ACOONUT" type="arrow-left" navigation = {navigation}/>
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ ...title }}>Sign In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput style={styles.TextInput1} placeholder="Email" ref={textInput1} />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View animation={textInput2Focussed?"":"fadeInLeft"} duration = {400}>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>
          <TextInput style = {{width:"80%"}}
           placeholder="Password" ref={textInput2}
           onFocus = {() => {
            setTextInput2Focussed(false)
           }} 
           onBlur = {() => {
            setTextInput2Focussed(true)
           }}/>
          <Animatable.View animation={textInput2Focussed?"":"fadeInLeft"} duration = {400}>
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{marginRight:10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal:20, marginTop:30}}>
        <Button title = "SIGN IN"
         buttonStyle = {parameters.styledButton}
         titleStyle = {parameters.buttonTitle}
         onPress={() =>
          navigation.navigate('HomeScreen')}
           />
      </View>

      <View style= {{alignItems:"center", marginTop:15}}>
      <Text style={{...styles.text1, textDecorationLine:"underline"}}>Forgot your password ?</Text>
      </View>

      <View style= {{alignItems:"center", marginTop:30, marginBottom:30}}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>Or</Text>
      </View>

      <View style={{alignItems:"center",marginHorizontal:20, marginTop:10}}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress= {()=>{}}
        />
      </View>

      <View style={{alignItems:"center",marginHorizontal:20, marginTop:10}}>
        <SocialIcon
          title="Sign In With Gmail"
          button
          type="google"
          style={styles.SocialIcon}
          onPress= {()=>{}}
        />
      </View>

      <View style= {{marginLeft:25, marginTop:25}}>
      <Text style={{...styles.text1}}>New on FoodDelivery ?</Text>
      </View>

      <View style={{alignItems:"flex-end", marginHorizontal:20}}>
        <Button
          title={"Create an account"}
          buttonStyle = {styles.createButton}
          titleStyle = {styles.createButtonTitle}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    height: 50,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    height: 50,
  },

  SocialIcon:{
    borderRadius: 12,
    height: 50,
    width:"100%"
  },

  createButton :{
    backgroundColor:"#fff",
    alignContent: "center",
    justifyContent: "center",
    borderRadius:12,
    borderWidth:1,
    borderColor:"#ff5252",
    height:50,
    paddingHorizontal:20,

  },
  createButtonTitle:{
    color: "#ff5252",
    fontSize:16,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent: "center",
    marginTop: -3

  }
});
