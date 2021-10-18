import { memo } from 'react'
import { Observer, observer } from 'mobx-react-lite'
import {
  Button,
  Typography,
  Stack,
  StackProps,
  Tooltip,
  LinearProgress,
} from '@mui/material'

import { Icon } from 'components'
import { useExportContext } from './context'

export const Title = memo(() => (
  <Typography component="h6" fontWeight={500} fontSize={22}>
    Экспорт заявок
  </Typography>
))

export const Buttons = memo(() => {
  const exp = useExportContext()
  return (
    <Stack direction="row" gap={3} mt="auto">
      <Button variant="outlined" onClick={exp.close}>
        Отменить
      </Button>
      <Observer>
        {() => (
          <Button
            variant="contained"
            onClick={exp.fetchStart}
            disabled={exp.disabledExpBtn}
          >
            Экспоровать
            <Loader />
          </Button>
        )}
      </Observer>
    </Stack>
  )
})

const Loader = observer(() => {
  const exp = useExportContext()
  if (!exp.isLoading) return null
  return (
    <LinearProgress
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  )
})

interface ListProps extends StackProps {
  name: string
  showInfo?: boolean
}

export const List = memo<ListProps>(({ name, children, showInfo }) => (
  <Stack>
    <Typography fontWeight={500} sx={{ display: 'flex' }}>
      {name}
      {showInfo && <Info />}
    </Typography>

    {children}
  </Stack>
))

interface ListItemProps extends StackProps {
  label: string
}

export const ListItem = memo<ListItemProps>(({ label, children }) => (
  <Stack component="label" direction="row" alignItems="center" ml={-1}>
    {children}
    <Typography component="span">{label}</Typography>
  </Stack>
))

const Info = memo(() => (
  <Tooltip
    placement="right"
    title={
      <>
        Выгружаются заявки только для RU
        <br />
        Статус меняется на “В обработке”
        <br />
        Экспортируются заявки старше 3 дней
      </>
    }
  >
    <Stack component="span" ml={1}>
      <Icon type="error" fontSize="small" />
    </Stack>
  </Tooltip>
))
