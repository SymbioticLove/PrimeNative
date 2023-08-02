import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity, Linking, Button } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ scrollToTop }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

   const onHomePress = () => {
        console.log('Button was pressed!');
   };

  return (
    <Animated.View style={[styles.headerContainer, { opacity: fadeAnim }]}>
      <View style={styles.logoTitle}>
        <Animated.View style={[styles.logo, { transform: [{ translateY }] }]}>
          <Image source={require('../assets/PPLogo.png')} style={styles.logoImage} />
        </Animated.View>
        <View>
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
            PortfolioPrime
          </Animated.Text>
          <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
            The last portfolio you&apos;ll ever need!
          </Animated.Text>
        </View>
      </View>
      <View style={styles.navMenu}>
        <TouchableOpacity onPress={scrollToTop}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToTop}>
          <Text style={styles.navLink}>Work Examples</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://portfolioprime.youcanbook.me/')} target="_blank">
          <Text style={styles.navLink}>Get Your Own Page!</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

Header.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

export default Header;

const theme = {
    Blue: '#1a5276',
    Orng: '#f39c12',
    Lgry: '#ecf0f1',
    Dgry: '#7b8a8b',
    Head: 'Montserrat, sans-serif',
    Body: 'Open Sans, sans-serif',
    Acnt: 'Raleway, sans-serif',
  };

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    paddingTop: 30,
    backgroundColor: theme.Lgry,
  },
  logoTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    marginLeft: 5,
    color: theme.Blue,
    fontFamily: 'Rale',
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 10,
    color: theme.Dgry,
    fontFamily: 'Rale',
  },
  navMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  navLink: {
    marginLeft: 5,
    marginRight: 5,
    color: theme.Orng,
    fontFamily: 'Open',
    padding: 6,
    textAlign: 'center',
  },
});

