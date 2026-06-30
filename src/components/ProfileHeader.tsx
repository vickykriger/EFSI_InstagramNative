import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import type { User } from '../interfaz';

interface ProfileHeaderProps {
    usuario: User;
}

export default function ProfileHeader({ usuario }: ProfileHeaderProps) {
    return (
        <View style={styles.profileHeader}>
            {/* Contenedor de la Imagen */}
            <View style={styles.profileImage}>
                <Image 
                    source={{ uri: usuario.imagen }} 
                    style={styles.image}
                    alt={`Foto de ${usuario.nombre}`}
                    resizeMode="cover"
                />
            </View>

            {/* Contenedor de la Información */}
            <View style={styles.profileInfo}>
                {/* Nombre de usuario y Acciones */}
                <View style={styles.actionRow}>
                    <Text style={styles.usernameTitle}>{usuario.nombre}</Text>
                    <Pressable style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Following</Text>
                    </Pressable>
                    <Pressable style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Message</Text>
                    </Pressable>
                    <Pressable style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>•••</Text>
                    </Pressable>
                </View>

                {/* Estadísticas de Perfil */}
                <View style={styles.profileStats}>
                    <Text style={styles.statText}>
                        <Text style={styles.boldText}>{usuario.publicaciones.length}</Text> posts
                    </Text>
                    <Text style={styles.statText}>
                        <Text style={styles.boldText}>{usuario.cantSeguidores.toLocaleString()}</Text> followers
                    </Text>
                    <Text style={styles.statText}>
                        <Text style={styles.boldText}>{usuario.cantSeguidos.toLocaleString()}</Text> following
                    </Text>
                </View>

                {/* Biografía y Nombre Completo */}
                <View style={styles.profileBio}>
                    <Text style={styles.fullName}>{usuario.nombre}</Text>
                    <Text style={styles.bioText}>{usuario.biografia}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 80,
        paddingVertical: 30,
        paddingHorizontal: 0,
        paddingBottom: 44,
        width: '100%',
    },
    profileImage: {
        flexShrink: 0,
        width: 150,
        height: 150,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 1,
        borderColor: '#dbdbdb',
    },
    profileInfo: {
        flex: 1,
        flexDirection: 'column',
        gap: 16,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
    },
    usernameTitle: {
        fontSize: 20,
        fontWeight: '300',
        color: '#262626',
    },
    secondaryButton: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#262626',
    },
    profileStats: {
        flexDirection: 'row',
        gap: 40,
    },
    statText: {
        fontSize: 16,
        color: '#262626',
    },
    boldText: {
        fontWeight: '600',
    },
    profileBio: {
        flexDirection: 'column',
        gap: 4,
    },
    fullName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#262626',
    },
    bioText: {
        fontSize: 14,
        color: '#262626',
    },
});