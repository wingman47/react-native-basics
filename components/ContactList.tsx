import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {uid: 1, name: 'John', status: 'Active'},
    {uid: 2, name: 'Jane', status: 'Inactive'},
    {uid: 3, name: 'Bob', status: 'Active'},
    {uid: 4, name: 'Alice', status: 'Inactive'},
    {uid: 5, name: 'Charlie', status: 'Active'},
    {uid: 6, name: 'Diana', status: 'Inactive'},
    {uid: 7, name: 'Eve', status: 'Active'},
    {uid: 8, name: 'Frank', status: 'Inactive'},
    {uid: 9, name: 'Grace', status: 'Active'},
    {uid: 10, name: 'Harry', status: 'Inactive'},
  ];
  
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView scrollEnabled={false}>
        {
            contacts.map(({
                uid, name, status
            }) => (
                <View key={uid}>
                    <Text>{name}</Text>
                    <Text>{status}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
