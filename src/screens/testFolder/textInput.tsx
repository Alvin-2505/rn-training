import React, { useReducer } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

const defaultPassword : string = 'AllTheBest';

type State ={
    input: string
};

const initialPassword:State = {
    input: ''
};

//WHEN USER NV KEY IN -> RETURN PLS KEY IN YOUR PASSWORD
//WHEN USER KEY IN -> DO A CHECK WITH DEFAULTPASSWORD
//CORRECT => AUTHENTICATED
//WRONG => YOU HAVE ENTERED THE WRONG PASSWORD, PLS TRY AGAIN
enum ActionToDo {
    Submit = 'SUBMIT',
    Empty = 'EMPTY',
    Reset = 'RESET'
}

type Action = {
    type: ActionToDo, 
    payload: string
}

const authenticationCheck = (password : State):boolean => {
    return (
        password.input === defaultPassword ? true : false
    )
}
const isEmpty = (password:State): boolean => {
    return ( password.input.length === 0) ? true : false
}

const reducer = (password: State, action:Action):State => {
    switch (action.type){
        case ActionToDo.Submit:
            if (authenticationCheck(password)){
                Alert.alert('Authenticated!');
                return initialPassword
            } else {
                Alert.alert('Wrong password, please ensure you key in the correct password');
                return password
            }
        case ActionToDo.Empty:
            if (isEmpty(password)) {
                Alert.alert('You have not key in your password! Minimum 8 characters.');
                return initialPassword
            } else {
                return password
            }
        case ActionToDo.Reset:
            return initialPassword;
        default:
            return password;
    }
}
const TextScreen = () => {
    const [password, dispatch] = useReducer(reducer, initialPassword);
    //set initial state as the empty string
    console.log(isEmpty(password))
    
    return (
    <View>
        <Text
        style = {textScreenStyle.mainText}> Please enter your Password: </Text>
        <TextInput 
        style = {textScreenStyle.input}
        autoCorrect = {false}
        autoCapitalize = 'none'
        value = {password.input}
        onChangeText = {()=> dispatch({type: ActionToDo.Submit, payload: password.input})}
        placeholder = {'Enter Password'} 
        secureTextEntry = {true}
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

export default TextScreen; 