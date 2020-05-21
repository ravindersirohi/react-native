import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const ViewItem = ({ item, removeItem }) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item.name} ({item.quantity})</Text>
                <Icon name="remove" style={styles.icon} onPress={() => removeItem(item.id)} />
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
        fontSize: 20,
        color: 'dodgerblue'
    },
    icon: {
        fontSize: 24,
        color: 'firebrick'
    }
});
export default ViewItem;