import React, { useReducer } from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';


type State = {
    count: number;
}
const initialState: State = {
    count: 0
};
enum ActionToDo {
    Increase = 'INCREASE',
    Decrease = 'DECREASE',
    Reset = 'RESET'
};
type Action = {
    type: ActionToDo,
    payload: number
};
const increaseAction: Action = {
    type: ActionToDo.Increase,
    payload: 1
};
const decreaseAction: Action = {
    type: ActionToDo.Decrease,
    payload: -1 
};
const reset: Action = {
    type: ActionToDo.Reset,
    payload: 0
};

const reducer = (state: State, action: Action) => {
    const {type, payload} =  action;
    switch (type) {
        case ActionToDo.Increase: 
        case ActionToDo.Decrease:
            return {
                ...state, count: state.count + action.payload
            };
        case ActionToDo.Reset:
            return {
                ...state, count: state.count * action.payload
            }
        default:
            return state;
    }
}

const CounterApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <View>
            <View>
                <Button 
                title = 'Increase'
                onPress={()=>{
                    dispatch(increaseAction);
                }}/>
                <Button
                title = 'Decrease'
                onPress={()=>{
                    !(state.count - 1 < 0 ) && dispatch(decreaseAction); 
                    //if counter is 0, 
                    //!(counter - 1 < 0) is false as 0 - 1 < 0 is true
                    //! in this case is saying 0 - 1 is NOT less than 0
                    //the logical AND function acts as a short circuit evaluation. hence, immediately when the first expression comes to a falsy value, it will return the first expression value and stop running the second expression. In this case, hence, when it reach 0, first expression will be a falsy result, thus, the whole expression stops and return the value of the falsy operand.
                }}/>
            </View>
            <View>
                <Text style = {styles.counterHeader}> Counter: </Text>
                <Text style = {styles.counterCounts}> {state.count} </Text>
            </View>
            <View>
                <TouchableOpacity 
                style={styles.resetButton}
                onPress = {()=>{ 
                    dispatch(reset) }} >
                    <Text style={styles.resetButtonText}>
                    Reset to 0
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    counterHeader: {
        textAlign:'center',
        fontSize:14, 
        fontWeight:'bold',
        margin: 10,
    },
    counterCounts: {
        textAlign:'center',
        fontSize: 14,
    },
    resetButton: {
        width: 100,
        borderWidth: 2,
        marginTop: 50,
        alignSelf:'center'
    },
    resetButtonText: {
        textAlign:'center',
        fontSize:14, 
        fontWeight:'bold',
        margin: 10,
    },
});

export default CounterApp;