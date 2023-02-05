import { Box } from "@mui/material"
import { Container } from "@mui/system"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Page = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) return storedDarkMode === 'true';
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', `${darkMode}`);
  }, [darkMode]);

  return (
    <Box className={clsx("w-screen h-screen", darkMode ? "bg-slate-800" : "bg-slate-100")}>
      <Box className="absolute w-full z-0">
        <Container className="relative h-[200px] w-[800px] opacity-50">
          <div className="absolute top-0 -left-4 w-[520px] h-[420px] bg-cyan-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-[420px] h-96 bg-pink-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/4 w-96 h-[420px] bg-amber-300 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </Container>
      </Box>
      <Box className="z-10 top-0">
        <Navbar {...{darkMode, setDarkMode}} />
      </Box>
      <Container className="p-3 sm:p-6 lg:p-9">
        <Box className="overflow-y-scroll overflow-x-hidden">
          <Outlet />
        </Box>
      </Container>
    </Box>
  )
}