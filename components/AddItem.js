import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const AddItem = ({ addItem }) => {

    const key = () => {
        return new Date().getUTCMilliseconds();
    }
    const [item, setItem] = useState({ id: key(), name: '', quantity: 1 })

    const onNameChange = val => {
        setItem({ ...item, id: key(), name: val });
    };
    const onQuantityChange = val => {
        setItem({ ...item, id: key(), quantity: (val != null && val != '' ? val : 1) });
    };
    const add = () => {
        addItem(item);
        setItem({ id: key(), name: '', quantity: 1 });
    }
    return (<View>
        <TextInput style={styles.textInput} placeholder="Name" onChangeText={onNameChange} value={item.name} />
        <TextInput style={styles.textInput} placeholder="Quantity (eg: 1 Kg)" onChangeText={onQuantityChange} value={item.quantity} />
        <TouchableOpacity style={styles.buttonBody} onPress={() => add()}>
            <Text style={styles.button}>Add Item</Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'dodgerblue',
        backgroundColor: 'powderblue',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
        marginTop: 5
    },
    buttonBody: {
        backgroundColor: 'lightseagreen',
        padding: 8,
        margin: 10,
        borderRadius: 5
    },
    button: {
        fontSize: 20,
        backgroundColor: 'lightseagreen',
        color: '#FFFFFF',
        textAlign: 'center',
        textTransform: 'uppercase',

    }
});

export default AddItem;