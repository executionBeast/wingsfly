import {View, Text} from "react-native"
import { FONTSCALE, WINDOW_HEIGHT, WINDOW_WIDTH } from "../utils/dimensions"
import * as Progress from 'react-native-progress';  
export default function TodaysQuoteCard({quote, progress}) {
    return (
        <View 
        style={{width: WINDOW_WIDTH*0.93, height:WINDOW_HEIGHT*0.15, backgroundColor:'#FEFEFE', justifyContent:'space-between', shadowColor:'#000', shadowOffset:{width:2, height:4}, shadowOpacity:0.3, elevation:8, borderRadius:10 }}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:FONTSCALE(1.5), fontWeight:900}}>Today's Quote</Text>
            </View>

            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:5}}>
                <Text style={{fontSize:FONTSCALE(1.3)}}>{`"${quote}"`}</Text>
            </View>

            <View style={{gap:10, marginHorizontal:5}}>
                <Text style={{marginLeft:10}}>Progress {`${progress}%`}</Text>
                <Progress.Bar progress={progress/100} width={WINDOW_WIDTH*0.9} borderColor="#FEFEFE" color="#161Eddcc"  style={{}}/>
            </View>

            
        </View>
    )
}