import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

const Navbar = () => {
    return (
        <View style={styles.nav}>
            <Link
                to="/"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <Text>Home!</Text>
            </Link>
            <Link
                to="/about"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <Text>About</Text>
            </Link>
            <Link
                to="/topics"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <Text>Topics</Text>
            </Link>
        </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
});