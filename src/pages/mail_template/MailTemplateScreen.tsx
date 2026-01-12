import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../hooks/storeHooks';
import { ScaledSheet } from 'react-native-size-matters';
import CustomText from '../../components/CustomText';

const MailTemplateScreen = () => {
    const COLORS = useAppSelector((state) => state.theme.colors);
    const styles = ScaledSheet.create({
        screen: {
            flex: 1,
            backgroundColor: COLORS.background1
        }
    })
    return (
        <View style={styles.screen}>
            <CustomText>ss</CustomText>
        </View>
    )
}

export default MailTemplateScreen