import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import type { Publicacion } from '../interfaz';

interface GridItemProps {
    publicacion: Publicacion;
}

export default function GridItem({ publicacion }: GridItemProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Pressable 
            onPressIn={() => setHovered(true)}
            onPressOut={() => setHovered(false)}
            style={styles.gridItem}
        >
            <Image 
                source={{ uri: publicacion.imagen }} 
                style={[styles.image, hovered && styles.imageHovered]}
                resizeMode="cover"
            />

            {hovered && (
                <View style={styles.overlay}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.overlayText}>❤️ {publicacion.likes}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.overlayText}>
                            💬 {publicacion.comentarios ? publicacion.comentarios.length : 0}
                        </Text>
                    </View>
                </View>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        position: 'relative',
        aspectRatio: 1,
        overflow: 'hidden',
        backgroundColor: '#efefef',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageHovered: {
        opacity: 0.75,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    overlayText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});