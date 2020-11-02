import React, { useState } from 'react'
import LoginScreen from './LoginScreen'
import SplashScreen from './SplashScreen'
export default function CurrentScreen ({navigation}) {
    const [currentScreen, setcurrentScreen] = useState('splash')
    setTimeout(() => {  
        setcurrentScreen('login')    
    }, 2000);
    let main = currentScreen === 'splash' ? <SplashScreen/> : <LoginScreen navigation={navigation}/>
        return main
}
