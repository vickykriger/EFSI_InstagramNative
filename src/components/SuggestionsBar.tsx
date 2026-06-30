import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import type { User } from '../interfaz';
import UserProfileMini from './UserProfileMini';
import FooterLinks from './FooterLinks';

interface SuggestionsBarProps {
    listaSugeridos: User[];
    onSelectUser: (user: User) => void;
}

export default function SuggestionsBar({ listaSugeridos, onSelectUser }: SuggestionsBarProps) {
    const usuarioActual = listaSugeridos[0];
    const sugerencias = listaSugeridos.slice(1);

    return (
        <View style={styles.suggestionsBarContainer}>
            {/* Usuario Actual */}
            {usuarioActual && (
                <Pressable onPress={() => onSelectUser(usuarioActual)} style={styles.currentUserWrapper}>
                    <UserProfileMini usuario={usuarioActual} />
                </Pressable>
            )}

            {/* Cabecera de Sugerencias */}
            <View style={styles.suggestionsHeader}>
                <Text style={styles.headerText}>Suggestions for you</Text>
            </View>

            {/* Lista de Sugerencias */}
            <View style={styles.suggestionsList}>
                {sugerencias.map((user, index) => {
                    const subtitulosFalsos = ['Follows you', 'Followed by chirag_singla17', 'New to Instagram'];
                    const subtexto = subtitulosFalsos[index % subtitulosFalsos.length];

                    return (
                        <View key={index} style={styles.suggestionItemRow}>
                            <View style={styles.suggestionUserInfo}>
                                <Pressable onPress={() => onSelectUser(user)}>
                                    <Image source={typeof user.imagen === 'string' ? { uri: user.imagen } : user.imagen}
                                        alt={`Sugerencia ${user.nombre}`}
                                        style={styles.suggestionAvatar}
                                        resizeMode="cover"
                                    />
                                </Pressable>

                                <View style={styles.suggestionTexts}>
                                    <Text style={styles.usernameText} onPress={() => onSelectUser(user)}>
                                        {user.nombre}
                                    </Text>
                                    <Text style={styles.subtextText}>
                                        {subtexto}
                                    </Text>
                                </View>
                            </View>

                            <Pressable style={styles.followBtn}>
                                <Text style={styles.followBtnText}>Follow</Text>
                            </Pressable>
                        </View>
                    );
                })}
            </View>

            {/* Links del Footer */}
            <FooterLinks />
        </View>
    );
}

const styles = StyleSheet.create({
    suggestionsBarContainer: {
        width: '100%',
        maxWidth: 320,
        paddingVertical: 16,
        paddingHorizontal: 8,
        backgroundColor: '#ffffff',
    },
    currentUserWrapper: {
        marginBottom: 10,
    },
    suggestionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        marginBottom: 8,
    },
    headerText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#8e8e8e',
    },
    suggestionsList: {
        flexDirection: 'column',
        gap: 12,
        marginBottom: 24,
    },
    suggestionItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    suggestionUserInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    suggestionAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#efefef',
    },
    suggestionTexts: {
        flexDirection: 'column',
        flex: 1,
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#262626',
    },
    subtextText: {
        fontSize: 12,
        color: '#8e8e8e',
        marginTop: 2,
    },
    followBtn: {
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    followBtnText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#0095f6',
    },
});