import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Films from "../../components/Films/Films";

class MainContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Films/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    }
});

export default MainContainer;