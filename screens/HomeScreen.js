// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function HomeScreen({ navigation }) {
    const handleLogout = async () => {
        await signOut(auth);
        navigation.replace("Login");
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome to the Social Media App!</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}
