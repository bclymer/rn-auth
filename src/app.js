import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB5QpUWIlVQMj1URa47N4SRbITuXklTkJ8",
            authDomain: "rn-auth-11b46.firebaseapp.com",
            databaseURL: "https://rn-auth-11b46.firebaseio.com",
            projectId: "rn-auth-11b46",
            storageBucket: "rn-auth-11b46.appspot.com",
            messagingSenderId: "446251372834"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    logout() {
        firebase.auth().signOut()
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={this.logout}>
                        Log Out
                    </Button>
                )
            case false:
                return <LoginForm />
            default:
                return (
                    <View style={styles.spinnerContainerStyle}>
                        <Spinner size="large" />
                    </View>
                )
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

const styles = {
    spinnerContainerStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export default App;