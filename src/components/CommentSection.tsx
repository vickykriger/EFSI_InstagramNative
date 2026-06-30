import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Comentario } from '../interfaz';

interface CommentSectionProps {
  listaComentarios: Comentario[];
}

function CommentSection({ listaComentarios }: CommentSectionProps) {

  if (!listaComentarios || listaComentarios.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay comentarios aún.</Text>
      </View>
    );
  }

  return (
    <View style={styles.commentsList}>
      {listaComentarios.map((item, index) => (
        <View key={index} style={styles.commentItem}>
          <View style={styles.commentRow}>
            <Text style={styles.username}>
              {item.nombreUsuario}
            </Text>
            <Text style={styles.commentText}>
              {item.comentario}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  commentsList: {
    paddingTop: 4,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
  },
  commentItem: {
    marginBottom: 6,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
  },
  username: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    color: '#262626',
    flexShrink: 0,
  },
  commentText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#262626',
    flex: 1, 
  },
  emptyContainer: {
    padding: 16,
  },
  emptyText: {
    fontSize: 14,
    color: '#8e8e8e',
  },
});

export default CommentSection;