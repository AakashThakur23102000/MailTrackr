import { View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { useRoute } from '@react-navigation/native'
import { useAppSelector } from '../../hooks/storeHooks'
import { moderateScale, scale, ScaledSheet } from 'react-native-size-matters'
import { Config } from '../../config/Config'
import CustomText from '../../components/CustomText'
import CustomTextInput from '../../components/CustomTextInput'

const AddEditMailTemplateScreen = () => {
    const COLORS = useAppSelector((state) => state.theme.colors);
    const styles = ScaledSheet.create({
        screen: {
            flex: 1,
            backgroundColor: COLORS.background1,
            paddingVertical: Config.screenVerticalPadding,
            paddingHorizontal: Config.screenHorizontalPadding
        },
        card: {
            backgroundColor: COLORS.cardColor,
            borderRadius: scale(5),
            padding: moderateScale(10)
        }
    })

    const route = useRoute<any>();
    const Mode = route?.params?.params?.mode;

    return (
        <>
            <CustomHeader canGoBack={true} heading={`${Mode} Mail Template`} />
            <View style={styles.screen}>
                <View style={styles.card}>
                    <CustomTextInput
                        label={"Email Template Name"}
                    />
                    <CustomTextInput
                        label={"Email Template Name"}
                    />
                </View>
            </View>
        </>
    )
}

export default AddEditMailTemplateScreen