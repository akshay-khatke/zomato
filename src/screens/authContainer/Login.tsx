import React from 'react';
import { Text, View } from 'react-native';


type DashboardProps = {
    route: any
}

const Login: React.FC<DashboardProps> = ({ route }) => {

    return (
        <View>
            <Text>Dashbaord screen</Text>
        </View>
    )

}
export default Login