import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {} from 'react-native-gesture-handler';

const Setting = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.boxtop}>
        <View style={styles.setting}>
          <Text style={styles.txtsetting}>تنظیمات</Text>
        </View>
        <View>
          <View style={styles.viewnotiv}>
            <Text>نوتیفیکیشن</Text>
            <View style={styles.btnon}>
              <Text>غیرفعال</Text>
              <View
                style={styles.viewcrical}>
                <View style={styles.crical} />
              </View>
            </View>
          </View>
          <View style={styles.viewnotiv}>
            <Text>حالت تاریک</Text>
            <View style={styles.btnon}>
              <Text>غیرفعال</Text>
              <View
                style={styles.viewcrical}>
                <View style={styles.crical} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewbottom}>
      <TouchableOpacity style={styles.btnright}>
          <Image
            style={{backgroundColor: '#ebf4f8', width: 30, height: 30}}
            source={require('./assets/img/2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnlist}>
          <Text style={styles.txtbtn}>مشاهد لیست تجهیزات</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.btnleft}>
          <Image
            style={{
              backgroundColor: '#ebf4f8',
              width: 25,
              height: 25,
            marginLeft:10
            }}
            source={require('./assets/img/icon/home.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  boxtop: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  setting: {
    width: '78%',
    height: 40,
    backgroundColor: '#2b2f70',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 7,
  },
  txtsetting: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  viewnotiv: {
    width: 330,
    height: 43,
    backgroundColor: '#e8f2f8',
    borderRadius: 8,
    margin: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewbottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnleft: {
    backgroundColor: '#ebf4f8',
    width: 57,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
  },
  btnright: {
    backgroundColor: '#fff',
    width: 57,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  btnlist: {
    width: 200,
    height: 47,
    alignSelf: 'center',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  txtbtn: {
    color: '#2b2f70',
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnon: {flexDirection: 'row',
   alignItems: 'center'},
   viewcrical:{
    width: 60,
    height: 30,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
     crical: {
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
});
