import { Box } from "@mui/material"
import { Container } from "@mui/system"
import clsx from "clsx"
import { useCallback, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useAppThemeState } from "../lib/hooks/useAppTheme"
import { Navbar } from "./Navbar"

export const Page = () => {
  const [theme, setTheme] = useAppThemeState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return { darkMode: storedDarkMode === 'true' };
  });

  useEffect(() => {
    if (!localStorage.getItem('darkMode')) {
      setTheme({ darkMode: true })
      localStorage.setItem('darkMode', `true`);
    }
    else localStorage.setItem('darkMode', `${theme.darkMode}`);
  }, [theme]);

  const setDarkMode = useCallback((darkMode: boolean) => {
    setTheme({ ...theme, darkMode });
  }, []);

  return (
    <Box className={clsx("w-screen min-h-screen overflow-y-hidden", theme.darkMode ? "bg-slate-800" : "bg-slate-100")}>
      <Navbar {...{ theme, setDarkMode }} />
      <Box className="absolute flex z-0 w-screen h-screen overflow-x-clip overflow-y-clip">
        <Container className={clsx("relative h-[200px] w-[800px]", theme.darkMode ? 'opacity-40' : 'opacity-60')}>
          <div className="absolute top-0 -left-4 w-[520px] h-[420px] bg-cyan-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-[420px] h-96 bg-pink-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob-slow animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/4 w-96 h-[420px] bg-amber-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-4000" />
        </Container>
      </Box>
      <Box className="pt-40 relative z-10">
        <Outlet context={theme} />
      </Box>
    </Box>
  )
}