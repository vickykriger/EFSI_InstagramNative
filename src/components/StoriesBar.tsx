import React from 'react';
import { ScrollView, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import type { User } from '../interfaz';

interface StoriesBarProps {
    usuarios: User[];
    onSelectUser: (user: User) => void;
}

export default function StoriesBar({ usuarios, onSelectUser }: StoriesBarProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.storiesBarContainer}
            contentContainerStyle={styles.scrollContent}
        >
            {usuarios.map((user, index) => (
                <Pressable
                    key={index}
                    style={styles.storyCircleItem}
                    onPress={() => onSelectUser(user)}
                >
                    <View style={styles.avatarBorder}>
                        <Image
                            source={typeof user.imagen === 'string' ? { uri: user.imagen } : user.imagen}
                            style={styles.avatarImage} />
                    </View>
                    <Text style={styles.usernameText} numberOfLines={1}>
                        {user.nombre}
                    </Text>
                </Pressable>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    storiesBarContainer: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        paddingVertical: 16,
        maxHeight: 115,
    },
    scrollContent: {
        paddingHorizontal: 16,
        gap: 16,
    },
    storyCircleItem: {
        alignItems: 'center',
        flexDirection: 'column',
        width: 64,
    },
    avatarBorder: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#c13584',
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 28,
        backgroundColor: '#efefef',
    },
    usernameText: {
        fontSize: 11,
        color: '#262626',
        textAlign: 'center',
        width: '100%',
    },
});