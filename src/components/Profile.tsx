import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { User } from '../interfaz';
import ProfileGrid from './ProfileGrid';
import ProfileHeader from './ProfileHeader';

interface ProfileProps {
    usuario: User;
}

export default function Profile({ usuario }: ProfileProps) {
    return (
        <View style={styles.profilePageContainer}>
            <ProfileHeader usuario={usuario} />
            <View style={styles.gridWrapper}>
                <ProfileGrid publicaciones={usuario.publicaciones} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profilePageContainer: {
        width: '100%',
        maxWidth: 935,
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    gridWrapper: {
        flexDirection: 'row', 
    },
});