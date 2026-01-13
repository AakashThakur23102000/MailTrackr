import React from "react";
import { Button, type ButtonProps } from "react-native-paper";
import { scale, ScaledSheet } from "react-native-size-matters";
import { useAppSelector } from "../hooks/storeHooks";
import { fontSizes } from "./CustomText";
import { hexToRgba } from "../utils/hexToRgba";

type Props = ButtonProps & {
    children: React.ReactNode;
};

const CustomButton: React.FC<Props> = ({ children, ...props }) => {
    const COLORS = useAppSelector((state) => state.theme.colors);

    const styles = ScaledSheet.create({
        btnStyle: {

        }
    })
    return (
        <Button
            {...props}
            style={styles.btnStyle}
            labelStyle={{
                fontSize: fontSizes.regular,
                color: COLORS.textColorNegative
            }}
            buttonColor={COLORS.primary500}
            theme={{
                roundness: scale(1),
            }}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
