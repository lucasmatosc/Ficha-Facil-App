import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Exit } from '../pages/exit'
import { Menu } from '../pages/menu'
import { Fichas } from '../pages/fichas'
import { Perfil } from '../pages/perfil'
import { Ionicons } from '@expo/vector-icons'
import { History } from '../pages/history'
import { Admin } from '../pages/admin';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackPagesFichas() {
    return (
      <Stack.Navigator
        initialRouteName="Fichas"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Fichas" component={Fichas} />
        <Stack.Screen name="Histórico" component={History} />
      </Stack.Navigator>
    );
  }

export default function BottomRoutes(){
    return(
        <Tab.Navigator initialRouteName="Menu">
            <Tab.Screen 
                name = "Menu" 
                component={Menu}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}: {focused:any, size:any, color:any}) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color} />
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name = "Fichas" 
                component={StackPagesFichas}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}: {focused:any, size:any, color:any}) => {
                        if(focused){
                            return <Ionicons name='ticket' size={size} color={color} />
                        }
                        return <Ionicons name='ticket-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name = "Perfil" 
                component={Perfil} //mudar para Admin
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}: {focused:any, size:any, color:any}) => {
                        if(focused){
                            return <Ionicons name="people-circle" size={size} color={color} />
                        }
                        return <Ionicons name="people-circle-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name = "Exit" 
                component={Exit} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}: {focused:any, size:any, color:any}) => {
                        if(focused){
                            return <Ionicons name="exit" size={size} color={color} />
                        }
                        return <Ionicons name="exit-outline" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}