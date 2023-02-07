import { my } from '../../personal.config'

import {
  BuildRounded, CodeRounded, ConfirmationNumberRounded, DataObjectRounded, FitnessCenterRounded, PeopleRounded, SchoolRounded, SettingsRounded, SportsEsportsRounded
} from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import clsx from 'clsx'
import { Details, Header, HeartSeparatedList, Section } from '../components/Resume'
import { useAppTheme } from '../lib/hooks/useAppTheme'

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

export const ResumePage = () => {
  const theme = useAppTheme();

  return (
    <Container className={clsx("max-w-5xl", theme.darkMode ? 'text-zinc-200' : 'text-zinc-800')}>
      <div className='resume'>
        <Header {...theme} />
        <Section title='Projects'>
          <ul className='[&>*]:my-4'>
            {projectIcons.map((icon, idx) => (
              <Box className='flex gap-x-2'>
                {icon}
                <Box>
                  <b>{my.projects.names[idx]}: </b>
                  {my.projects.bullets[idx]}
                </Box>
              </Box>
            ))}
          </ul>
        </Section>
        <Section title='Technical'>
          <ul className='[&>*]:my-4'>
            <Box className='flex gap-x-2'>
              <CodeRounded />
              <b>Languages: </b>
              {HeartSeparatedList(my.knowledge.languages)}
            </Box>
            <Box className='flex gap-x-2'>
              <FitnessCenterRounded />
              <b>Practices: </b>
              {HeartSeparatedList(my.knowledge.practices)}
            </Box>
            <Box className='flex gap-x-2'>
              <BuildRounded />
              <b>Technologies: </b>
              {HeartSeparatedList(my.knowledge.technologies)}
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
                  <li key={j}>{item}</li>
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
