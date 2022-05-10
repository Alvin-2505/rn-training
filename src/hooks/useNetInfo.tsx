import {useNetInfo} from '@react-native-community/netinfo';

export const useNetworkStatusEffect = ():{isNetworkConnected: boolean} => {
    const netInfo = useNetInfo();
    const isNetworkConnected = (netInfo.isConnected || netInfo.isInternetReachable);
    return {isNetworkConnected: isNetworkConnected??false};
};