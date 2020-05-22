import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const AddItem = ({ addItem }) => {

    const key = () => {
        let dt = new Date();
        return dt.getUTCMilliseconds();
    }
    const [item, setItem] = useState({ id: key(), name: '', quantity: 1 })

    const onNameChange = val => {
        setItem({ ...item, id: key(), name: val });
    };
    const onQuantityChange = val => {
        setItem({ ...item, id: key(), quantity: (val != null && val != '' ? val : 1) });
    };
    return (<View>
        <TextInput style={styles.textInput} placeholder="Name" onChangeText={onNameChange} />
        <TextInput style={styles.textInput} placeholder="Quantity" onChangeText={onQuantityChange} />
        <TouchableOpacity style={styles.buttonBody} onPress={() => addItem(item)}>
            <Text style={styles.button}>Add</Text>
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
        color: 'powderblue',
        textAlign: 'center',
        textTransform: 'uppercase',

    }
});

export default AddItem;