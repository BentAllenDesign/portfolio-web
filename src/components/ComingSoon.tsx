import { Container } from "@mui/material";
import clsx from "clsx";
import { useAppTheme } from "../lib/hooks/useAppTheme"

export const ComingSoon = () => {
  const { darkMode } = useAppTheme();

  return (
    <Container>
      <h1 className={clsx("font-display", darkMode ? 'text-zinc-200' : 'text-zinc-800')}>Coming Soon!</h1>
    </Container>
  )
}