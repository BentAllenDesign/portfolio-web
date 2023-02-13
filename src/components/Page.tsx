import { Box, Divider } from "@mui/material"
import { Container } from "@mui/system"
import clsx from "clsx"
import React from "react"
import { Outlet } from "react-router-dom"
import { useAppThemeState } from "../lib/hooks/useAppTheme"
import { useOnRouteChange } from "../lib/hooks/useOnRouteChange"
import { Navbar } from "./Navbar"

export const Page = () => {
  const [theme, setTheme] = useAppThemeState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return { darkMode: storedDarkMode === 'true' };
  });

  const pageRef = React.useRef<HTMLDivElement>(null);

  useOnRouteChange(() => {
    pageRef.current?.scrollTo(0,0);
  })

  React.useEffect(() => {
    if (!localStorage.getItem('darkMode')) {
      setTheme({ darkMode: true })
      localStorage.setItem('darkMode', `true`);
    }
    else localStorage.setItem('darkMode', `${theme.darkMode}`);
  }, [theme]);

  const setDarkMode = React.useCallback((darkMode: boolean) => {
    setTheme({ ...theme, darkMode });
  }, []);

  return (
    <Box ref={pageRef} className={clsx("w-screen h-screen overflow-y-scroll relative flex flex-col", theme.darkMode ? "bg-slate-800" : "bg-slate-100")}>
      <Box className="absolute flex z-0 w-screen h-screen overflow-x-clip overflow-y-clip">
        <Container className={clsx("relative h-[200px] w-[800px]", theme.darkMode ? 'opacity-50' : 'opacity-80')}>
          <div className="absolute top-0 -left-4 w-[520px] h-[420px] bg-cyan-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-[420px] h-96 bg-pink-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob-slow animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/4 w-96 h-[420px] bg-amber-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-4000" />
        </Container>
      </Box>
      <Navbar {...{ theme, setDarkMode }} />
      <Box className="pt-12 sm:pt-24 relative z-10 mb-auto">
        <Outlet context={theme} />
      </Box>
      <Divider className={clsx("w-screen my-12", theme.darkMode && "bg-slate-600")} />
      <Box className="max-w-sm mb-12 -mt-4 text-slate-500 text-center mx-auto">
        © 2023 Joshua Shevach. All rights reserved.
      </Box>
    </Box>
  )
}