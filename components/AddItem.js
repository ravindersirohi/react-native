import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const AddItem = ({ addItem }) => {

    const [item, setItem] = useState({})

    const onChange = val => {
        setItem({ id: key(), name: val, quantity: 1 });
    };

    const key = () => {
        let dt = new Date();
        return dt.getUTCMilliseconds();
    }

    return (<View>
        <TextInput style={styles.textInput} placeholder="Item name" onChangeText={onChange} />
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
        marginHorizontal: 15,
        padding: 10
    },
    buttonBody: {
        backgroundColor: 'lightseagreen',
        padding: 8,
        margin: 15,
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