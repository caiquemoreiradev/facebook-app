import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AppBar from './src/components/AppBar';
import { StatusBar } from 'expo-status-bar';
import Toolbar from './src/components/Toolbar';
import Users from './src/components/Users';
import Story from './src/components/Story';
import Feed from './src/components/Feed';

const App = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" />
      <SafeAreaView style={{ flex: 1, paddingTop: 35 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppBar />

          <Toolbar />
          
          <Users />

          <Story />

          <Feed />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App;