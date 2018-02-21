//install navigations
//npm install --save react-navigation

import React, { Component } from 'react';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';
import {Platform,Image,StyleSheet,View,Text,TouchableOpacity, Animated} from 'react-native';
import Login from './Login';
import Home from './Home';
import Regis from './Regis';
import SideMenu from './SideMenu';



// export const HomeStack = StackNavigator({
//     Manhinh_Home:{
//         screen: Home,
//         navigationOptions: {
//             header:null
//         }
//     },
//     Manhinh_InfoChild:{
//         screen: InfoChild,
//         navigationOptions: {
//             header:null
//         }
//     },
//     Manhinh_Chat:{
//         screen: Chat,
//         navigationOptions: {
//             header:null
//         }
//     },
//     Manhinh_TKB:{
//         screen: TKB,
//         navigationOptions: {
//             header:null
//         }
//     },
//     Manhinh_Camera:{
//         screen: Camera,
//         navigationOptions: {
//             header:null
//         }
//     }
    
// });

// export const NewsStack = StackNavigator({
//     Manhinh_News:{
//         screen: News,
//         navigationOptions: {
//             header:null
//         }
//     },
//     Manhinh_NewsDetail:{
//         screen: NewsDetail,
//         navigationOptions: {
//             header:null
//         }
//     },
// });

// export const NewsStack2 = StackNavigator({
//     Manhinh_News:{
//         screen: News2,
//         navigationOptions: {
//             header:null
//         }
//     },
//     Manhinh_NewsDetail:{
//         screen: NewsDetail,
//         navigationOptions: {
//             header:null
//         }
//     },
// });


//SideMenu

export const SideStack = DrawerNavigator({
    Home:{
        screen: Home,
        navigationOptions: ({navigation}) => ({
          })
    },
},
{
    drawerWidth:250,
    drawerPosition:'left',
    contentComponent: SideMenu
}
);

//DIEU HUONG NAVIGATE

export const AppStack = StackNavigator({
    Manhinh_Login:{
        screen: Login,
        navigationOptions: {
            header:null
        }
    },
    Manhinh_Regis:{
        screen: Regis,
        navigationOptions: {
            header:null
        }
    },
    Side :{
        screen: SideStack,
        navigationOptions: {
            header:null,
            animationEnabled:false
        }
    } 
},
{
    navigationOptions: {
        headerMode: 'none',
        gesturesEnabled: false
      }
});



