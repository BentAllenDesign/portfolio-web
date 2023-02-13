import { IMyExperience, my } from '../../personal.config'

import { Box, Container } from '@mui/material'
import clsx from 'clsx'
import { useEffect } from 'react'
import { Details, Header, HeartSeparatedList, Section } from '../components/Resume'
import { useAppTheme } from '../lib/hooks/useAppTheme'
import { IPageProps } from '../lib/types'

export const ResumePage = (props: IPageProps) => {
  const theme = useAppTheme();

  useEffect(() => { document.title = "Joshe - " + props.title }, []);

  return (
    <Container className={clsx("max-w-5xl", theme.darkMode ? 'text-slate-100' : 'text-slate-800')}>
      <Header {...theme} />
      <Section title='Projects'>
        <ul className='[&>*]:my-4 pl-3 sm:pl-6 lg:pl-inherit'>
          {my.projects.map(({ Icon, ...project }, idx) => (
            <Box key={idx} className='flex gap-x-2'>
              <Icon className="mt-0.5" />
              <Box>
                <b className='text-lg'>{project.name}: </b>
                <span className={clsx(theme.darkMode ? 'text-slate-300' : 'text-slate-700')}>{project.detail}</span>
              </Box>
            </Box>
          ))}
        </ul>
      </Section>
      <Section title='Skills'>
        <ul className='[&>*]:my-4 pl-3 sm:pl-6 lg:pl-inherit'>
          {Object.keys(my.skills).map((key, idx) => {
            const Icon = my.skills[key].Icon;
            return (
              <Box key={idx} className='flex gap-x-2'>
                <Icon className="mt-0.5" />
                <Box>
                  <b className="text-lg">{key.charAt(0).toUpperCase() + key.slice(1)}: </b>
                  {HeartSeparatedList(my.skills[key].bullets, theme.darkMode)}
                </Box>
              </Box>
            )
          })}
        </ul>
      </Section>
      <Section title='Experience'>
        {my.jobs.map(({ Icon, ...job }, idx) => (
          <ul key={idx} className='pl-3 sm:pl-6 lg:pl-inherit'>
            <Box className="flex gap-x-2">
              <Icon className="mt-0.5" />
              <Details {...job as IMyExperience} size="base" darkMode={theme.darkMode} />
            </Box>
            <ul className='-ml-2'>
              {job.bullets.map((item, j) => (
                <li key={j} className={clsx(theme.darkMode ? 'text-slate-300' : 'text-slate-700')}>{item}</li>
              ))}
            </ul>
          </ul>
        ))}
      </Section>
      <Section title='Education'>
        {my.education.map(({ Icon, ...education }, idx) => (
          <ul key={idx} className='pl-3 sm:pl-6 lg:pl-inherit'>
            <Box className="flex gap-x-2">
              <Icon className="mt-0.5" />
              <Details {...education as IMyExperience} size="base" darkMode={theme.darkMode} />
            </Box>
            <ul>
              {education.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </ul>
        ))}
      </Section>
    </Container >
  )
};
