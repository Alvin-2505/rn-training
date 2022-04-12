import React from "react";
import { Text, View, Alert, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationNames } from "../../constants/navigation-names";
import stylePersonal from './styles';

const AlvinComponent: React.FC = () => {
    const { navigate } = useNavigation();
    return (
    <View>
        <View style={stylePersonal.personalPage}>
            <Text style={stylePersonal.titleText} >
                Welcome to my page. 
                Click on the button below to find out about me.
            </Text>
            <Button title = "Interested to find out? Push me!" 
            onPress={() => Alert.alert('Hi, my name is Alvin. This is my attempt to create a React Native Component page')}/>
        </View>
        <View>
            <Button title="Go back Home" onPress={()=>{navigate(NavigationNames.Home)}}/>
        </View>
    </View>
    );
    }

export default AlvinComponent;