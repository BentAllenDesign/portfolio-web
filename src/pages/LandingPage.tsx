import { ChevronRightRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Container, Divider, IconButton, Paper } from "@mui/material";
import clsx from "clsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { my } from "../../personal.config";
import { useAppTheme } from "../lib/hooks/useAppTheme";
import { IPageProps } from "../lib/types";

export const LandingPage = (props: IPageProps) => {
  const { darkMode } = useAppTheme();

  useEffect(() => { document.title = "Joshe - " + props.title }, []);

  return (
    <>
      <Container className="space-y-12">
        <Box className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <Box className="flex rounded-full overflow-clip h-44 w-44 min-w-36 drop-shadow lg:self-start items-center">
            <img src="/headshot.jpg" alt="Joshua Shevach - headshot photo" className="object-cover h-48 w-56 self-center scale-150" />
          </Box>
          <Box className="max-w-2xl">
            <h1 className={clsx("text-4xl font-bold font-display tracking-tight sm:text-5xl mt-0", darkMode ? 'text-zinc-100' : 'text-zinc-800')}>
              Full-time software engineer.
              <br />
              Part-time travel pro.
            </h1>
            <p className={clsx("mt-6 text-base", darkMode ? 'text-zinc-300' : 'text-zinc-700')}>
              I’m Josh, a full-stack software engineer and travel agent based in Frisco Texas. I’m the owner of
              Cruisr LLC, a cruise travel agency I created to book cheaper cruises for my friends, family, and
              colleagues! In my free time, I like to game, binge shows, and hone my engineering skills by building
              bots and small full-stack apps.
            </p>
            <Box className="-ml-3 mt-3 flex sm:gap-2">
              <IconButton
                href="https://www.linkedin.com/in/joshua-shevach/"
                aria-label="Follow on LinkedIn"
                className={clsx("transition-all duration-100 ease-in-out", darkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-800 hover:text-zinc-600')}
              >
                <LinkedIn className="text-4xl sm:text-5xl" />
              </IconButton>
              <IconButton
                href="https://github.com/BentAllenDesign"
                aria-label="Follow on GitHub"
                className={clsx("transition-all duration-100 ease-in-out", darkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-800 hover:text-zinc-600')}
              >
                <GitHub className="text-4xl sm:text-5xl" />
              </IconButton>
              <Button endIcon={<ChevronRightRounded />} className={clsx("ml-3 normal-case rounded-full font-bold text-base px-4 sm:px-6 my-2", darkMode ? 'bg-zinc-400 hover:bg-zinc-200 text-slate-800' : 'bg-zinc-800 hover:bg-zinc-600 text-slate-100')}>
                <Link to="/about" className="text-inherit no-underline">
                  Learn more about me!
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider className={clsx("w-screen my-12", darkMode && "bg-slate-600")} />
      {/* <Container className="space-y-12">
        <Box className="flex flex-col md:flex-row-reverse w-full gap-8">
          <Box className="md:w-1/3">
            <h2 className={clsx("font-display", darkMode ? 'text-zinc-200' : 'text-zinc-800')}>Work History</h2>
            <Paper variant="outlined" className={clsx("p-8", darkMode && "bg-slate-800 border-slate-700")}>
              {my.jobs.map(({ icon, title }) => (
                <Box className="flex gap-x-2">
                  {icon}
                  <Box>{title}</Box>
                </Box>
              ))}
            </Paper>
          </Box>
          <Box className="md:w-2/3">
            <h2 className={clsx("font-display", darkMode ? 'text-zinc-200' : 'text-zinc-800')}>Projects</h2>
            <Paper variant="outlined" className={clsx("p-8", darkMode && "bg-slate-800 border-slate-700")}>

            </Paper>
          </Box>
        </Box>
      </Container> */}
    </>
  )
}