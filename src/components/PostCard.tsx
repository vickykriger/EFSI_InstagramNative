import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Svg, { Path, Line, Polygon } from 'react-native-svg';
import type { Publicacion } from '../interfaz';
import CommentSection from './CommentSection';

interface PostCardProps {
    publicacion: Publicacion;
    onSelect: () => void;
    onSelectUser: () => void;
    imagenUsuario?: string;
}

const HeartIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </Svg>
);

const CommentIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" strokeLinejoin="round" />
    </Svg>
);

const ShareIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Line strokeLinecap="round" strokeLinejoin="round" x1="22" x2="9.218" y1="3" y2="13.774" />
        <Polygon points="11.698 20.334 22 3.001 2 3.001 9.218 13.774 11.698 20.334" strokeLinejoin="round" />
    </Svg>
);

const SaveIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Polygon points="20 21 12 13.44 4 21 4 3 20 3 20 21" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export default function PostCard({ publicacion, onSelect, onSelectUser, imagenUsuario }: PostCardProps) {
    return (
        <View style={styles.postCardContainer}>
            {/* Header con foto de perfil */}
            <Pressable style={styles.postHeader} onPress={onSelectUser}>
                <View style={styles.headerLeft}>
                    {imagenUsuario && (
                        <Image
                            source={typeof imagenUsuario === 'string' ? { uri: imagenUsuario } : imagenUsuario}
                            style={styles.avatar} // Usa el estilo correspondiente que tengas definido abajo
                        />
                    )}
                    <Text style={styles.usernameText}>{publicacion.nombreUsuario}</Text>
                </View>
                <Text style={styles.dotsText}>···</Text>
            </Pressable>

            {/* Imagen */}
            <Pressable style={styles.postImageContainer} onPress={onSelect}>
                <Image
                    source={{ uri: publicacion.imagen }}
                    style={styles.postImage}
                    resizeMode="cover"
                />
            </Pressable>

            {/* Botones */}
            <View style={styles.postInteractions}>
                <Pressable style={styles.iconButton}><HeartIcon /></Pressable>
                <Pressable style={styles.iconButton}><CommentIcon /></Pressable>
                <Pressable style={styles.iconButton}><ShareIcon /></Pressable>
                <View style={styles.saveButtonContainer}>
                    <Pressable style={styles.iconButton}><SaveIcon /></Pressable>
                </View>
            </View>

            {/* Likes y caption */}
            <View style={styles.postInfo}>
                <Text style={styles.likesText}>
                    {publicacion.likes.toLocaleString()} likes
                </Text>
                <Text style={styles.captionText}>
                    <Text style={styles.boldText} onPress={onSelectUser}>
                        {publicacion.nombreUsuario}
                    </Text>
                    {' '}{publicacion.descrpcion}
                </Text>
            </View>

            {/* Ver comentarios */}
            <Pressable style={styles.viewCommentsTrigger} onPress={onSelect}>
                <Text style={styles.viewCommentsText}>
                    Ver los {publicacion.comentarios?.length || 0} comentarios...
                </Text>
            </Pressable>

            {/* Comentarios */}
            <CommentSection listaComentarios={publicacion.comentarios} />
        </View>
    );
}

const styles = StyleSheet.create({
    postCardContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 3,
        marginBottom: 24,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#dbdbdb',
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#262626',
    },
    dotsText: {
        fontSize: 20,
        color: '#262626',
        letterSpacing: 2,
    },
    postImageContainer: {
        width: '100%',
        aspectRatio: 1,
    },
    postImage: {
        width: '100%',
        height: '100%',
    },
    postInteractions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingTop: 8,
        paddingHorizontal: 12,
        paddingBottom: 4,
    },
    iconButton: {
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButtonContainer: {
        marginLeft: 'auto',
    },
    postInfo: {
        paddingTop: 4,
        paddingHorizontal: 16,
        paddingBottom: 4,
    },
    likesText: {
        fontSize: 14,
        color: '#262626',
        marginBottom: 4,
        lineHeight: 21,
        fontWeight: '600',
    },
    captionText: {
        fontSize: 14,
        color: '#262626',
        marginBottom: 4,
        lineHeight: 21,
    },
    boldText: {
        fontWeight: '600',
    },
    viewCommentsTrigger: {
        paddingTop: 0,
        paddingHorizontal: 16,
        paddingBottom: 4,
    },
    viewCommentsText: {
        fontSize: 14,
        color: '#8e8e8e',
    },
});