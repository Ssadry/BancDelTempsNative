import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/home';
import Profile from '../../pages/profile';
import Services from '../../pages/services';
import Chat from '../../pages/chat';
import CustomTabScreen from '../customTabScreen/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faEnvelope, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default () => {

  return (
    <Tab.Navigator
      initialRouteName="Yoquese"
      tabBar={props => 
        <CustomTabScreen 
            state={props.state} 
            descriptors={props.descriptors}
            navigation={props.navigation}
            activeBackgroundColor="gray"
            activeTintColor="black"
            inactiveBackgroundColor="white"
            inactiveTintColor="gray"
            tabBarVisible={props.tabBarVisible}
        />}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
            title: "Home",
            tabBarIcon: () => <FontAwesomeIcon icon={faHome} size="35px"/>
        }}
      />
      <Tab.Screen name="Chat" component={Chat} 
        options={{
            title: 'Chat',
            tabBarIcon: () => <FontAwesomeIcon icon={faEnvelope} size="35px"/>,
            tabBarVisible: false
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
            title: "Profile",
            tabBarIcon: () => <FontAwesomeIcon icon={faUser} size="35px"/>
        }}
      />
      <Tab.Screen name="Services" component={Services}
        options={{
            title: "Services",
            tabBarIcon: () => <FontAwesomeIcon icon={faPlus} size="35px"/>
        }}
      />
    </Tab.Navigator>
  );
}