import { BoltRounded } from "@mui/icons-material";
import { Box } from "@mui/system";
import clsx from "clsx";
import { memo, ReactNode } from "react";
import { IMyExperience } from "../../personal.config";

export const Header = (props: { darkMode: boolean }) => (
  <Box className='text-center pb-2'>
    <h1 className={clsx("text-4xl font-bold font-display tracking-tight sm:text-5xl mt-0", props.darkMode ? 'text-slate-100' : 'text-slate-800')}>Joshua Shevach</h1>
    <Box className={clsx("pb-2 [&>*]:inline-block [&>*]:px-4 [&>*]:pb-2", props.darkMode ? 'text-slate-300' : 'text-slate-600')}>
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

interface IDetailProps {
  darkMode?: boolean;
  size: 'lg' | 'base';
}

export const Details = memo<IMyExperience & IDetailProps>((props) => (
  <div className='flex flex-col pb-1 w-full'>
    <span className="font-bold text-lg">{props.title}</span>
    <div className={clsx("flex justify-between whitespace-no-wrap flex-wrap", props.darkMode ? 'text-slate-400' : 'text-slate-600')}>
      <span>
        <i>{props.company}</i>
      </span>
      <span>
        <i>
          <span>{props.duration[0]} — </span>
          <wbr />
          <span>{props.duration[1]}</span>
        </i>
      </span>
    </div>
  </div>
));

export const HeartSeparatedList = (list: string[], darkMode: boolean) => list.map((item, idx, arr) => (
  <span className='inline-flex items-center'>
    <span className={clsx("inline-flex", darkMode ? 'text-slate-300' : 'text-slate-700')}>
      {item}
    </span>
    <BoltRounded className={clsx("text-sm mx-1", idx === arr.length - 1 && 'hidden')} />
  </span>
));