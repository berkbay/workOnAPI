import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "../screens/Welcome";
import Product from "../screens/Products";
import ProductDetail from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;

