import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Item from "./Item.jsx"
import ItemList from "./ItemList.jsx"
import SingleItem from "./SingleItem.jsx"

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={ItemList}
                    options={{ title: "list" }}
                />
                <Stack.Screen
                    name="Item"
                    component={SingleItem}
                    options={{ title: "item" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}