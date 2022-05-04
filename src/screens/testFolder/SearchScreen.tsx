import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';       


const SearchScreen = () => {
    return (
        <View style={style.background}>
            <Icon 
            name = 'search'
            />
            <TextInput
           
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>
        
    );
}

const style = StyleSheet.create({

    background:{
        backgroundColor:'grey',
        height: 50,
        borderRadius: 5,
        marginHorizontal:15
    },
    
});

export default SearchScreen;