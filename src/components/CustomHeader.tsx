import { Pressable, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../hooks/storeHooks';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { hexToRgba } from '../utils/hexToRgba';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomText from './CustomText';
import { useNavigation } from '@react-navigation/native';


const CustomHeader = ({
    canGoBack = false,
    heading = ""
}: Readonly<{
    canGoBack?: boolean;
    heading: string
}>) => {
    const navigation = useNavigation();
    const COLORS = useAppSelector((state) => state.theme.colors);
    const styles = ScaledSheet.create({
        screen: {
            borderBottomWidth: .5,
            borderColor: COLORS.primary1000,
            backgroundColor: COLORS.bottomTabColor,
            paddingVertical: verticalScale(5),
            paddingHorizontal: scale(10),
            flexDirection: "row",
            alignItems: "center",
            columnGap: scale(10)
        },
        backButton: {
            padding: scale(6),
            borderRadius: scale(100),
            overflow: 'hidden'
        },
    });


    const handleBack = () => {
        if (navigation.canGoBack?.()) {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.screen}>
            {canGoBack && (<Pressable
                android_ripple={{
                    color: hexToRgba(COLORS.primary100, 0.3),
                    foreground: true,
                    borderless: true
                }}
                onPress={handleBack}
                style={styles.backButton}
            >
                <MaterialIcons
                    name='keyboard-backspace'
                    size={scale(30)}
                    color={COLORS.primary1000}
                />
            </Pressable>)}
            <CustomText
                customWeight='bold'
                customSize='extra_large'
                style={{ color: COLORS.primary1000 }}
            >
                {heading}
            </CustomText>
        </View>
    )
}

export default CustomHeader