import React from 'react';
import {View, Text, Button} from 'react-native';

const ColorClick = ({ color, onIncrease, onDecrease }:{color:Object,onIncrease:Function, onDecrease:Function}) => {
 return (
    <View>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}}>{color}</Text>
        <Button title={`Increase ${color}`} onPress={()=>onIncrease()}/>
        <Button title={`Decrease ${color}`} onPress={()=>onDecrease()}/>
    </View>
 );
}

export default ColorClick;