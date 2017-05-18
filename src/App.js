import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state ={ loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB4wHkG6ouiP9yTvHrroZ88EjZ8V1AbZqM',
            authDomain: 'auth-732ed.firebaseapp.com',
            databaseURL: 'https://auth-732ed.firebaseio.com',
            storageBucket: 'auth-732ed.appspot.com',
            messagingSenderId: '395380661601'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: true });
            }
        });
    }

    onButtonPress() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
