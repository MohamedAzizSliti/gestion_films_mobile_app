import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import store from "./src/store";
import SearchPage from "./src/screens/SearchPage";
import DetailsPage from "./src/screens/DetailsPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Search"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#141414", // Dark background like Netflix
            },
            headerTintColor: "#fff", // Text color
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Search"
            component={SearchPage}
            options={{ title: "Recherche de Films" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsPage}
            options={{ title: "Détails du Film" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
