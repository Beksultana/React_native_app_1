import axios from 'axios';

const axiosStarGets = axios.create({
    baseURL: 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate'
});

export default axiosStarGets;