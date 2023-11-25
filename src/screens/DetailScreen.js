import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import AppImages from '../constants/AppImages';
import Appfonts from '../constants/AppFonts';


class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      stepCount: 0,
    };
  }


  handleIncrementDistance = ({navigation}) => {
this.props.navigation.navigate('Distance')
    // this.setState((prevState) => ({
    //   distance: prevState.distance + 1,
    // }));
  };

  handleIncrementStepCount = () => {
    this.props.navigation.navigate('StepCounts')
    // this.setState((prevState) => ({
    //   stepCount: prevState.stepCount + 1,
    // }));
  };

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.box}>
          <View style ={{}}>
          <Image style={{width:100,height:100}} 
          source={AppImages.runman}></Image>
          </View>
          <View style={{marginTop:20}}>
          <Text style={styles.label}>Distance Travelled</Text>
          </View>
          <Text style={styles.value}>{this.state.distance} miles</Text>
          <Button
            title="Track Distance" style={{fontFamily:Appfonts.MavenBlack}}
            onPress={this.handleIncrementDistance}
            color="brown"
          />
        </View>

        <View style={styles.box}>
           <View style ={{}}>
          <Image style={{width:100,height:100}} 
          source={AppImages.stepcount}></Image>
          </View>
          <View style={{marginTop:20}}>
          <Text style={styles.label}>Step Count</Text>
          </View>
          <Text style={styles.value}>{this.state.stepCount} steps</Text>
          <Button
            title="Add Step"
            onPress={this.handleIncrementStepCount}
            color="brown"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'coloumn',
  },
  box: {
    flex: 1,
    margin: 10,
    
    width:"50%",
    backgroundColor: 'pink',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
