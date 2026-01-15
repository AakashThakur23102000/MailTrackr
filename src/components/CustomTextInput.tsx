import React from "react";
import { TextInput, type TextInputProps } from "react-native-paper";
import { useAppSelector } from "../hooks/storeHooks";
import { ScaledSheet } from "react-native-size-matters";
import { fontSizes } from "./CustomText";

type Props = TextInputProps;

const CustomTextInput = ({ style, ...props }: Props) => {
    const COLORS = useAppSelector((state) => state.theme.colors);

    const styles = ScaledSheet.create({
        input: {
            backgroundColor: COLORS.cardColor,
            fontSize: fontSizes.regular,
        },
    });

    return (
        <TextInput
            mode="outlined"
            outlineColor={COLORS.secondary500}
            activeOutlineColor={COLORS.primary1000}
            textColor={COLORS.textColor}
            placeholderTextColor={COLORS.placeholderColor}
            style={[styles.input, style]}
            {...props}
        />
    );
};

export default CustomTextInput;
