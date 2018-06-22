import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

class ProfilePage extends Component {
    render() {
        return (
            <View>                
                <Text>Profile Page</Text>
                <Text>{this.props.sum}</Text>
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
      sum: state.main.sum,
    }
  }

export default connect(mapStateToProps)(ProfilePage);