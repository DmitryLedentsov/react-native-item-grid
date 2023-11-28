import {TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';

const Image = styled.Image`
    width: 100%;
    height: 100px;
    resizeMode: cover;
    margin-bottom: 20px;
`
const Container = styled.View`
    width: 45%;
    border: 2px solid #000;
    border-radius: 4px;
    backgroundColor: #c0c0c0;
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

export default Item = ({title,img,desc}) => {
    const handlePress = () => {
        Alert.alert("Item", title);
    };

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