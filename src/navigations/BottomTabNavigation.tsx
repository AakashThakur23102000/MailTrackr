import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationPaths } from '../config/NavigationPaths';
import RecordsScreen from '../pages/records/RecordsScreen';
import MailTemplateScreen from '../pages/mail_template/MailTemplateScreen';
import ProfileScreen from '../pages/profile/ProfileScreen';
import CustomBottomTabBar from './CustomBottomTabBar';

const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
            <Tab.Navigator
                initialRouteName={NavigationPaths.RECORDS_SCREEN}
                screenOptions={{ headerShown: false }}
                tabBar={(props) => <CustomBottomTabBar {...props} />}
            >
                <Tab.Screen name={NavigationPaths.RECORDS_SCREEN} component={RecordsScreen} />
                <Tab.Screen name={NavigationPaths.MAIL_TEMPLATES_SCREEN} component={MailTemplateScreen} />
                <Tab.Screen name={NavigationPaths.PROFILE_SCREEN} component={ProfileScreen} />
            </Tab.Navigator>
    )
}

export default BottomTabNavigation