import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, Container, IconButton } from "@mui/material";
import clsx from "clsx";
import { memo, useCallback } from "react";
import { Link } from "react-router-dom";

const linkStyles = "no-underline block capitalize text-lg text-inherit font-medium transition-all duration-200 ease-in-out drop-shadow-sm hover:text-cyan-500";

interface INavbar {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = memo<INavbar>(({ darkMode, setDarkMode }) => {
  const handleThemeChange = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  return (
    <Box className="flex items-center drop-shadow-md relative">
      <Box className={clsx("absolute w-full h-full opacity-50 backdrop-blur-lg", darkMode ? 'bg-gray-900' : 'bg-white')} />
      <Container className="flex items-center py-6">
        <Box className="font-logo -rotate-6 -mt-7">
          <Link to="/" replace className="group no-underline text-transparent">
            <span className={clsx("fixed z-50 subpixel-antialiased tracking-tighter text-4xl font-logo", darkMode ? 'text-gray-200' : 'text-gray-900')}>
              JOSHE
            </span>
            <span className={clsx(
              "absolute subpixel-antialiased tracking-tighter text-4xl font-logo transition-all duration-300 ease-in-out translate-x-[1px] translate-y-[3px]",
              "group-hover:translate-x-[3px] group-hover:translate-y-[5px] group-hover:opacity-95 group-hover:scale-105 opacity-40",
              darkMode ? 'text-gray-300 group-hover:text-cyan-500' : 'text-gray-900 group-hover:text-cyan-400'
            )}
            >
              JOSHE
            </span>
          </Link>
        </Box>
        <Box className={clsx("font-display tracking-tight flex space-x-4 ml-[150px]", darkMode ? 'text-gray-400' : 'text-gray-900')}>
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
        <IconButton onClick={handleThemeChange} className={clsx("ml-auto transition duration-100", darkMode ? 'text-gray-300' : 'text-gray-900')}>
          {darkMode
            ? <LightMode fontSize="large" className="text-inherit" />
            : <DarkMode fontSize="large" className="text-inherit" />}
        </IconButton>
      </Container>
    </Box>
  )
})