import React from "react";
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { getNavigationScreen } from "@screens";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_2027_6612}>
        <Text style={styles.Text_2027_6612}>Need an account?</Text>
      </View>
      <View style={styles.View_2241_12378}>
        <Text style={styles.Text_2241_12378}>
          By continuing, you are indicating that you accept our Terms of Service
          and Privacy Policy.
        </Text>
      </View>
      <TouchableOpacity style={styles.TouchableOpacity_2027_6614} onPress={() => this.props.navigation.navigate(getNavigationScreen("2058_8550"))}>
        <Text style={styles.Text_2027_6614}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2d852c0-1d7f-449d-b556-f74daec1765a"
    }} style={styles.TouchableOpacity_2241_12377} onPress={() => this.props.navigation.navigate(getNavigationScreen("2027_6619"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10d5def0-d191-4515-b92e-cbd70eb09576"
    }} style={styles.ImageBackground_2606_10596} />
      <View style={styles.View_2080_8988}>
        <Text style={styles.Text_2080_8988}>
          © BeTheDisc 2022 | Terms &amp; Conditions | Privacy Policy
        </Text>
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: {
    height: hp("113%")
  },
  View_2027_6612: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_2027_6612: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2241_12378: {
    width: wp("94%"),
    minWidth: wp("94%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("97%"),
    justifyContent: "flex-start"
  },
  Text_2241_12378: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2027_6614: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_2027_6614: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2241_12377: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("45%")
  },
  ImageBackground_2606_10596: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("8%"),
    resizeMode: "cover"
  },
  View_2080_8988: {
    width: wp("133%"),
    minWidth: wp("133%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-41%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_2080_8988: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);