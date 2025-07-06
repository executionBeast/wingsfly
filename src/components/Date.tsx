import {View, Text, TouchableOpacity} from "react-native"
import { WINDOW_HEIGHT, WINDOW_WIDTH, FONTSCALE } from "../utils/dimensions"
import { useState } from "react"
export default function Date({dateid, day, date, dateClicked, setDateClicked}){
    // const [isClicked, setIsClicked] = useState(false)

    const handleTouch = (dateid) => {
        setDateClicked(dateid)
        // setIsClicked(!isClicked)
    }
    // alert(dateid)
    return (
        <TouchableOpacity style={{maxHeight:90, height:90, width:WINDOW_WIDTH*0.15, backgroundColor: dateClicked === dateid  ? '#2c3298' : '#F4F5F5', borderRadius:20, alignItems:'center', justifyContent:'space-between', marginHorizontal:8}}
            onPress={()=> handleTouch(dateid)}
            >
            <Text style={{flex:1/2, width:'100%', textAlign:'center',borderRadius:20, textAlignVertical:'center', color:dateClicked === dateid ? '#fff' : '#000'}}>{day}</Text>
            <Text 
            style={{fontSize:FONTSCALE(1.5), backgroundColor: dateClicked === dateid  ? '#141b72' :'#E9E9E9', color:dateClicked === dateid ? '#fff' : '#000',  flex:1/2, width:'100%', textAlign:'center',borderRadius:20, textAlignVertical:'center', paddingVertical:10}}>
            {date}
            </Text>
        

        </TouchableOpacity>
    )
}
