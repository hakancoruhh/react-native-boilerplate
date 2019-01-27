import React from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";

export interface Props {
  navigation: any;
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
  render() {
    return (
      <View>
        <Text>HomePage</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({});
export default connect(mapStateToProps)(HomeContainer);
