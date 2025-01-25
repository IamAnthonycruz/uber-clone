import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex align-center justify-center p-20">
        <Text>This screen doesn't exist.</Text>
        <Link href="/">
          <Text className="mt-15 py-15">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
