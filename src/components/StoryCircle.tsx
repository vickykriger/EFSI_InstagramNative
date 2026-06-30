import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface StoryCircleProps {
    imagen: string;
    nombreUsuario: string;
}

export default function StoryCircle({ imagen, nombreUsuario }: StoryCircleProps) {
    return (
        <View style={styles.storyCircleWrapper}>
            <View style={styles.avatarContainer}>
                <Image
                    source={typeof imagen === 'string' ? { uri: imagen } : imagen}
                    style={styles.avatarImage} 
                />
            </View>
            <Text style={styles.usernameText} numberOfLines={1}>
                {nombreUsuario}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    storyCircleWrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        width: 64,
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#dbdbdb',
        overflow: 'hidden',
        marginBottom: 6,
        backgroundColor: '#efefef',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    usernameText: {
        fontSize: 12,
        color: '#262626',
        textAlign: 'center',
        width: '100%',
    },
});