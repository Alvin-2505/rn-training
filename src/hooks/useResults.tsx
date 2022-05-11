import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { useNetworkStatusEffect } from "./useNetInfo";


export interface resultsContent  {   
    rating: number,
    price: string,
    id: string,
    review_count: number,
    name: string,
    image_url: string,
    photos: string[]
};

export default () =>{
    const { isNetworkConnected } = useNetworkStatusEffect();
    const [ results, setResults ] = useState<resultsContent[]>([]);
    const [ errorMessage, setErrorMessage ] = useState <string>();
    
    const searchApi = async (searchTerm: string) => {
        try{
            const response = await yelp.get('/search', { // will concatenate to the back to the baseUrl
            params: {
                limit: 50,
                term: searchTerm,
                location: 'Singapore'
                }
            });
            setResults(response.data.businesses);
            //console.log(`submitted ${term}`);
            } catch (err) {
                setErrorMessage('Something went wrong!');
                };
        };
        useEffect(() => {
            setErrorMessage(
              isNetworkConnected
                ? ""
                : "network is disconnected now. Please try again later.",
            );
          }, [isNetworkConnected, setErrorMessage]);
         

    useEffect(() => {
        searchApi('Pasta');
    }, []);//run 1 time
    
    return [ searchApi, results, errorMessage ] as const;
}