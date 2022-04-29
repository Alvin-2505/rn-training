import React, { useReducer } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

const defaultPassword: States = {
    input: 'password',
}
type States = {
    input: string,
};
const initialState = {
    input: '',
};
enum ActionToDo {
    Password = 'PASSWORD',
    Login = 'LOGIN',
    Reset = 'RESET'
}
type Action = {
    type: ActionToDo,
    payload: string  
}

const reducer = ( state: States, action: Action) => { 
    switch (action.type) {
        case ActionToDo.Password:
            return {...state, input: action.payload }
        case ActionToDo.Login:
            Alert.alert('Welcome! You have logged in!') 
            return initialState ;
        case ActionToDo.Reset:
            return initialState;
        default:
            return state; 
    }
 };

const TextScreen = () => {
    const [state, dispatch] = useReducer ( reducer, initialState );
    console.log(state);
    return (
        <View>
            <View style = {passwordStyle.MainHeader}>
                <Text style = {passwordStyle.MainHeaderText}>This is the Password Test App</Text>
            </View>
            <View>
                <Text style = {passwordStyle.PasswordTitle}> Please Enter Password Here:</Text>
                <TextInput 
                //name = 'password'
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry = {true}
                value = {state.input}
                style = {passwordStyle.PasswordField}
                onChangeText = {(newValue)=>dispatch({type: ActionToDo.Password, payload: newValue})}
                placeholder="Password" />
                
                {state.input === defaultPassword.input ? dispatch({type: ActionToDo.Login, payload:''}): null}
            </View>
            <View>
                <Button 
                title = 'Click here to reset'
                onPress={()=>dispatch({type: ActionToDo.Reset, payload: ''})}/>
            </View>
        </View>
        
    );
    
}

const passwordStyle = StyleSheet.create({
    MainHeader: {
        margin: 10
    },
    MainHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0388fc',
    },
    PasswordTitle: {
        margin: 10,
        textAlign: "center"
    },
    PasswordField: {
        margin: 15,
        textAlign: 'center',
        borderWidth: 2
    },
})

export default TextScreen;