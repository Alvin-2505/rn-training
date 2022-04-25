import React,{useReducer} from 'react';
import {View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorClick from '../../components/colorClick';

const initialValue = {red: 0, green:0, blue:0};
const COLOR_INCREMENT = 15; 

type state = {
    red: number;
    green: number;
    blue: number;
};
type action = {
    colorToChange:string;
    amount:number;
};
const reducer = (state:state, action:action) => { 
    switch (action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0  
            ? state
            : { ...state, red: state.red +action.amount };
            
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0  
            ? state
            : { ...state, green: state.green +action.amount };
        case 'blue':    
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 
            ? state
            : { ...state, blue: state.blue + action.amount };
        case 'reset':
            return {...state, red: action.amount, green: action.amount, blue: action.amount};
        default:
            return state;
    }
};

const ColorChanger= () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const {red, green, blue } = state;
    
    return (    
    
    <View style={{backgroundColor:'yellow', height: 750}}>
        
        <ColorClick
         
         onIncrease={() => dispatch({colorToChange:'red', amount: COLOR_INCREMENT})}
         onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
         color = 'Red'
         />

        <ColorClick
         
         onIncrease={() => dispatch({colorToChange:'green', amount: COLOR_INCREMENT})}
         onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
         color = 'Green'
         />

        <ColorClick
         
         onIncrease={() => dispatch({colorToChange:'blue', amount: COLOR_INCREMENT})}
         onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
         color = 'Blue'
         /> 
        
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
            dispatch({colorToChange:'reset', amount: 0})}}>
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