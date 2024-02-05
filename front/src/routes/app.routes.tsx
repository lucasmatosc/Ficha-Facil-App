import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from '../pages/home/index'
import { Login } from '../pages/login/index'
import { Cadastro } from '../pages/cadastro/index'
import { Pagamento } from '../pages/pagamento/index'
import  BottomRoutes  from './bottomRoutes';

const Tab = createStackNavigator();

export function Routes(){
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name = "Home" 
                component={Home} 
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name = "Login" 
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name = "Cadastro" 
                component={Cadastro}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name = "Pagamento" 
                component={Pagamento}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name = "Principal" 
                component={BottomRoutes}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}