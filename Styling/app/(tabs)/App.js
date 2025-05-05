// Listing 4.14: Modifying Profile Card styles to fix the layout
// Description: A user profile card with image, name, occupation, and description, styled with borders, shadows, and proper spacing.

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

/*
    Image Source:
    https://icons8.com/icons/set/user
*/

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Profile Card Container */}
        <View style={styles.cardContainer}>

          {/* Circular Image Container */}
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/user.png')}
            />
          </View>

          {/* User Name */}
          <View>
            <Text style={styles.cardName}>
              John Doe
            </Text>
          </View>

          {/* Occupation with underline */}
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              React Native Developer
            </Text>
          </View>

          {/* Description */}
          <View>
            <Text style={styles.cardDescription}>
              John is a really great JavaScript developer. He
              loves using JS to build React Native applications
              for iOS and Android.
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

// Theme Color
const profileCardColor = 'dodgerblue';

// StyleSheet
const styles = StyleSheet.create({
  // Outer container to center the card on screen
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Profile card with border, rounded corners and background color
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },

  // Circle container for the user image
  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },

  // User image style
  cardImage: {
    width: 80,
    height: 80,
  },

  // User name style
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 3,
  },

  // Underline container for occupation
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },

  // Occupation text style 
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },

  // Description text style 
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  },
});
