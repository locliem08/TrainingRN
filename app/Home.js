
import React, { Component } from 'react';
import {Image,StyleSheet,View,TouchableOpacity,AsyncStorage,KeyboardAvoidingView,
  Alert,ActivityIndicator,ScrollView,Modal,ImageBackground,Text,TextInput} from 'react-native';
import {Button,Thumbnail,Container,Header,Icon,Left,Right,Body,Title} from 'native-base';
import { ifIphoneX,isIphoneX } from 'react-native-iphone-x-helper'

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      domain:'',
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
            <ImageBackground source={require('./img/bgImg1.png')} 
        style={styles.nBgr}/>
            <View style={styles.ncontain}>
              <Container>
                <Header style={{ backgroundColor: '#2E3E4F' }}>
                  <Left style={{ flex: 1 }}>
                    <Button transparent onPress={this.menu}>
                      <Icon name='menu' style={{ color: 'white' }}/>
                    </Button>
                  </Left>
                  <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                    <Title style={{ color: 'white' }}>Header</Title>
                  </Body>
                  <Right style={{ flex: 1 }}>
                    {/* <Button transparent>
                      <Icon name='menu' />
                    </Button> */}
                  </Right>
                </Header>
              </Container>
            </View>
        </View>
    );
  }
  menu = () =>{
    this.props.navigation.navigate('DrawerToggle')
  }
  
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