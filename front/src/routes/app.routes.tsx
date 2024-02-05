import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/home'
import { Login } from '../pages/login'
import { Cadastro } from '../pages/cadastro'
import { Pagamento } from '../pages/pagamento'
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