import React, { Component } from 'react';
import {Image,StyleSheet,View,TouchableOpacity,ScrollView,AsyncStorage} from 'react-native';
import {Item,Badge,Text,Icon} from 'native-base';

class SideMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     ilogo: ''
    }
  }
  goitem = (screen) => () => {
      this.props.navigation.navigate(screen);
  }
  gobackitem = (screen) => () => {
    this.props.navigation.goBack();
  }
  componentDidMount(){
    this._loadinitState().done(); 
  }
  _loadinitState = async () => {
    
  }
  render() {
    return (
        <View style={styles.ncontain}>
          <View style={{ flex:1,flexDirection: 'column'}} >
          <ScrollView>
            <View style={styles.nheaderMenu}>
              {/* <Image source={this.state.ilogo === ''? require('../img/avatar.png'):{uri:this.state.ilogo}} style={styles.navatar}/> */}
            </View>
            <View style={styles.nbodyMenu}>
                <TouchableOpacity style={styles.nbtn} onPress={this.goitem('Manhinh_About')}>
                  <View style={styles.nitem}>
                    <Icon style={styles.nicon} name="plane" />
                    <View style={styles.nbodyitem}>
                      <Text style={[styles.ntext,styles.ntextbtn]}>Icon plane</Text>
                    </View>
                    <Badge primary style={styles.nbage}><Text>3</Text></Badge>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nbtn} onPress={this.goitem('News')}>
                    <View style={styles.nitem}>
                        <Icon style={styles.nicon} name="pizza"/>
                        <View style={styles.nbodyitem}>
                            <Text style={[styles.ntext,styles.ntextbtn]}>Icon pizza</Text>
                        </View>
                        <Badge success style={styles.nbage}><Text>10</Text></Badge>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nbtn} onPress={this.goitem('Manhinh_About')}>
                  <View style={styles.nitem}>
                    <Icon style={styles.nicon} name="pie" />
                    <View style={styles.nbodyitem}>
                      <Text style={[styles.ntext,styles.ntextbtn]}>Icon pie</Text>
                    </View>
                    <Badge primary style={styles.nbage}><Text>3</Text></Badge>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nbtn} onPress={this.goitem('News')}>
                    <View style={styles.nitem}>
                        <Icon style={styles.nicon} name="cart" />
                        <View style={styles.nbodyitem}>
                            <Text style={[styles.ntext,styles.ntextbtn]}>Icon cart</Text>
                        </View>
                        <Badge style={styles.nbage}><Text>10</Text></Badge>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nbtn} onPress={this.goitem('Manhinh_About')}>
                  <View style={styles.nitem}>
                    <Icon style={styles.nicon} name="paw" />
                    <View style={styles.nbodyitem}>
                      <Text style={[styles.ntext,styles.ntextbtn]}>Icon paw</Text>
                    </View>
                    <Badge style={styles.nbage}><Text>3</Text></Badge>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nbtn} onPress={this.goitem('News')}>
                    <View style={styles.nitem}>
                        <Icon style={styles.nicon} name="settings" />
                        <View style={styles.nbodyitem}>
                            <Text style={[styles.ntext,styles.ntextbtn]}>Settings</Text>
                        </View>
                        <Badge style={styles.nbage}><Text>10</Text></Badge>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  ncontain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor:'#FFFFFF'
  },
  nheaderMenu: {
    height:180,
    margin:10,
    marginBottom:-10,
    justifyContent:'center',
    alignItems:'center'
  },
  nbodyMenu: {
    flex: 1,
    marginLeft:8,
    marginRight:8
  },
  ntext: {
    color:'#193B57',
    fontWeight:'200'
  },
  ntextbtn: {
    fontSize:16
  },
  nbodyitem:{
    flex:1,
    marginLeft:16,
    paddingTop:4
  },
  linebot:{
    backgroundColor:'#193B57',
    height:1,
    width:16,
    marginLeft:14
  },
  nitem:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 6,
  },
  nbtn:{
    marginTop:10
  },
  nbage :{
    opacity:1
  },
  navatar:{
    width:120,
    height:120,
    borderRadius:60
  },
  nicon:{
    width:40,
  }
});

export default SideMenu;