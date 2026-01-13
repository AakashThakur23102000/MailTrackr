import { View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../hooks/storeHooks';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import { Config } from '../../config/Config';
import CardWithButtons1 from '../../components/CardWithButtons1';

const MailTemplateScreen = () => {
    const COLORS = useAppSelector((state) => state.theme.colors);
    const styles = ScaledSheet.create({
        screen: {
            flex: 1,
            backgroundColor: COLORS.background1,
            paddingVertical: Config.screenVerticalPadding,
            paddingHorizontal: Config.screenHorizontalPadding
        },
        btnRow: {
            flexDirection: "row",
            justifyContent: "flex-end"
        },
        cardsRow: {
            rowGap: verticalScale(8),
            paddingVertical: verticalScale(10)
        }

    })
    return (
        <>
            <CustomHeader heading='Mail Templates' />
            <View style={styles.screen}>
                <View style={styles.btnRow}>
                    <CustomButton
                        style={{
                            width: scale(200)
                        }}
                    >+ Add Email Template</CustomButton>
                </View>
                <View style={styles.cardsRow}>
                    <CardWithButtons1
                        mainLabel='Welcome Email'
                        childLabel='Subject: Welcome to Company'
                        icon1Name='circle-edit-outline'
                        icon2Name='delete-circle-outline'
                        icon1OnPress={() => { }}
                        icon2OnPress={() => { }}
                    />
                    <CardWithButtons1
                        mainLabel='Welcome Email'
                        childLabel='Subject: Welcome to Company'
                        icon1Name='circle-edit-outline'
                        icon2Name='delete-circle-outline'
                        icon1OnPress={() => { }}
                        icon2OnPress={() => { }}
                    />
                    <CardWithButtons1
                        mainLabel='Welcome Email'
                        childLabel='Subject: Welcome to Company'
                        icon1Name='circle-edit-outline'
                        icon2Name='delete-circle-outline'
                        icon1OnPress={() => { }}
                        icon2OnPress={() => { }}
                    />
                </View>
            </View>
        </>
    )
}

export default MailTemplateScreen