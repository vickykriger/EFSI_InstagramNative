import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

export default function NavItem({ icon, label, onClick }: NavItemProps) {
    return (
        <Pressable 
            onPress={onClick}
            style={({ pressed }) => [
                styles.navItem, 
                pressed && styles.navItemPressed
            ]}
        >
            <View style={styles.navItemIcon}>
                {icon}
            </View>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        padding: 12,
        borderRadius: 8,
        width: '100%',
    },
    navItemPressed: {
        backgroundColor: '#f2f2f2',
    },
    navItemIcon: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '400',
        color: '#262626',
    },
});