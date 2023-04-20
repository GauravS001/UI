import React from "react";
import { ScrollView, View, FlatList, Text, TouchableOpacity, Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import JoySliderComps from "./JoySliderComps";


  


export default function JoySlider(){


    return(
        
        <View style={{width: "100%", height: 305, backgroundColor: "white"}}>

            <Text style={{fontSize: 23, position: "absolute", fontWeight: 600, marginLeft: 18, marginTop: 4, width: 200}}>Where will you find joy?</Text>

            <TouchableOpacity style={{width: 100, height: 28, backgroundColor: "rgb(253, 81, 18)", position: "absolute", borderRadius: 8, marginTop: 35, marginLeft: 250}}>
                <Text style={{fontSize: 13, color: "white", fontWeight: 600, marginLeft: 13, marginTop: 3.5}}>See more</Text>
                <Image source={require('./assets/forward_50px.png')} style={{position: "absolute", marginLeft: 78, width: 12, height: 12, marginTop: 7.5}}></Image>
            </TouchableOpacity>

            <ScrollView horizontal style={{flexDirection: "row"}} showsHorizontalScrollIndicator={false}>
        
        
               <JoySliderComps></JoySliderComps>
          
               
            </ScrollView>

        </View>

    );

}