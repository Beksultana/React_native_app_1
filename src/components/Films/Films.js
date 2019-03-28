import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image , ScrollView} from 'react-native';
import {fetchFilms} from "../../../store/actions/starGetSyncActions";
import {connect} from "react-redux";

class Films extends Component {

    componentDidMount() {
        this.props.fetchFilms()
    }

    render() {
        const films = this.props.films.map(film => {
           return (
               <View key={film.id}>
                   <Image style={{width: 240, height: 350}} source={{uri: film.image}}/>
                   <View>
                       <Text>{film.name}</Text>
                       <TouchableOpacity><Text>Send</Text></TouchableOpacity>
                   </View>
               </View>
           )
        });
        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.filmsBlock}>
                        {films}
                    </View>
                </ScrollView>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        films: state.filmsReducer.films
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFilms: () => dispatch(fetchFilms())
    }
};

const styles = StyleSheet.create({
    filmsBlock: {
        flex: 1,
        paddingTop: 10
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Films);