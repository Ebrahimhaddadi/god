import React,{createRef,useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, TextInput,FlatList,Image } from 'react-native';
import ActionSheet from "react-native-actions-sheet";
const actionSheetRef = createRef();
const Calibration = ({navigation}) => {
    let actionSheet;
    const [DATA,setDATA]=useState([
        {},
        {},
        {},
    ])
    const renderItem=({item})=>(
        <View>
         
        </View>
    )
    return (
        <View style={styles.main}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.iconheader} source={require("./assets/img/icon/icon.jpg")}/> 
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            actionSheetRef.current?.setModalVisible();
          }}
        >
          <Text>Open ActionSheet</Text>
        </TouchableOpacity>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        />
  
        <ActionSheet ref={actionSheetRef}>
          <View style={styles.actionsheet}>
          <Text style={styles.txtaction}>تاریخ تنظیم</Text>
            <TextInput placeholder="تاریخ تنظیم" placeholderTextColor="#b5c7db" style={styles.textinput}/>
            <Text style={styles.txtaction}>تاریخ انقضا</Text>
            <TextInput placeholder="تاریخ انتقضا" placeholderTextColor="#b5c7db" style={styles.textinput}/>
            <Text style={styles.txtaction}>کنترل کیفی شرکت</Text>
            <TextInput placeholder="کنترل کیفی شرکت" placeholderTextColor="#b5c7db" style={styles.textinput}/>
            <Text style={styles.txtaction}>هزینه نهایی</Text>
            <TextInput placeholder="هزینه نهایی" placeholderTextColor="#b5c7db" style={styles.textinput}/>
            <View style={styles.line}/>
            <View style={styles.viewbottom}>
                <TouchableOpacity style={styles.btnfinaly}>
                    <Text style={styles.textfinaly}>تایید نهایی</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btncancel}>
                    <Text style={styles.textcancel}>
                    کنسل کردن
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
        </ActionSheet>
      </View>
    )
}

export default Calibration

const styles = StyleSheet.create({
    header:{
        alignItems:"center",
        width:"100%",
        height:50,
        flexDirection:"row",
       justifyContent:"flex-end",
       backgroundColor:"#fff",
    },
    iconheader:{
        marginRight:20,
        
    },
    main:{
        justifyContent: "center",
        flex: 1,
      },
      actionsheet:{
          width:"100%",
          height:430,
          flexDirection:"column",
          justifyContent:"space-around",
      },
      textinput:{
          backgroundColor:"#fff",
        width:"85%",
        alignSelf:"center",
        borderRadius:7,
        height:45,
        paddingLeft:15,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7, 
      },
      line:{
          width:"100%",
          height:2,
          backgroundColor:"#2b2f70"
      },
      viewbottom:{
          flexDirection:"row",
          justifyContent:"space-evenly",
      },
      btnfinaly:{
          width:180,
          height:43,
          backgroundColor:"#2b2f70",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:5
      },
      textfinaly:{
          color:"#fff",
          fontSize:18
      },
      btncancel:{
          width:100,
        justifyContent:"center",
    alignItems:"center",
},
textcancel:{
    color:"#2b2f70",
    fontSize:18
},
txtaction:{
    textAlign:"justify",
    marginLeft:30,
}
})
