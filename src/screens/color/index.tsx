import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorClick from '../../components/colorClick';

const COLOR_INCREMENT = 15; 

const ColorChanger= () => {
    //const [color,setColor] = useState({ red:0, green:0, blue:0 });
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const setColor = (color:string, change:number) => {
        switch (color) { 
            case 'red':
                !(red + change > 255 || red + change < 0 ) && setRed (red + change);
                return;
            case 'green':
                !(green + change > 255 || green + change < 0) && setGreen(green + change);
                return;
            case 'blue':
                (blue + change <= 255 && blue + change >= 0) && setBlue(blue + change);
                return;
            default:
                return;
    }
}
    return (
    
    <View style={{backgroundColor:'yellow', height: 750}}>
        
        <ColorClick 
        onIncrease = {()=> setColor( 'red' , COLOR_INCREMENT )}
        onDecrease = {()=> setColor( 'red' , -1 * COLOR_INCREMENT )}
        color = "Red" />
        
        <ColorClick 
        onIncrease = {()=> setColor( 'green' , COLOR_INCREMENT )}
        onDecrease = {()=> setColor( 'green' , -1 * COLOR_INCREMENT )}
        color = "Green" />
        
        <ColorClick 
        onIncrease = {()=> setColor( 'blue' , COLOR_INCREMENT )}
        onDecrease = {()=> setColor( 'blue' , -1 * COLOR_INCREMENT )}
        color = "Blue"/>
        
        <View style={{borderWidth:2,borderRadius:360 ,margin:30, alignSelf:'center',height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}} />

        <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Text style={{textAlign:'center', fontSize:17, paddingRight:10}}>{`red:`}</Text>
            <Text style={{borderWidth: 1, fontSize:17, fontWeight:'bold', paddingRight: 3}}>{` ${red}`}</Text>
        </View>

        <View style={{flexDirection:'row', alignSelf:'center', margin:10}}>
            <Text style={{textAlign:'center', fontSize:17, paddingRight:10}}>{`green:`}</Text>
            <Text style={{borderWidth: 1, fontSize:17, fontWeight:'bold', paddingRight: 3}}>{` ${green}`}</Text>
        </View>

        <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Text style={{textAlign:'center', fontSize:17, paddingRight:10}}>{`blue:`}</Text>
            <Text style={{borderWidth: 1, fontSize:17, fontWeight:'bold', paddingRight: 3}}>{` ${blue}`}</Text>
        </View>

        <TouchableOpacity style = {{backgroundColor:'red', marginTop:30, width: 150, alignSelf:'center'}}
        onPress={()=>{
            setRed(red-red);
            setBlue(blue-blue);
            setGreen(green-green)
        }}>
            <Text style={{textAlign:'center', fontSize:20, color:'white', padding: 10, borderWidth:2}}>Reset Value
            </Text>
        </TouchableOpacity>
    </View>
 );
}

export default ColorChanger;