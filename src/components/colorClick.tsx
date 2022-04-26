import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ColorClick = ({ color, onIncrease, onDecrease }:{
    color:string,
    onIncrease:Function, 
    onDecrease:Function,
}) => {
 
 return (
    <View>
        <View style={colorStyle.colorHeadingContainer}>
            <Text style = {[colorStyle.colorHeader , dynamicFontColor(color).colorHeaderFont]}>{color}</Text>
        </View>
        <View>
            <TouchableOpacity 
            //disabled = {onIncrease()>=30?true:false}
            style = {colorStyle.increaseButton} 
            onPress={()=>onIncrease()}>
                <Text style = {colorStyle.increaseButtonText}> Increase </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {colorStyle.decreaseButton} 
            onPress={()=>onDecrease()}>
                <Text style={colorStyle.decreaseButtonText}> Decrease </Text>
            </TouchableOpacity>
        </View>
    </View>
 );
}
const dynamicFontColor = (color: string) => StyleSheet.create({
    colorHeaderFont: {
        color: `${(color).toLowerCase()}`
    }
});

const colorStyle = StyleSheet.create({
    colorHeadingContainer: {
        marginTop: 10,
    },
    colorHeader: {
        //color: `${(color).toLowerCase()}`,
        textAlign:'center', 
        fontWeight:'bold',
        fontSize:20,
    },
    increaseButton: { 
        borderWidth:2, 
        width: 200, 
        alignSelf:'center', 
        margin:15, 
        backgroundColor:'green',
    },
    increaseButtonText: {
        textAlign:'center', 
        color:'yellow'
        },
    decreaseButton: {
        borderWidth:2, 
        width: 200, 
        alignSelf:'center', 
        backgroundColor:'cyan'
    },
    decreaseButtonText: {
        textAlign:'center'
    },
});



export default ColorClick;