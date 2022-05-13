import { getPhotos } from "@react-native-community/cameraroll";
import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from '../../api/yelp';
import {resultsContent} from '../../hooks/useResults';


interface Route {
    params: {
        id: string 
    }
}

const ResultsShowScreen = ({route}:{route:Route}) => {
    const [result, setResult] = useState<resultsContent|undefined|null>(null);
    const {id} = route.params;
    console.log(result);

    const getSingleResult = async(id: string) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(()=> {
        getSingleResult(id); 
    }, []);

    if (!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data = {result.photos}
                keyExtractor = {(photo) => photo}
                renderItem = {({item})=>{
                    return <Image style = {style.images} source = {{uri: item}}/>
                }}
            />
        
        </View>
    )

}

const style = StyleSheet.create({
    images: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen;