import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ImageBackground} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Navbar from './views/Navbar/Navbar';
import HomePage from './views/HomePage/HomePage';
import AboutPage from './views/About/AboutPage'

const store = configureStore();

// const Home = () => <Text style={styles.header}>Home</Text>;

// const About = () => <Text style={styles.header}>About</Text>;

const Topic = ({ match }) => (
    <Text style={styles.topic}>{match.params.topicId}</Text>
);

const Topics = ({ match }) => (
    <View>
        <Text style={styles.header}>Topics</Text>
        <View>
            <Link
                to={`${match.url}/rendering`}
                style={styles.subNavItem}
                underlayColor="#f0f4f7"
            >
            <Text>Rendering with React</Text>
            </Link>
            <Link
                to={`${match.url}/components`}
                style={styles.subNavItem}
                underlayColor="#f0f4f7"
            >
            <Text>Components</Text>
            </Link>
            <Link
                to={`${match.url}/props-v-state`}
                style={styles.subNavItem}
                underlayColor="#f0f4f7"
            >
            <Text>Props v. State</Text>
            </Link>
        </View>
    
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => (
                <Text style={styles.topic}>Please select a topic.</Text>
            )}
        />
    </View>
);
export default class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/users')
        .then((res) => {
            alert(res.data[1].message)
            console.log(res.data)
        })
    }
    render () {
        return (
            <Provider store={store}>
                <NativeRouter>
                    <ImageBackground source={require('./assets/background_mountain.jpg')} style={styles.backgroundImage}>
                        <View style={styles.container}>
                            <Navbar />
                            <Route exact path="/" component={HomePage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/topics" component={Topics} />
                        </View>
                    </ImageBackground>
                </NativeRouter>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    },
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
    topic: {
        textAlign: "center",
        fontSize: 15
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    }
});