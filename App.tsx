import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// for navbar
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./SCreens/HomeScreen";
import LoginScreen from "./SCreens/LoginScreen";
const Stack = createNativeStackNavigator();

export default function App() {
	console.log("Debug by using console log");
	// let c;
	// c.toString();
	return (
		// <View style={styles.container}>
		// 	<Text>Hello React Native</Text>
		// 	<StatusBar style="auto" />
		// </View>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					options={{ headerShown: false }}
					component={LoginScreen}
				/>
				{/* <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
