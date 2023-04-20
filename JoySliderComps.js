import React from "react";
import { ScrollView, View, FlatList, Text, TouchableOpacity, Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';


var UpperSlide = [];
var LowerSlide = [];
var UpperSlideTitle = ['Dubai', 'Bangkok', 'Pattaya', 'Kuala Lumpur', 'Tokyo'];
var LowerSlideTitle = ['Bali', 'Phuket', 'Paris', 'Da Nang', 'Halong'];
var UpperSlideBackgrounds = [require('./assets/dubai.webp'), require('./assets/bangkokwebp.webp'), require('./assets/pattaya.webp'), require('./assets/kualalumpur.webp'), require('./assets/tokyo.webp'),];
var LowerSlideBackgrounds = [require('./assets/bali.webp'),require('./assets/phuket.webp'),require('./assets/pasris.webp'), require('./assets/danang.webp'), require('./assets/halong.webp'),];

	for(let i = 0; i < 5; i++){

		UpperSlide.push(
			<View key = {i} style={{width: 160, height: 100, backgroundColor: "green", marginLeft: 13, borderRadius: 17}}>
                <Image source={UpperSlideBackgrounds[i]} style={{width: 160, height: 100, position: "absolute", borderRadius: 17}}></Image>
               <LinearGradient colors={['black', 'transparent']} style={{zIndex: 10, width: "100%", height: 70, borderTopLeftRadius: 17, borderTopRightRadius: 17, opacity: 0.58}}></LinearGradient> 
              <Text style={{color: "white", fontSize: 18.5, fontWeight: 600, position: "absolute", zIndex: 10, marginTop: 10, marginLeft: 15}}>{UpperSlideTitle[i]}</Text>
            </View>
            
		)
	}

   
    for(let j = 0; j < 5; j++){

		LowerSlide.push(
			<View key = {j} style={{width: 160, height: 100, backgroundColor: "green", marginLeft: 13, borderRadius: 17}}>
                 <Image source={LowerSlideBackgrounds[j]} style={{width: 160, height: 100, position: "absolute", borderRadius: 17}}></Image>
                 <LinearGradient colors={['black', 'transparent']} style={{zIndex: 10, width: "100%", height: 70, borderTopLeftRadius: 17, borderTopRightRadius: 17, opacity: 0.56}}></LinearGradient> 
                 <Text style={{color: "white", fontSize: 18.5, fontWeight: 600, position: "absolute", zIndex: 10, marginTop: 10, marginLeft: 15}}>{LowerSlideTitle[j]}</Text>
            </View>
		)
	}


  



export default function JoySliderComps(){


    return(
     
        <View style={{width: 1046, height: "100%", backgroundColor: "transparent"}}>

        <View style={{width: "100%", height: 120, backgroundColor: "transparent", position: "absolute", marginTop: 74, flexDirection: "row", marginLeft: 169}}>
             {UpperSlide}
         </View>

         <View style={{width: "100%", height: 120, backgroundColor: "transparent", position: "absolute", marginTop: 188, flexDirection: "row", marginLeft: 169}}>
             {LowerSlide}
         </View>

         

         <View style={{width: 155, height: 215, backgroundColor: "red", position: "absolute", marginTop: 74, marginLeft: 15, borderRadius: 17}}>

             <Image source={require('./assets/singapore.webp')} style={{width: 155, height: 215, position: "absolute", borderRadius: 17}}></Image>

         <LinearGradient colors={['black', 'transparent']} style={{zIndex: 10, width: "100%", height: 150, borderTopLeftRadius: 17, borderTopRightRadius: 17, opacity: 0.5}}></LinearGradient> 
              
              <Text style={{color: "white", fontSize: 18.5, fontWeight: 600, position: "absolute", zIndex: 10, marginTop: 10, marginLeft: 15}}>Singapore</Text> 
         </View>

         
        
        

        </View>

    );
}