import { StatusBar, StyleSheet, useColorScheme, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH, FONTSCALE } from '../utils/dimensions';
import logo from "../images/logo.png"
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Date from '../components/Date';
import { weekData } from '../constants';
import { tasks } from '../constants';

import TodaysQuoteCard from '../components/TodaysQuoteCard';
import TaskList from '../components/TaskList';
export default function WingsFlyApp() {
    return (
        <View style={{flex:1, backgroundColor:'#FEFEFE', alignItems:'center', justifyContent:'flex-start'}}>
            <View id='header' style={{width:'100%', flexDirection:'row', marginVertical:15, paddingHorizontal:40, alignItems:'center', justifyContent:'space-between'}}> 
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image style={{width: 40, height:40} }
                        source={logo}
                    /> <Text style={{fontSize: FONTSCALE(2), fontWeight:900, color:'#363636'}}> WingsFly</Text>
                </View> 

                <View style={{flexDirection:'row', gap:30, alignItems:'center', justifyContent:'center'}}>
                    <Icon name="search" size={25} color="#000" />
                    <Icon name="calendar" size={25} color="#000" />
                    <Icon name="question-circle" size={25} color="#000" />

                </View>
        
            </View>
            
            <ScrollView id='calendar view' horizontal={true} style={{flexDirection:'row', marginVertical:18, width:WINDOW_WIDTH, maxHeight:WINDOW_HEIGHT*0.1, backgroundColor:''}}> 
                {weekData.map((week, index) => <Date date={week.date} day={week.day}></Date> )} 
                
            </ScrollView>

            <View id='todays quote' style={{width:WINDOW_WIDTH, alignItems:'center', justifyContent:'center'}}>
                <TodaysQuoteCard quote={'You must do the things, you think you cannot do.'} progress={65}/>
            </View>

            <View id="todos" style={{backgroundColor:'#FEFEFE', width:WINDOW_WIDTH, flex:1, marginTop:20}}>
                {tasks.map((task)=> <TaskList key={task.id} data={task}/>)}
            </View>
        </View>
    )
}