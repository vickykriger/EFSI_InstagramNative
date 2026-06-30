import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function UserSuggestionsList() {
    return (
        <View style={styles.suggestionItem}>
            {/* Avatar Sugerido */}
            <Image 
                source={{ uri: 'https://via.placeholder.com/150' }} 
                alt="Avatar sugerido" 
                style={styles.avatar}
                resizeMode="cover"
            />

            {/* Información de la Sugerencia */}
            <View style={styles.suggestionInfo}>
                <Text style={styles.username}>usuario_sugerido</Text>
                <Text style={styles.reason}>Followed by alguien...</Text>
            </View>

            {/* Botón de Seguir */}
            <Pressable style={styles.followBtn}>
                <Text style={styles.followBtnText}>Follow</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    suggestionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18, // Hace la imagen completamente redonda
        backgroundColor: '#efefef',
    },
    suggestionInfo: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
    },
    username: {
        fontSize: 14,
        fontWeight: '600',
        color: '#262626',
    },
    reason: {
        fontSize: 12,
        color: '#8e8e8e',
        marginTop: 2,
    },
    followBtn: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#0095f6',
        borderRadius: 4,
    },
    followBtnText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ffffff',
    },
});