import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

type ResultProp = {
        location: string,
        title: string,
        imageSource: string,
        rating: number,
        review: number
}

const ResultsDetails = ({title, imageSource, rating, review}:ResultProp) => {
    
    return (
        <View style = {style.container}>
            <Image
            style ={style.image} 
            source={{uri: imageSource}}
            />
            <Text style = {style.title}>{title}</Text>
            <Text>{rating} stars, {review} ratings</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 14
    },
    container: {
        marginLeft:15
    },
    image: {
        marginBottom:5,
        height: 120, 
        width:250, 
        borderRadius: 4
    }
});

export default ResultsDetails;