import { createStackNavigator } from "@react-navigation/stack";
import { Login, StartUp } from "screens/authContainer";

const LoginStack = createStackNavigator();

const AuthStack = () => {
    return (
        <LoginStack.Navigator initialRouteName={'Startup'} >
            <LoginStack.Screen name="Startup" component={StartUp} />
            <LoginStack.Screen name="Login" component={Login} />
        </LoginStack.Navigator>
    );
}

export {
    AuthStack
}

