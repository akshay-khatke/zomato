import React from 'react';
import { Text, View } from 'react-native';


type DashboardProps = {
    route: any
}

const StartUp: React.FC<DashboardProps> = ({ route }) => {

    return (
        <View>
            <Text>Start up screen</Text>
        </View>
    )

}
export default StartUp