import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import type { User } from '../interfaz';

interface UserProfileMiniProps {
    usuario: User;
}

export default function UserProfileMini({ usuario }: UserProfileMiniProps) {
    return (
        <View style={styles.userProfileMini}>
            <View style={styles.userProfileMiniLeft}>
                <Image
                    source={typeof usuario.imagen === 'string' ? { uri: usuario.imagen } : usuario.imagen}
                    alt={`Perfil de ${usuario.nombre}`}
                    style={styles.avatar}
                    resizeMode="cover"
                />
                <View style={styles.userProfileMiniTexts}>
                    {/* El guion bajo final se mantiene concatenado dentro del Text */}
                    <Text style={styles.miniUsername}>{usuario.nombre}_</Text>
                    <Text style={styles.miniFullname}>{usuario.nombre}</Text>
                </View>
            </View>

            <Pressable style={styles.switchBtn}>
                <Text style={styles.switchBtnText}>Switch</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    userProfileMini: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 8,
        backgroundColor: '#ffffff',
    },
    userProfileMiniLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#efefef',
    },
    userProfileMiniTexts: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    miniUsername: {
        fontSize: 14,
        fontWeight: '600',
        color: '#262626',
    },
    miniFullname: {
        fontSize: 14,
        color: '#8e8e8e',
        marginTop: 2,
    },
    switchBtn: {
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    switchBtnText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#0095f6',
    },
});