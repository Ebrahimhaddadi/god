import React,{useState} from 'react'
import { View, Text,StyleSheet,Image,FlatList,TouchableOpacity } from 'react-native'





const Device = ({navigation}) => {

    const [DATA,setDATA]=useState([
        {
         id:1,
         code:"340290",
         codedivice:"24394038",
         modle:"سی سی او",
         manufacturer:"فراوان",
         status:false
        },
        {
            id:2,
            code:"340290",
            codedivice:"24394038",
            modle:"سی سی او",
            manufacturer:"فراوان",
            status:true
           }
    ])

    const renderItem = ({ item }) => (
        <View style={styles.item}>
        <Text style={styles.txtfirstinfo}>اطلاعات اولیه دستگاه</Text>
        <View style={styles.viewcode}>
        <Text style={styles.code}>کد:{item.code}</Text>
        <Text style={styles.code}>کد دستگاه:{item.codedivice}</Text>
        </View>
           <View style={styles.viewmodle}>
               <Text>مدل:{item.modle}</Text>
               <Text>شرکت سازنده:{item.manufacturer}</Text>
           </View>    
           <Text style={styles.status}>وضعیت:{DATA.status ? <Text>غیرفعال</Text> : <Text>فعال</Text>}</Text>
        </View>
      );
    return (
        <View style={styles.main}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.iconheader} source={require("./assets/img/icon/icon.jpg")}/> 
        </TouchableOpacity>
           
        </View>
        <View style={{justifyContent:"center",
        alignItems:"stretch"}}>
           <View style={styles.info}>
             <View style={styles.image1}>
             </View>
             <View>
                  <Text style={styles.namedivice}>نام دستگاه:مانومتر</Text>
                  <Text style={styles.catgory}>دسته بندی :تردمیل</Text>
              </View>
           </View>
           <FlatList
               data={DATA}
               renderItem={renderItem}
               keyExtractor={item=>item.id}
           />
           <View style={styles.addbtn}>
             <Text style={styles.txtadd}>تایید و اضافه کردن</Text>
           </View>
           <View style={styles.viewlist}>
               <Text style={styles.txtlist}>مشاهده لیست تجهیزات</Text>
           </View>
           </View>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#fbf4f8",
        
    },
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
    info:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:10,
        marginRight:60

    },
    image1:{
        width:106,
        height:95,
        borderRadius:10,
        backgroundColor:"#fff"
    },
    namedivice:{
        fontSize:19,
        color:"#2b2f70",
        fontWeight:"bold",
        marginRight:20
    },
    catgory:{
        color:"#adaeaf",
        marginRight:20,
    },
    item:{

      backgroundColor:"#fff",
      width:354,
      height:161,
      alignSelf:"center",
      marginTop:5,
      borderRadius:10,
      justifyContent:"space-evenly",


    },
    txtfirstinfo:{
        color:"#2b2f70",
        fontSize:18,
        fontWeight:"bold",
        marginLeft:35
    },
    viewcode:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
    viewmodle:{
        flexDirection:"row",
        justifyContent:"space-around", 
    },
    code:{
        color:"#2b2f70",
        fontSize:15,
    },
    status:{
    marginLeft:35,
    color:"#2b2f70",
    fontSize:15,
    },
    addbtn:{
       width:339,
       height:51,
       backgroundColor:"#2b2f70",
       alignSelf:"center",
       justifyContent:"center",
       alignItems:"center", 
       borderRadius:8,
       marginTop:10
    },
viewlist:{
width:298,
height:39,
backgroundColor:"#fff",
alignSelf:"center",
alignItems:"center",
justifyContent:"center",
borderRadius:8,
marginTop:20
},
txtadd:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20
},
txtlist:{
    color:"#2b2f70",
    fontWeight:"bold",
    fontSize:20

}

})

export default Device
