import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB5QpUWIlVQMj1URa47N4SRbITuXklTkJ8",
            authDomain: "rn-auth-11b46.firebaseapp.com",
            databaseURL: "https://rn-auth-11b46.firebaseio.com",
            projectId: "rn-auth-11b46",
            storageBucket: "rn-auth-11b46.appspot.com",
            messagingSenderId: "446251372834"
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