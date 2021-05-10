import { Omit, styled, Box, BoxProps } from '@material-ui/core'

interface Props {
  openMenu: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Base = styled(({ openMenu, ...other }: Props & Omit<BoxProps, keyof Props>) => (
  <Box {...other} />
))({
  display: ({ openMenu }: Props) => (openMenu ? 'block' : 'none'),
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
})
