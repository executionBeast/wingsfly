import {View, Text, Image, TouchableOpacity} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome'; 
// import brain from "../images/brain-icon.png"
import Icon from "react-native-vector-icons/Materialdesignicons"
import { modalMenuIcon } from "../images/exportImages"
import { FONTSCALE } from "../utils/dimensions"
export default function ModalMenu({menu}) {

    return (
        <TouchableOpacity style={{ paddingHorizontal:20, flexDirection:'row', gap:20, height:90, marginTop: 4, backgroundColor:''}}>
            <View style={{width:70, height:70, alignItems:'center', justifyContent:'center',  backgroundColor:'#21212111', borderRadius:45}}> 
                <Image style={{width: 50, height: 50}} source={modalMenuIcon[`${menu.type}`]}/>
            </View>

            <View style={{ flex:1, borderBottomWidth:1, justifyContent:'space-around', borderColor:'#21212122'}}>
                <Text style={{fontSize:FONTSCALE(2), fontWeight:900}}>{menu.title}</Text>
                <Text style={{fontSize:FONTSCALE(1)}}>{menu.description}</Text>
            </View>

            <View style={{justifyContent:'center'}}>
                <Image style={{width:20, height:20}} source={modalMenuIcon.greaterthan}/>
            </View>
        </TouchableOpacity>
    )
}