import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import type { Publicacion } from '../interfaz';
import GridItem from './GridItem';

interface ProfileGridProps {
    publicaciones: Publicacion[];
}

export default function ProfileGrid({ publicaciones }: ProfileGridProps) {
    if (!publicaciones || publicaciones.length === 0) {
        return (
            <View style={styles.noPost}>
                <Text style={styles.noPostText}>No posts yet.</Text>
            </View>
        );
    }

    return (
        <View style={styles.profileGrid}>
            {publicaciones.map((post, index) => (
                <View key={index} style={styles.gridItemWrapper}>
                    <GridItem publicacion={post} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    profileGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#dbdbdb',
        marginHorizontal: -1.5, 
    },
    gridItemWrapper: {
        width: '33.33%', 
        padding: 1.5, 
    },
    noPost: {
        width: '100%',
        alignItems: 'center',
        padding: 40,
        borderTopWidth: 1,
        borderTopColor: '#dbdbdb',
    },
    noPostText: {
        fontSize: 14,
        color: '#8e8e8e',
        textAlign: 'center',
    },
});