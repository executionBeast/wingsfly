import {View, Text, TouchableOpacity} from "react-native";
import { FONTSCALE } from "../utils/dimensions";
import randomColor from "../utils/randomBgColor";
import formatDate from "../utils/date";
import AntDesign from '@expo/vector-icons/AntDesign';
const TransactionCard = ({data}) => {
    return (
        <TouchableOpacity style={{width:'100%', height:80, marginVertical:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

            <View style={{flexDirection:'row'}}>

                <View style={{width:60, height:60, borderRadius:30, borderWidth:1, backgroundColor:randomColor(), marginHorizontal:5, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize: FONTSCALE(2),color:'#fff'}}>{data.name[0]}</Text>
                </View>

                <View style={{height:60, marginHorizontal:5, alignItems:'baseline', justifyContent:'space-around'}}> 
                    <Text style={{fontSize:FONTSCALE(1.3), fontWeight:600}}>{data.name}</Text>
                    <Text>{formatDate(data.date)}</Text>
                </View>

            </View>
           
            <View style={{height:60, marginHorizontal:5, justifyContent:'space-between'}}>
                <Text style={{fontSize:FONTSCALE(1.4), fontWeight:600, marginTop:4, color:data.type === 'credit' ? 'green' : ''}}>{data.type === 'credit' ? `+₹${data.amount}` : `${data.amount}`} </Text>
                {data.status === 'failed' ? <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', gap:4}}><AntDesign name="closecircle" size={12} color="red" /><Text style={{color:'red'}}>Failed</Text></View> : <></>
                    }
            </View>
        </TouchableOpacity>
    )
}

export default TransactionCard;