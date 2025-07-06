import {View, Text} from "react-native"
import { FONTSCALE, WINDOW_HEIGHT, WINDOW_WIDTH } from "../utils/dimensions"
import * as Progress from 'react-native-progress';  
export default function TodaysQuoteCard({quote, progress}) {
    return (
        <View 
        style={{width: WINDOW_WIDTH*0.93, height:WINDOW_HEIGHT*0.13, backgroundColor:'#FEFEFE', justifyContent:'space-between', shadowColor:'#000', shadowOpacity:0, elevation:8, borderRadius:10 }}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:FONTSCALE(1.5), fontWeight:900}}>Today's Quote</Text>
            </View>

            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:5}}>
                <Text numberOfLines={1} style={{fontSize:FONTSCALE(1.3)}}>{`"${quote}"`}</Text>
            </View>

            <View style={{gap:10, paddingHorizontal:15, alignItems:'flex-start', justifyContent:'center',}}>
                <Text style={{}}>Progress {`${progress}%`}</Text>
                <Progress.Bar progress={progress/100} width={WINDOW_WIDTH*0.9} borderColor="#00000044" color="#161Edd" borderWidth={1} style={{}}/>
            </View>

            
        </View>
    )
}