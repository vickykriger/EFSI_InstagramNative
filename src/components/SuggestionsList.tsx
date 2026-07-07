import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SuggestionsList({ user, onSelectUser }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userSection} onPress={onSelectUser}>
        <Image 
          source={{ uri: user.imagen }} 
          style={styles.avatar} 
        />
        <View style={styles.info}>
          <Text style={styles.username}>{user.nombre}</Text>
          <Text style={styles.subtitle} numberOfLines={1}>Sugerencia para ti</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.followButton}>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    width: '100%',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#dbdbdb',
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
    color: '#262626',
  },
  subtitle: {
    color: '#8e8e8e',
    fontSize: 12,
  },
  followButton: {
    color: '#0095f6',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
  },
});