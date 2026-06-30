import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import type { Publicacion } from '../interfaz';

interface SingularPostViewProps {
  postSeleccionado: Publicacion;
  setPostSeleccionado: React.Dispatch<React.SetStateAction<Publicacion | null>>;
}

export default function SingularPostView({
  postSeleccionado,
  setPostSeleccionado,
}: SingularPostViewProps) {
  return (
    <ScrollView style={styles.singularPostView} contentContainerStyle={styles.contentContainer}>
      {/* Botón Volver */}
      <Pressable 
        onPress={() => setPostSeleccionado(null)} 
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Volver al Feed</Text>
      </Pressable>

      {/* Contenedor del Post Detallado */}
      <View style={styles.detailedPost}>
        <Text style={styles.authorUsername}>{postSeleccionado.nombreUsuario}</Text>
        
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: postSeleccionado.imagen }} 
            alt="Post Singular Ampliado" 
            style={styles.postImage}
            resizeMode="cover"
          />
        </View>

        {/* Interacciones */}
        <View style={styles.postInteractions}>
          <Pressable style={styles.iconButton}><Text style={styles.iconText}>❤️</Text></Pressable>
          <Pressable style={styles.iconButton}><Text style={styles.iconText}>💬</Text></Pressable>
        </View>

        {/* Likes e Información de la Publicación */}
        <Text style={styles.likesCount}>{postSeleccionado.likes} likes</Text>
        
        <Text style={styles.caption}>
          <Text style={styles.boldText}>{postSeleccionado.nombreUsuario}</Text>
          {' '}{postSeleccionado.descrpcion}
        </Text>

        {/* Sección de Comentarios Expandida */}
        <View style={styles.extendedComments}>
          <Text style={styles.commentsTitle}>Comentarios:</Text>
          {postSeleccionado.comentarios?.map((item, index) => (
            <View key={index} style={styles.commentRow}>
              <Text style={styles.commentText}>
                <Text style={styles.boldText}>{item.nombreUsuario}:</Text>
                {' '}{item.comentario}
              </Text>
            </View>
          ))}
        </View>

        {/* Información Adicional */}
        <View style={styles.additionalInfo}>
          <Text style={styles.infoText}>Fecha de publicación: 19 de Mayo de 2026</Text>
          <Text style={styles.infoText}>Ubicación: Buenos Aires, Argentina</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  singularPostView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
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
  detailedPost: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    paddingBottom: 16,
  },
  authorUsername: {
    fontSize: 16,
    fontWeight: '600',
    color: '#262626',
    padding: 14,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  postInteractions: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  iconText: {
    fontSize: 22,
  },
  likesCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  caption: {
    fontSize: 14,
    color: '#262626',
    paddingHorizontal: 16,
    marginTop: 6,
    lineHeight: 20,
  },
  extendedComments: {
    paddingHorizontal: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#efefef',
    paddingTop: 12,
  },
  commentsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
    marginBottom: 8,
  },
  commentRow: {
    marginBottom: 6,
  },
  commentText: {
    fontSize: 14,
    color: '#262626',
    lineHeight: 18,
  },
  boldText: {
    fontWeight: '600',
  },
  additionalInfo: {
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#8e8e8e',
  },
});