// List.tsx
import { StringLiteral } from '@babel/types';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ListRenderItem, TouchableWithoutFeedbackBase } from 'react-native';


interface IItem {
    id: string;
    name: string;
    details: string;
};

// 封装 item
function Item (props: IItem) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{props.name}</Text>
            <Text>{props.details}</Text>
        </View>
    );
}

export function List (props: any) {
    /*
    const renderItem = (item: IItem) => {
            if (props.searchPhrase === "") {
                return <Item name={item.name} details={item.details} />
            }
            // filter of the name
            if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim.replace(/\s/g, ""))) {
                return <Item name={item.name} details={item.details} />
            }
            // filter of the description
    }
    */
   const renderItem: ListRenderItem<IItem> = ({ item }) => {
       if (item.details.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
           return <Item id={item.id} name={item.name} details={item.details}/>
       } else if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
           return <Item id={item.id} name={item.name} details={item.details}/>
       } else {
           return <Item id={item.id} name={item.name} details={item.details}/>
       }
    };

    return (
        <SafeAreaView style={styles.list_container} >
            <View 
                onStartShouldSetResponder={() => {
                    props.setClicked(false); return true;
                }}
            >
                <FlatList
                    data = {props.data}
                    renderItem = {renderItem}
                    keyExtractor={(item, index)=>item.id}
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