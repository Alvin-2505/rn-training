import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    //create an array
    const friends = [
        {name: 'Friend #1' , age: 20},
        {name: 'Friend #2' , age: 21},
        {name: 'Friend #3' , age: 22},
        {name: 'Friend #4' , age: 23},
        {name: 'Friend #5' , age: 24},
        {name: 'Friend #6' , age: 24}
    ];

    return (
    <FlatList 
    data={friends}
    keyExtractor={friend => friend.name} 
    renderItem={({item})=>{
        return (
        <View style={styling.listStyle}>
            <Text style={styling.textStyling}>{item.name}, age: {item.age}</Text>
        </View>
        )
    }}
    style = {{borderTopWidth:2}}
    />
    );
};

const styling = StyleSheet.create({
    textStyling: {
        marginVertical: 20,
        fontSize: 20,
        color: '#8a2be2',
        textAlign: 'center'
    },
    listStyle: {
        borderColor:'black',
        borderStyle:'solid',
        borderBottomWidth:2,
    } 
});

export default ListScreen;