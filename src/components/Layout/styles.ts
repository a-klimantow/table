import { styled, Theme } from '@material-ui/core'

const HEADER_HEIGHT = 53

export const Module = styled('div')({
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  display: 'flex',
})

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
