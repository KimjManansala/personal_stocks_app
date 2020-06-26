import React from 'react';
import { Card, ThemeProvider } from 'react-native-elements';
import { View, StyleSheet, Text } from 'react-native';

const HomePage = () => {
    return (
        <Card
            title="Hello! This is your Personal Stocks App!"
        >
            <Text style={styles.cardText}>
                Click the following options below (Coming soon!)
            </Text>
        </Card>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    cardText: {
        marginBottom: 10,
    }
});