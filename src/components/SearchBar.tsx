import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';     
import Icon1 from 'react-native-vector-icons/Entypo';   

type props = {
    term: string,
    onTermChange: (s: string) => void,
    onTermSubmit: () => void;
}
type LocationProps = {
    location: string,
    onTermChange: (s: string) => void,
    onTermSubmit: () => void;
}

export const SearchBar = ({term, onTermChange, onTermSubmit}: props) => {
    return (
        <View style={style.backgroundStyle}>
            <Icon 
            name = 'search'
            style = {style.iconStyle}
            />
            <TextInput
            style = {style.inputStyle}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            value= {term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
            />
        </View>
        
    );
}

export const SearchLocationBar = ({location, onTermChange, onTermSubmit}: LocationProps) => {
    return (
        <View style={style.backgroundStyle}>
            <Icon1 
            name = 'location-pin'
            style = {style.iconStyle}
            />
            <TextInput
            style = {style.inputStyle}
            placeholder="Search Location Here"
            autoCapitalize="none"
            autoCorrect={false}
            value= {location}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
            />
        </View>
        
    );
}

const style = StyleSheet.create({

    backgroundStyle:{
        backgroundColor:'#D7DBDD',
        height: 50,
        borderRadius: 5,
        marginHorizontal:15,
        marginVertical: 10,
        flexDirection: 'row',
    
    },
    inputStyle:{
        flex: 1,
        padding: 5,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 30,
        padding: 5
    }
});
