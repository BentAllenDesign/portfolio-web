import { ChevronRightRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Container, Divider, IconButton, Paper } from "@mui/material";
import clsx from "clsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IMyExperience, my } from "../../personal.config";
import { Details } from "../components/Resume";
import { useAppTheme } from "../lib/hooks/useAppTheme";
import { IPageProps } from "../lib/types";

export const LandingPage = (props: IPageProps) => {
  const { darkMode } = useAppTheme();

  useEffect(() => { document.title = "Joshe - " + props.title }, []);

  return (
    <>
      <Container className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        <Box className="flex rounded-full overflow-clip h-44 w-44 min-w-36 drop-shadow lg:self-start items-center">
          <img src="/headshot.jpg" alt="Joshua Shevach - headshot photo" className="object-cover h-48 w-56 self-center scale-150" />
        </Box>
        <Box className="max-w-2xl">
          <h1 className={clsx("text-3xl xs:text-4xl font-bold font-display tracking-tight sm:text-5xl mt-0", darkMode ? 'text-slate-100' : 'text-slate-800')}>
            Full-time <span className="hidden xs:inline">software <span className="hidden sm:inline">engineer</span><span className="sm:hidden">dev</span></span><span className="xs:hidden">developer</span>.
            <br />
            Part-time travel pro.
          </h1>
          <p className={clsx("mt-6 text-base", darkMode ? 'text-slate-300' : 'text-slate-700')}>
            I’m Josh, a full-stack software engineer for Cognizant in Frisco, Texas. I’m also the owner of
            Cruisr LLC, a cruise travel agency I created to book cheaper cruises for my friends, family, and
            colleagues! In my free time I like to play FPS or adventure games, binge sci-fi and anime shows,
            and hone my engineering skills by building bots and small full-stack apps.
          </p>
          <Box className="-ml-3 mt-5 flex sm:gap-2">
            <IconButton
              href="https://www.linkedin.com/in/joshua-shevach/"
              aria-label="Follow on LinkedIn"
              className={clsx("transition-all duration-100 ease-in-out", darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-800 hover:text-slate-600')}
            >
              <LinkedIn className="text-4xl sm:text-5xl" />
            </IconButton>
            <IconButton
              href="https://github.com/BentAllenDesign"
              aria-label="Follow on GitHub"
              className={clsx("transition-all duration-100 ease-in-out", darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-800 hover:text-slate-600')}
            >
              <GitHub className="text-4xl sm:text-5xl" />
            </IconButton>
            <Button endIcon={<ChevronRightRounded />} className={clsx("ml-3 normal-case rounded-full font-bold text-base sm:text-lg sm:my-1 px-4 sm:px-6", darkMode ? 'bg-slate-400 hover:bg-slate-200 text-slate-800' : 'bg-slate-800 hover:bg-slate-600 text-slate-100')}>
              <Link to="/about" className="text-inherit no-underline">
                Learn more<span className="hidden xs:inline"> about me</span>!
              </Link>
            </Button>
          </Box>
        </Box>
      </Container>
      <Divider className={clsx("w-screen mt-10 sm:mt-20 mb-8 sm:mb-12", darkMode && "bg-slate-600")} />
      <Container className="space-y-12">
        <Box className="flex flex-col md:flex-row-reverse w-full gap-8">
          <Box className="md:w-1/3">
            <h2 className={clsx("font-display md:mt-0 text-3xl lg:text-4xl", darkMode ? 'text-slate-200' : 'text-slate-800')}>Work History</h2>
            <Paper variant="outlined" className={clsx("p-8", darkMode && "bg-slate-800 border-slate-700")}>
              {my.jobs.map(({ Icon, ...job }, idx) => (
                <Box key={idx} className={clsx("flex gap-x-2 mb-4 last:mb-0", darkMode ? 'text-slate-200' : 'text-slate-800')}>
                  <Icon fontSize="large" />
                  <Details {...job as IMyExperience} size='lg' darkMode={darkMode} />
                </Box>
              ))}
            </Paper>
          </Box>
          <Box className="md:w-2/3">
            <h2 className={clsx("font-display md:mt-0 text-3xl lg:text-4xl", darkMode ? 'text-slate-200' : 'text-slate-800')}>Projects</h2>
            <Paper variant="outlined" className={clsx("p-8 flex items-center justify-center", darkMode && "bg-slate-800 border-slate-700")}>
              <span className="font-display text-4xl font-bold mt-2 animate-bounce text-slate-500">
                Coming Soon!
              </span>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
}