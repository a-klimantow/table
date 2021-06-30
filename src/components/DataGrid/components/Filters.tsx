import { Chip, styled, SvgIcon, IconButton } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

const FilterIcon = () => (
  <SvgIcon color="action">
    <path d="M4.25018 5.61C6.27018 8.2 10.0002 13 10.0002 13V19C10.0002 19.55 10.4502 20 11.0002 20H13.0002C13.5502 20 14.0002 19.55 14.0002 19V13C14.0002 13 17.7202 8.2 19.7402 5.61C20.2502 4.95 19.7802 4 18.9502 4H5.04018C4.21018 4 3.74018 4.95 4.25018 5.61Z" />
  </SvgIcon>
)

const filters = Array(10).fill('filter')

export const Filters = () => {
  if (!filters.length) return null
  return (
    <FiltersStyled>
      <FilterIcon />
      <div>
        {filters.map((name, i) => (
          <Chip key={i} size="small" label={name} onDelete={() => null}></Chip>
        ))}
        <IconButton size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
    </FiltersStyled>
  )
}

const FiltersStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  gap: theme.spacing(2),

  '& > div': {
    display: 'inherit',
    flexWrap: 'wrap',
    gap: theme.spacing(0.5),
  },
}))
