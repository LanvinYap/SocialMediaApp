// screens/SignupScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Signup Successful!");
            navigation.navigate("Home");
        } catch (error) {
            Alert.alert("Signup Failed", error.message);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text>Signup</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Button title="Sign Up" onPress={handleSignup} />
            <Button title="Already have an account? Login" onPress={() => navigation.navigate("Login")} />
        </View>
    );
}
