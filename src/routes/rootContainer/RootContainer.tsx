import {
    StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from 'routes/stack/appStack/AppStack';
import { AuthStack } from 'routes/stack/authStack/AuthStack';
import { colors } from 'theme';



/**
 * This is Navigation Container Wrapper where tabs and login screen handled as per authentication 
 * 
 * @author Akshay khatke
 * @returns App Navigation 
 */

const RootContainer = () => {

    const [isLoading, setIsLoading] = useState(true);
    const isAuth = true

    useEffect(() => {
        checkAuth();
    }, []);



    const checkAuth = async () => {
        // const reqData = await local.fetch(local.keys.AUTH);

        // if (reqData) {
        //   await onLogin({...reqData, dispatch});
        // }

        setIsLoading(false);
    };



    return (
        <NavigationContainer >
            {isAuth ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default RootContainer;

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pleaseWait: {
        paddingTop: 20,
    },
    waterMarkContainer: {
        position: 'absolute',
        bottom: 25,
        alignSelf: 'center',
    },
});
