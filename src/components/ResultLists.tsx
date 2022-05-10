import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { resultsContent } from '../hooks/useResults';
import ResultsDetails from './ResultsDetails';
import { useNavigation } from "@react-navigation/native";
import ResultsShowScreen from "app/screens/testFolder/ResultsShowScreen";

interface ResultProps {
    title: string,
    results: resultsContent[],
};

interface Navigation {
    navigate(destination:string):undefined
}

const ResultLists = ({title, results}: ResultProps) => {
    const navigation: Navigation = useNavigation();
    return (
        <View style = {style.container}>
            <Text style={style.title}>{title}</Text>
            
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data = {results}
                keyExtractor = {(result) => result.id}
                renderItem = {({item})=>{
                    return ( 
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen')}>
                        <ResultsDetails 
                        title = {item.name} 
                        imageSource = {item.image_url}
                        rating = {item.rating}
                        review = {item.review_count}
                        />
                    </TouchableOpacity>
                    );
                }}
            />
            <Text style = {style.resultCount}>Results: {results.length}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    resultCount:{
        alignSelf:'center',
        fontWeight: 'bold'
    },
    container:{
        marginBottom: 10
    }
});

export default ResultLists;