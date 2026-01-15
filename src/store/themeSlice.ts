import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

export type ThemeModeType = 'light' | 'dark' | 'systemLight' | 'systemDark';

export type ThemeColorsType = {
    statusBarAndSafeAreaView: string,
    bottomTabColor: string

    background1: string;

    primary100: string;
    primary500: string;
    primary1000: string;

    secondary100: string;
    secondary500: string;
    secondary1000: string;


    cardColor: string;

    textColor: string;
    textColorNegative: string;
    placeholderColor: string;

};

const lightThemeColors: ThemeColorsType = {
    bottomTabColor: '#f9faef',
    statusBarAndSafeAreaView: "#f9faef",
    background1: '#f9faef',

    primary100: "#cdeda3",
    primary500: "#4c662b",
    primary1000: "#354e16",

    secondary100: "#dce7c8",
    secondary500: "#586249",
    secondary1000: "#404a33",

    cardColor: "#a9b49c",

    textColor: "#1a1c16",
    textColorNegative: "#e2e3d8",
    placeholderColor: "#414941",
};

const darkThemeColors: ThemeColorsType = {
    bottomTabColor: '#12140e',

    statusBarAndSafeAreaView: "#12140e",
    background1: '#12140e',

    cardColor: "#434e36",

    textColor: "#e2e3d8",
    textColorNegative: "#1a1c16",
    placeholderColor: "#C1C9BF",

    primary100: "#354e16",
    primary500: "#b1d18a",
    primary1000: "#cdeda3",

    secondary100: "#404a33",
    secondary500: "#bfcbad",
    secondary1000: "#dce7c8",
};

const systemModeFromDevice = () =>
    (Appearance.getColorScheme() === 'dark' ? 'systemDark' : 'systemLight') as ThemeModeType;

const baseFor = (mode: ThemeModeType): ThemeColorsType =>
    mode === 'dark' || mode === 'systemDark' ? darkThemeColors : lightThemeColors;

const merge = (base: ThemeColorsType, overrides?: Partial<ThemeColorsType>): ThemeColorsType =>
    ({ ...base, ...(overrides || {}) });

type State = {
    themeMode: ThemeModeType;
    isSystemModeEnabled: boolean;
    colors: ThemeColorsType;
    overridesLight: Partial<ThemeColorsType>;
    overridesDark: Partial<ThemeColorsType>;
};

const first = systemModeFromDevice();
const initialState: State = {
    themeMode: first === 'systemDark' ? 'dark' : 'light',
    isSystemModeEnabled: true,
    overridesLight: {},
    overridesDark: {},
    colors: merge(baseFor(first === 'systemDark' ? 'dark' : 'light'), {}),
};

const recomputeColors = (state: State) => {
    const activeMode = state.themeMode;
    const base = activeMode === 'dark' ? darkThemeColors : lightThemeColors;
    const ov = activeMode === 'dark' ? state.overridesDark : state.overridesLight;
    state.colors = merge(base, ov);
};

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<ThemeModeType>) => {
            const payload = action.payload;
            if (payload === 'systemLight' || payload === 'systemDark') {
                state.isSystemModeEnabled = true;
                state.themeMode = payload === 'systemDark' ? 'dark' : 'light';
            } else {
                state.isSystemModeEnabled = false;
                state.themeMode = payload;
            }
            recomputeColors(state);
        },

        setCustomColors: (
            state,
            action: PayloadAction<{ overrides: Partial<ThemeColorsType>; target?: 'light' | 'dark' | 'both' }>
        ) => {
            const { overrides, target = 'both' } = action.payload;
            if (target === 'light' || target === 'both') {
                state.overridesLight = { ...state.overridesLight, ...overrides };
            }
            if (target === 'dark' || target === 'both') {
                state.overridesDark = { ...state.overridesDark, ...overrides };
            }
            recomputeColors(state);
        },

        resetCustomColors: (
            state,
            action: PayloadAction<{ target?: 'light' | 'dark' | 'both' } | undefined>
        ) => {
            const target = action?.payload?.target ?? 'both';
            if (target === 'light' || target === 'both') state.overridesLight = {};
            if (target === 'dark' || target === 'both') state.overridesDark = {};
            recomputeColors(state);
        },
    },
});

export const { setThemeMode, setCustomColors, resetCustomColors } = ThemeSlice.actions;
export default ThemeSlice.reducer;