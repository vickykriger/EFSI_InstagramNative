import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function StoryCircle({ user, onSelect }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.avatarBorder}>
        <Image 
          source={{ uri: user.imagen }} 
          style={styles.avatar} 
        />
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {user.nombre}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  avatarBorder: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#dbdbdb',
  },
  username: {
    fontSize: 12,
    color: '#262626',
    maxWidth: 70,
    textAlign: 'center',
  },
});