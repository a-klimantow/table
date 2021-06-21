import { FC } from 'react'
import { styled, Chip } from '@material-ui/core'
import { AcUnit } from '@material-ui/icons'

export const TableActiveFilters: FC<{ filters: string[] }> = ({ filters }) => {
  if (!filters.length) return <div />

  return (
    <ActiveFilterWrapper>
      <AcUnit />
      <div>
        {filters.map((name) => (
          <Chip key={name} label={name} onDelete={() => null} size="small" />
        ))}
      </div>
    </ActiveFilterWrapper>
  )
}

const ActiveFilterWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& > :first-child': {
    width: 48,
  },

  '& > :last-child': {
    display: 'inherit',
    flexWrap: 'wrap',
    gap: 'inherit',
  },
}))
