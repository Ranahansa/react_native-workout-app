import { View, Text, Image } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
    return (
        <View className="flex justify-end flex-1">
            <StatusBar style="light" />
            <Image
                className="absolute w-full h-full"
                source={require("../assets/images/welcome.png")}
            />

            <LinearGradient
                colors={["transparent", "#18181b"]}
                style={{ width: wp(100), height: hp(100) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                className="flex justify-end space-y-8 pd-12"
            >
                <View className="flex items-center">
            <Text className="pb-12 text-3xl font-bold text-white">Best <Text className="text-red-500">Fitness App</Text></Text>
                </View>
                
            </LinearGradient>
        </View>
    );
}
