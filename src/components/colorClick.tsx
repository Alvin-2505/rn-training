import React from 'react';
import {View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native';

const ColorClick = ({ color, onIncrease, onDecrease }:{
    color:string,
    onIncrease:Function, 
    onDecrease:Function,
    

}) => {

 return (
    <View>
        <View style={{marginTop:10}}>
            <Text style = {{
                color: `${(color).toLowerCase()}`,
                textAlign:'center', 
                fontWeight:'bold', 
                fontSize:20}}>
                    {color}
            </Text>
        </View>
        <View>
            <TouchableOpacity 
            //disabled = {onIncrease()>=30?true:false}
            
            style = {{ 
            borderWidth:2, 
            width: 200, 
            alignSelf:'center', 
            margin:15, 
            backgroundColor:'green',
            }} 
            onPress={()=>onIncrease()}>
                <Text 
                style = {{
                textAlign:'center', 
                color:'yellow'
                }}>
                    Increase
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {{
            borderWidth:2, 
            width: 200, 
            alignSelf:'center', 
            backgroundColor:'cyan'}} 
            onPress={()=>onDecrease()}>
                <Text style={{textAlign:'center'}}>Decrease</Text>
            </TouchableOpacity>
        </View>
    </View>
 );
}

export default ColorClick;