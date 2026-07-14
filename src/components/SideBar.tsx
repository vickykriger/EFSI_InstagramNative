import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Line, Polygon, Rect } from 'react-native-svg';

export default function SideBar() {
    return (
        <View style={styles.sidebarContainer}>
                {/* Logo Instagram en itálica */}
                <View style={styles.sidebarLogo}>
                    <Text style={styles.logoText}>
                        Instagram
                    </Text>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    sidebarContainer: {
        width: '100%',
        height: 60, 
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    sidebarLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logoText: {
        fontFamily: 'serif', 
        fontStyle: 'italic',
        fontSize: 22,
        fontWeight: '400',
        letterSpacing: -0.5,
        color: '#000000',
        textAlign: 'center',
    },
});