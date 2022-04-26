import React, { useReducer} from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type State = {
    count: number
};
const initialValue:State = {
    count: 0
};
enum ActionToDo {
    Increase = "INCREASE",
    Decrease = "DECREASE"
}
type Action = {
    type: ActionToDo,
    payload: number
}

const reducer = ( state: State, action: Action ) => {
    
    switch (action.type){
        case ActionToDo.Increase:
            return {
                ...state, count: state.count + 1
            }
        case ActionToDo.Decrease:
            return {
                ...state, count: state.count - 1
            }
    }
}

const CounterApp = () => {
    const [ state, dispatch ] = useReducer(reducer, initialValue)
    return (
        <View>
            <View>
                <Button title="Increase" 
                onPress={()=>{dispatch({type: ActionToDo.Increase, payload: 1})}}/>
                <Button title="Decrease" 
                onPress={()=>{dispatch({type: ActionToDo.Decrease, payload:1})}}/>
            </View>
            <View>
                <Text>
                    {state.count}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default CounterApp;