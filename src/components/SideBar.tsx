import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Line, Polygon, Rect } from 'react-native-svg';
import NavItem from './NavItem';

interface SideBarProps {
    onGoHome: () => void;
    onGoToProfile: () => void;
}

const HomeIcon = () => (
    <Svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
        <Path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z" />
    </Svg>
);

const SearchIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Circle cx="10.5" cy="10.5" r="8.5" />
        <Line strokeLinecap="round" x1="16.511" x2="22" y1="16.511" y2="22" />
    </Svg>
);

const ExploreIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Circle cx="12" cy="12" r="10.5" />
        <Polygon fill="currentColor" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585" />
    </Svg>
);

const ReelsIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Rect height="20" rx="4" ry="4" width="20" x="2" y="2" />
        <Line x1="2" x2="22" y1="7" y2="7" />
        <Line strokeLinecap="round" x1="7.2" x2="10" y1="2.1" y2="7" />
        <Line strokeLinecap="round" x1="13.5" x2="16.4" y1="2" y2="7" />
        <Path d="M9.76 17.66a.91.91 0 0 1-.46-.79v-5.75a.91.91 0 0 1 1.37-.79l4.54 2.87a.91.91 0 0 1 0 1.58l-4.54 2.87a.91.91 0 0 1-.91.01Z" fill="currentColor" stroke="none" />
    </Svg>
);

const MessagesIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Path d="M21.5 12a9.5 9.5 0 1 1-3.6-7.4L22 2l-2.5 3.5A9.46 9.46 0 0 1 21.5 12Z" />
        <Path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
    </Svg>
);

const NotificationsIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </Svg>
);

const CreateIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Rect height="20" rx="4" ry="4" width="20" x="2" y="2" />
        <Line strokeLinecap="round" x1="12" x2="12" y1="7" y2="17" />
        <Line strokeLinecap="round" x1="7" x2="17" y1="12" y2="12" />
    </Svg>
);

const ProfileIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Circle cx="12" cy="8" r="4" />
        <Path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
    </Svg>
);

const MoreIcon = () => (
    <Svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <Line strokeLinecap="round" x1="3" x2="21" y1="4" y2="4" />
        <Line strokeLinecap="round" x1="3" x2="21" y1="12" y2="12" />
        <Line strokeLinecap="round" x1="3" x2="21" y1="20" y2="20" />
    </Svg>
);

export default function SideBar({ onGoHome, onGoToProfile }: SideBarProps) {
    return (
        <View style={styles.sidebarContainer}>
            <View>
                {/* Logo Instagram en itálica */}
                <View style={styles.sidebarLogo}>
                    <Text style={styles.logoText}>
                        Instagram
                    </Text>
                </View>

                {/* Nav items */}
                <View style={styles.sidebarNav}>
                    <NavItem label="Home" icon={<HomeIcon />} onClick={onGoHome} />
                    <NavItem label="Search" icon={<SearchIcon />} />
                    <NavItem label="Explore" icon={<ExploreIcon />} />
                    <NavItem label="Reels" icon={<ReelsIcon />} />
                    <NavItem label="Messages" icon={<MessagesIcon />} />
                    <NavItem label="Notifications" icon={<NotificationsIcon />} />
                    <NavItem label="Create" icon={<CreateIcon />} />
                    <NavItem label="Profile" icon={<ProfileIcon />} onClick={onGoToProfile} />
                </View>
            </View>

            {/* More al fondo */}
            <View style={styles.sidebarBottom}>
                <NavItem label="More" icon={<MoreIcon />} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sidebarContainer: {
        width: 244,
        height: '100%',
        paddingHorizontal: 12,
        paddingTop: 8,
        paddingBottom: 20,
        borderRightWidth: 1,
        borderRightColor: '#dbdbdb',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
    },
    sidebarLogo: {
        paddingHorizontal: 12,
        paddingTop: 25,
        paddingBottom: 35,
    },
    logoText: {
        fontFamily: 'serif', 
        fontStyle: 'italic',
        fontSize: 24,
        fontWeight: '400',
        letterSpacing: -0.5,
        color: '#000000',
    },
    sidebarNav: {
        flexDirection: 'column',
        gap: 4,
    },
    sidebarBottom: {
        marginTop: 'auto',
    },
});