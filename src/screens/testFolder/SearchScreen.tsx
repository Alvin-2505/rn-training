import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SearchBar} from "../../components/SearchBar";  
import {SearchLocationBar} from "../../components/SearchBar";  
import useResults from "../../hooks/useResults";
import ResultLists from "../../components/ResultLists";


const SearchScreen = () => {
    const [ location, setLocation ] = useState ('');
    const [ term, setTerm ] = useState ('');
    const [ searchApi, results, errorMessage ] = useResults();
    
    const filterByPrice = (price: string) => {
        return results.filter(result =>{
            return result.price === price;
        });
    };

    return (
        <>
           <SearchBar 
           term={term} 
           onTermChange={(newTerm) => setTerm(newTerm)}
           onTermSubmit={() => searchApi(term, location)}
           />
           <SearchLocationBar 
           location={location} 
           onTermChange={(newLocation) => setLocation(newLocation)}
           onTermSubmit={() => searchApi(term, location)}
           />
           {errorMessage ? <Text style={style.errorMessage}>{errorMessage}</Text> : null}
          <Text style={style.resultCount}> We have found {results.length} results </Text>
           <ScrollView >
                <ResultLists title='Cost Effective' results={filterByPrice('$')} />
                <ResultLists title='Bit Pricier' results={filterByPrice('$$')} />
                <ResultLists title='Big Spender' results={filterByPrice('$$$')} />
                <ResultLists title='Biggest Spender' results={filterByPrice('$$$$')} />
           </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    
    resultCount:{
        alignSelf: "center",
        fontWeight: 'bold'
    },
    errorMessage:{
        alignSelf:'center'
    }
});

export default SearchScreen;