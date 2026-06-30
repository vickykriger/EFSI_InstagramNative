import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import type { User, Publicacion } from '../interfaz';

interface ProfileViewProps {
  usuarioSeleccionado: User;
  setUsuarioSeleccionado: React.Dispatch<React.SetStateAction<User | null>>;
  setPostSeleccionado: React.Dispatch<React.SetStateAction<Publicacion | null>>;
}

export default function ProfileView({
  usuarioSeleccionado,
  setUsuarioSeleccionado,
  setPostSeleccionado,
}: ProfileViewProps) {
  return (
    <View style={styles.profileScreenContainer}>
      {/* Botón de Volver */}
      <Pressable 
        onPress={() => setUsuarioSeleccionado(null)}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>← Volver al Feed</Text>
      </Pressable>

      {/* Header del Perfil */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: usuarioSeleccionado.imagen }}
          alt={usuarioSeleccionado.nombre}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.headerInfo}>
          <Text style={styles.usernameText}>{usuarioSeleccionado.nombre}</Text>
          
          <View style={styles.statsContainer}>
            <Text style={styles.statItemText}>
              <Text style={styles.boldText}>{usuarioSeleccionado.cantPublicaciones}</Text> posts
            </Text>
            <Text style={styles.statItemText}>
              <Text style={styles.boldText}>{usuarioSeleccionado.cantSeguidores}</Text> followers
            </Text>
            <Text style={styles.statItemText}>
              <Text style={styles.boldText}>{usuarioSeleccionado.cantSeguidos}</Text> following
            </Text>
          </View>
          
          <Text style={styles.fullNameText}>{usuarioSeleccionado.nombre}</Text>
          <Text style={styles.bioText}>{usuarioSeleccionado.biografia}</Text>
        </View>
      </View>

      {/* Grid de Publicaciones */}
      <View style={styles.profilePostsGrid}>
        {usuarioSeleccionado.publicaciones.map((post, idx) => (
          <Pressable
            key={idx}
            onPress={() => {
              setPostSeleccionado(post);
              setUsuarioSeleccionado(null);
            }}
            style={styles.gridItemWrapper}
          >
            <View style={styles.gridItem}>
              <Image 
                source={{ uri: post.imagen }} 
                alt="Post de perfil" 
                style={styles.postImage} 
                resizeMode="cover"
              />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileScreenContainer: {
    width: '100%',
    maxWidth: 935,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  backButton: {
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#efefef',
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
  },
  profileHeader: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 30,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 44,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#dbdbdb',
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  usernameText: {
    fontSize: 24,
    color: '#262626',
    marginBottom: 10,
    fontWeight: '300',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 15,
  },
  statItemText: {
    fontSize: 14,
    color: '#262626',
  },
  boldText: {
    fontWeight: '600',
  },
  fullNameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#262626',
  },
  bioText: {
    marginTop: 5,
    fontSize: 14,
    color: '#666666',
  },
  profilePostsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    paddingTop: 20,
    marginHorizontal: -10, 
  },
  gridItemWrapper: {
    width: '33.33%',
    padding: 10, 
  },
  gridItem: {
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
});