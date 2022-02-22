// SearchBar.tsx
// ref: https://blog.logrocket.com/create-react-native-search-bar-from-scratch/

import * as React from 'react';
import { StyleSheet, TextInput, View, ScrollView, Animated, Pressable, Button, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function SearchBar(props: any) {
    return (
        <View style={styles.container}>
            <View 
                style={ 
                !props.clicked ? styles.searchBar_unclicked: styles.searchBar_clicked
                }
            >
            {/* TODO: 颜色可能要封装一下（有亮色/暗色模式） */}
            <Icon name='search' color={color}/>
            <TextInput 
                style={styles.input}
                placeholder='Search'
                value={props.searchPhrase}
                onChangeText={props.setSearchPhrase}
                onFocus={() =>  {
                    props.setClicked(true);
                }}
            />
            <Pressable onPress={() => {props.setSearchPhrase("")}}>
                <Icon name='ban' color={color}/>
            </Pressable>
            </View>
            <View>
                <Button title="Cancel" onPress={ () => {
                    Keyboard.dismiss();
                    props.setClicked(false);
                }}/>
            </View>
        </View>
    );
}

const color = 'Black';

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

// 封装 icon
function Icon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={20} style={{ marginLeft: 1 }} {...props} />;
  }