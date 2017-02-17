import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB4wHkG6ouiP9yTvHrroZ88EjZ8V1AbZqM',
            authDomain: 'auth-732ed.firebaseapp.com',
            databaseURL: 'https://auth-732ed.firebaseio.com',
            storageBucket: 'auth-732ed.appspot.com',
            messagingSenderId: '395380661601'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
