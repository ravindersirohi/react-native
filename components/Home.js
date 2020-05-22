import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import ViewItem from './ViewItem';
import AddItem from './AddItem';

const Home = () => {
    const [listItems, setState] = useState([
        { id: 1, name: 'Milk', quantity: 2 },
        { id: 2, name: 'Banana', quantity: 4 }
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
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>My Grocery</Text>
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
        backgroundColor: '#ffffff',
    },
    sectionContainer: {
        marginTop:2,
        paddingHorizontal: 2,
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
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '300',
        color: 'darkgreen',
    },
    listView: {
        margin: 10,
        marginHorizontal: 10,
    },
})

export default Home