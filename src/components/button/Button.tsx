import React from 'react';
import { Text, View } from 'react-native';


type DashboardProps = {
    route: any
}

const Button: React.FC<DashboardProps> = ({ route }) => {

    return (
        <View>
            <Text>Button component screen</Text>
        </View>
    )

}
export default Button