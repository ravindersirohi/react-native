import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import ViewItem from './ViewItem';
import AddItem from './AddItem';

const Home = () => {
    const [listItems, setState] = useState([
        { id: 1, name: 'Baby Milk', quantity: 2 }
    ])

    const removeItem = id => {
        setState(listItems => {
            return listItems.filter(item => item.id != id);
        });
    }

    const addItem = item => {
        setState(listItems => {
            return [item, ...listItems]
        });
    }

    return (
        <>
            <View style={styles.body}>
                <View style={styles.container}>
                    <Text style={styles.title}>My Grocery</Text>
                </View>
                <View style={styles.listView}>
                    <AddItem addItem={addItem} />
                    <FlatList data={listItems}
                        renderItem={({ item }) => <ViewItem item={item} removeItem={removeItem} />} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    body: {
        fontSize: 20,
        backgroundColor: '#ffffff',
    },
    container: {
        marginTop: 2,
        paddingHorizontal: 2,
    },
    title: {
        fontSize: 28,
        fontWeight: '400',
        color: '#ffffff',
        backgroundColor: 'dodgerblue',
        padding: 10,
        textTransform: 'uppercase',
        marginBottom: 5
    },
    listView: {
        margin: 10,
        marginHorizontal: 10,
    },
})

export default Home