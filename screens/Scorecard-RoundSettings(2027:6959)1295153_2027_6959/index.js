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
      <View style={styles.View_3542_23744}>
        <View style={styles.View_I3542_23744_116_3819}>
          <Text style={styles.Text_I3542_23744_116_3819}>Round Setings</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e956658-8915-4f9b-8df3-f7c00c216626"
          }}
          style={styles.ImageBackground_I3542_23744_116_3817}
        />
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d85c0f46-4a84-4468-9123-b0e35f1b6d4a"
        }}
        style={styles.TouchableOpacity_3542_23746}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2174_8104"))
        }
      />
      <View style={styles.View_3542_23747}>
        <View style={styles.View_I3542_23747_154_3480}>
          <Text style={styles.Text_I3542_23747_154_3480}>
            NEXT - Choose Time/Players
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_3542_23748}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2027_8058"))
        }
      >
        <View style={styles.View_I3542_23748_154_3480}>
          <Text style={styles.Text_I3542_23748_154_3480}>Save as Draft</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3542_23749}>
        <View style={styles.View_3542_23750}>
          <View style={styles.View_3542_23751}>
            <View style={styles.View_I3542_23751_196_6035}>
              <View style={styles.View_I3542_23751_196_6035_196_6009}>
                <Text style={styles.Text_I3542_23751_196_6035_196_6009}>
                  Short (Red)
                </Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06bfdb6e-13f4-4947-8cac-1cbe7dc49ac2"
            }}
            style={styles.ImageBackground_3542_23752}
          />
        </View>
        <View style={styles.View_3542_23753}>
          <View style={styles.View_3542_23754}>
            <View style={styles.View_I3542_23754_196_6035}>
              <View style={styles.View_I3542_23754_196_6035_196_6009}>
                <Text style={styles.Text_I3542_23754_196_6035_196_6009}>
                  Yellow (Long)
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3542_23755}>
          <Text style={styles.Text_3542_23755}>Tee Pad/Basket Round 1</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7335f8-e360-4f91-b084-3d4e0006e323"
          }}
          style={styles.ImageBackground_3542_23756}
        />
      </View>
      <View style={styles.View_3542_23757}>
        <TouchableOpacity
          style={styles.TouchableOpacity_3542_23758}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2388_9826"))
          }
        >
          <View style={styles.View_3542_23759}>
            <View style={styles.View_I3542_23759_196_6035}>
              <View style={styles.View_I3542_23759_196_6035_196_6009}>
                <Text style={styles.Text_I3542_23759_196_6035_196_6009}>
                  Select Tee Pad
                </Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25307715-fad9-423c-b818-1770dd14753f"
            }}
            style={styles.ImageBackground_3542_23760}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_3542_23761}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2388_9843"))
          }
        >
          <View style={styles.View_3542_23762}>
            <View style={styles.View_I3542_23762_196_6035}>
              <View style={styles.View_I3542_23762_196_6035_196_6009}>
                <Text style={styles.Text_I3542_23762_196_6035_196_6009}>
                  Select Basket
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_3542_23763}>
          <Text style={styles.Text_3542_23763}>Tee Pad/Basket Round 2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f85f353-7874-45d1-9979-a222ccf793a9"
          }}
          style={styles.ImageBackground_3542_23764}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_3542_23765}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2383_9810"))
        }
      >
        <View style={styles.View_3542_23766}>
          <View style={styles.View_I3542_23766_196_6035}>
            <View style={styles.View_I3542_23766_196_6035_196_6009}>
              <Text style={styles.Text_I3542_23766_196_6035_196_6009}>2</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c2e5bad-20a3-4f98-ab09-530858bc822f"
          }}
          style={styles.ImageBackground_3542_23767}
        />
      </TouchableOpacity>
      <View style={styles.View_3542_23768}>
        <Text style={styles.Text_3542_23768}>Rounds</Text>
      </View>
      <View style={styles.View_3542_23769}>
        <View style={styles.View_3542_23770}>
          <Text style={styles.Text_3542_23770}>Build Round Layout</Text>
        </View>
        <View style={styles.View_3542_23771}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56293595-1a92-4586-8eb5-cde88a75c81a"
            }}
            style={styles.ImageBackground_3542_23772}
          />
          <View style={styles.View_3542_23773}>
            <Text style={styles.Text_3542_23773}>-</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3901_25249}>
        <View style={styles.View_3542_23775}>
          <View style={styles.View_3542_23776}>
            <View style={styles.View_3542_23777}>
              <Text style={styles.Text_3542_23777}>R1</Text>
            </View>
            <View style={styles.View_3542_23778}>
              <Text style={styles.Text_3542_23778}>R2</Text>
            </View>
            <View style={styles.View_3542_23779}>
              <Text style={styles.Text_3542_23779}>R3</Text>
            </View>
            <View style={styles.View_3542_23780}>
              <View style={styles.View_3542_23781} />
              <View style={styles.View_3542_23782} />
              <View style={styles.View_3542_23783}>
                <Text style={styles.Text_3542_23783}>S L</Text>
              </View>
            </View>
            <View style={styles.View_3542_23784}>
              <View style={styles.View_3542_23785} />
              <View style={styles.View_3542_23786} />
              <View style={styles.View_3542_23787}>
                <Text style={styles.Text_3542_23787}>S</Text>
              </View>
              <View style={styles.View_3542_23788}>
                <Text style={styles.Text_3542_23788}>S</Text>
              </View>
            </View>
            <View style={styles.View_3542_23789}>
              <View style={styles.View_3542_23790} />
              <View style={styles.View_3542_23791} />
              <View style={styles.View_3542_23792}>
                <Text style={styles.Text_3542_23792}>L S</Text>
              </View>
            </View>
            <View style={styles.View_3542_23793} />
            <View style={styles.View_3542_23794}>
              <Text style={styles.Text_3542_23794}>Airport Lakes Park</Text>
            </View>
            <View style={styles.View_3542_23795}>
              <Text style={styles.Text_3542_23795}>Rounds: 3 | Holes: 27</Text>
            </View>
            <View style={styles.View_3542_23796}>
              <Text style={styles.Text_3542_23796}>
                Distance: 4,341 ft Ave Time: 126 Minutes
              </Text>
            </View>
          </View>
          <View style={styles.View_3542_23797}>
            <Text style={styles.Text_3542_23797}>
              3 Scorecards | Avg: +1.34
            </Text>
          </View>
        </View>
        <View style={styles.View_3542_23798}>
          <View style={styles.View_3542_23799}>
            <View style={styles.View_3542_23800}>
              <Text style={styles.Text_3542_23800}>R1</Text>
            </View>
            <View style={styles.View_3542_23801}>
              <View style={styles.View_3542_23802}>
                <View style={styles.View_3542_23803}>
                  <Text style={styles.Text_3542_23803}>R1</Text>
                </View>
                <View style={styles.View_3542_23804}>
                  <Text style={styles.Text_3542_23804}>R2</Text>
                </View>
                <View style={styles.View_3542_23805}>
                  <View style={styles.View_3542_23806} />
                  <View style={styles.View_3542_23807} />
                  <View style={styles.View_3542_23808}>
                    <Text style={styles.Text_3542_23808}>L S</Text>
                  </View>
                </View>
                <View style={styles.View_3542_23809} />
                <View style={styles.View_3542_23810}>
                  <Text style={styles.Text_3542_23810}>Airport Lakes Park</Text>
                </View>
                <View style={styles.View_3542_23811}>
                  <Text style={styles.Text_3542_23811}>
                    Ave Score +3 | Played 4 Times
                  </Text>
                </View>
                <View style={styles.View_3542_23812}>
                  <Text style={styles.Text_3542_23812}>
                    Rounds: 3 | Holes: 27 | Distance: 8,341 Ave Time: 126
                    Minutes
                  </Text>
                </View>
                <View style={styles.View_3542_23813}>
                  <Text style={styles.Text_3542_23813}>
                    Distance: 2,851 ft Ave Time: 88 Minutes
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3542_23814} />
            <View style={styles.View_3542_23815}>
              <Text style={styles.Text_3542_23815}>Airport Lakes Park</Text>
            </View>
            <View style={styles.View_3542_23816}>
              <Text style={styles.Text_3542_23816}>
                21 Scorecards | Avg: +2.89
              </Text>
            </View>
            <View style={styles.View_3542_23817}>
              <Text style={styles.Text_3542_23817}>Rounds: 2 | Holes: 18</Text>
            </View>
            <View style={styles.View_3542_23818}>
              <View style={styles.View_3542_23819} />
              <View style={styles.View_3542_23820} />
              <View style={styles.View_3542_23821}>
                <Text style={styles.Text_3542_23821}>S L</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3542_23822}>
          <View style={styles.View_3542_23823}>
            <View style={styles.View_3542_23824}>
              <Text style={styles.Text_3542_23824}>R1</Text>
            </View>
            <View style={styles.View_3542_23825}>
              <View style={styles.View_3542_23826}>
                <View style={styles.View_3542_23827}>
                  <Text style={styles.Text_3542_23827}>R1</Text>
                </View>
                <View style={styles.View_3542_23828}>
                  <Text style={styles.Text_3542_23828}>R2</Text>
                </View>
                <View style={styles.View_3542_23829}>
                  <View style={styles.View_3542_23830} />
                  <View style={styles.View_3542_23831} />
                  <View style={styles.View_3542_23832}>
                    <Text style={styles.Text_3542_23832}>L S</Text>
                  </View>
                </View>
                <View style={styles.View_3542_23833} />
                <View style={styles.View_3542_23834}>
                  <Text style={styles.Text_3542_23834}>Airport Lakes Park</Text>
                </View>
                <View style={styles.View_3542_23835}>
                  <Text style={styles.Text_3542_23835}>
                    Ave Score +3 | Played 4 Times
                  </Text>
                </View>
                <View style={styles.View_3542_23836}>
                  <Text style={styles.Text_3542_23836}>
                    Rounds: 3 | Holes: 27 | Distance: 8,341 Ave Time: 126
                    Minutes
                  </Text>
                </View>
                <View style={styles.View_3542_23837}>
                  <Text style={styles.Text_3542_23837}>
                    Distance: 2,638 ft Ave Time: 72 Minutes
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3542_23838} />
            <View style={styles.View_3542_23839}>
              <Text style={styles.Text_3542_23839}>Airport Lakes Park</Text>
            </View>
            <View style={styles.View_3542_23840}>
              <Text style={styles.Text_3542_23840}>
                27 Scorecards | Avg: -1.77
              </Text>
            </View>
            <View style={styles.View_3542_23841}>
              <Text style={styles.Text_3542_23841}>Rounds: 2 | Holes: 18</Text>
            </View>
            <View style={styles.View_3542_23842}>
              <View style={styles.View_3542_23843} />
              <View style={styles.View_3542_23844} />
              <View style={styles.View_3542_23845}>
                <Text style={styles.Text_3542_23845}>S S</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3542_23846}>
          <Text style={styles.Text_3542_23846}>Your Layouts</Text>
        </View>
        <View style={styles.View_3542_23924}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8ff7e2f-fddf-49da-b001-adf4b8ae9d14"
            }}
            style={styles.ImageBackground_3542_23925}
          />
          <View style={styles.View_3542_23926}>
            <Text style={styles.Text_3542_23926}>-</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3901_25250}>
        <View style={styles.View_3544_23019}>
          <View source={{ uri: "null" }} style={styles.View_3542_23745} />
          <View style={styles.View_3542_23849}>
            <Text style={styles.Text_3542_23849}>Course Layouts</Text>
          </View>
          <View style={styles.View_3542_23850}>
            <View style={styles.View_3542_23851}>
              <View style={styles.View_3542_23852}>
                <Text style={styles.Text_3542_23852}>R1</Text>
              </View>
              <View style={styles.View_3542_23853}>
                <Text style={styles.Text_3542_23853}>R2</Text>
              </View>
              <View style={styles.View_3542_23854}>
                <Text style={styles.Text_3542_23854}>R3</Text>
              </View>
              <View style={styles.View_3542_23855}>
                <View style={styles.View_3542_23856} />
                <View style={styles.View_3542_23857} />
                <View style={styles.View_3542_23858}>
                  <Text style={styles.Text_3542_23858}>S L</Text>
                </View>
              </View>
              <View style={styles.View_3542_23859}>
                <View style={styles.View_3542_23860} />
                <View style={styles.View_3542_23861} />
                <View style={styles.View_3542_23862}>
                  <Text style={styles.Text_3542_23862}>S</Text>
                </View>
                <View style={styles.View_3542_23863}>
                  <Text style={styles.Text_3542_23863}>S</Text>
                </View>
              </View>
              <View style={styles.View_3542_23864}>
                <View style={styles.View_3542_23865} />
                <View style={styles.View_3542_23866} />
                <View style={styles.View_3542_23867}>
                  <Text style={styles.Text_3542_23867}>L S</Text>
                </View>
              </View>
              <View style={styles.View_3542_23868} />
              <View style={styles.View_3542_23869}>
                <Text style={styles.Text_3542_23869}>Airport Lakes Park</Text>
              </View>
              <View style={styles.View_3542_23870}>
                <Text style={styles.Text_3542_23870}>
                  Rounds: 3 | Holes: 27
                </Text>
              </View>
              <View style={styles.View_3542_23871}>
                <Text style={styles.Text_3542_23871}>
                  Distance: 4,341 ft Ave Time: 126 Minutes
                </Text>
              </View>
            </View>
            <View style={styles.View_3542_23872}>
              <Text style={styles.Text_3542_23872}>
                206 Scorecards | Avg: +2.11
              </Text>
            </View>
          </View>
          <View style={styles.View_3542_23873}>
            <View style={styles.View_3542_23874}>
              <View style={styles.View_3542_23875}>
                <Text style={styles.Text_3542_23875}>R1</Text>
              </View>
              <View style={styles.View_3542_23876}>
                <View style={styles.View_3542_23877}>
                  <View style={styles.View_3542_23878}>
                    <Text style={styles.Text_3542_23878}>R1</Text>
                  </View>
                  <View style={styles.View_3542_23879}>
                    <Text style={styles.Text_3542_23879}>R2</Text>
                  </View>
                  <View style={styles.View_3542_23880}>
                    <View style={styles.View_3542_23881} />
                    <View style={styles.View_3542_23882} />
                    <View style={styles.View_3542_23883}>
                      <Text style={styles.Text_3542_23883}>L S</Text>
                    </View>
                  </View>
                  <View style={styles.View_3542_23884} />
                  <View style={styles.View_3542_23885}>
                    <Text style={styles.Text_3542_23885}>
                      Airport Lakes Park
                    </Text>
                  </View>
                  <View style={styles.View_3542_23886}>
                    <Text style={styles.Text_3542_23886}>
                      Ave Score +3 | Played 4 Times
                    </Text>
                  </View>
                  <View style={styles.View_3542_23887}>
                    <Text style={styles.Text_3542_23887}>
                      Rounds: 3 | Holes: 27 | Distance: 8,341 Ave Time: 126
                      Minutes
                    </Text>
                  </View>
                  <View style={styles.View_3542_23888}>
                    <Text style={styles.Text_3542_23888}>
                      Distance: 2,851 ft Ave Time: 88 Minutes
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_3542_23889} />
              <View style={styles.View_3542_23890}>
                <Text style={styles.Text_3542_23890}>Airport Lakes Park</Text>
              </View>
              <View style={styles.View_3542_23891}>
                <Text style={styles.Text_3542_23891}>
                  1,572 Scorecards | Avg: +3.11
                </Text>
              </View>
              <View style={styles.View_3542_23892}>
                <Text style={styles.Text_3542_23892}>
                  Rounds: 2 | Holes: 18
                </Text>
              </View>
              <View style={styles.View_3542_23893}>
                <View style={styles.View_3542_23894} />
                <View style={styles.View_3542_23895} />
                <View style={styles.View_3542_23896}>
                  <Text style={styles.Text_3542_23896}>S L</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3542_23897}>
            <View style={styles.View_3542_23898}>
              <View style={styles.View_3542_23899}>
                <Text style={styles.Text_3542_23899}>R1</Text>
              </View>
              <View style={styles.View_3542_23900}>
                <View style={styles.View_3542_23901}>
                  <View style={styles.View_3542_23902}>
                    <Text style={styles.Text_3542_23902}>R1</Text>
                  </View>
                  <View style={styles.View_3542_23903}>
                    <Text style={styles.Text_3542_23903}>R2</Text>
                  </View>
                  <View style={styles.View_3542_23904}>
                    <View style={styles.View_3542_23905} />
                    <View style={styles.View_3542_23906} />
                    <View style={styles.View_3542_23907}>
                      <Text style={styles.Text_3542_23907}>L S</Text>
                    </View>
                  </View>
                  <View style={styles.View_3542_23908} />
                  <View style={styles.View_3542_23909}>
                    <Text style={styles.Text_3542_23909}>
                      Airport Lakes Park
                    </Text>
                  </View>
                  <View style={styles.View_3542_23910}>
                    <Text style={styles.Text_3542_23910}>
                      Ave Score +3 | Played 4 Times
                    </Text>
                  </View>
                  <View style={styles.View_3542_23911}>
                    <Text style={styles.Text_3542_23911}>
                      Rounds: 3 | Holes: 27 | Distance: 8,341 Ave Time: 126
                      Minutes
                    </Text>
                  </View>
                  <View style={styles.View_3542_23912}>
                    <Text style={styles.Text_3542_23912}>
                      Distance: 2,638 ft Ave Time: 72 Minutes
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_3542_23913} />
              <View style={styles.View_3542_23914}>
                <Text style={styles.Text_3542_23914}>Airport Lakes Park</Text>
              </View>
              <View style={styles.View_3542_23915}>
                <Text style={styles.Text_3542_23915}>
                  2,698 Scorecards | Avg: +.39
                </Text>
              </View>
              <View style={styles.View_3542_23916}>
                <Text style={styles.Text_3542_23916}>
                  Rounds: 2 | Holes: 18
                </Text>
              </View>
              <View style={styles.View_3542_23917}>
                <View style={styles.View_3542_23918} />
                <View style={styles.View_3542_23919} />
                <View style={styles.View_3542_23920}>
                  <Text style={styles.Text_3542_23920}>S S</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3542_23921}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9016abb1-cceb-4f30-8ace-fb46c401b212"
              }}
              style={styles.ImageBackground_3542_23922}
            />
            <View style={styles.View_3542_23923}>
              <Text style={styles.Text_3542_23923}>-</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3901_25224}>
          <View style={styles.View_3901_25225}>
            <View style={styles.View_3901_25226}>
              <Text style={styles.Text_3901_25226}>R1</Text>
            </View>
            <View style={styles.View_3901_25227}>
              <View style={styles.View_3901_25228}>
                <View style={styles.View_3901_25229}>
                  <Text style={styles.Text_3901_25229}>R1</Text>
                </View>
                <View style={styles.View_3901_25230}>
                  <Text style={styles.Text_3901_25230}>R2</Text>
                </View>
                <View style={styles.View_3901_25231}>
                  <View style={styles.View_3901_25232} />
                  <View style={styles.View_3901_25233} />
                  <View style={styles.View_3901_25234}>
                    <Text style={styles.Text_3901_25234}>L S</Text>
                  </View>
                </View>
                <View style={styles.View_3901_25235} />
                <View style={styles.View_3901_25236}>
                  <Text style={styles.Text_3901_25236}>Airport Lakes Park</Text>
                </View>
                <View style={styles.View_3901_25237}>
                  <Text style={styles.Text_3901_25237}>
                    Ave Score +3 | Played 4 Times
                  </Text>
                </View>
                <View style={styles.View_3901_25238}>
                  <Text style={styles.Text_3901_25238}>
                    Rounds: 3 | Holes: 27 | Distance: 8,341 Ave Time: 126
                    Minutes
                  </Text>
                </View>
                <View style={styles.View_3901_25239}>
                  <Text style={styles.Text_3901_25239}>
                    Distance: 2,851 ft Ave Time: 88 Minutes
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3901_25240} />
            <View style={styles.View_3901_25241}>
              <Text style={styles.Text_3901_25241}>Airport Lakes Park</Text>
            </View>
            <View style={styles.View_3901_25242}>
              <Text style={styles.Text_3901_25242}>
                1,498 Scorecards | Avg: +1.11
              </Text>
            </View>
            <View style={styles.View_3901_25243}>
              <Text style={styles.Text_3901_25243}>Rounds: 2 | Holes: 18</Text>
            </View>
            <View style={styles.View_3901_25244}>
              <View style={styles.View_3901_25245} />
              <View style={styles.View_3901_25246} />
              <View style={styles.View_3901_25247}>
                <Text style={styles.Text_3901_25247}>S L</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3542_23847}>
        <Text style={styles.Text_3542_23847}>
          Airport Lakes Park, Orlando FL
        </Text>
      </View>
      <View style={styles.View_3542_23848}>
        <Text style={styles.Text_3542_23848}>
          9 Holes | Length: 2130 ft. - 3010 ft. 2 Tee Pads | 2 Basklets Per Hole
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("205%") },
  View_3542_23744: {
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
  View_I3542_23744_116_3819: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I3542_23744_116_3819: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I3542_23744_116_3817: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%")
  },
  TouchableOpacity_3542_23746: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_3542_23747: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("187%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I3542_23747_154_3480: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I3542_23747_154_3480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  TouchableOpacity_3542_23748: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("196%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_I3542_23748_154_3480: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I3542_23748_154_3480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_3542_23749: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("139%")
  },
  View_3542_23750: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_3542_23751: {
    width: wp("89%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3542_23751_196_6035: {
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
  View_I3542_23751_196_6035_196_6009: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3542_23751_196_6035_196_6009: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3542_23752: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_3542_23753: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_3542_23754: {
    width: wp("89%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3542_23754_196_6035: {
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
  View_I3542_23754_196_6035_196_6009: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3542_23754_196_6035_196_6009: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3542_23755: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23755: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_3542_23756: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_3542_23757: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("163%")
  },
  TouchableOpacity_3542_23758: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_3542_23759: {
    width: wp("89%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3542_23759_196_6035: {
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
  View_I3542_23759_196_6035_196_6009: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3542_23759_196_6035_196_6009: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3542_23760: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_3542_23761: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_3542_23762: {
    width: wp("89%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3542_23762_196_6035: {
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
  View_I3542_23762_196_6035_196_6009: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3542_23762_196_6035_196_6009: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3542_23763: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23763: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_3542_23764: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_3542_23765: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("129%")
  },
  View_3542_23766: {
    width: wp("25%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3542_23766_196_6035: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3542_23766_196_6035_196_6009: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I3542_23766_196_6035_196_6009: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3542_23767: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_3542_23768: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("130%"),
    justifyContent: "flex-start"
  },
  Text_3542_23768: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3542_23769: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("124%")
  },
  View_3542_23770: {
    width: wp("90%"),
    minWidth: wp("90%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23770: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3542_23771: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  ImageBackground_3542_23772: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3542_23773: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3542_23773: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3901_25249: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3542_23775: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_3542_23776: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3542_23777: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23777: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23778: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23778: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23779: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23779: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23780: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%")
  },
  View_3542_23781: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23782: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 245, 0, 1)"
  },
  View_3542_23783: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23783: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23784: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("2%")
  },
  View_3542_23785: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23786: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23787: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23787: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23788: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_3542_23788: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23789: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_3542_23790: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3542_23791: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23792: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23792: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23793: {
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
  View_3542_23794: {
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
  Text_3542_23794: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23795: {
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
  Text_3542_23795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23796: {
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
  Text_3542_23796: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23797: {
    width: wp("59%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_3542_23797: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23798: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_3542_23799: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3542_23800: {
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
  Text_3542_23800: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23801: {
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
  View_3542_23802: {
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
  View_3542_23803: {
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
  Text_3542_23803: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23804: {
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
  Text_3542_23804: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23805: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_3542_23806: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3542_23807: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23808: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23809: {
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
  View_3542_23810: {
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
  Text_3542_23810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23811: {
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
  Text_3542_23811: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23812: {
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
  Text_3542_23812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23813: {
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
  Text_3542_23813: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23814: {
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
  View_3542_23815: {
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
  Text_3542_23815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23816: {
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
  Text_3542_23816: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23817: {
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
  Text_3542_23817: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23818: {
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
  View_3542_23819: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23820: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 245, 0, 1)"
  },
  View_3542_23821: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23821: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23822: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_3542_23823: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3542_23824: {
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
  Text_3542_23824: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23825: {
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
  View_3542_23826: {
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
  View_3542_23827: {
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
  Text_3542_23827: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23828: {
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
  Text_3542_23828: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23829: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_3542_23830: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3542_23831: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23832: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23832: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23833: {
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
  View_3542_23834: {
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
  Text_3542_23834: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23835: {
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
  Text_3542_23835: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23836: {
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
  Text_3542_23836: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23837: {
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
  Text_3542_23837: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23838: {
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
  View_3542_23839: {
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
  Text_3542_23839: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23840: {
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
  Text_3542_23840: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23841: {
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
  Text_3542_23841: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23842: {
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
  View_3542_23843: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23844: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23845: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23846: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23846: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3542_23924: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("0%")
  },
  ImageBackground_3542_23925: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3542_23926: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3542_23926: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3901_25250: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("68%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3544_23019: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3542_23745: {
    width: wp("27%"),
    height: hp("14%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_3542_23849: {
    width: wp("90%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23849: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3542_23850: {
    width: wp("90%"),
    height: hp("11%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3542_23851: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3542_23852: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23852: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23853: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23853: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23854: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23854: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23855: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%")
  },
  View_3542_23856: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23857: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 245, 0, 1)"
  },
  View_3542_23858: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23858: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23859: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("2%")
  },
  View_3542_23860: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23861: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23862: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23862: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23863: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_3542_23863: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23864: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_3542_23865: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3542_23866: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23867: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23867: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23868: {
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
  View_3542_23869: {
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
  Text_3542_23869: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23870: {
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
  Text_3542_23870: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23871: {
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
  Text_3542_23871: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23872: {
    width: wp("59%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_3542_23872: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23873: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3542_23874: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3542_23875: {
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
  Text_3542_23875: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23876: {
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
  View_3542_23877: {
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
  View_3542_23878: {
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
  Text_3542_23878: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23879: {
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
  Text_3542_23879: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23880: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_3542_23881: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3542_23882: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23883: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23883: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23884: {
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
  View_3542_23885: {
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
  Text_3542_23885: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23886: {
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
  Text_3542_23886: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23887: {
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
  Text_3542_23887: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23888: {
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
  Text_3542_23888: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23889: {
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
  View_3542_23890: {
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
  Text_3542_23890: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23891: {
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
  Text_3542_23891: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23892: {
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
  Text_3542_23892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23893: {
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
  View_3542_23894: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23895: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 245, 0, 1)"
  },
  View_3542_23896: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23896: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23897: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3542_23898: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3542_23899: {
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
  Text_3542_23899: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23900: {
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
  View_3542_23901: {
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
  View_3542_23902: {
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
  Text_3542_23902: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23903: {
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
  Text_3542_23903: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23904: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_3542_23905: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3542_23906: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23907: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23907: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3542_23908: {
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
  View_3542_23909: {
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
  Text_3542_23909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23910: {
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
  Text_3542_23910: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23911: {
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
  Text_3542_23911: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23912: {
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
  Text_3542_23912: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23913: {
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
  View_3542_23914: {
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
  Text_3542_23914: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23915: {
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
  Text_3542_23915: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23916: {
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
  Text_3542_23916: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23917: {
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
  View_3542_23918: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23919: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3542_23920: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3542_23920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23921: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_3542_23922: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3542_23923: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3542_23923: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3901_25224: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_3901_25225: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3901_25226: {
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
  Text_3901_25226: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25227: {
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
  View_3901_25228: {
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
  View_3901_25229: {
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
  Text_3901_25229: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25230: {
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
  Text_3901_25230: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25231: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_3901_25232: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3901_25233: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3901_25234: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3901_25234: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_3901_25235: {
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
  View_3901_25236: {
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
  Text_3901_25236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25237: {
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
  Text_3901_25237: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25238: {
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
  Text_3901_25238: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25239: {
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
  Text_3901_25239: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25240: {
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
  View_3901_25241: {
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
  Text_3901_25241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25242: {
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
  Text_3901_25242: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25243: {
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
  Text_3901_25243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3901_25244: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  View_3901_25245: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 43, 43, 1)"
  },
  View_3901_25246: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 245, 0, 1)"
  },
  View_3901_25247: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3901_25247: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3542_23847: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_3542_23847: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_3542_23848: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_3542_23848: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
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
