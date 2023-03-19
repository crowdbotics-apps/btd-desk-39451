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
      <View style={styles.View_2187_9500}>
        <View style={styles.View_2027_6632}>
          <View style={styles.View_2027_6633}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I2027_6633_176_356}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("2027_8058"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a656634-e9d9-4566-b56d-335d9f8f6654"
                }}
                style={styles.ImageBackground_I2027_6633_176_357}
              />
              <View style={styles.View_I2027_6633_176_358}>
                <Text style={styles.Text_I2027_6633_176_358}>Scorecards</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I2027_6633_176_359}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("2027_6829"))
              }
            >
              <View style={styles.View_I2027_6633_176_361}>
                <Text style={styles.Text_I2027_6633_176_361}>Play Now</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_2183_8031}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2040_7802"))
            }
          >
            <View style={styles.View_2183_8033}>
              <Text style={styles.Text_2183_8033}> Account</Text>
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0af45847-5366-4cc7-a84c-94023d5430ee"
            }}
            style={styles.ImageBackground_2183_8034}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c5d0926-1848-4990-8ff1-f9886337a9c7"
            }}
            style={styles.ImageBackground_2027_6635}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2183_8038}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2078_9542"))
          }
        >
          <View style={styles.View_2183_8040}>
            <Text style={styles.Text_2183_8040}>Courses</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_2183_8041}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/260da88b-84db-4294-b09b-15fc63544188"
            }}
            style={styles.ImageBackground_I2183_8041_206_4721}
          />
        </View>
      </View>
      <View style={styles.View_3592_22791}>
        <View style={styles.View_I3592_22791_564_10329}>
          <Text style={styles.Text_I3592_22791_564_10329}>Dashboard</Text>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97571122-758a-40a9-a7df-b2970db38db5"
        }}
        style={styles.TouchableOpacity_3592_22792}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2174_8104"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3592_22793}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2377_9770"))
        }
      >
        <View style={styles.View_I3592_22793_154_3480}>
          <Text style={styles.Text_I3592_22793_154_3480}>
            Report Bug or feature request
          </Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c7a9a63-1ed7-431c-a236-3f05f179c541"
        }}
        style={styles.ImageBackground_3592_22794}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/782b5949-5e2f-42d0-93a7-179e46f2e4cd"
        }}
        style={styles.ImageBackground_3592_22795}
      />
      <View style={styles.View_3592_22796}>
        <View style={styles.View_3592_22797}>
          <Text style={styles.Text_3592_22797}>BeTheDisc</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbdd805f-7d34-468e-9873-78066e41c48a"
          }}
          style={styles.ImageBackground_3592_22798}
        />
        <View style={styles.View_3592_22799}>
          <View style={styles.View_3592_22800}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e5e4100-4080-4d8b-afc8-7666e5977515"
              }}
              style={styles.ImageBackground_I3592_22800_206_4733}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75262af8-affa-4484-9558-14ecda139327"
            }}
            style={styles.ImageBackground_3592_22801}
          />
        </View>
        <View style={styles.View_3592_22802}>
          <View style={styles.View_3592_22803}>
            <Text style={styles.Text_3592_22803}>150 likes | 4 comments</Text>
          </View>
          <View style={styles.View_3592_22804}>
            <View style={styles.View_3592_22805}>
              <Text style={styles.Text_3592_22805}>
                Beautiful morning at Pinehurst! Now what path to take?
                #pinehurst #pinehurstbrewing
              </Text>
            </View>
          </View>
          <View style={styles.View_3592_22806}>
            <View style={styles.View_3592_22807}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f355a1b-6970-45ab-887e-8f33e5b379ac"
                }}
                style={styles.ImageBackground_3592_22808}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5add54a0-a9ef-4505-b0fd-d0f3f4a8ba44"
                }}
                style={styles.ImageBackground_3592_22809}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fa97721-ea0e-45d9-b10c-caf94939cb7a"
              }}
              style={styles.ImageBackground_3592_22810}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2151628-c8d0-47c8-b5c6-c290a5ecd937"
              }}
              style={styles.ImageBackground_3592_22811}
            />
          </View>
        </View>
        <View style={styles.View_3592_22812}>
          <Text style={styles.Text_3592_22812}>April 14th, 2022</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e956c6aa-33aa-401e-8aa7-72debc6a5e8b"
          }}
          style={styles.ImageBackground_3592_22813}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_3592_22814}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2027_6829"))
        }
      >
        <View style={styles.View_3592_22815}>
          <Text style={styles.Text_3592_22815}>PLAY NOW</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3592_22816}>
        <View style={styles.View_3592_22817}>
          <Text style={styles.Text_3592_22817}>
            Recent Moments from you and friends:
          </Text>
        </View>
        <View style={styles.View_3592_22818}>
          <View style={styles.View_3592_22819}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4839b1f8-28d5-429a-a12f-bd56943a7573"
              }}
              style={styles.ImageBackground_3592_22820}
            />
            <TouchableOpacity
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1db0ddaf-f31e-4c76-85a9-24b29dbc1dfb"
              }}
              style={styles.TouchableOpacity_3592_22821}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("2915_17946")
                )
              }
            />
            <TouchableOpacity
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed4d4a15-0ec4-467f-8775-721deadc1458"
              }}
              style={styles.TouchableOpacity_3592_22822}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("2915_17943")
                )
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3592_22823}>
        <View style={styles.View_3592_22824}>
          <View style={styles.View_3592_22825} />
          <View style={styles.View_3592_22826}>
            <View style={styles.View_3592_22827}>
              <View style={styles.View_3592_22828}>
                <Text style={styles.Text_3592_22828}>ALL TIME</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3592_22829}>
            <Text style={styles.Text_3592_22829}>YEAR</Text>
          </View>
          <View style={styles.View_3592_22830}>
            <View style={styles.View_3592_22831}>
              <View style={styles.View_3592_22832}>
                <View style={styles.View_3592_22833}>
                  <Text style={styles.Text_3592_22833}>MONTH</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3592_22834}>
            <View style={styles.View_3592_22835}>
              <View style={styles.View_3592_22836}>
                <View style={styles.View_3592_22837}>
                  <Text style={styles.Text_3592_22837}>WEEK</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3335_21425}>
        <View style={styles.View_3335_21401}>
          <View style={styles.View_3335_21402}>
            <Text style={styles.Text_3335_21402}>+1.43</Text>
          </View>
        </View>
        <View style={styles.View_3335_21381}>
          <Text style={styles.Text_3335_21381}>Handicap</Text>
        </View>
        <View style={styles.View_3335_21382}>
          <Text style={styles.Text_3335_21382}>2001 2010 2022</Text>
        </View>
        <View style={styles.View_3565_25237}>
          <View style={styles.View_3335_21383}>
            <Text style={styles.Text_3335_21383}>0</Text>
          </View>
          <View style={styles.View_3335_21384}>
            <Text style={styles.Text_3335_21384}>1</Text>
          </View>
          <View style={styles.View_3335_21385}>
            <Text style={styles.Text_3335_21385}>2</Text>
          </View>
          <View style={styles.View_3335_21386}>
            <Text style={styles.Text_3335_21386}>3</Text>
          </View>
          <View style={styles.View_3335_21387}>
            <Text style={styles.Text_3335_21387}>2</Text>
          </View>
          <View style={styles.View_3335_21388}>
            <Text style={styles.Text_3335_21388}>3</Text>
          </View>
          <View style={styles.View_3335_21389}>
            <Text style={styles.Text_3335_21389}>1</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64fcf823-97b2-40eb-a9dd-c0a930b31732"
          }}
          style={styles.ImageBackground_3335_21390}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5a210a7-43a0-410f-bac3-bbcab5ddc8b0"
          }}
          style={styles.ImageBackground_3335_21391}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e43f426-498e-40f7-b4ad-fde1c6762a57"
          }}
          style={styles.ImageBackground_3335_21392}
        />
      </View>
      <View style={styles.View_3592_22838}>
        <Text style={styles.Text_3592_22838}>Your Stats</Text>
      </View>
      <View style={styles.View_3592_22840}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1837357-102d-413f-8943-3cf45dfd0966"
          }}
          style={styles.ImageBackground_3592_22841}
        />
        <View style={styles.View_3592_22842}>
          <View style={styles.View_3592_22843}>
            <View style={styles.View_3592_22844} />
          </View>
          <View style={styles.View_3592_22845}>
            <View style={styles.View_3592_22846} />
          </View>
          <View style={styles.View_3592_22847} />
          <View style={styles.View_3592_22848} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d8c792c-21b6-4318-b6c7-02ab75d5b9a9"
            }}
            style={styles.ImageBackground_3592_22849}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d64809c5-1255-4fa5-bced-98ee1b8ffddc"
            }}
            style={styles.ImageBackground_3592_22850}
          />
          <View style={styles.View_3592_22851}>
            <Text style={styles.Text_3592_22851}>Ave Time Per Round</Text>
          </View>
          <View style={styles.View_3592_22852}>
            <Text style={styles.Text_3592_22852}>Steps</Text>
          </View>
          <View style={styles.View_3592_22853}>
            <View style={styles.View_3592_22854}>
              <Text style={styles.Text_3592_22854}>38.4</Text>
            </View>
          </View>
          <View style={styles.View_3592_22855}>
            <Text style={styles.Text_3592_22855}>Miles</Text>
          </View>
          <View style={styles.View_3592_22856}>
            <View style={styles.View_3592_22857}>
              <Text style={styles.Text_3592_22857}>86,400</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3592_22858}>
          <View style={styles.View_3592_22859}>
            <Text style={styles.Text_3592_22859}>1:22</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3592_22860}>
        <View style={styles.View_3592_22861}>
          <View style={styles.View_3592_22862}>
            <View style={styles.View_3592_22863} />
          </View>
          <View style={styles.View_3592_22864}>
            <View style={styles.View_3592_22865} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c8d021c-4bc6-4fe8-8c12-e3547e394356"
            }}
            style={styles.ImageBackground_3592_22866}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9011857-7ea7-492c-bfe4-d17492d711e5"
            }}
            style={styles.ImageBackground_3592_22867}
          />
        </View>
        <View style={styles.View_3592_22868}>
          <View style={styles.View_3592_22869}>
            <View style={styles.View_3592_22870}>
              <Text style={styles.Text_3592_22870}>Holes</Text>
            </View>
            <View style={styles.View_3592_22871}>
              <View style={styles.View_I3592_22871_312_10300} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96062ed5-07f0-43a9-a9b0-65d972e55e98"
                }}
                style={styles.ImageBackground_I3592_22871_312_10302}
              />
            </View>
          </View>
          <View style={styles.View_3592_22872}>
            <Text style={styles.Text_3592_22872}>1188</Text>
          </View>
        </View>
        <View style={styles.View_3592_22873}>
          <View style={styles.View_3592_22874}>
            <Text style={styles.Text_3592_22874}>Pars</Text>
          </View>
          <View style={styles.View_3592_22875}>
            <View style={styles.View_I3592_22875_312_10300} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/568bc41c-2a71-46b7-a746-615f11e0ce0d"
              }}
              style={styles.ImageBackground_I3592_22875_312_10302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fb1ba97-fe4f-4d95-abb6-8ff9a3165cde"
              }}
              style={styles.ImageBackground_I3592_22875_312_10303}
            />
          </View>
        </View>
        <View style={styles.View_3592_22876}>
          <Text style={styles.Text_3592_22876}>592</Text>
        </View>
        <View style={styles.View_3592_22877}>
          <View style={styles.View_3592_22878}>
            <View style={styles.View_3592_22879}>
              <Text style={styles.Text_3592_22879}>Birdies</Text>
            </View>
            <View style={styles.View_3592_22880}>
              <View style={styles.View_I3592_22880_312_10300} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adad800c-18a0-4165-a8bf-a593365c987a"
                }}
                style={styles.ImageBackground_I3592_22880_312_10302}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e8697cc-ad58-4caa-b482-3a2679783338"
                }}
                style={styles.ImageBackground_I3592_22880_312_10303}
              />
            </View>
          </View>
          <View style={styles.View_3592_22881}>
            <Text style={styles.Text_3592_22881}>68</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3592_22882}>
        <View style={styles.View_3592_22883}>
          <View style={styles.View_3592_22884}>
            <Text style={styles.Text_3592_22884}>Aces</Text>
          </View>
          <View style={styles.View_3592_22885}>
            <View style={styles.View_I3592_22885_312_10300} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1878113-8c63-4d92-af87-9810169933aa"
              }}
              style={styles.ImageBackground_I3592_22885_312_10302}
            />
          </View>
        </View>
        <View style={styles.View_3592_22886}>
          <Text style={styles.Text_3592_22886}>2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5161ee99-a8df-41a7-8940-d1675019c864"
          }}
          style={styles.ImageBackground_3592_22887}
        />
      </View>
      <View style={styles.View_3335_21654}>
        <View style={styles.View_3335_21450}>
          <Text style={styles.Text_3335_21450}>Scorecard Rivalries</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_3335_21496}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2913_17446"))
          }
        >
          <View style={styles.View_3335_21497} />
          <View style={styles.View_3335_21498} />
          <View style={styles.View_3335_21499}>
            <Text style={styles.Text_3335_21499}>W</Text>
          </View>
          <View style={styles.View_3335_21500}>
            <View style={styles.View_I3335_21500_312_10300} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13454fd6-7c0e-4370-ba7f-d2969a5c9ef6"
              }}
              style={styles.ImageBackground_I3335_21500_312_10302}
            />
          </View>
          <View style={styles.View_3335_21501}>
            <View style={styles.View_I3335_21501_312_10300} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bfe271e-4192-44f3-ad9b-4ca750e6a959"
              }}
              style={styles.ImageBackground_I3335_21501_312_10302}
            />
          </View>
          <View style={styles.View_3335_21502}>
            <View style={styles.View_I3335_21502_312_10300} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a21ffbc-391d-4dc5-82c2-37185855d8f4"
              }}
              style={styles.ImageBackground_I3335_21502_312_10302}
            />
          </View>
          <View style={styles.View_3335_21503}>
            <Text style={styles.Text_3335_21503}>L</Text>
          </View>
          <View style={styles.View_3335_21504}>
            <Text style={styles.Text_3335_21504}>T</Text>
          </View>
          <View style={styles.View_3335_21505} />
          <View style={styles.View_3335_21506} />
          <View style={styles.View_3335_21507}>
            <Text style={styles.Text_3335_21507}>28</Text>
          </View>
          <View style={styles.View_3335_21508}>
            <Text style={styles.Text_3335_21508}>13</Text>
          </View>
          <View style={styles.View_3335_21509}>
            <Text style={styles.Text_3335_21509}>8</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_3335_21510}>
          <Text style={styles.Text_3335_21510}>Chad Greer</Text>
        </View>
        <View style={styles.View_3335_21511}>
          <Text style={styles.Text_3335_21511}>49 Scorecards</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_3335_21512}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2939_17998"))
          }
        >
          <View style={styles.View_3335_21513} />
          <View style={styles.View_3335_21514} />
          <View style={styles.View_3335_21515}>
            <Text style={styles.Text_3335_21515}>W</Text>
          </View>
          <View style={styles.View_3335_21516}>
            <View style={styles.View_I3335_21516_312_10300} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c9b8772-7f1a-4797-89fd-588528624b8d"
              }}
              style={styles.ImageBackground_I3335_21516_312_10302}
            />
          </View>
          <View style={styles.View_3335_21517}>
            <View style={styles.View_I3335_21517_312_10300} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f21ad05b-e2d9-4286-bed3-b7ee1acda302"
              }}
              style={styles.ImageBackground_I3335_21517_312_10302}
            />
          </View>
          <View style={styles.View_3335_21518}>
            <View style={styles.View_I3335_21518_312_10300} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaee3406-6328-4998-975e-33a9d39cf058"
              }}
              style={styles.ImageBackground_I3335_21518_312_10302}
            />
          </View>
          <View style={styles.View_3335_21519}>
            <Text style={styles.Text_3335_21519}>L</Text>
          </View>
          <View style={styles.View_3335_21520}>
            <Text style={styles.Text_3335_21520}>T</Text>
          </View>
          <View style={styles.View_3335_21521} />
          <View style={styles.View_3335_21522} />
          <View style={styles.View_3335_21523}>
            <Text style={styles.Text_3335_21523}>1</Text>
          </View>
          <View style={styles.View_3335_21524}>
            <Text style={styles.Text_3335_21524}>4</Text>
          </View>
          <View style={styles.View_3335_21525}>
            <Text style={styles.Text_3335_21525}>5</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_3335_21526}>
          <Text style={styles.Text_3335_21526}>Robert, Vivien, Brian</Text>
        </View>
        <View style={styles.View_3335_21527}>
          <Text style={styles.Text_3335_21527}>10 Scorecards</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_3517_23070}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2027_8058"))
          }
        >
          <Text style={styles.Text_3517_23070}>View as Moments</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8fff38e-96de-43cf-bf1a-77bea61e0070"
        }}
        style={styles.ImageBackground_3592_22888}
      />
      <View style={styles.View_3819_23705}>
        <View style={styles.View_3592_22839}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78b3cd57-1989-4a51-8859-f58dc225fd83"
            }}
            style={styles.ImageBackground_I3592_22839_2495_10405}
          />
          <View style={styles.View_I3592_22839_2265_9700}>
            <Text style={styles.Text_I3592_22839_2265_9700}></Text>
          </View>
          <View style={styles.View_I3592_22839_2265_9707}>
            <View style={styles.View_I3592_22839_2265_9708}>
              <View style={styles.View_I3592_22839_2265_9709}>
                <Text style={styles.Text_I3592_22839_2265_9709}>
                  Upcoming Scorecards
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3592_22839_2838_21609}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2266_9579"))
            }
          >
            <View style={styles.View_I3592_22839_2838_21610} />
            <View style={styles.View_I3592_22839_2838_21611}>
              <Text style={styles.Text_I3592_22839_2838_21611}>
                Airport Lakes Park Orlando, FL
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4a1f255-2687-4f24-9b3e-77f78ca7f50b"
              }}
              style={styles.ImageBackground_I3592_22839_2838_21612}
            />
            <View style={styles.View_I3592_22839_2838_21613}>
              <Text style={styles.Text_I3592_22839_2838_21613}>
                Thursday 1/27/22 10am 2 Rounds (18 Holes)
              </Text>
            </View>
            <View style={styles.View_I3592_22839_2838_21614}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/581e552c-4f11-4198-a10a-fc3cbaf55dcf"
                }}
                style={styles.ImageBackground_I3592_22839_2838_21615}
              />
            </View>
            <View style={styles.View_I3592_22839_2838_21616}>
              <Text style={styles.Text_I3592_22839_2838_21616}>Chad</Text>
            </View>
            <View style={styles.View_I3592_22839_2838_21617}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87333d98-96af-4646-b86d-2fd1c91f05dc"
                }}
                style={styles.ImageBackground_I3592_22839_2838_21618}
              />
            </View>
            <View style={styles.View_I3592_22839_2838_21619}>
              <Text style={styles.Text_I3592_22839_2838_21619}>Rob</Text>
            </View>
            <View style={styles.View_I3592_22839_2838_21620}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67f025e0-5239-438a-a5b9-8c2fceafa2c1"
                }}
                style={styles.ImageBackground_I3592_22839_2838_21621}
              />
            </View>
            <View style={styles.View_I3592_22839_2838_21622}>
              <Text style={styles.Text_I3592_22839_2838_21622}>Vivien</Text>
            </View>
            <View style={styles.View_I3592_22839_2838_21623}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78b9bac5-9796-43e5-b986-a4ba49aeb0a1"
                }}
                style={styles.ImageBackground_I3592_22839_2838_21624}
              />
            </View>
            <View style={styles.View_I3592_22839_2838_21625}>
              <Text style={styles.Text_I3592_22839_2838_21625}>You</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3592_22839_2838_21842}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2266_9635"))
            }
          >
            <View style={styles.View_I3592_22839_2838_21843} />
            <View style={styles.View_I3592_22839_2838_21844}>
              <Text style={styles.Text_I3592_22839_2838_21844}>
                Lincoln Park Park Mount Dora, FL
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7aeed744-dd48-4197-8128-4a6ef88130de"
              }}
              style={styles.ImageBackground_I3592_22839_2838_21845}
            />
            <View style={styles.View_I3592_22839_2838_21846}>
              <Text style={styles.Text_I3592_22839_2838_21846}>
                saturdaY 1/31/22 10am 1 Round (18 Holes)
              </Text>
            </View>
            <View style={styles.View_I3592_22839_2838_21847}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d5205dd-96cf-450b-ba53-9a471604d643"
                }}
                style={styles.ImageBackground_I3592_22839_2838_21848}
              />
            </View>
            <View style={styles.View_I3592_22839_2838_21849}>
              <Text style={styles.Text_I3592_22839_2838_21849}>Chad</Text>
            </View>
            <View style={styles.View_I3592_22839_2838_21850}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fe69cbc-788e-40d1-b97b-f195253513b9"
                }}
                style={styles.ImageBackground_I3592_22839_2838_21851}
              />
            </View>
            <View style={styles.View_I3592_22839_2838_21852}>
              <Text style={styles.Text_I3592_22839_2838_21852}>Rob</Text>
            </View>
            <View style={styles.View_I3592_22839_2838_21853}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d104b17a-3243-47c5-8ecb-8eefeb1de226"
                }}
                style={styles.ImageBackground_I3592_22839_2838_21854}
              />
            </View>
            <View style={styles.View_I3592_22839_2838_21855}>
              <Text style={styles.Text_I3592_22839_2838_21855}>Vivien</Text>
            </View>
            <View style={styles.View_I3592_22839_2838_21856}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/288c8e62-c3b4-4b06-b2f5-191acb71d05d"
                }}
                style={styles.ImageBackground_I3592_22839_2838_21857}
              />
            </View>
            <View style={styles.View_I3592_22839_2838_21858}>
              <Text style={styles.Text_I3592_22839_2838_21858}>You</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("280%") },
  View_2187_9500: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2027_6632: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2027_6633: {
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
  TouchableOpacity_I2027_6633_176_356: {
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
  ImageBackground_I2027_6633_176_357: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_I2027_6633_176_358: {
    width: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I2027_6633_176_358: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_I2027_6633_176_359: {
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
  View_I2027_6633_176_361: {
    width: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I2027_6633_176_361: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_2183_8031: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2183_8033: {
    width: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2183_8033: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_2183_8034: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_2027_6635: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  TouchableOpacity_2183_8038: {
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
  View_2183_8040: {
    width: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2183_8040: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_2183_8041: {
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
  ImageBackground_I2183_8041_206_4721: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3592_22791: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3592_22791_564_10329: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I3592_22791_564_10329: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  TouchableOpacity_3592_22792: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_3592_22793: {
    width: wp("89%"),
    height: hp("7%"),
    top: hp("257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(9, 50, 105, 1)"
  },
  View_I3592_22793_154_3480: {
    flexGrow: 1,
    width: wp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I3592_22793_154_3480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  ImageBackground_3592_22794: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_3592_22795: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    resizeMode: "cover"
  },
  View_3592_22796: {
    width: wp("100%"),
    height: hp("63%"),
    top: hp("186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22797: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_3592_22797: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3592_22798: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_3592_22799: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  View_3592_22800: {
    width: wp("17%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3592_22800_206_4733: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3592_22801: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3592_22802: {
    width: wp("100%"),
    height: hp("20%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22803: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_3592_22803: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22804: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22805: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3592_22805: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22806: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3592_22808: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3592_22809: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_3592_22810: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_3592_22811: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_3592_22812: {
    width: wp("63%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_3592_22812: {
    color: "rgba(123, 135, 148, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_3592_22813: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  TouchableOpacity_3592_22814: {
    width: wp("79%"),
    height: hp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_3592_22815: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_3592_22815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_3592_22816: {
    width: wp("137%"),
    height: hp("23%"),
    top: hp("155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13%")
  },
  View_3592_22817: {
    width: wp("77%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "flex-start"
  },
  Text_3592_22817: {
    color: "rgba(9, 50, 105, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22818: {
    width: wp("137%"),
    height: hp("19%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22819: {
    width: wp("137%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3592_22820: {
    width: wp("49%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    resizeMode: "cover"
  },
  TouchableOpacity_3592_22821: {
    width: wp("41%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  TouchableOpacity_3592_22822: {
    width: wp("44%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22823: {
    width: wp("91%"),
    height: hp("4%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_3592_22824: {
    width: wp("91%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22825: {
    width: wp("91%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(50, 63, 75, 1)",
    borderWidth: 0.5
  },
  View_3592_22826: {
    width: wp("24%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22827: {
    width: wp("24%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)",
    overflow: "hidden"
  },
  View_3592_22828: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_3592_22828: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3592_22829: {
    width: wp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_3592_22829: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3592_22830: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22831: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22832: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3592_22833: {
    width: wp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_3592_22833: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3592_22834: {
    width: wp("30%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22835: {
    width: wp("25%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22836: {
    width: wp("25%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3592_22837: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_3592_22837: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21425: {
    width: wp("89%"),
    height: hp("20%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0.05999999865889549)"
  },
  View_3335_21401: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3335_21402: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_3335_21402: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3335_21381: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21381: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3335_21382: {
    flexGrow: 1,
    width: wp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_3335_21382: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3565_25237: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%")
  },
  View_3335_21383: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21383: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21384: {
    width: wp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21384: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21385: {
    width: wp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21385: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21386: {
    width: wp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21386: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21387: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21387: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21388: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21388: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21389: {
    width: wp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21389: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_3335_21390: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  ImageBackground_3335_21391: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("9%")
  },
  ImageBackground_3335_21392: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%")
  },
  View_3592_22838: {
    width: wp("45%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_3592_22838: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22840: {
    width: wp("92%"),
    height: hp("15%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_3592_22841: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22842: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3592_22843: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22844: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3592_22845: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22846: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(50, 63, 75, 1)"
  },
  View_3592_22847: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(231, 184, 32, 1)"
  },
  View_3592_22848: {
    width: wp("102%"),
    height: hp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7%"),
    backgroundColor: "rgba(231, 184, 32, 1)"
  },
  ImageBackground_3592_22849: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_3592_22850: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_3592_22851: {
    width: wp("27%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_3592_22851: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22852: {
    width: wp("11%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    justifyContent: "flex-start"
  },
  Text_3592_22852: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22853: {
    width: wp("18%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3592_22854: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3592_22854: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3592_22855: {
    width: wp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_3592_22855: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22856: {
    width: wp("18%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3592_22857: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3592_22857: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3592_22858: {
    width: wp("18%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3592_22859: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3592_22859: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3592_22860: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_3592_22861: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22862: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22863: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(50, 63, 75, 1)"
  },
  View_3592_22864: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3592_22865: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(50, 63, 75, 1)"
  },
  ImageBackground_3592_22866: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3592_22867: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_3592_22868: {
    width: wp("19%"),
    height: hp("12%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_3592_22869: {
    width: wp("18%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22870: {
    width: wp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_3592_22870: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22871: {
    width: wp("18%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3592_22871_312_10300: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3592_22871_312_10302: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3592_22872: {
    width: wp("15%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_3592_22872: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3592_22873: {
    width: wp("18%"),
    height: hp("12%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22874: {
    width: wp("9%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_3592_22874: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22875: {
    width: wp("18%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3592_22875_312_10300: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3592_22875_312_10302: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3592_22875_312_10303: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3592_22876: {
    width: wp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    justifyContent: "flex-start"
  },
  Text_3592_22876: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3592_22877: {
    width: wp("18%"),
    height: hp("12%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  View_3592_22878: {
    width: wp("18%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22879: {
    width: wp("14%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_3592_22879: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22880: {
    width: wp("18%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3592_22880_312_10300: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3592_22880_312_10302: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3592_22880_312_10303: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3592_22881: {
    width: wp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_3592_22881: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3592_22882: {
    width: wp("18%"),
    height: hp("12%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_3592_22883: {
    width: wp("18%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22884: {
    width: wp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_3592_22884: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3592_22885: {
    width: wp("18%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3592_22885_312_10300: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3592_22885_312_10302: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3592_22886: {
    width: wp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_3592_22886: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_3592_22887: {
    width: wp("18%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3335_21654: {
    width: wp("98%"),
    height: hp("22%"),
    top: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3335_21450: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21450: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  TouchableOpacity_3335_21496: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3335_21497: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3335_21498: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3335_21499: {
    width: wp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21499: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21500: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3335_21500_312_10300: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3335_21500_312_10302: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3335_21501: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3335_21501_312_10300: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3335_21501_312_10302: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3335_21502: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3335_21502_312_10300: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3335_21502_312_10302: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3335_21503: {
    width: wp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_3335_21503: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21504: {
    width: wp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_3335_21504: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21505: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 85, 92, 1)"
  },
  View_3335_21506: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(80, 85, 92, 1)"
  },
  View_3335_21507: {
    width: wp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_3335_21507: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3335_21508: {
    width: wp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_3335_21508: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3335_21509: {
    width: wp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "center"
  },
  Text_3335_21509: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3335_21510: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_3335_21510: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21511: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_3335_21511: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_3335_21512: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3335_21513: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3335_21514: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3335_21515: {
    width: wp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_3335_21515: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21516: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3335_21516_312_10300: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3335_21516_312_10302: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3335_21517: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3335_21517_312_10300: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3335_21517_312_10302: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3335_21518: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3335_21518_312_10300: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(213, 230, 251, 1)"
  },
  ImageBackground_I3335_21518_312_10302: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3335_21519: {
    width: wp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_3335_21519: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21520: {
    width: wp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_3335_21520: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21521: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 85, 92, 1)"
  },
  View_3335_21522: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(80, 85, 92, 1)"
  },
  View_3335_21523: {
    width: wp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_3335_21523: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3335_21524: {
    width: wp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_3335_21524: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3335_21525: {
    width: wp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "center"
  },
  Text_3335_21525: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_3335_21526: {
    flexGrow: 1,
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_3335_21526: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_3335_21527: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_3335_21527: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_3517_23070: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3517_23070: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3592_22888: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_3819_23705: {
    width: wp("125%"),
    height: hp("26%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3592_22839: {
    width: wp("125%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3592_22839_2495_10405: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("6%")
  },
  View_I3592_22839_2265_9700: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I3592_22839_2265_9700: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3592_22839_2265_9707: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I3592_22839_2265_9708: {
    width: wp("70%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3592_22839_2265_9709: {
    width: wp("70%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3592_22839_2265_9709: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  TouchableOpacity_I3592_22839_2838_21609: {
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
  View_I3592_22839_2838_21610: {
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
  View_I3592_22839_2838_21611: {
    width: wp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3592_22839_2838_21611: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  ImageBackground_I3592_22839_2838_21612: {
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
  View_I3592_22839_2838_21613: {
    width: wp("55%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I3592_22839_2838_21613: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I3592_22839_2838_21614: {
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
  ImageBackground_I3592_22839_2838_21615: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_I3592_22839_2838_21616: {
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
  Text_I3592_22839_2838_21616: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I3592_22839_2838_21617: {
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
  ImageBackground_I3592_22839_2838_21618: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_I3592_22839_2838_21619: {
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
  Text_I3592_22839_2838_21619: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I3592_22839_2838_21620: {
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
  ImageBackground_I3592_22839_2838_21621: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_I3592_22839_2838_21622: {
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
  Text_I3592_22839_2838_21622: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I3592_22839_2838_21623: {
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
  ImageBackground_I3592_22839_2838_21624: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_I3592_22839_2838_21625: {
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
  Text_I3592_22839_2838_21625: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  TouchableOpacity_I3592_22839_2838_21842: {
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
  View_I3592_22839_2838_21843: {
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
  View_I3592_22839_2838_21844: {
    width: wp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3592_22839_2838_21844: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  ImageBackground_I3592_22839_2838_21845: {
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
  View_I3592_22839_2838_21846: {
    width: wp("55%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I3592_22839_2838_21846: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I3592_22839_2838_21847: {
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
  ImageBackground_I3592_22839_2838_21848: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_I3592_22839_2838_21849: {
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
  Text_I3592_22839_2838_21849: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I3592_22839_2838_21850: {
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
  ImageBackground_I3592_22839_2838_21851: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_I3592_22839_2838_21852: {
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
  Text_I3592_22839_2838_21852: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I3592_22839_2838_21853: {
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
  ImageBackground_I3592_22839_2838_21854: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_I3592_22839_2838_21855: {
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
  Text_I3592_22839_2838_21855: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I3592_22839_2838_21856: {
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
  ImageBackground_I3592_22839_2838_21857: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_I3592_22839_2838_21858: {
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
  Text_I3592_22839_2838_21858: {
    color: "rgba(50, 63, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
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
