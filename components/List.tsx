// List.tsx
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

// 封装 item
function Item (props: {
    name: string;
    details: string;
  }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{props.name}</Text>
            <Text>{props.details}</Text>
        </View>
    );
}

function List (props: any) {
    const renderItem = ({item}) => {
            if (props.searchPhrase === "") {
                return <Item name={item.name} details={item.details} />
            }
            // filter of the name
            if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim.replace(/\s/g, ""))) {
                return <Item name={item.name} details={item.details} />
            }
            // filter of the description
    }

    return (
        <SafeAreaView style={styles.list_container}>
            <View 
                onStartShouldSetResponder={() => {
                    props.setClicked(false);
                }}
            >
                <FlatList
                    data = {props.data}
                    renderItem = {renderItem}
                    keyExtractor={(item)=>item.id}
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
  list_container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});