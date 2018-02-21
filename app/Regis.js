
import React, { Component } from 'react';
import {Image,StyleSheet,View,TouchableOpacity,AsyncStorage,KeyboardAvoidingView,
  Alert,ActivityIndicator,ScrollView,Modal,ImageBackground,Text,TextInput} from 'react-native';
import {Button,Thumbnail,} from 'native-base';
import { ifIphoneX,isIphoneX } from 'react-native-iphone-x-helper'

export default class Regis extends Component {

  constructor(props){
    super(props);
    this.state = {
      domain:'',
      fullName:'',
      email:'',
      password:'',
      repassword:'',
      isLoading : false,
    }
  }

  componentDidMount(){
    this._loadinitState().done(); 
  }

  _loadinitState = async () => {
    var domain = await AsyncStorage.getItem('domain');
    if(domain !== null){
      this.setState({domain});
    } 
  }

  nsetLoading = () => {
    if(this.state.isLoading === true){
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
    }
  }

  render() {
    return (
        <View style={{flex:1}}>
          <Modal
            transparent={true}
            visible={this.state.isLoading}
            onRequestClose = {()=>this.setState({isLoading:false})}
            >
                <View style={{width:'100%',height:'100%',justifyContent:'center',
                backgroundColor:'white',opacity:0.6}}/>
                <ActivityIndicator size="large" color="#193850" 
                style={{position:'absolute',alignSelf:'center',marginTop: isIphoneX? '65%':'55%'}} /> 
          </Modal>  
            <ImageBackground source={require('./img/bgImg2.png')} 
        style={styles.nBgr}/>
            <View style={styles.ncontain}>
                <View style={styles.nmid}>
                    <View style={styles.nmidcontain}>
                        <Text style={[styles.ntext,styles.ntexttitle]}>My App</Text>
                        <View style={styles.nline}>
                            <View style={styles.nlinebg}/>
                            <Text style={[styles.ntext,styles.nlinetext]}>Registration</Text>
                            <View style={styles.nlinebg}/>
                        </View>
                        <KeyboardAvoidingView style={styles.nlogin} behavior='padding'>
                          <ScrollView style={styles.aaa}>
                            <View style={styles.ninputcontain}>
                              <View style={styles.ninputbg}/>
                              <TextInput 
                              placeholder='Full Name' 
                              placeholderTextColor='white' 
                              underlineColorAndroid='rgba(0,0,0,0)'
                              onChangeText = {(fullName)=> this.setState({fullName})}
                              value={this.state.fullName}
                              style={[styles.ntext,styles.ninput]}/>
                            </View>
                            <View style={styles.ninputcontain}>
                              <View style={styles.ninputbg}/>
                              <TextInput 
                              placeholder='Email Address' 
                              placeholderTextColor='white' 
                              underlineColorAndroid='rgba(0,0,0,0)'
                              onChangeText = {(email)=> this.setState({email})}
                              value={this.state.email}
                              style={[styles.ntext,styles.ninput]}/>
                            </View>
                            <View style={styles.ninputcontain}>
                              <View style={styles.ninputbg}/>
                              <TextInput
                                secureTextEntry={true}
                              placeholder='● ● ● ● ● ●' 
                              placeholderTextColor='white' 
                              underlineColorAndroid='rgba(0,0,0,0)'
                              value={this.state.password}
                              onChangeText = {(password)=> this.setState({password})}
                              style={[styles.ntext,styles.ninput]}/>
                            </View>
                            <View style={styles.ninputcontain}>
                              <View style={styles.ninputbg}/>
                              <TextInput
                                secureTextEntry={true}
                              placeholder='● ● ● ● ● ●' 
                              placeholderTextColor='white' 
                              underlineColorAndroid='rgba(0,0,0,0)'
                              value={this.state.repassword}
                              onChangeText = {(repassword)=> this.setState({repassword})}
                              style={[styles.ntext,styles.ninput]}/>
                            </View>
                            <Button full style={styles.nbuttonMain} onPress={this.register}>
                              <Text style={[styles.ntext]}>Register</Text>
                            </Button>
                          </ScrollView>
                        </KeyboardAvoidingView>
                        <Text style={[styles.ntext,styles.nor]}>or</Text>
                        <View style={styles.nline}>
                            <View style={styles.nlinebg}/>
                            <Text style={[styles.ntext,styles.nlinetext]}>Register with</Text>
                            <View style={styles.nlinebg}/>
                        </View>
                        <View style={styles.nsocial}>
                          <TouchableOpacity>
                            <Thumbnail style={styles.nthumnai} source={require('./img/icoGoogle.png')} />
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Thumbnail style={styles.nthumnai} source={require('./img/icoTwitter.png')} />
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Thumbnail style={styles.nthumnai} source={require('./img/icoFacebook.png')} />
                          </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.nbot}>
                    <View style={styles.nbotcontain}>
                        <Button full style={styles.nbutton} onPress={this.login}>
                            <Text style={[styles.ntext,styles.ntextbot]}>Log in</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    );
  }
  
  register = async () => {
    if(this.state.fullName==='')
    {
      Alert.alert('','Vui lòng nhập full name');
      return;
    }
    if(this.state.email==='')
    {
      Alert.alert('','Vui lòng nhập email');
      return;
    }
    if(this.state.password==='')
    {
      Alert.alert('','Vui lòng nhập mật khẩu');
      return;
    }
    if(this.state.repassword==='')
    {
      Alert.alert('','Vui lòng nhập lại mật khẩu');
      return;
    }
    this.nsetLoading();
    var domain = await AsyncStorage.getItem('domain');
    if(domain===null)
      domain='';
    fetch( domain + 'api/PrototypeMobileApp/server/api/users/',
    {
      method:'POST',
      headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
        fullName: this.state.fullName
      })
    })
    .then((response)=>response.json())
    .then((res)=>{
      this.nsetLoading();
        if(res.status === 1){
          AsyncStorage.setItem('email',this.state.email);
          AsyncStorage.setItem('userid',res.id.toString());
          AsyncStorage.setItem('fullName',this.state.fullName);
          setTimeout(() => {
            Alert.alert(
              'Thông báo','Đăng ký thành công',
              [
                {text: 'OK', onPress: () => this.props.navigation.navigate('Side')}
              ],
              { cancelable: false }
            )
          }, 510);
        }
        if(res.status === 0){
          setTimeout(() => {
            Alert.alert('Cảnh báo','Email này đã tồn tại');
          }, 510);
        }
        if(res.status === -1){
          setTimeout(() => {
            Alert.alert('Cảnh báo','Đăng ký thất bại');
          }, 510);
        }
       
    })
    .catch((error)=>{
      this.nsetLoading();
      setTimeout(() => {
        Alert.alert('Lỗi kết nối server');
      }, 510);
    });
  };

  login = () => {
    this.props.navigation.goBack();
  };
 
}

