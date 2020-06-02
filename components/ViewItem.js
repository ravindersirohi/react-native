import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
const ViewItem = ({ item, removeItem }) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item.name} ({item.quantity})</Text>
                <Text style={styles.icon} onPress={() => removeItem(item.id)}>Remove</Text>
            </View>
        </TouchableOpacity>);
}
const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: 'lightgray',
        borderBottomWidth: 0.75,
        borderColor: '#ffffff'
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 18,
        color: 'dodgerblue'
    },
    icon: {
        fontSize: 16,
        color: 'firebrick',
        textTransform: 'uppercase',
    }
});
export default ViewItem;