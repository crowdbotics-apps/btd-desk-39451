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
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c16302d-a8f7-4e2b-95c4-7b60b587d4f7"
    }} style={styles.TouchableOpacity_3836_24206} onPress={() => this.props.navigation.navigate(getNavigationScreen("2174_8104"))} />
      <View style={styles.View_3836_24205}>
        <View style={styles.View_I3836_24205_116_3819}>
          <Text style={styles.Text_I3836_24205_116_3819}>
            Date/Time &amp; Players
          </Text>
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49a83676-b9b6-4ccb-9709-78aae5eaa31b"
      }} style={styles.ImageBackground_I3836_24205_116_3817} />
      </View>
      <View style={styles.View_3836_24207}>
        <View style={styles.View_3836_24208}>
          <Text style={styles.Text_3836_24208}>..</Text>
        </View>
      </View>
      <View style={styles.View_3836_24209}>
        <View style={styles.View_3836_24210}>
          <Text style={styles.Text_3836_24210}>..</Text>
        </View>
      </View>
      <View style={styles.View_3836_24211}>
        <Text style={styles.Text_3836_24211}>? ???</Text>
      </View>
      <View style={styles.View_3836_24212}>
        <View style={styles.View_3836_24213}>
          <Text style={styles.Text_3836_24213}>+</Text>
        </View>
      </View>
      <View style={styles.View_3836_24214}>
        <View style={styles.View_3836_24215}>
          <View style={styles.View_3836_24216}>
            <Text style={styles.Text_3836_24216}>R1</Text>
          </View>
          <View style={styles.View_3836_24217}>
            <View style={styles.View_3836_24218}>
              <View style={styles.View_3836_24219}>
                <Text style={styles.Text_3836_24219}>R1</Text>
              </View>
              <View style={styles.View_3836_24220}>
                <Text style={styles.Text_3836_24220}>R2</Text>
              </View>
              <View style={styles.View_3836_24221}>
                <View style={styles.View_3836_24222} />
                <View style={styles.View_3836_24223} />
                <View style={styles.View_3836_24224}>
                  <Text style={styles.Text_3836_24224}>L S</Text>
                </View>
              </View>
              <View style={styles.View_3836_24225} />
              <View style={styles.View_3836_24226}>
                <Text style={styles.Text_3836_24226}>Airport Lakes Park</Text>
              </View>
              <View style={styles.View_3836_24227}>
                <Text style={styles.Text_3836_24227}>
                  Ave Score +3 | Played 4 Times
                </Text>
              </View>
              <View style={styles.View_3836_24228}>
                <Text style={styles.Text_3836_24228}>
                  Rounds: 3 | Holes: 27 | Distance: 8,341 Ave Time: 126 Minutes
                </Text>
              </View>
              <View style={styles.View_3836_24229}>
                <Text style={styles.Text_3836_24229}>
                  Distance: 2,638 ft Ave Time: 72 Minutes
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3836_24230} />
          <View style={styles.View_3836_24231}>
            <Text style={styles.Text_3836_24231}>Airport Lakes Park</Text>
          </View>
          <View style={styles.View_3836_24232}>
            <Text style={styles.Text_3836_24232}>
              27 Scorecards | Avg: -1.77
            </Text>
          </View>
          <View style={styles.View_3836_24233}>
            <Text style={styles.Text_3836_24233}>Rounds: 2 | Holes: 18</Text>
          </View>
          <View style={styles.View_3836_24234}>
            <View style={styles.View_3836_24235} />
            <View style={styles.View_3836_24236} />
            <View style={styles.View_3836_24237}>
              <Text style={styles.Text_3836_24237}>S S</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.TouchableOpacity_3836_24238} onPress={() => this.props.navigation.navigate(getNavigationScreen("2027_7576"))}>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b605db34-c565-4ddf-bdf5-3ee205b8ced1"
      }} style={styles.ImageBackground_I3836_24238_312_11509} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/478bb92d-088e-4766-9b21-93adb27a1e9a"
      }} style={styles.ImageBackground_I3836_24238_312_11510} />
        <View style={styles.View_I3836_24238_312_11512}>
          <Text style={styles.Text_I3836_24238_312_11512}>Select Time</Text>
        </View>
        <View style={styles.View_I3836_24238_312_11514}>
          <Text style={styles.Text_I3836_24238_312_11514}>Now, 9:47AM</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity_3836_24239} onPress={() => this.props.navigation.navigate(getNavigationScreen("2027_7632"))}>
        <View style={styles.View_3836_24240}>
          <View style={styles.View_I3836_24240_307_6704}>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/234c2383-a3de-459a-b988-780300fd64a9"
          }} style={styles.ImageBackground_I3836_24240_307_6697} />
            <View style={styles.View_I3836_24240_307_6694}>
              <Text style={styles.Text_I3836_24240_307_6694}>Today</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3836_24241}>
          <Text style={styles.Text_3836_24241}>NW 6 mph</Text>
        </View>
        <View style={styles.View_3836_24242}>
          <View source={{
          uri: "null"
        }} style={styles.View_I3836_24242_206_2918} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fad89387-5ecb-45e6-86d5-edfd3d449bfd"
        }} style={styles.ImageBackground_I3836_24242_206_2919} />
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f88ed8b-97c2-4484-ab3d-634ae5fbeaba"
      }} style={styles.ImageBackground_3836_24243} />
        <View style={styles.View_3836_24244}>
          <Text style={styles.Text_3836_24244}>72°</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3836_24245}>
        <Text style={styles.Text_3836_24245}>When do you want to play?</Text>
      </View>
      <View style={styles.View_3836_24246}>
        <View style={styles.View_3836_24248}>
          <View style={styles.View_3836_24250}>
            <Text style={styles.Text_3836_24250}>Individual Play</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.TouchableOpacity_3836_24251} onPress={() => this.props.navigation.navigate(getNavigationScreen("3836_24273"))}>
        <View style={styles.View_3836_24253}>
          <Text style={styles.Text_3836_24253}>Team Play</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3836_24254}>
        <View style={styles.View_3836_24255} />
      </View>
      <View style={styles.View_3836_24256} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2fe0be4-92eb-4ee1-85a2-de7725a1dc51"
    }} style={styles.ImageBackground_3836_24257} />
      <View style={styles.View_3836_24258}>
        <View style={styles.View_3836_24259} />
      </View>
      <View style={styles.View_3836_24260} />
      <View style={styles.View_3843_24594}>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/786e76d7-45ed-4045-858c-15b4a35da8b2"
      }} style={styles.ImageBackground_I3843_24594_206_2825} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84b4fda4-d6fb-477f-a2a7-0d11ea7a06c7"
      }} style={styles.ImageBackground_I3843_24594_206_2826} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2288e962-7024-43d0-99c4-d28efbb70023"
      }} style={styles.ImageBackground_I3843_24594_206_2829} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0df9fea-ac73-46cc-9160-8e43abf51d78"
      }} style={styles.ImageBackground_I3843_24594_206_2830} />
        <View source={{
        uri: "null"
      }} style={styles.View_I3843_24594_206_2831} />
      </View>
      <View style={styles.View_3836_24261}>
        <Text style={styles.Text_3836_24261}>Airport Lakes Park</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc2a6d41-9c9a-4e7f-8a46-345b960d4ae7"
    }} style={styles.ImageBackground_3836_24262} />
      <TouchableOpacity style={styles.TouchableOpacity_3836_24263} onPress={() => this.props.navigation.navigate(getNavigationScreen("3836_25222"))}>
        <View style={styles.View_3901_25918}>
          <View style={styles.View_3836_24264}>
            <Text style={styles.Text_3836_24264}>Add Players</Text>
          </View>
          <View style={styles.View_3836_24265}>
            <View style={styles.View_3836_24266}>
              <Text style={styles.Text_3836_24266}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3836_24267}>
        <Text style={styles.Text_3836_24267}>Jonathan</Text>
      </View>
      <View style={styles.View_3836_24268}>
        <Text style={styles.Text_3836_24268}>Owen</Text>
      </View>
      <View style={styles.View_3836_24269}>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ac62ca4-696e-4e51-9b9c-3d6e84a67fea"
      }} style={styles.ImageBackground_I3836_24269_287_6515} />
      </View>
      <TouchableOpacity style={styles.TouchableOpacity_3836_24271} onPress={() => this.props.navigation.navigate(getNavigationScreen("2031_7833"))}>
        <View style={styles.View_I3836_24271_154_3480}>
          <Text style={styles.Text_I3836_24271_154_3480}>Play Now</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity_3836_24272} onPress={() => this.props.navigation.navigate(getNavigationScreen("2027_8058"))}>
        <View style={styles.View_I3836_24272_154_3480}>
          <Text style={styles.Text_I3836_24272_154_3480}>Save as draft</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: {
    height: hp("119%")
  },
  TouchableOpacity_3836_24206: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("-56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_3836_24205: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3836_24205_116_3819: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I3836_24205_116_3819: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I3836_24205_116_3817: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%")
  },
  View_3836_24207: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("68%")
  },
  View_3836_24208: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3836_24208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24209: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("65%")
  },
  View_3836_24210: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3836_24210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24211: {
    width: wp("9%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "center"
  },
  Text_3836_24211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24212: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_3836_24213: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3836_24213: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24214: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%")
  },
  View_3836_24215: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3836_24216: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_3836_24216: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24217: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3836_24218: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3836_24219: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3836_24219: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24220: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3836_24220: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24221: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_3836_24222: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3836_24223: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3836_24224: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3836_24224: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3836_24225: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_3836_24226: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_3836_24226: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24227: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_3836_24227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24228: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3836_24228: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24229: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_3836_24229: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24230: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_3836_24231: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_3836_24231: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24232: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_3836_24232: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24233: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3836_24233: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3836_24234: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%")
  },
  View_3836_24235: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3836_24236: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3836_24237: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3836_24237: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_3836_24238: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3836_24238_312_11509: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  ImageBackground_I3836_24238_312_11510: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("3%")
  },
  View_I3836_24238_312_11512: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3836_24238_312_11512: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I3836_24238_312_11514: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I3836_24238_312_11514: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3836_24239: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3836_24240: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3836_24240_307_6704: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3836_24240_307_6697: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3836_24240_307_6694: {
    width: wp("75%"),
    minWidth: wp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3836_24240_307_6694: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3836_24241: {
    width: wp("25%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    justifyContent: "flex-start"
  },
  Text_3836_24241: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3836_24242: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3836_24242_206_2918: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3836_24242_206_2919: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_3836_24243: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_3836_24244: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3836_24244: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3836_24245: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_3836_24245: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24246: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("56%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3836_24248: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3836_24250: {
    width: wp("75%"),
    minWidth: wp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3836_24250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3836_24251: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("56%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3836_24253: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3836_24253: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3836_24254: {
    width: wp("92%"),
    height: hp("22%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_3836_24255: {
    width: wp("92%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3836_24256: {
    width: wp("10%"),
    height: hp("21%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(29, 94, 155, 1)"
  },
  ImageBackground_3836_24257: {
    width: wp("83%"),
    height: hp("0%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_3836_24258: {
    width: wp("92%"),
    height: hp("22%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_3836_24259: {
    width: wp("92%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(50, 63, 75, 1)"
  },
  View_3836_24260: {
    width: wp("92%"),
    height: hp("22%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(50, 63, 75, 1)"
  },
  View_3843_24594: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3843_24594_206_2825: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I3843_24594_206_2826: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I3843_24594_206_2829: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I3843_24594_206_2830: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I3843_24594_206_2831: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3836_24261: {
    width: wp("39%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_3836_24261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34,
    textTransform: "none"
  },
  ImageBackground_3836_24262: {
    width: wp("103%"),
    height: hp("6%"),
    top: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%")
  },
  TouchableOpacity_3836_24263: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("82%")
  },
  View_3901_25918: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3836_24264: {
    width: wp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3836_24264: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24265: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_3836_24266: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3836_24266: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24267: {
    width: wp("38%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "center"
  },
  Text_3836_24267: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24268: {
    width: wp("27%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "center"
  },
  Text_3836_24268: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3836_24269: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(213, 230, 251, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3836_24269_287_6515: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%")
  },
  TouchableOpacity_3836_24271: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("98%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I3836_24271_154_3480: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I3836_24271_154_3480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  TouchableOpacity_3836_24272: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("106%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_I3836_24272_154_3480: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I3836_24272_154_3480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);