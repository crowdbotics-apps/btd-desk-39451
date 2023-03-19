import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/452968b2-049a-4daf-801b-ae67a5c8d10a"
        }}
        style={styles.TouchableOpacity_3027_17468}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2174_8104"))
        }
      />
      <View style={styles.View_3027_17471}>
        <View style={styles.View_I3027_17471_2027_6632}>
          <View style={styles.View_I3027_17471_2027_6633}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I3027_17471_2027_6633_176_356}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("2027_8058"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/432e63c7-3729-4279-9e57-1ebd566326e0"
                }}
                style={styles.ImageBackground_I3027_17471_2027_6633_176_357}
              />
              <View style={styles.View_I3027_17471_2027_6633_176_358}>
                <Text style={styles.Text_I3027_17471_2027_6633_176_358}>
                  Scorecards
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.View_I3027_17471_2027_6633_176_359}>
              <View style={styles.View_I3027_17471_2027_6633_176_361}>
                <Text style={styles.Text_I3027_17471_2027_6633_176_361}>
                  Play Now
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3027_17471_2183_8031}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2040_7802"))
            }
          >
            <View style={styles.View_I3027_17471_2183_8033}>
              <Text style={styles.Text_I3027_17471_2183_8033}> Account</Text>
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/475b148f-2afc-43f8-a641-5bf7eae5a06c"
            }}
            style={styles.ImageBackground_I3027_17471_2183_8034}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7011e1c3-b49e-43f9-b84b-b5e081209986"
            }}
            style={styles.ImageBackground_I3027_17471_2027_6635}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I3027_17471_2183_8038}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2078_9542"))
          }
        >
          <View style={styles.View_I3027_17471_2183_8040}>
            <Text style={styles.Text_I3027_17471_2183_8040}>Courses</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I3027_17471_2183_8041}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b54c30c8-eaf5-49a8-8fe0-b28d9a780c64"
            }}
            style={styles.ImageBackground_I3027_17471_2183_8041_206_4721}
          />
        </View>
      </View>
      <View style={styles.View_3027_17424}>
        <View style={styles.View_I3027_17424_116_3819}>
          <Text style={styles.Text_I3027_17424_116_3819}>Select Course</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4e66b52-cab5-42cb-897a-38109d8e22b9"
          }}
          style={styles.ImageBackground_I3027_17424_116_3817}
        />
      </View>
      <View style={styles.View_3330_21376}>
        <View style={styles.View_3330_21377}>
          <View style={styles.View_3330_21395}>
            <View style={styles.View_3330_21396}>
              <Text style={styles.Text_3330_21396}>Nearby Courses</Text>
            </View>
            <View style={styles.View_3330_21397} />
          </View>
          <View style={styles.View_3330_21380}>
            <View style={styles.View_I3330_21380_289_8787}>
              <Text text="" style={styles.Text_I3330_21380_289_8787} />
            </View>
            <View style={styles.View_I3330_21380_289_8789} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be579679-57a8-4b1b-bb89-b77e8d7a01aa"
          }}
          style={styles.ImageBackground_3330_21383}
        />
        <View style={styles.View_3330_21399}>
          <Text style={styles.Text_3330_21399}>Distance</Text>
        </View>
        <View style={styles.View_3330_21398} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/821dd87e-3965-4ea4-8b75-7e1ee1d922a9"
        }}
        style={styles.ImageBackground_3330_21811}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a5240de-ec47-4f3a-88fe-1e7cdd42c530"
        }}
        style={styles.ImageBackground_3432_24436}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9da4cb9-b9ce-4a90-aeb1-6f1f92b6f57e"
        }}
        style={styles.ImageBackground_3432_24446}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3027_17428}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2027_6959"))
        }
      >
        <View style={styles.View_I3027_17428_196_6300}>
          <View style={styles.View_I3027_17428_196_6301}>
            <Text style={styles.Text_I3027_17428_196_6301}>
              Airport Lakes Park 6.3 mi
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0fae589-5a00-4f45-86f0-f7b88c0e4d9a"
          }}
          style={styles.ImageBackground_I3027_17428_196_6303}
        />
      </TouchableOpacity>
      <View style={styles.View_3027_17429}>
        <View style={styles.View_I3027_17429_196_6300}>
          <View style={styles.View_I3027_17429_196_6301}>
            <Text style={styles.Text_I3027_17429_196_6301}>
              Park of the Americas 1.8 mi
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8214fd49-85a4-4399-8e43-7dad1fdc6c72"
          }}
          style={styles.ImageBackground_I3027_17429_196_6303}
        />
      </View>
      <View style={styles.View_3432_24440}>
        <View style={styles.View_I3432_24440_196_6300}>
          <View style={styles.View_I3432_24440_196_6301}>
            <Text style={styles.Text_I3432_24440_196_6301}>
              Barnett Park 2.2 mi
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9627d0d7-ab40-4f48-a00d-a412d0cdd5ea"
          }}
          style={styles.ImageBackground_I3432_24440_196_6303}
        />
      </View>
      <View style={styles.View_2284_9642}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0a4d185-ed75-4956-938a-af55b5ce5961"
          }}
          style={styles.ImageBackground_2495_10405}
        />
        <View style={styles.View_2265_9700}>
          <Text style={styles.Text_2265_9700}></Text>
        </View>
        <View style={styles.View_2265_9707}>
          <View style={styles.View_2265_9708}>
            <View style={styles.View_2265_9709}>
              <Text style={styles.Text_2265_9709}>Upcoming Scorecards</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2838_21609}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2266_9579"))
          }
        >
          <View style={styles.View_2838_21610} />
          <View style={styles.View_2838_21611}>
            <Text style={styles.Text_2838_21611}>
              Airport Lakes Park Orlando, FL
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39373ab7-30c7-4e8b-8183-d4658c018a8f"
            }}
            style={styles.ImageBackground_2838_21612}
          />
          <View style={styles.View_2838_21613}>
            <Text style={styles.Text_2838_21613}>
              Thursday 1/27/22 10am 2 Rounds (18 Holes)
            </Text>
          </View>
          <View style={styles.View_2838_21614}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2aea57b5-c46d-47c7-976c-c0272338ad81"
              }}
              style={styles.ImageBackground_2838_21615}
            />
          </View>
          <View style={styles.View_2838_21616}>
            <Text style={styles.Text_2838_21616}>Chad</Text>
          </View>
          <View style={styles.View_2838_21617}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c76d61c-ff02-4910-93e4-7d527c66d5b9"
              }}
              style={styles.ImageBackground_2838_21618}
            />
          </View>
          <View style={styles.View_2838_21619}>
            <Text style={styles.Text_2838_21619}>Rob</Text>
          </View>
          <View style={styles.View_2838_21620}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e94e5de-614d-49f8-9242-39bbb842b155"
              }}
              style={styles.ImageBackground_2838_21621}
            />
          </View>
          <View style={styles.View_2838_21622}>
            <Text style={styles.Text_2838_21622}>Vivien</Text>
          </View>
          <View style={styles.View_2838_21623}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71ba483e-cfdd-4d01-b821-1e46dd5dec21"
              }}
              style={styles.ImageBackground_2838_21624}
            />
          </View>
          <View style={styles.View_2838_21625}>
            <Text style={styles.Text_2838_21625}>You</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2838_21842}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2266_9635"))
          }
        >
          <View style={styles.View_2838_21843} />
          <View style={styles.View_2838_21844}>
            <Text style={styles.Text_2838_21844}>
              Lincoln Park Park Mount Dora, FL
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f049914-2627-4514-89eb-00e7f6182f2d"
            }}
            style={styles.ImageBackground_2838_21845}
          />
          <View style={styles.View_2838_21846}>
            <Text style={styles.Text_2838_21846}>
              saturdaY 1/31/22 10am 1 Round (18 Holes)
            </Text>
          </View>
          <View style={styles.View_2838_21847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95f0fb41-a011-4d51-ac7a-e0c48e8d085c"
              }}
              style={styles.ImageBackground_2838_21848}
            />
          </View>
          <View style={styles.View_2838_21849}>
            <Text style={styles.Text_2838_21849}>Chad</Text>
          </View>
          <View style={styles.View_2838_21850}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf126b6b-157c-4b78-9159-d78181078cf6"
              }}
              style={styles.ImageBackground_2838_21851}
            />
          </View>
          <View style={styles.View_2838_21852}>
            <Text style={styles.Text_2838_21852}>Rob</Text>
          </View>
          <View style={styles.View_2838_21853}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53c821bf-e527-4d66-b21a-1eae0b74cf82"
              }}
              style={styles.ImageBackground_2838_21854}
            />
          </View>
          <View style={styles.View_2838_21855}>
            <Text style={styles.Text_2838_21855}>Vivien</Text>
          </View>
          <View style={styles.View_2838_21856}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61b7cb36-e83a-478a-b23e-01c12878b40c"
              }}
              style={styles.ImageBackground_2838_21857}
            />
          </View>
          <View style={styles.View_2838_21858}>
            <Text style={styles.Text_2838_21858}>You</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_3027_17467}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2686_17062"))
        }
      >
        <View style={styles.View_I3027_17467_196_6035}>
          <View style={styles.View_I3027_17467_196_6035_196_6009}>
            <Text style={styles.Text_I3027_17467_196_6035_196_6009}>
              Search by name, location
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeeae33a-96e0-42ce-a0fa-50649b8a0b95"
            }}
            style={styles.ImageBackground_I3027_17467_196_6035_196_6011}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4d6c289-8743-40a0-8584-182a9ee84300"
        }}
        style={styles.TouchableOpacity_3522_24128}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2174_8104"))
        }
      />
      <View style={styles.View_3579_22923}>
        <TouchableOpacity
          style={styles.TouchableOpacity_3432_24453}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2027_6959"))
          }
        >
          <View style={styles.View_3432_24454} />
          <View style={styles.View_3432_24455}>
            <Text style={styles.Text_3432_24455}>Airport Lakes Park</Text>
          </View>
          <View style={styles.View_3432_24456}>
            <Text style={styles.Text_3432_24456}>Orlando, FL</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_3432_24463}>
          <View style={styles.View_3432_24464} />
          <View style={styles.View_3432_24465}>
            <Text style={styles.Text_3432_24465}>New Holland Park</Text>
          </View>
          <View style={styles.View_3432_24466}>
            <Text style={styles.Text_3432_24466}>New Smyrna Beach, FL</Text>
          </View>
        </View>
        <View style={styles.View_3432_24472}>
          <View style={styles.View_3432_24473} />
          <View style={styles.View_3432_24474}>
            <Text style={styles.Text_3432_24474}>Nature Preserve</Text>
          </View>
          <View style={styles.View_3432_24475}>
            <Text style={styles.Text_3432_24475}>Debary, FL</Text>
          </View>
        </View>
        <View style={styles.View_3432_24482}>
          <View style={styles.View_3432_24483} />
          <View style={styles.View_3432_24484}>
            <Text style={styles.Text_3432_24484}>
              Bill Fredrick Park at Turkey Lake - Woods
            </Text>
          </View>
          <View style={styles.View_3432_24485}>
            <Text style={styles.Text_3432_24485}>Orlando, FL</Text>
          </View>
        </View>
        <View style={styles.View_3534_23333}>
          <Text style={styles.Text_3534_23333}>Favorite Courses</Text>
        </View>
        <View style={styles.View_3579_22920}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c8e0aa7-8d78-47b5-91b4-b9279aba5557"
            }}
            style={styles.ImageBackground_3579_22921}
          />
          <View style={styles.View_3579_22922}>
            <Text style={styles.Text_3579_22922}>-</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  TouchableOpacity_3027_17468: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("-47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_3027_17471: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3027_17471_2027_6632: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3027_17471_2027_6633: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  TouchableOpacity_I3027_17471_2027_6633_176_356: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3027_17471_2027_6633_176_357: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_I3027_17471_2027_6633_176_358: {
    width: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I3027_17471_2027_6633_176_358: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I3027_17471_2027_6633_176_359: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3027_17471_2027_6633_176_361: {
    width: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I3027_17471_2027_6633_176_361: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_I3027_17471_2183_8031: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3027_17471_2183_8033: {
    width: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I3027_17471_2183_8033: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_I3027_17471_2183_8034: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_I3027_17471_2027_6635: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  TouchableOpacity_I3027_17471_2183_8038: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3027_17471_2183_8040: {
    width: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I3027_17471_2183_8040: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I3027_17471_2183_8041: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3027_17471_2183_8041_206_4721: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3027_17424: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3027_17424_116_3819: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I3027_17424_116_3819: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I3027_17424_116_3817: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%")
  },
  View_3330_21376: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3330_21377: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3330_21395: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3330_21396: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3330_21396: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3330_21397: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3330_21380: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3330_21380_289_8787: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3330_21380_289_8787: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3330_21380_289_8789: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3330_21383: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3330_21399: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    justifyContent: "flex-start"
  },
  Text_3330_21399: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3330_21398: {
    width: wp("114%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("5%"),
    backgroundColor: "rgba(50, 63, 75, 1)"
  },
  ImageBackground_3330_21811: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_3432_24436: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_3432_24446: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_3027_17428: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3027_17428_196_6300: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3027_17428_196_6301: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3027_17428_196_6301: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3027_17428_196_6303: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_3027_17429: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3027_17429_196_6300: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3027_17429_196_6301: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3027_17429_196_6301: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3027_17429_196_6303: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_3432_24440: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3432_24440_196_6300: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3432_24440_196_6301: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3432_24440_196_6301: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3432_24440_196_6303: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_2284_9642: {
    width: wp("125%"),
    minWidth: wp("125%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2495_10405: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("6%")
  },
  View_2265_9700: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2265_9700: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2265_9707: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_2265_9708: {
    width: wp("70%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2265_9709: {
    width: wp("70%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2265_9709: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  TouchableOpacity_2838_21609: {
    flexGrow: 1,
    width: wp("59%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2838_21610: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 85, 92, 1)"
  },
  View_2838_21611: {
    width: wp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_2838_21611: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  ImageBackground_2838_21612: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("13%")
  },
  View_2838_21613: {
    width: wp("55%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_2838_21613: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_2838_21614: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("6%"),
    backgroundColor: "rgba(227, 231, 235, 1)",
    overflow: "hidden"
  },
  ImageBackground_2838_21615: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2838_21616: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2838_21616: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_2838_21617: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("6%"),
    backgroundColor: "rgba(227, 231, 235, 1)",
    overflow: "hidden"
  },
  ImageBackground_2838_21618: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2838_21619: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2838_21619: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_2838_21620: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("6%"),
    backgroundColor: "rgba(227, 231, 235, 1)",
    overflow: "hidden"
  },
  ImageBackground_2838_21621: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2838_21622: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2838_21622: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_2838_21623: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    backgroundColor: "rgba(227, 231, 235, 1)",
    overflow: "hidden"
  },
  ImageBackground_2838_21624: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2838_21625: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2838_21625: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_2838_21842: {
    flexGrow: 1,
    width: wp("59%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2838_21843: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 85, 92, 1)"
  },
  View_2838_21844: {
    width: wp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_2838_21844: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  ImageBackground_2838_21845: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("13%")
  },
  View_2838_21846: {
    width: wp("55%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_2838_21846: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_2838_21847: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("6%"),
    backgroundColor: "rgba(227, 231, 235, 1)",
    overflow: "hidden"
  },
  ImageBackground_2838_21848: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2838_21849: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2838_21849: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_2838_21850: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("6%"),
    backgroundColor: "rgba(227, 231, 235, 1)",
    overflow: "hidden"
  },
  ImageBackground_2838_21851: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2838_21852: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2838_21852: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_2838_21853: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("6%"),
    backgroundColor: "rgba(227, 231, 235, 1)",
    overflow: "hidden"
  },
  ImageBackground_2838_21854: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2838_21855: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2838_21855: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_2838_21856: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    backgroundColor: "rgba(227, 231, 235, 1)",
    overflow: "hidden"
  },
  ImageBackground_2838_21857: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2838_21858: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2838_21858: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_3027_17467: {
    width: wp("89%"),
    height: hp("7%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3027_17467_196_6035: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3027_17467_196_6035_196_6009: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3027_17467_196_6035_196_6009: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3027_17467_196_6035_196_6011: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  TouchableOpacity_3522_24128: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_3579_22923: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("77%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_3432_24453: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3432_24454: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_3432_24455: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3432_24455: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3432_24456: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3432_24456: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3432_24463: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3432_24464: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_3432_24465: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3432_24465: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3432_24466: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3432_24466: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3432_24472: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3432_24473: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_3432_24474: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3432_24474: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3432_24475: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3432_24475: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3432_24482: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3432_24483: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_3432_24484: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3432_24484: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3432_24485: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3432_24485: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3534_23333: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3534_23333: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3579_22920: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%")
  },
  ImageBackground_3579_22921: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3579_22922: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3579_22922: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
