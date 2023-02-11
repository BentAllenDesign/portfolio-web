import { DarkMode, LightMode, MenuRounded } from "@mui/icons-material";
import { Box, ClickAwayListener, Container, Grow, IconButton, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import clsx from "clsx";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppThemeContext } from "../lib/hooks/useAppTheme";

// const linkStyles = clsx("no-underline block capitalize text-lg text-inherit font-medium transition-all duration-150 ease-in-out drop-shadow-sm hover:text-cyan-500 dark);

interface INavbar {
  theme: AppThemeContext;
  setDarkMode: (darkMode: boolean) => void;
}

export const Navbar = memo<INavbar>(({ theme, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuAnchorRef = useRef<HTMLButtonElement>(null);

  const handleThemeChange = useCallback(() => {
    setDarkMode(!theme.darkMode);
  }, [theme.darkMode]);

  const handleMobileMenuKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setMobileMenuOpen(false);
    } else if (event.key === 'Escape') {
      setMobileMenuOpen(false);
    }
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  const handleMobileMenuClose = useCallback((event: Event | React.SyntheticEvent) => {
    if (mobileMenuAnchorRef.current && mobileMenuAnchorRef.current.contains(event.target as HTMLElement)) return;
    setMobileMenuOpen(false);
  }, [mobileMenuAnchorRef.current]);

  const linkStyles = useMemo<string>(() => {
    return clsx("no-underline block capitalize text-lg text-inherit font-medium transition-all duration-150 ease-in-out drop-shadow-sm", theme.darkMode ? 'hover:text-slate-200 group-hover:text-cyan-500' : 'hover:text-slate-900 group-hover:text-cyan-500')
  }, [theme.darkMode]);

  return (
    <Box className="flex items-center drop-shadow-md z-20 fixed w-full top-0 backdrop-blur">
      <Box className={clsx("absolute w-full h-full opacity-70 backdrop-blur-lg", theme.darkMode ? 'bg-slate-800' : 'bg-slate-100')} />
      <Container className="flex items-center py-3">
        <Box className="font-logo -rotate-6 -mt-[34px]">
          <Link to="/" className="group no-underline text-transparent">
            <span className={clsx("select-none fixed z-50 subpixel-antialiased tracking-tighter text-4xl font-logo", theme.darkMode ? 'text-slate-200' : 'text-slate-900')}>
              JOSHE
            </span>
            <span className={clsx(
              "select-none absolute subpixel-antialiased tracking-tighter text-4xl font-logo transition-all duration-300 ease-in-out translate-x-[1px] translate-y-[3px]",
              "group-hover:translate-x-[3px] group-hover:translate-y-[5px] group-hover:opacity-95 group-hover:scale-105 opacity-40",
              theme.darkMode ? 'text-slate-300 group-hover:text-cyan-500' : 'text-gray-900 group-hover:text-cyan-500'
            )}
            >
              JOSHE
            </span>
          </Link>
        </Box>
        <Box className={clsx("select-none tracking-tight hidden sm:flex space-x-4 ml-[150px]", theme.darkMode ? 'text-slate-400' : 'text-slate-600')}>
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
        <Box className="ml-auto">
          <IconButton onClick={handleThemeChange} className={theme.darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-800 hover:text-slate-600'}>
            {theme.darkMode
              ? <LightMode fontSize="large" className="text-inherit" />
              : <DarkMode fontSize="large" className="text-inherit" />}
          </IconButton>
          <>
            <IconButton
              ref={mobileMenuAnchorRef}
              className={clsx("sm:hidden", theme.darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-800 hover:text-slate-600')}
              onClick={handleMobileMenuToggle}
            >
              <MenuRounded fontSize="large" />
            </IconButton>
            <Popper
              open={mobileMenuOpen}
              anchorEl={mobileMenuAnchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleMobileMenuClose}>
                      <MenuList
                        autoFocusItem={mobileMenuOpen}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleMobileMenuKeyDown}
                      >
                        <MenuItem onClick={handleMobileMenuClose} className="group">
                          <Link to="/resume" className={linkStyles}>
                            resume
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMobileMenuClose} className="group">
                          <Link to="/projects" className={linkStyles}>
                            projects
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMobileMenuClose} className="group">
                          <Link to="/contact" className={linkStyles}>
                            contact
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMobileMenuClose} className="group">
                          <Link to="/about" className={linkStyles}>
                            about
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        </Box>
      </Container>
    </Box>
  )
})