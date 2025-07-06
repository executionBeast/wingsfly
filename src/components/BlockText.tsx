import {View, Text} from "react-native"
import { WINDOW_HEIGHT, WINDOW_WIDTH, FONTSCALE } from "../utils/dimensions"
export default function BlockText({heading, value}){
    return (
        <View style={{minHeight:60, width:WINDOW_WIDTH*0.4, backgroundColor:'#DDDDDD', borderRadius:5, paddingLeft: 20,}}>
            <Text style={{fontSize:FONTSCALE(1.5), fontFamily:'Mono',}}>{heading}</Text>
            <Text style={{fontSize:FONTSCALE(1)}}>{value}</Text>
        </View>
    )
}