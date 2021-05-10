import { styled, Theme } from '@material-ui/core'

const HEADER_HEIGHT = 54

export const Module = styled('div')(({ theme }) => ({
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  display: 'grid',
  gridTemplateColumns: `${HEADER_HEIGHT}px 1fr`,
  '& > :first-child': {
    zIndex: theme.zIndex.drawer,
  },
}))

type PageProps = {
  theme: Theme
  column?: number
}

export const Page = styled('div')(({ theme, column = 1 }: PageProps) => ({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: column === 1 ? '1fr' : '312px 1fr',
  gridGap: theme.spacing(4),
  padding: theme.spacing(4),
}))
