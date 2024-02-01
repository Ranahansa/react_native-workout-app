import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from 'expo-status-bar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';

export default function Home() {
    return (
        <SafeAreaView className="flex flex-1 space-y-10 bg-white" edges={["top"]}>
            <StatusBar style="dark" />
            
            <View className="flex-row items-center justify-between mx-5">
                <View className="space-y-1">
                    <Text style={{fontSize: hp(4.5)}}
                    className="font-bold tracking-wider text-black ">

                        READY TO
                        
                    </Text>
                    <Text style={{fontSize: hp(4.5)}}
                    className="font-bold tracking-wider text-red-700 ">

                        WORKOUT
                        
                    </Text>
                </View>
                <View className="flex items-center justify-center space-y-2">
                    <Image 
                    source={require("../assets/images/avatar.png")} 
                    style = {{height: hp(6), width: wp(12)}}
                    className="rounded-full "/>

                    <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300">
                        <Ionicons name="notifications" size={hp(3)} color="#900" />
                    </View>
                </View>
            </View>

            <View>
                <ImageSlider />
            </View>
            
            <View className="flex-1">
                <BodyParts />
            </View>
            
        </SafeAreaView>
    )
}