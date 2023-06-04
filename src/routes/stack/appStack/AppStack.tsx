import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from "screens/appContainer";


const ApplicationStack = createStackNavigator();

const AppStack = () => {
    return (
        <ApplicationStack.Navigator initialRouteName={'Dashboard'}>
            <ApplicationStack.Screen name="Dashboard" component={Dashboard} />
        </ApplicationStack.Navigator>
    );
}

export {
    AppStack
}

