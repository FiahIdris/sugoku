import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserScreen from './screens/UserScreen'
import GameScreen from './screens/GameScreen'
import FinishGame from './screens/FinishGame'
import { Provider } from 'react-redux'
import store from './stores/index'


export default function App() {

  const Stack = createStackNavigator()

  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ UserScreen } />
          <Stack.Screen name="Game" component={ GameScreen } />
          <Stack.Screen name="Finish" component={ FinishGame } />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
