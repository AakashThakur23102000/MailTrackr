import { GestureResponderEvent, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { useAppSelector } from '../hooks/storeHooks';

const CardWithButtons1 = ({
    mainLabel = "",
    childLabel = "",
    icon1Name = "",
    icon2Name = "",
    icon1OnPress = () => { },
    icon2OnPress = () => { },
    icon1Size = scale(40),
    icon2Size = scale(40),
    icon1Color,
    icon2Color
}: {
    mainLabel: string,
    childLabel: string,
    icon1Name: string,
    icon2Name: string,
    icon1OnPress: (event: GestureResponderEvent) => void,
    icon2OnPress: (event: GestureResponderEvent) => void,
    icon1Size?: number,
    icon2Size?: number,
    icon1Color?: string,
    icon2Color?: string

}) => {

    const COLORS = useAppSelector((state) => state.theme.colors);

    const style = ScaledSheet.create({
        screen: {
            backgroundColor: COLORS.primary100,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(4)
        },
        columnLabel: {
        },
        columnIcon: {
            flexDirection: "row",
            columnGap: scale(8)
        }
    })
    return (
        <View style={style.screen}>
            <View style={style.columnLabel}>
                <CustomText customWeight='bold'>{mainLabel}</CustomText>
                <CustomText customSize='small'>{childLabel}</CustomText>
            </View>
            <View style={style.columnIcon}>
                <TouchableOpacity onPress={icon1OnPress}>
                    <MaterialCommunityIcons name={icon1Name} size={icon1Size} color={icon1Color ?? COLORS.primary1000} />
                </TouchableOpacity>
                <TouchableOpacity onPress={icon2OnPress}>
                    <MaterialCommunityIcons name={icon2Name} size={icon2Size} color={icon2Color ?? COLORS.primary1000} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardWithButtons1