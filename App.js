// import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

import './firebase';

// import AppStack from './navigation/AppStack';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import ComingSoon from './screens/ComingSoon';
import Kabadi from './screens/Kabadi';
import MyAccount from './screens/MyAccount';
import Checkout from './screens/Checkout';
import OrderDetails from './screens/OrderDetails';
import AddNewAddress from './screens/AddNewAddress';

import Realm from 'realm';

function LogoTitle() {
  return (
    <Image
      style={{width: 60, height: 60}}
      source={require('./assets/home-screen.png')}
    />
  );
}

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen name="Home" component={Kabadi} />
      <Tab.Screen name="My Impact" component={ComingSoon} />
      <Tab.Screen name="How It Works" component={ComingSoon} />
      <Tab.Screen name="My Account" component={MyAccount} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 1000);
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitle: props => <LogoTitle {...props} />,
            headerTitleAlign: 'center',
          }}>
          {showSplashScreen ? (
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
          ) : null}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ComingSoon"
            component={ComingSoon}
            options={{title: 'Recyclo'}}
          />
          <Stack.Screen
            name="Kabadi"
            component={TabNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{title: 'Register'}}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{title: 'Checkout'}}
          />
          <Stack.Screen
            name="OrderDetails"
            component={OrderDetails}
            options={{title: 'OrderDetails'}}
          />
          <Stack.Screen
            name="NewAddress"
            component={AddNewAddress}
            options={{title: 'Address Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
