import { View, Pressable } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useAppSelector } from "../hooks/storeHooks";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../components/CustomText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationPaths } from "../config/NavigationPaths";

const CustomBottomTabBar = ({
    state,
    navigation,
}: BottomTabBarProps) => {
    const COLORS = useAppSelector((state) => state.theme.colors);

    const styles = ScaledSheet.create({
        screen: {
            backgroundColor: COLORS.bottomTabColor,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingVertical: verticalScale(5),
            paddingTop: verticalScale(8),
            borderTopWidth: 0.5,
            borderColor: COLORS.primary1000,
        },
        columns: {
            backgroundColor: COLORS.bottomTabColor,
            borderWidth: 0.2,
            borderColor: COLORS.primary1000,
            borderRadius: scale(5),
            elevation: 1,
            alignItems: "center",
            width: "31%",
            paddingVertical: verticalScale(4),
            overflow: "hidden",
        },
        textLabel: {
            color: COLORS.primary1000,
        },
    });

    const BottomTabData = [
        {
            label: "Records",
            icons: "clipboard-text-outline",
            routeName: NavigationPaths.RECORDS_SCREEN,
        },
        {
            label: "Mail Templates",
            icons: "email-edit-outline",
            routeName: NavigationPaths.MAIL_TEMPLATES_SCREEN,
        },
        {
            label: "Profile",
            icons: "account-circle-outline",
            routeName: NavigationPaths.PROFILE_SCREEN,
        },
    ];


    const hexToRgba = (hex: string, alpha = 0.18) => {
        const h = hex.replace("#", "");
        if (h.length !== 6) return hex;
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <View style={styles.screen}>
            {BottomTabData?.map((item, index) => {
                const isFocused = state.index === index;

                return (
                    <Pressable
                        key={index?.toString()}
                        style={[
                            styles.columns,
                            isFocused && { backgroundColor: COLORS.primary100 },
                        ]}
                        android_ripple={{
                            color: hexToRgba(COLORS.primary100, 0.3),
                            foreground: true,
                        }}
                        onPress={() => {
                            if (!isFocused) {
                                navigation.navigate(item.routeName as never);
                            }
                        }}
                    >
                        <MaterialCommunityIcons
                            name={item?.icons}
                            size={scale(20)}
                            color={COLORS.primary1000}
                        />
                        <CustomText customSize="extra_small" style={styles.textLabel}>
                            {item?.label}
                        </CustomText>
                    </Pressable>
                );
            })}
            <View />
        </View>
    );
};

export default CustomBottomTabBar;
