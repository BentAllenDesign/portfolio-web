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

export const ResumePage = (props: IPageProps) => {
  const theme = useAppTheme();

  useEffect(() => { document.title = "Joshe - " + props.title }, []);

  return (
    <Container className={clsx("max-w-5xl", theme.darkMode ? 'text-zinc-100' : 'text-zinc-800')}>
      <div className='resume'>
        <Header {...theme} />
        <Section title='Projects'>
          <ul className='[&>*]:my-4'>
            {my.projects.map((project, idx) => (
              <Box key={idx} className='flex gap-x-2'>
                {project.icon}
                <Box>
                  <b className='text-lg'>{project.name}: </b>
                  <span className={clsx(theme.darkMode ? 'text-zinc-300' : 'text-zinc-700')}>{project.detail}</span>
                </Box>
              </Box>
            ))}
          </ul>
        </Section>
        <Section title='Skills'>
          <ul className='[&>*]:my-4'>
            {Object.keys(my.skills).map((key, idx) => (
              <Box className='flex gap-x-2'>
                {my.skills[key].icon}
                <b className='text-lg'>{key.charAt(0).toUpperCase() + key.slice(1)}: </b>
                {HeartSeparatedList(my.skills[key].bullets, theme.darkMode)}
              </Box>
            ))}
          </ul>
        </Section>
        <Section title='Experience'>
          {my.jobs.map((job, idx) => (
            <ul key={idx}>
              <Box className="flex gap-x-2">
                {job.icon}
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
