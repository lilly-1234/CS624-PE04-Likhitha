import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Used for runtime type-checking of React component props 
import update from 'immutability-helper'; // Used for immutable state updates
import {
  Platform, Image, StyleSheet, Text, View, TouchableHighlight, ScrollView
} from 'react-native';

// Load user image from local assets
const userImage = require('../../assets/images/user.png');

// Generate an array of 6 identical profile data objects
const data = Array.from({ length: 6 }).map(() => ({
  image: userImage,
  name: 'John Doe',
  occupation: 'React Native Developer',
  description:
    'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
  showThumbnail: true, // Controls whether the card is shown as thumbnail or full size
}));

// Functional component to render a single profile card
const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {
  const containerStyles = [styles.cardContainer];
  if (showThumbnail) containerStyles.push(styles.cardThumbnail);

  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

// Define property types for ProfileCard component
ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

// Main App component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data }; // Initialize state with profile card data
  }

  // Toggle card size between thumbnail and full-size
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;

    // Use immutability-helper to update only the specific item
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } },
      }),
    });
  };

  render() {
    const rows = [];
    
    // Group cards into rows of two
    for (let i = 0; i < this.state.data.length; i += 2) {
      rows.push(
        <View key={'row-' + i} style={styles.row}>
          {this.state.data.slice(i, i + 2).map((item, index) => (
            <ProfileCard
              key={'card-' + (i + index)}
              image={item.image}
              name={item.name}
              occupation={item.occupation}
              description={item.description}
              showThumbnail={item.showThumbnail}
              onPress={() => this.handleProfileCardPress(i + index)}
            />
          ))}
        </View>
      );
    }

    // Wrap all rows inside a scrollable view
    return <ScrollView contentContainerStyle={styles.container}>{rows}</ScrollView>;
  }
}

// Color constant for cards
const profileCardColor = 'dodgerblue';

// Styles for the app
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    margin: 10,
    // Shadow for iOS / Elevation for Android
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    // Apply shadows for both platforms
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {
      height: 5,
      width: 5
    },
    textShadowRadius: 3
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  },
  cardThumbnail: {
    transform: [{ scale: 0.2 }] // Scales the card down when in thumbnail mode
  },
});
