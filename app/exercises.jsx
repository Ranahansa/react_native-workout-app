import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodyPart } from '../api/exerciseDB';

export default function Exercises() {
    const router = useRouter();
    const item = useLocalSearchParams();
    console.log('got item', item);

    useEffect(() => {
        if(item) getExercises(item.name);
    },[item])

    const getExercises = async(bodypart) => {
        let data = await fetchExercisesByBodyPart(bodypart);
        console.log('got data', data);
        
    }
    
    return (
        <View className="mt-20">
            <Text>Exercises</Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Text>back</Text>
            </TouchableOpacity>
        </View>
    )
}