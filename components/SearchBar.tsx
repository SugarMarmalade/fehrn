import React from 'react';
import { StyleSheet, TextInput, View, ScrollView, Animated } from 'react-native';

export function SearchBar(props: any) {
    return (
        <View style={styles.container}>
            <View style={
                !props.clicked ? styles.searchBar_unclicked: styles.searchBar_clicked
            }>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
    },
    searchBar_unclicked: {
        padding: 10,
        flexDirection: 'row',
        width: '95%',
        backgroundColor: '#d9dbda',
        borderRadius: 15,
        alignItems: 'center',
    },
    searchBar_clicked: {
        padding: 10,
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#d9dbda',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: '90%',
    },
});
