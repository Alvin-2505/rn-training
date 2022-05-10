import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';       

type props = {
    term: string,
    onTermChange: (s: string) => void,
    onTermSubmit: () => void;
}

const SearchBar = ({term, onTermChange, onTermSubmit}: props) => {
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

export default SearchBar;