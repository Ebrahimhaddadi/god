/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import RNRestart from "react-native-restart";
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
Image,
ImageBackground,
  I18nManager,
  StatusBar,
  TouchableOpacity,
} from 'react-native';



const Home=({navigation}) =>  {
  
  return (
    <View style={styles.main}>
      <View style={styles.header}>

      </View>


<ImageBackground source={require("./assets/img/5.jpg")} style={styles.image}>
<Text style={{color:"#2B2F70",fontWeight:"bold",fontSize:20,marginRight:200,marginBottom:15}}>شرکت cco</Text>
<View style={{width:150,height:100,borderRadius:35,alignItems:"center",justifyContent:"center",position:"absolute",top:-20,right:40,justifyContent:"flex-end",alignItems:"flex-end"}}>
    <Image style={{width:70,height:70,borderRadius:35,}} source={require("./assets/img/pro.jpg")}  />
    <Text style={{color:"#2B2F70",fontWeight:"bold",fontSize:18,}}>امیررضا جولانی</Text>
</View>
<View style={{}}>
   
</View>
    
<View style={styles.main2}>
<View style={styles.info}>
<Text style={styles.textinfo}>اطلاعات اولیه کارشناس</Text>
<View style={styles.viewtext2}>
<Text style={styles.textnational}>کد ملی :1236547891</Text>
<Text style={styles.textnational}>کد پرسنلی:0123654789</Text>

</View>

<Text style={styles.textsamat}>سمت :رئیس بخش جراحی</Text>
<View style={{flexDirection:"row-reverse",alignSelf:"center",alignItems:"center",marginTop:10}}>
<Image style={{width:30,height:30}} source={require("./assets/img/1.png")}/>
<Text style={{color:"#2B2F70",fontWeight:"bold",}}>دسترسی</Text>
</View>


</View>
<View style={styles.line}/>
<View style={{marginTop:30,justifyContent:"flex-end"}}>
<TouchableOpacity style={styles.box}
onPress={()=>navigation.navigate("Refactor")}
>
  <Text style={styles.txt}>تعمیرات</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.box}>
<Text style={styles.txt}>کالیبراسیون</Text>
</TouchableOpacity>
</View>
<View style={styles.mainbotton}>

<View style={styles.iconleft}><Image style={{width:30,height:30}} source={require("./assets/img/tools.png")}/></View>
<TouchableOpacity style={styles.tools}>
  <Text>تجهیزات</Text>
</TouchableOpacity>
<View style={styles.iconright}>
<Image style={{width:30,height:30}} source={require("./assets/img/3.png")}/>

</View>
</View>
<View></View>
</View>
</ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  main2:{
    marginTop:180
  
  },
 header:{
   backgroundColor:"#F27A63",
   width:"100%",
   height:30,
   borderBottomColor:"#F6898C",
   borderBottomWidth:0.5
 },
 header2:{
   backgroundColor:"#F1625E",
   width:"100%",
   height:80,

  
 },
 info:{
   backgroundColor:"#FFFFFF",
   width:"80%",
   height:140,
   borderRadius:5,
   justifyContent:"center",
   alignSelf:"center",
   position:"absolute",
   top:-130
   
 },
 line:{
   width:"100%",
   height:4,
   backgroundColor:"#444982",
   marginTop:30,
 },
 box:{
  backgroundColor:"#2B2F70",
  width:"80%",
  height:70,
  borderRadius:5,
  alignItems:"center",
  justifyContent:"center",
  alignSelf:"center",
  marginTop:20
 
 },
 tools:{
   alignSelf:"center",
   alignItems:"center",
   justifyContent:"center",
   width:100,
   height:30,
   backgroundColor:"#fff",
   borderRadius:40
 },
 iconleft:{
   backgroundColor:"#fff",
   width:60,
   height:60,
   borderTopRightRadius:20,
   justifyContent:"center",
   alignItems:"center"
 },
 iconright:{
  backgroundColor:"#fff",
  width:60,
  height:60,
  borderTopLeftRadius:20,
  alignSelf:"center",
  alignItems:"center",
  justifyContent:"center",
},
txt:{
  fontSize:32,
  color:"#fff"
},
viewtext2:{
  flexDirection:"row-reverse",
  marginTop:10,
  
},
textnational:{
    color:"#787878",
    fontSize:12,
    marginRight:10,
    marginBottom:5
    
},
textinfo:{
  color:"#2B2F70",
marginRight:10,
fontSize:17,
fontWeight:"bold"
},
mainbotton:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-end",
    marginBottom:0,
    marginTop:50
},
textsamat:{
    color:"#787878",
    fontSize:14,
    marginRight:15
},
image:{
    flex:1,
    flexDirection:"column",
    justifyContent:"flex-end",
   width:"100%",
   height:600,
}
 
});

export default Home;
