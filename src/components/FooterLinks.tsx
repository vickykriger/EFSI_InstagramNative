import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FooterLinks() {

    const links = ['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'];
    const anioActual = new Date().getFullYear();

    return (
        <View style={styles.footer}>
            <View style={styles.linksContainer}>
                {links.map((link, index) => (
                    <Text key={index} style={styles.linkText}>
                        {link}{index < links.length - 1 ? ' · ' : ''}
                    </Text>
                ))}
            </View>
            <Text style={styles.footerText}>
                © {anioActual} INSTAGRAM FROM META
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 24,
        flexDirection: 'column',
        gap: 12,
    },
    linksContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    linkText: {
        fontSize: 11,
        color: '#8e8e8e',
    },
    footerText: {
        fontSize: 11,
        color: '#c7c7c7',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
});