import React, { useState, useEffect } from "react";
import {View, ScrollView, StatusBar, RefreshControl} from 'react-native';
import axios from "axios";
import styled from 'styled-components/native';
import Item from './Item.jsx';

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 0;
  justify-content: center;
`

const ItemContainer = styled.View`
    width: 45%;
    border: 2px solid #000;
    border-radius: 4px;
    backgroundColor: #c0c0c0;
`

export default function ItemList({navigation}) {
  const [items, setItems] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const getData = ()=>{
    axios
    .get('https://655baee0ab37729791a97996.mockapi.io/api/posts')
    .then((response) => {
      let data = response.data;
      setItems(data);
    })
  };
  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
      <ScrollView 
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getData} />
        }>
        <Container>
            {items.map((obj, index) => 
                <ItemContainer key={index}>
                    <Item onPress={()=> {
                        navigation.navigate("Item", {
                            img: obj.avatar,
                            title: obj.title,
                            description: obj.description,
                        })
                    }}  title={obj.title} desc={obj.description} img={obj.avatar}/>
                </ItemContainer>
            )}
        </Container>
      </ScrollView>
    </View>
  );
}