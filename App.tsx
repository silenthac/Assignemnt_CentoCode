import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HammerVariantsScreen from './HammerVariantsScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BrownPage} />
        <Stack.Screen name="HammerVariantsScreen" component={HammerVariantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const BrownPage = () => {
const navigation = useNavigation();

  const handleBuyNow = () => {
    // Navigate to HammerVariantsScreen
    navigation.navigate('HammerVariantsScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hardware Store</Text>
      <View style={styles.locationContainer}>
        <Image
          source={require('./Images/location.jpg')}
          style={styles.locationIcon}
        />
        <View>
          <Text style={styles.locationText}>Your Location</Text>
          <Text style={styles.locationAddress}>Raj Nagar Extension, Ghaziabad</Text>
        </View>
      </View>

      <View style={styles.dealCard}>
        <Text style={styles.dealTitle}>Deal of the Day</Text>
        <View style={styles.productInfo}>
          <Image
            source={require('./Images/hammer.jpg')}
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productPrice}>$20</Text>
            <Text style={styles.productName}>Hammer</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <ProductCard name="Screw" price="$5" imageSource={require('./Images/screw.jpg')} />
        <ProductCard name="Nuts" price="$10" imageSource={require('./Images/screw.jpg')} />
        <ProductCard name="Bolt" price="$8" imageSource={require('./Images/screw.jpg')} />
        <ProductCard name="Hammer" price="$20" imageSource={require('./Images/screw.jpg')} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Home Store</Text>
        <Text style={styles.footerText}>Settings</Text>
      </View>
    </View>
  );
};

const ProductCard = ({ name, price, imageSource }) => {
  return (
    <View style={styles.productCard}>
      <Image source={imageSource} style={styles.productCardImage} />
      <Text style={styles.productCardName}>{name}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationAddress: {
    color: 'white',
    fontSize: 14,
  },
  dealCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  dealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    transform: [{ rotate: '-20deg' }],
  },
  productDetails: {
    flex: 1,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productName: {
    fontSize: 20,
  },
  buyNowButton: {
    backgroundColor: 'brown',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buyNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexBasis: '48%',
    marginBottom: 10,
  },
  productCardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productCardName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productCardPrice: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  productCardButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
  productCardButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  footerText: {
    fontWeight: 'bold',
  },
});

export default App;
