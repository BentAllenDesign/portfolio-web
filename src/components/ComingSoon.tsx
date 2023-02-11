import { Container } from "@mui/material";
import clsx from "clsx";
import { useAppTheme } from "../lib/hooks/useAppTheme"

export const ComingSoon = () => {
  const { darkMode } = useAppTheme();

  return (
    <Container>
      <h1 className={clsx("text-4xl sm:text-5xl font-display text-center mb-24", darkMode ? 'text-slate-200' : 'text-slate-800')}>Coming Soon!</h1>
    </Container>
  )
}