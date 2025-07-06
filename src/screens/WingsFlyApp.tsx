import { StatusBar, StyleSheet, useColorScheme, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH, FONTSCALE } from '../utils/dimensions';
import logo from "../images/logo.png"
import Icon from 'react-native-vector-icons/FontAwesome'; 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Date from '../components/Date';
import { weekData } from '../constants';
import { tasks } from '../constants';

import TodaysQuoteCard from '../components/TodaysQuoteCard';
import TaskList from '../components/TaskList';
import { useState } from 'react';
import AddModal from '../components/AddModal';
export default function WingsFlyApp() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const [dateClicked, setDateClicked] = useState(4)

    return (
        <View style={{height:WINDOW_HEIGHT, width: WINDOW_WIDTH, backgroundColor:'#FEFEFE', alignItems:'center', justifyContent:'flex-start', position:'relative'}}>
            <View id='header' style={{width:'100%', flexDirection:'row', marginVertical:15, paddingHorizontal:30, alignItems:'center', justifyContent:'space-between'}}> 
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
            
            <ScrollView id='calendar view' horizontal={true} style={{flexDirection:'row', marginVertical:18, width:WINDOW_WIDTH, maxHeight:WINDOW_HEIGHT*0.1}}> 
                {weekData.map((week, index) => <Date key={index} dateid={week.id} date={week.date} day={week.day} dateClicked={dateClicked} setDateClicked={setDateClicked}></Date> )} 
            </ScrollView>

            <View id='todays quote' style={{width:WINDOW_WIDTH, alignItems:'center', justifyContent:'center'}}>
                <TodaysQuoteCard quote={'You must do the things, you think you cannot do.'} progress={65}/>
            </View>

            {/* <ScrollView id="todos" style={{backgroundColor:'green', width:WINDOW_WIDTH, marginTop:20, height:100}}>
                {tasks.map((task, index)=> <TaskList key={index} data={task}/>)}
            </ScrollView>
             */}
            <View style={{width:WINDOW_WIDTH, height:WINDOW_HEIGHT*0.56, marginTop:20}}>
                <FlatList 
                    windowSize={21}
                    data={tasks} 
                    renderItem={({item}) => <TaskList data={item}/>}
                    // keyExtractor={item => item.id}
                />
            </View>

            <TouchableOpacity style={{width:80, height:80, borderRadius: 10, backgroundColor:'#141B72', alignItems:'center', justifyContent:'center', position:'absolute', bottom:WINDOW_HEIGHT*0.03, right:30}}
                onPress={()=> setIsModalVisible(!isModalVisible)}>
                <Icon name="plus" size={30} color="#fff" />

            </TouchableOpacity>

            <AddModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />


        </View>
    )
}