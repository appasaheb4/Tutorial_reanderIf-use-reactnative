import React, { Component } from "react";
import { StyleSheet, Alert, Text } from "react-native";
import { Container, Footer, Button } from "native-base";
import ApiData from "./ApiData";
import View1 from "./View1";
import View2 from "./View2";
import renderIf from "../res/validation/renderIf";
import SegmentedControlTab from "react-native-segmented-control-tab";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      apiDemo: true,
      view1: false,
      view2: false
    };

   
  }

  handleIndexChange = index => {
    if (index == 0) {
      this.setState({
        selectedIndex: index,
        apiDemo: true,
        view1: false,
        view2: false
      });
    } else if (index == 1) {
      this.setState({
        selectedIndex: index,
        apiDemo: false,
        view1: true,
        view2: false
      });
    } else {
      this.setState({  
        selectedIndex: index,
        apiDemo: false,
        view1: false,
        view2: true
      });
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        {renderIf(this.state.apiDemo)(<ApiData style={{ flex: 1 }} />)}

        {renderIf(this.state.view1)(<View1 style={{ flex: 1 }} />)}

        {renderIf(this.state.view2)(<View2 style={{ flex: 1 }} />)}

        <SegmentedControlTab
          values={["ApiDemo", "View1", "View2"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
