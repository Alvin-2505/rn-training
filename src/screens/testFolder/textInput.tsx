import React, { useReducer } from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const defaultPassword : string = 'AllTheBest';

type State ={
    input: string
};

const initialPassword = {
    input: ''
};

//WHEN USER NV KEY IN -> RETURN PLS KEY IN YOUR PASSWORD
//WHEN USER KEY IN -> DO A CHECK WITH DEFAULTPASSWORD
//CORRECT => AUTHENTICATED
//WRONG => YOU HAVE ENTERED THE WRONG PASSWORD, PLS TRY AGAIN
enum ActionToDo {
    Correct = 'CORRECT',
    Wrong = 'WRONG',
    Empty = 'EMPTY',
    Reset = 'RESET'
}

type Action = {
    type: ActionToDo, 
    payload: string
}

const reducer = (password: State, action:Action) => {
    switch (action.type){
        case ActionToDo.Empty:
            return (
                <Text>Password is empty, please key in your password</Text>
            )
        case ActionToDo.Correct:
            return (
                <Text>Authenticated</Text>
            )
        case ActionToDo.Wrong:
            return (
                <Text>Wrong password, please re-enter</Text>
            )
        case ActionToDo.Reset:
            return {...password, input: initialPassword }
        default:
            return password;
    }
}

/* const TextScreen = () => {
    const [password, dispatch] = useReducer(reducer, initialPassword);
    //set initial state as the empty string
    
    return (
    <View>
        <Text
        style = {textScreenStyle.mainText}> Please enter your Password: </Text>
        <TextInput 
        style = {textScreenStyle.input}
        autoCorrect = {false}
        autoCapitalize = 'none'
        value = {state.input}
        onChangeText = {} 
        //secureTextEntry = {true}
        />
        
    </View>
    )
}

const textScreenStyle = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        textAlign: 'center'
    },
    mainText: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default TextScreen; */