const styles = StyleSheet.create({
  ncontain: {
    position:'absolute',
    left:0,
    top:0,
    right:0,
    bottom:0,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor:'transparent'
  },
  nBgr: {
    flex:1,
    opacity:0.8,
    width:null,
    height:null
  },
  nmid: {
    flex:1,
  },
  nmidcontain: {
    flex:1,
    flexDirection:'column',
    marginLeft:'10%',
    marginRight:'10%',
    justifyContent:'center',
    alignItems:'center',
    ...ifIphoneX({
      marginTop: 50
    })
  },
  nbot: {
    backgroundColor:'#2E3E4F',
    ...ifIphoneX({
      height: 70
    },{ height:50})
  },
  nbotcontain: {
    flex:1,
    flexDirection:'row',
  },
  nbutton: {
    flex:1,
    height:50,
    backgroundColor:'#2E3E4F',
  },
  ntext: {
    fontSize:16,
    color:'white'
  },
  ntextbot: {
    fontSize: 14,
  },
  ntexttitle: {
    fontSize:40,
    marginBottom:15
  },
  nline: {
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  nlinetext: {
    margin:12
   },
  nlinebg: {
    height:1.5,
    backgroundColor:'white',
    flex:0.5
   },
  nsocial: {
    flexDirection:'row',
    justifyContent:'center',
  },
  nthumnai: {
    margin:5
  },
  nor: {
   marginBottom:10,
   marginTop:18
  },
  nlogin: {
   width:'100%',
  },
  ninputcontain:{

  },
  ninput: {
   padding:11,
   textAlign:'center',
   marginBottom:14,
   position:'absolute',
   left:0,
   top:0,
   right:0,
   bottom:0
  },
  ninputbg:{
    backgroundColor:'white',
    height:46,
    width:'100%',
    marginBottom:14,
    opacity:0.2
  },
  nbuttonMain:{
    backgroundColor:'#239F86'
  }
});