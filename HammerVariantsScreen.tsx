import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HammerVariantsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hardware Store</Text>
      <Text style={styles.variantTitle}>Claw Hammer</Text>
      <Text style={styles.variantDescription}>A claw hammer is a tool primarily used for driving nails into, or pulling nails from, some other object.</Text>
      <Text style={styles.variantPrice}>Price: $25</Text>
      <Text style={styles.variantTitle}>Ball Pen Hammer</Text>
      <Text style={styles.variantDescription}>A ball-peen hammer, also known as a machinist's hammer, is a type of peening hammer used in metalworking.</Text>
      <Text style={styles.variantPrice}>Price: $30</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  variantTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  variantDescription: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  variantPrice: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HammerVariantsScreen;
