import { BoltRounded } from "@mui/icons-material";
import { Box } from "@mui/system";
import clsx from "clsx";
import { memo, ReactNode } from "react";
import { IMyExperience } from "../../personal.config";

export const Header = (props: { darkMode: boolean }) => (
  <Box className='text-center pb-2'>
    <h1 className={clsx("text-4xl font-bold font-display tracking-tight sm:text-5xl", props.darkMode ? 'text-zinc-100' : 'text-zinc-800')}>Joshua Shevach</h1>
    <Box className={clsx("pb-2 [&>*]:inline-block [&>*]:px-4 [&>*]:pb-2", props.darkMode ? 'text-zinc-300' : 'text-zinc-600')}>
      <span>github.com/BentAllenDesign</span>
      <span>me@joshe.app</span>
      <br />
      <span>www.joshe.app/resume</span>
    </Box>
  </Box>
)

export const Section = (props: { children?: ReactNode | ReactNode[], title: string }) => (
  <Box className='m-[0_auto] pb-4'>
    <h2 className='text-3xl sm:text-4xl tracking-tight font-display text-left pb-1'>{props.title}</h2>
    {props.children}
  </Box>
);

export const Details = memo<IMyExperience>((props) => (
  <div className='flex flex-col pb-1 w-full'>
    <span className='font-bold'>{props.title}</span>
    <div className='flex justify-between whitespace-no-wrap flex-wrap'>
      <span className=''>
        <i>{props.company}</i>
      </span>
      <span className=''>
        <i>
          <span>{props.duration[0]}—</span>
          <wbr />
          <span>{props.duration[1]}</span>
        </i>
      </span>
    </div>
  </div>
));

export const HeartSeparatedList = (list: string[], darkMode: boolean) => {

  return (
    <span className="inline-flex flex-wrap gap-x-2 items-center first:hidden break-word">
      {list.map((item, idx) => (
        <>
          <BoltRounded className="text-sm first:hidden" />
          <span key={idx} className={clsx("w-max flex break-words", darkMode ? 'text-zinc-300' : 'text-zinc-700')}>
            {item}
          </span>
        </>
      ))}
    </span>
  );
}