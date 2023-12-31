import {TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
const Image = styled.Image`
    aspectRatio: 1.5;
    width:100%;
    resizeMode: cover;
    margin-bottom: 20px;
`
const Container = styled.View`
    flex:1; 
`

const Title = styled.Text`
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 20px;
`
    
const Description = styled.Text`
    text-align: center;
    font-size: 12px;
`

export default Item = ({title,img,desc, onPress}) => {
    this.handlePress = onPress;
    return (
        <Container>
        <TouchableOpacity onPress={handlePress}>
            
            <Title>{title}</Title>
            <Image src={img}></Image>
            <Description>{desc}</Description>
        
        </TouchableOpacity>
        </Container>
    )
};