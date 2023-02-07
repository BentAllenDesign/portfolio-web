import { useState } from "react";
import { useOutletContext } from "react-router"

export type AppThemeContext = { darkMode: boolean };

export const useAppTheme = () => useOutletContext<AppThemeContext>();

export const useAppThemeState = (initialState: AppThemeContext | (() => AppThemeContext)) => useState<AppThemeContext>(initialState);