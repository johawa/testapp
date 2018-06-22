import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from "react-native";

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';
import MainText from '../../UI/MainText/MainText';
import HeadingText from '../../UI/HeadingText/HeadingText';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';
import validate from '../../utility/validation';

import backgroundImage from '../../assets/blue_background.png';

class AuthScreen extends Component {
  state = {
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false,
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false,
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false,
      }
    }
  }

  loginHandler = () => {
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                  prevState.controls.confirmPassword.value,
                  prevState.controls.confirmPassword.validationRules,
                  connectedValue
                )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>HAUSVERWALTUNG</HeadingText>
          </MainText>
          <ButtonWithBackground onPress={this.loginHandler} color='grey'>SWITCH TO LOGIN</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your E-Mail Address"
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText={val => this.updateInputState("email", val)}
              valid={this.state.controls.email.valid}
              touched={this.state.controls.email.touched}
            />
            <DefaultInput
              placeholder="Password"
              style={styles.input}
              value={this.state.controls.password.value}
              onChangeText={val => this.updateInputState("password", val)}
              valid={this.state.controls.password.valid}
              touched={this.state.controls.password.touched}
            />
            <DefaultInput
              placeholder="Confirm Password"
              style={styles.input}
              value={this.state.controls.confirmPassword.value}
              onChangeText={val => this.updateInputState("confirmPassword", val)}
              valid={this.state.controls.confirmPassword.valid}
              touched={this.state.controls.confirmPassword.touched}
            />
          </View>
          <ButtonWithBackground
            onPress={this.loginHandler}
            disabled={this.state.controls.email.valid &&
              this.state.controls.password.valid &&
              this.state.controls.confirmPassword.valid}
          >
            SUBMIT
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  button: {
    backgroundColor: 'white'
  }
});

export default AuthScreen;
