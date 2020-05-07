import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

const Home = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>My Grocery</Text>
                        <Text style={styles.sectionDescription}>Welcome to my Grocery app</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'gray',
    },
    body: {
        backgroundColor: '#ffffff',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: '400',
        color: '#ffffff',
        backgroundColor:'blue',
        padding:10,
        textTransform:'uppercase'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '300',
        color: 'darkgreen',
    },
})

export default Home