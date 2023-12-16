import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1702323213406-db43f134bd80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Pastery</Text>
          <Text style={styles.cardLabel}>Best in the town</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            distinctio accusamus eum necessitatibus corporis, aliquid, enim,
            sint officia a cum nihil consequuntur animi molestiae voluptatem
            molestias libero! Voluptas, aspernatur fugiat?
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 350,
    height: 400,
    padding: 10,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'gray',
  },
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  cardLabel: {
    color: 'white',
  },
  cardDescription: {
    color: 'white',
  },
  cardFooter: {
    color: 'white',
  },
});
