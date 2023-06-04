import React from 'react';
import { Text, View } from 'react-native';


type DashboardProps = {
    route: any
}

const SignUp: React.FC<DashboardProps> = ({ route }) => {

    return (
        <View>
            <Text>SignUp screen</Text>
        </View>
    )

}
export default SignUp