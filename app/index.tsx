import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
export default function Home() {
  return <Redirect href="/(auth)/sign-in" />;
}
