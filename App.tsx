import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IntroPage from "./lib/pages/intro/IntroPage.tsx";
import ArticlesListPage from "./lib/pages/articles-list/ArticlesListPage.tsx";
import PanierPage from "./lib/pages/panier/PanierPage.tsx";

const Stack=createStackNavigator()
const App = (): React.JSX.Element =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"articles"} >
        <Stack.Screen name={"intro"} component={IntroPage} options={{headerShown:false}}/>
        <Stack.Screen name={"articles"} component={ArticlesListPage} options={{headerShown:false}}/>
        <Stack.Screen name={"panier"} component={PanierPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
