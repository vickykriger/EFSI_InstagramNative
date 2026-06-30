import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import UserSuggestionsList from './UserSuggestionsList';

export default function SuggestionsList() {
    return (
        <View style={styles.suggestionsListWrapper}>
            {/* Cabecera de Sugerencias */}
            <View style={styles.suggestionsHeader}>
                <Text style={styles.headerText}>Suggested for you</Text>
                <Pressable style={styles.seeAllButton}>
                    <Text style={styles.seeAllText}>See All</Text>
                </Pressable>
            </View>

            {/* Lista de Items Sugeridos */}
            <View style={styles.suggestionsItems}>
                <UserSuggestionsList />
                <UserSuggestionsList />
                <UserSuggestionsList />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    suggestionsListWrapper: {
        width: '100%',
        backgroundColor: '#ffffff',
        paddingVertical: 8,
    },
    suggestionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    headerText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#8e8e8e',
    },
    seeAllButton: {
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    seeAllText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#262626',
    },
    suggestionsItems: {
        flexDirection: 'column',
        gap: 8, 
    },
});