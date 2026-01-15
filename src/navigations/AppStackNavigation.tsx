import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationPaths } from '../config/NavigationPaths';
import BottomTabNavigation from './BottomTabNavigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import GlobalQueryClient from '../utils/globalQueryClient';
import AddEditMailTemplateScreen from '../pages/add_edit_mail_template/AddEditMailTemplateScreen';

const AppStackNavigation = () => {

    const navigation = useNavigation();
    const queryClient = GlobalQueryClient({ navigation });
    const Stack = createStackNavigator();
    return (
        <QueryClientProvider client={queryClient}>
            <Stack.Navigator
                initialRouteName={NavigationPaths.BOTTOM_TAB_NAVIGATION}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={NavigationPaths.BOTTOM_TAB_NAVIGATION} component={BottomTabNavigation} />
                <Stack.Screen name={NavigationPaths.ADD_EDIT_MAIL_TEMPLATES_SCREEN} component={AddEditMailTemplateScreen} />
            </Stack.Navigator>
        </QueryClientProvider>
    )
}

export default AppStackNavigation