import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    //create an array
    const friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'}
    ];

    return (
    <FlatList 
    data={friends} 
    renderItem={({item})=>{
        return <Text>{item.name}</Text>
    }} />
    );
};

const styling = StyleSheet.create({
    
});

export default ListScreen;