import { DiamondRounded } from "@mui/icons-material";
import { Box } from "@mui/system";
import clsx from "clsx";
import { memo, ReactNode } from "react";
import { IMyExperience } from "../../personal.config";

export const Header = (props: { darkMode: boolean }) => (
  <Box className='text-center pb-2'>
    <h1 className={clsx(props.darkMode ? 'text-zinc-200' : 'text-zinc-800')}>Joshua Shevach</h1>
    <Box className='pb-2 [&>*]:inline-block [&>*]:px-4 [&>*]:pb-2'>
      <span>github.com/BentAllenDesign</span>
      <span>me@joshe.info</span>
      <br />
      <span>joshe.info/resume</span>
    </Box>
  </Box>
)

export const Section = (props: { children?: ReactNode | ReactNode[], title: string }) => (
  <Box className='m-[0_auto] pb-4'>
    <h2 className='text-left pb-1'>{props.title}</h2>
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

interface IHeart {
  children?: ReactNode;
}
export const Heart = memo<IHeart>(({ children }) => (
  <span className='relative text-xs text-[#1a1a1a] -top-1 first:p-1 p-4'>
    {children}
  </span>
))

export const HeartSeparatedList = (list: string[]) => {

  return (
    <span className="flex flex-wrap gap-x-2 items-center first:hidden break-word">
      {list.map((item, idx) => (
        <>
          <DiamondRounded className="text-sm first:hidden" />
          <span key={idx} className="w-max flex break-words">
            {item}
          </span>
        </>
      ))}
    </span>
  );
}