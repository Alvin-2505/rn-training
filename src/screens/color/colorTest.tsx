import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorClick from '../../components/colorClick';

const initialValue = {red: 0, green:0, blue:0};
const COLOR_INCREMENT = 15; 
enum Color {
    RED = 'Red',
    GREEN = 'Green',
    BLUE = 'Blue'
}

const ColorChanger= () => {

    const [ colors, setColors ] = useState( initialValue );
    const { red, green, blue } = colors; //destructuring as now colors = 0,0,0; red = 0, green = 0, blue = 0
    let disableCheck: boolean = true;
    const setColor = ( color:string, change:number ) :void => {
        
        switch (color) { 
            case Color.RED:
                !(red + change > 255 || red + change < 0 ) && setColors ({...colors, red: red + change}) && !disableCheck;
                return;
            case Color.GREEN:
                !(green + change > 255 || green + change < 0) && setColors({...colors, green: green + change}) && !disableCheck;
                return;
            case Color.BLUE:
                (blue + change <= 255 && blue + change >= 0) && setColors({...colors, blue: blue + change}) && !disableCheck;
                return;
            default:
                return;
    }
};
    return (    
    
    <View style={{backgroundColor:'yellow', height: 750}}>
        
        {[Color.RED, Color.GREEN, Color.BLUE].map(item => (
        <ColorClick
         color = {item}
         onIncrease={() => setColor(item, COLOR_INCREMENT)}
         onDecrease={() => setColor(item, -1 * COLOR_INCREMENT)}
         />
        ))}
        
        <View style={{
            borderWidth:2,
            borderRadius:360 ,
            margin:30, 
            alignSelf:'center',
            height:150, 
            width:150, 
            backgroundColor:`rgb(${red},${green},${blue})`}} />

        <View style={{
            flexDirection:'row', 
            alignSelf:'center'}}>
            <Text style={{
                textAlign:'center', 
                fontSize:17, 
                paddingRight:10}}>
                    {`red:`}
            </Text>
            <Text style={{
                borderWidth: 1, 
                fontSize:17, 
                fontWeight:'bold', 
                paddingRight: 3}}>
                    {` ${red}`}
            </Text>
        </View>

        <View style={{
            flexDirection:'row', 
            alignSelf:'center', 
            margin:10}}>
            <Text style={{
                textAlign:'center', 
                fontSize:17, 
                paddingRight:10}}>
                    {`green:`}
            </Text>
            <Text style={{
                borderWidth: 1, 
                fontSize:17, 
                fontWeight:'bold', 
                paddingRight: 3}}>
                    {` ${green}`}
            </Text>
        </View>

        <View style={{
            flexDirection:'row', 
            alignSelf:'center'}}>
            <Text style={{
                textAlign:'center', 
                fontSize:17, 
                paddingRight:10}}>
                    {`blue:`}
            </Text>
            <Text style={{
                borderWidth: 1, 
                fontSize:17, 
                fontWeight:'bold', 
                paddingRight: 3}}>
                    {` ${blue}`}
            </Text>
        </View>

        <TouchableOpacity style = {{
            backgroundColor:'red', 
            marginTop:30, 
            width: 150, 
            alignSelf:'center'}}
        onPress={()=>{
            setColors(initialValue)}}>
            <Text style={{
                textAlign:'center', 
                fontSize:20, 
                color:'white', 
                padding: 10, 
                borderWidth:2}}>
                    Reset Value
            </Text>
        </TouchableOpacity>
    </View>
 );
}

export default ColorChanger;