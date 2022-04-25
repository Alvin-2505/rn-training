import React, { useState } from "react";
import {View, Text, Button} from 'react-native';

const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Button 
            title = 'Increase'
            onPress={()=>{
                setCounter(counter + 1);//setCounter here is a function which takes in a param of counter + 1 on each click;
            }}/>
            <Button
            title = 'Decrease'
            onPress={()=>{
                !(counter - 1 < 0 ) && setCounter(counter - 1); 
                //if counter is 0, 
                //!(counter - 1 < 0) is false as 0 - 1 < 0 is true
                //! in this case is saying 0 - 1 is NOT less than 0
                //the logical AND function acts as a short circuit evaluation. hence, immediately when the first expression comes to a falsy value, it will return the first expression value and stop running the second expression. In this case, hence, when it reach 0, first expression will be a falsy result, thus, the whole expression stops and return the value of the falsy operand.
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