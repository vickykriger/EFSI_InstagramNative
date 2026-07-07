import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileHeader({ usuarioSeleccionado }) {
  return (
    <View style={styles.container}>
      {/* Imagen de perfil grande */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: usuarioSeleccionado.imagen }} 
          style={styles.profilePicture} 
        />
      </View>

      {/* Información y Estadísticas */}
      <View style={styles.statsContainer}>
        <Text style={styles.profileName}>{usuarioSeleccionado.nombre}</Text>
        
        <View style={styles.rowStats}>
          <Text style={styles.statItem}>
            <Text style={styles.bold}>{usuarioSeleccionado.cantPublicaciones}</Text> publicaciones
          </Text>
          <Text style={styles.statItem}>
            <Text style={styles.bold}>{usuarioSeleccionado.cantSeguidores}</Text> seguidores
          </Text>
          <Text style={styles.statItem}>
            <Text style={styles.bold}>{usuarioSeleccionado.cantSeguidos}</Text> seguidos
          </Text>
        </View>

        {/* Biografía */}
        <View style={styles.bioContainer}>
          <Text style={styles.bioText}>{usuarioSeleccionado.biografia}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    marginRight: 28,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#dbdbdb',
  },
  statsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 28,
    fontWeight: '300',
    color: '#262626',
    marginBottom: 16,
  },
  rowStats: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statItem: {
    fontSize: 14,
    color: '#262626',
    marginRight: 24,
  },
  bold: {
    fontWeight: '600',
  },
  bioContainer: {
    marginTop: 4,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 18,
    color: '#262626',
  },
});