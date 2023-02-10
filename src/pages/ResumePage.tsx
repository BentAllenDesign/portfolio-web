import { my } from '../../personal.config'

import {
  BuildRounded, CodeRounded, ConfirmationNumberRounded, DataObjectRounded, FitnessCenterRounded, PeopleRounded, SchoolRounded, SettingsRounded, SportsEsportsRounded
} from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import clsx from 'clsx'
import { Details, Header, HeartSeparatedList, Section } from '../components/Resume'
import { useAppTheme } from '../lib/hooks/useAppTheme'
import { IPageProps } from '../lib/types'
import { useEffect } from 'react'

const jobIcons = [
  <SettingsRounded key={0} />,
  <SchoolRounded key={1} />,
]

const projectIcons = [
  <CodeRounded />,
  <DataObjectRounded />,
  <ConfirmationNumberRounded />,
  <PeopleRounded />,
  <SportsEsportsRounded />
]

export const ResumePage = (props: IPageProps) => {
  const theme = useAppTheme();

  useEffect(() => { document.title = "Joshe - " + props.title }, []);

  return (
    <Container className={clsx("max-w-5xl", theme.darkMode ? 'text-zinc-100' : 'text-zinc-800')}>
      <div className='resume'>
        <Header {...theme} />
        <Section title='Projects'>
          <ul className='[&>*]:my-4'>
            {projectIcons.map((icon, idx) => (
              <Box className='flex gap-x-2'>
                {icon}
                <Box>
                  <b className='text-lg'>{my.projects.names[idx]}: </b>
                  <span className={clsx(theme.darkMode ? 'text-zinc-300' : 'text-zinc-700')}>{my.projects.bullets[idx]}</span>
                </Box>
              </Box>
            ))}
          </ul>
        </Section>
        <Section title='Skills'>
          <ul className='[&>*]:my-4'>
            <Box className='flex gap-x-2'>
              <CodeRounded />
              <b className='text-lg'>Languages: </b>
              {HeartSeparatedList(my.knowledge.languages, theme.darkMode)}
            </Box>
            <Box className='flex gap-x-2'>
              <FitnessCenterRounded />
              <b className='text-lg'>Practices: </b>
              {HeartSeparatedList(my.knowledge.practices, theme.darkMode)}
            </Box>
            <Box className='flex gap-x-2'>
              <BuildRounded />
              <b className='text-lg'>Technologies: </b>
              {HeartSeparatedList(my.knowledge.technologies, theme.darkMode)}
            </Box>
          </ul>
        </Section>
        <Section title='Experience'>
          {my.jobs.map((job, i) => (
            <ul key={i}>
              <Box className="flex gap-x-2">
                {jobIcons[i]}
                <Details {...job} />
              </Box>
              <ul>
                {job.bullets.map((item, j) => (
                  <li key={j} className={clsx(theme.darkMode ? 'text-zinc-300' : 'text-zinc-700')}>{item}</li>
                ))}
              </ul>
            </ul>
          ))}
        </Section>
        <Section title='Education'>
          {my.education.map((education, i) => (
            <ul key={i}>
              <Box className="flex gap-x-2">
                <SchoolRounded />
                <Details {...education} />
              </Box>
              <ul>
                {education.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </ul>
          ))}
        </Section>
      </div>
    </Container>
  )
};
