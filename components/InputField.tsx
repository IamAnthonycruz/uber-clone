import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const InputField = () => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text className="text-lg font-JakartaSemiBold"></Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;

const styles = StyleSheet.create({});
