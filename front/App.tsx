import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes/app.routes';
import React from 'react';

export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}