import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './Signup';
import Login from './Login';
import Main from './Main';

const Stack=createStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Main"}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Login" component={Login} options={{headerTitleAlign:'center'}} />
            <Stack.Screen name="Signup" component={Signup} options={{headerTitleAlign:'center'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation