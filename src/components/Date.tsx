import {View, Text} from "react-native"
import { WINDOW_HEIGHT, WINDOW_WIDTH, FONTSCALE } from "../utils/dimensions"
export default function Date({day, date}){
    return (
        <View style={{maxHeight:90, width:WINDOW_WIDTH*0.15, backgroundColor:'#F4F5F5', borderRadius:20, alignItems:'center', justifyContent:'space-between', marginHorizontal:8}}>
            <Text style={{flex:1/2, width:'100%', textAlign:'center',borderRadius:20, textAlignVertical:'center'}}>{day}</Text>
            <Text 
            style={{fontSize:FONTSCALE(1.5), backgroundColor:'#E9E9E9', flex:1/2, width:'100%', textAlign:'center',borderRadius:20, textAlignVertical:'center', paddingVertical:10}}>
            {date}
            </Text>

        

        </View>
    )
}
