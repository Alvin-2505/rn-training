import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import ColorClick from '../../components/colorClick';

const COLOR_INCREMENT = 15; 

const ColorChanger= () => {
    const [color,setColor] = useState({ red:0, green:0, blue:0 });
    /*const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);*/
    
    return (
    <View>
        <ColorClick 
        onIncrease = {()=> setColor({ ...color, red: color.red + COLOR_INCREMENT })}
        onDecrease = {()=> setColor({ ...color, red: color.red - COLOR_INCREMENT })}
        color = "Red" />
        <ColorClick 
        onIncrease = {()=> setColor({ ...color, green: color.green + COLOR_INCREMENT })}
        onDecrease = {()=> setColor({ ...color, green: color.green - COLOR_INCREMENT })}
        color = "Green" />
        <ColorClick 
        onIncrease = {()=> setColor({ ...color, blue:color.blue + COLOR_INCREMENT })}
        onDecrease = {()=> setColor({ ...color, blue:color.blue - COLOR_INCREMENT })}
        color = "Blue"/>
        <View style={{margin:30, alignSelf:'center',height:150, width:300, backgroundColor:`rgb(${color.red},${color.green},${color.blue})`}}/>
        <Text style={{textAlign:'center', fontSize:17}}>{`red: ${color.red}, green: ${color.green}, blue: ${color.blue}`}</Text>
    </View>
 );
}

export default ColorChanger;