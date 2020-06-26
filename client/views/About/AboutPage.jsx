import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { AirbnbRating, Card } from 'react-native-elements';

const AboutPage = () => {
    return (
        <Card
            title="Hello! This is your Personal Stocks App!"
        >
            <Text>
                This is my first React Native Project! I'll make a lot of mistakes. This application will be filled with bugs but
                Thats how you learn!
            </Text>
            <Text>
                Below is a simple rating system. Right now it is at 1 because this is
                just the bare bones of the application
            </Text>
            <AirbnbRating
                reviews={['Starting', 'Stuff has been setup', 'Some core features made', 'Most core feature made', 'Feels like a real app']}
                fractions={1}
                startingValue={1}
                style={styles.rating}
                type='heart'
            />
        </Card>
    )
};

export default AboutPage;

const styles = StyleSheet.create({
    rating: {
        backgroundColor: 'transparent'
    }
})