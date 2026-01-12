import { View, Pressable } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useAppSelector } from '../hooks/storeHooks'
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters'
import CustomText from '../components/CustomText'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CustomBottomTabBar = ({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) => {

    const COLORS = useAppSelector(state => state.theme.colors);
    const styles = ScaledSheet.create({
        screen: {
            backgroundColor: COLORS.bottomTabColor,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingVertical: verticalScale(5),
            paddingTop: verticalScale(8),
            borderTopWidth: .5,
            borderColor: COLORS.primary1000
        },
        columns: {
            backgroundColor: COLORS.bottomTabColor,
            borderWidth: .2,
            borderColor: COLORS.primary1000,
            borderRadius: scale(5),
            elevation: 1,
            alignItems: "center",
            width: "31%",
            paddingVertical: verticalScale(4),
            overflow:"hidden"
        },
        textLabel: {
            color: COLORS.primary1000
        }
    })

    const BottomTabData = [
        {
            label: "Records",
            icons: "clipboard-text-outline"
        },
        {
            label: "Mail Templates",
            icons: "email-edit-outline"
        },
        {
            label: "Profile",
            icons: "account-circle-outline"
        },
    ];

    return (
        <View style={styles.screen} >
            {BottomTabData?.map((item, index) => {
                return (
                    <Pressable
                        key={index?.toString()}
                        style={styles.columns}
                        android_ripple={{
                            color: COLORS.primary100,
                            foreground: true,
                        }}
                        onPress={() => { }}
                    >
                        <MaterialCommunityIcons
                            name={item?.icons}
                            size={scale(20)}
                            color={COLORS.primary1000}
                        />
                        <CustomText
                            customSize='extra_small'
                            style={styles.textLabel}
                        >
                            {item?.label}</CustomText>
                    </Pressable>
                )
            })}
            <View></View>
        </View>
    )
}

export default CustomBottomTabBar