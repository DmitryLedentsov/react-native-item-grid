import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [input, setInput] = useState('');
    const clearInput = () => {
        setLogin('');
        setPassword('');
    }

    const updateInput = () => {
      setInput(`login: ${login} password: ${password}`);
    }

    return (
        <View style={styles.loginForm}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setLogin(newText)}
                    placeholder='Login'
                    defaultValue={login}
                    />
                <TextInput
                secureTextEntry={true}
                    style={styles.input}
                    onChangeText={newText => setPassword(newText)}
                    placeholder='Password'
                    defaultValue={password}
                    />
                
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Clear'
                    onPress={clearInput}
                    />
                <Button 
                    title='Login'
                    onPress={updateInput}
                    />
            </View>
            <Text>{input}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loginForm: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 5,
    },
    inputContainer: {
        flexDirection: 'column',
        width: '70%',
        rowGap: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 2,
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        columnGap: 5,
    },
});