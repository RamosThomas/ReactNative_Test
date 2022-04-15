import React from "react";
import styles from "./styles";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Button,
  View,
} from "react-native";

function Main() {
  const [page, setPage] = React.useState("Main Menu");
  const [timer, setTimer] = React.useState(3);

  const handleStart = async () => {
    const interval = setInterval(() => {
      setTimer((previous) => {
        if (previous === 1 || previous === "") {
          clearInterval(interval);
          return "";
        }
        return previous - 1;
      });
    }, 1000);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar barStyle={"lightcontent"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: "white" }}
      >
        <View style={styles.box}>
          <Text style={styles.textHeader}> {page} </Text>
        </View>
        <View style={{ bottom: 10 }}>
          <Text style={{ ...styles.textHeader, color: "gray" }}> {timer} </Text>
          <Button style={styles.buttons} title="Start" onPress={handleStart} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Main;

//Using State and React Hooks
