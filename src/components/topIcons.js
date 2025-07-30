import React from "react";
import {View, TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

export function LeftArrowIcon(){
    const navigation = useNavigation();
    return (
        <View style={{marginRight:20}}>
            <TouchableOpacity onPress={()=>(navigation.navigate("Home"))}>
                <AntDesign name="leftcircleo" size={42} color="black" style={{marginTop:3,}}/>
            </TouchableOpacity>
        </View>
    )
}
