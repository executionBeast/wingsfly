import {View, Text, Image} from "react-native";
import { FONTSCALE, WINDOW_HEIGHT, WINDOW_WIDTH } from "../utils/dimensions";
import { taskIcons } from "../images/exportImages";
import Icon from "react-native-vector-icons/Ionicons"
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import * as EvilIcon from "react-native-vector-icons/FontAwesome"

export default function TaskList({data}){
    return (
        <View style={{width: WINDOW_WIDTH, height: WINDOW_HEIGHT*0.09, backgroundColor:'', alignItems:'center', justifyContent:'space-between', flexDirection:'row', marginVertical:2, paddingHorizontal:10, gap:5}}>
            <View id="icon" style={{height:'100%', alignItems:'center', justifyContent:'center', backgroundColor:''}}>
                <Image style={{width:80, height:80}} source={taskIcons[`${data.type}`]}/>
            </View>
            
            <View id="wrapper text" style={{height:'100%', flex:1, justifyContent:'space-between', flexDirection:'row', alignItems:'center', backgroundColor:'', borderBottomWidth:1, borderColor:'#21212111',  }}>

                <View id="text" style={{height:'100%', justifyContent:'space-around', flexDirection:'column', paddingVertical:5 }}>

                    <View>
                        <Text numberOfLines={1} style={{fontSize:FONTSCALE(1.5), fontWeight:900}}>{data.title}</Text>
                    </View>

                    <View id="wrapper for time tags" style={{flexWrap:'wrap', flexDirection:'row', gap:10}}>

                        <View id="time" style={{width:'auto',flexDirection:'row', backgroundColor:'#E4EBF3', alignItems:'center', gap:5, paddingHorizontal:5, paddingVertical:1, borderRadius:5}}>
                            <Icon name="alarm-outline" size={20} color='#0F4C93'/>
                            <Icon name="hourglass-outline" size={18} color='#0F4C93'/>
                            <Text style={{fontSize:FONTSCALE(1.3)}}>{data.time}</Text>
                        </View>

                        <View id="tags" style={{flexDirection:'row', backgroundColor:'#F1F2F2',paddingHorizontal:5, paddingVertical:1, borderRadius:5, justifyContent:'center', alignItems:'center', gap:5}}>
                           <Text>{ data.tags?.map((tag, index) => <Text style={{fontSize:FONTSCALE(1.3)}}>{tag}{index === data.tags.length -1 ? '' : ' | ' }</Text>)}</Text>
                            <Icon name="flag-outline" size={16} color='#0F4C93'/>

                        </View>
                    
                    </View>
                
                </View>

                <View id="check" style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
                   {data.status === 'done' ? <Icon name="checkmark-outline" size={30} color="green" style={{borderWidth: 1, borderRadius:30, backgroundColor:'#BEE3D3'}}/> 
                    : 
                   <EvilIcon name="clock-o" size={30} color="green" style={{borderWidth: 1, borderRadius:30, backgroundColor:'#BEE3D3'}}/>  }
                </View>
            </View>


            



        </View>
    )
}