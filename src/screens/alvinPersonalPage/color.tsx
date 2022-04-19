import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { FlatList } from 'react-native';

const ColorApp = () => {
    const [colors, setColors] =  useState <string[]>([]);
    return (
        <View>
            <ImageBackground source={require('./backgroundImage.png')}>
            <Button 
            title = "Add a Color"
            color = "#841584"
            onPress={()=>{
                setColors ([...colors, randomRgbGenerator()]);
            }}
            />
            
            <FlatList 
            keyExtractor={color=>color}
            data={colors}
            renderItem = {({item}) => {
                return(
                <View style={{alignItems:'center', paddingBottom:100}}>
                    <View style={{ height: 100, width:100, backgroundColor: item }} />
                    <Text>{item}</Text>
                </View>
                );
            }}
            /> 
            </ImageBackground>   
        </View>
    );
};

const randomRgbGenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    //generate a random r-g-b value
    return `rgb(${red}, ${green}, ${blue})`;
    //to put as a string so as to put into the background image.
};

export default ColorApp;