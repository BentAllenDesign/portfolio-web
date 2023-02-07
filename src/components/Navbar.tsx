import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, Container, IconButton } from "@mui/material";
import clsx from "clsx";
import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { AppThemeContext } from "../lib/hooks/useAppTheme";

const linkStyles = "no-underline block capitalize text-lg text-inherit font-medium transition-all duration-150 ease-in-out drop-shadow-sm hover:text-cyan-500";

interface INavbar {
  theme: AppThemeContext;
  setDarkMode: (darkMode: boolean) => void;
}

export const Navbar = memo<INavbar>(({ theme, setDarkMode }) => {
  const handleThemeChange = useCallback(() => {
    setDarkMode(!theme.darkMode);
  }, [theme.darkMode]);

  return (
    <Box className="flex items-center drop-shadow-md z-20 fixed w-full top-0 backdrop-blur-sm">
      <Box className={clsx("absolute w-full h-full opacity-50 backdrop-blur-lg", theme.darkMode ? 'bg-gray-900' : 'bg-white')} />
      <Container className="flex items-center py-3">
        <Box className="font-logo -rotate-6 -mt-[34px]">
          <Link to="/" replace className="group no-underline text-transparent">
            <span className={clsx("select-none fixed z-50 subpixel-antialiased tracking-tighter text-4xl font-logo", theme.darkMode ? 'text-gray-200' : 'text-gray-900')}>
              JOSHE
            </span>
            <span className={clsx(
              "select-none absolute subpixel-antialiased tracking-tighter text-4xl font-logo transition-all duration-300 ease-in-out translate-x-[1px] translate-y-[3px]",
              "group-hover:translate-x-[3px] group-hover:translate-y-[5px] group-hover:opacity-95 group-hover:scale-105 opacity-40",
              theme.darkMode ? 'text-gray-300 group-hover:text-cyan-500' : 'text-gray-900 group-hover:text-cyan-500'
            )}
            >
              JOSHE
            </span>
          </Link>
        </Box>
        <Box className={clsx("select-none tracking-tight flex space-x-4 ml-[150px]", theme.darkMode ? 'text-zinc-400' : 'text-zinc-800')}>
          <Link to="/resume" className={linkStyles}>
            resume
          </Link>
          <Link to="/projects" className={linkStyles}>
            projects
          </Link>
          <Link to="/contact" className={linkStyles}>
            contact
          </Link>
          <Link to="/about" className={linkStyles}>
            about
          </Link>
        </Box>
        <IconButton onClick={handleThemeChange} className={clsx("ml-auto transition duration-100", theme.darkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-800 hover:text-zinc-600')}>
          {theme.darkMode
            ? <LightMode fontSize="large" className="text-inherit" />
            : <DarkMode fontSize="large" className="text-inherit" />}
        </IconButton>
      </Container>
    </Box>
  )
})