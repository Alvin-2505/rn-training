import React, { useState } from "react";
import {View, Text, Button} from 'react-native';

const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Button 
            title = 'Increase'
            onPress={()=>{
                setCounter(counter+ 1);//setCounter here is a function which takes in a param of counter + 1 on each click;
            }}/>
            <Button
            title = 'Decrease'
            onPress={()=>{
                setCounter(counter - 1);
            }}/>
            <Text style= {{textAlign:'center', fontSize:14, fontWeight:'bold'}}> 
            Counter: </Text>
            <Text style = {{
                textAlign:'center',
                fontSize: 14,
            }}>{counter}</Text>
        </View>
    )
}
export default CounterApp;