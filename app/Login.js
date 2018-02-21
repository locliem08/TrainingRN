
import React, { Component } from 'react';
import {Image,StyleSheet,View,TouchableOpacity,AsyncStorage,KeyboardAvoidingView,
  Alert,ActivityIndicator,ScrollView,Modal,ImageBackground,Text,TextInput} from 'react-native';
import {Button,Thumbnail,} from 'native-base';
import { ifIphoneX,isIphoneX } from 'react-native-iphone-x-helper'

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      isLoading : false,
    }
  }

  componentDidMount(){
    this._loadinitState().done(); 
  }

  _loadinitState = async () => {
    var value = await AsyncStorage.getItem('email');
    AsyncStorage.setItem('domain',"http://45.77.249.151/");
    if(value !== null){
      this.setState({email:value});
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
                            <Text style={[styles.ntext,styles.nlinetext]}>Log in with</Text>
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
                        <Text style={[styles.ntext,styles.nor]}>or</Text>
                        <KeyboardAvoidingView style={styles.nlogin} behavior='padding'>
                        {/* <View style={styles.nlogin}> */}
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
                          <Button full style={styles.nbuttonMain} onPress={this.login}>
                            <Text style={[styles.ntext]}>Log in</Text>
                          </Button>
                        {/* </View> */}
                        </KeyboardAvoidingView>
                    </View>
                </View>
                <View style={styles.nbot}>
                    <View style={styles.nbotcontain}>
                        <Button full style={styles.nbutton}>
                            <Text style={[styles.ntext,styles.ntextbot]}>Forget you password?</Text>
                        </Button>
                        <Button full style={styles.nbutton} onPress={this.regis}>
                            <Text style={[styles.ntext,styles.ntextbot]}>Register a new account</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    );
  }
  
  login = async () => {
    if(this.state.email==='')
    {
      Alert.alert('','Vui lòng nhập tài khoản hoặc email');
      return;
    }
    if(this.state.password==='')
    {
      Alert.alert('','Vui lòng nhập mật khẩu');
      return;
    }
    this.nsetLoading();
    var domain = await AsyncStorage.getItem('domain');
    if(domain===null)
      domain='';
    fetch( domain + 'api/PrototypeMobileApp/server/api/users/login/'+ this.state.email +'/' + this.state.password,
    {
      method:'GET',
    })
    .then((response)=>response.json())
    .then((res)=>{
      this.nsetLoading();
        if(res.status === 1){
          AsyncStorage.setItem('email',this.state.email);
          AsyncStorage.setItem('userid',res.id.toString());
          AsyncStorage.setItem('fullName',res.fullName);
          this.props.navigation.navigate('Side');
        }
        else{
          setTimeout(() => {
            Alert.alert('Cảnh báo','Tài khoản hoặc mật khẩu không đúng');
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

  regis = () => {
    this.props.navigation.navigate('Manhinh_Regis');
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
   marginBottom:24,
   marginTop:24
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