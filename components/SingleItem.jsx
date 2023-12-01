import {TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import {View, ScrollView, StatusBar} from 'react-native';

const ItemContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 0;
  justify-content: center;
`
export default SingleItem = ({route}) => {
    const { title, description, img } = route.params;
    return (
        <View>
            <ScrollView>
                <ItemContainer>
                    <Item title={title} desc={description} img={img}/>
                </ItemContainer>
            </ScrollView>
        </View>
    )
};