import {View, Text, Modal, SafeAreaView} from 'react-native'
import WINDOW, { WINDOW_HEIGHT, WINDOW_WIDTH } from '../utils/dimensions'
import ModalMenu from './ModalMenu'
import { activityTypes } from '../constants'
export default function AddModal({isModalVisible, setIsModalVisible}) {
    return (
        <SafeAreaView>
            <Modal
                style={{}}
                animationType='slide'
                transparent={true}
                visible={isModalVisible}
                onRequestClose={()=>{
                    setIsModalVisible(prev=> !prev)
                }}
            >
            <View style={{flex:1, backgroundColor:'#00000088', position:'relative'}}>

                <View style={{position:'absolute', bottom:0, width:WINDOW_WIDTH, height:WINDOW_HEIGHT*0.4, backgroundColor:'#FEFEFE', borderRadius:50, paddingTop:10}}>
                  {   activityTypes.map((activity, index) => <ModalMenu key={index} menu={activity} />)  }

                </View>
            
            </View>

            </Modal>
        </SafeAreaView>
    )
}