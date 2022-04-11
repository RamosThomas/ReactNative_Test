import React from "react";
import styles from "./styles";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Button,
} from "react-native";

function Main() {
  const [page, setPage] = React.useState("Home");
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar barStyle={"lightcontent"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: "white" }}
      >
        <Text style={styles.textHeader}> {page} </Text>
        <Button title="BUtton" onPress={() => setPage("Profile")} />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Main;

//Using State and React Hooks
