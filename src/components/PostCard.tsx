import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PostCard({ publicacion, imagenUsuario, onSelect, onSelectUser }) {
  return (
    <View style={styles.card}>
      {/* Cabecera del Post */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.userRow} onPress={onSelectUser}>
          <Image 
            source={{ uri: imagenUsuario || 'https://via.placeholder.com/150' }} 
            style={styles.avatar} 
          />
          <Text style={styles.username}>{publicacion.nombreUsuario}</Text>
        </TouchableOpacity>
      </View>

      {/* Imagen Principal del Post */}
      <TouchableOpacity activeOpacity={0.9} onPress={onSelect}>
        <Image 
          source={{ uri: publicacion.imagen }} 
          style={styles.postImage} 
          resizeMode="cover"
        />
      </TouchableOpacity>

      {/* Interacciones y Descripción */}
      <View style={styles.footer}>
        <Text style={styles.likes}>{publicacion.likes} Me gusta</Text>
        <Text style={styles.description}>
          <Text style={styles.boldUsername}>{publicacion.nombreUsuario} </Text>
          {publicacion.descrpcion}
        </Text>
        <Text style={styles.date}>{publicacion.fecha}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    marginBottom: 12,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    backgroundColor: '#dbdbdb',
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
    color: '#262626',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1, 
  },
  footer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  likes: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
    color: '#262626',
  },
  description: {
    fontSize: 14,
    color: '#262626',
    lineHeight: 18,
  },
  boldUsername: {
    fontWeight: '600',
  },
  date: {
    fontSize: 11,
    color: '#8e8e8e',
    textTransform: 'uppercase',
    marginTop: 6,
  },
});