import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import Item from './Item';

const Home = () => {
    const [listItems, setState] = useState([
        { id: 1, name: 'Milk', quantity: 2 },
        { id: 2, name: 'Banana', quantity: 4 },
        { id: 3, name: 'Eggs', quantity: 6 },
        { id: 4, name: 'Mango', quantity: 5 }
    ])

    const removeItem = id => {
        setState(listItems => {
            return listItems.filter(item => item.id != id);
        });
    }

    return (
        <>
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>My Grocery</Text>
                    <TextInput style={styles.textInput} placeholder="Name" />
                </View>
                <View style={styles.listView}>
                    <FlatList data={listItems}
                        renderItem={({ item }) => <Item item={item} removeItem={removeItem} />} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    listView: {
        margin: 10,
        marginHorizontal: 20,
    },
    body: {
        backgroundColor: '#ffffff',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: '400',
        color: '#ffffff',
        backgroundColor: 'dodgerblue',
        padding: 10,
        textTransform: 'uppercase',
        marginBottom: 5
    },
    textInput: {
        fontSize: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'dodgerblue',
        backgroundColor: 'powderblue'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '300',
        color: 'darkgreen',
    },
})

export default Home