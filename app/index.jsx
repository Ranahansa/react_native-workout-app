import { View, Text, Image } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from "expo-router";


export default function Index() {
    
    const router = useRouter();
    
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
                <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center pb-1">
                    <Text style={{fontSize: hp(5)}} className="font-bold tracking-wide text-white ">Best
                        <Text className="text-red-700"> Fitness</Text>
                    </Text>
                    <Text style={{fontSize: hp(5)}} className="font-bold tracking-wide text-white ">For You
                    </Text>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(200).springify()} className="pb-1">
                    <TouchableOpacity
                    onPress={() => router.push("home")}
                    style={{height: hp(7), width: wp(80)}}
                    className="items-center justify-center mx-auto bg-red-700 border-[2px] border-white rounded-full">
                        <Text style={{fontSize: hp(3)}} className="font-bold tracking-wide text-white ">Get Started</Text>
                    </TouchableOpacity>
                </Animated.View>

            </LinearGradient>
        </View>
    );
}
