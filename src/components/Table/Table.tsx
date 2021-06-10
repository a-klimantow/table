import { FC, ReactNode, MouseEvent, useState, SyntheticEvent } from 'react'
import { TableBody as GridBody, Checkbox, IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import { IColumn } from './types'
import {
  GridContainer,
  GridHead,
  Grid,
  GridRow,
  GridCell,
  GridActionCell,
  GridSortLabel,
  Resize,
} from './components'
import { useScroll } from './useScroll'
import { useCheckboxes } from './useCheckboxes'
import { useResize } from './useResize'

interface ITableProps {
  columns: IColumn[]
  data: { [key: string]: ReactNode }[]
  showCheckbox?: boolean
  selectable?: boolean
}

const isFreeze = (idx: number): true | null => idx === 0 || null
const getIndexes = (arr: unknown[]): number[] => arr.map((_, i) => i)

export const Table: FC<ITableProps> = ({ columns, data, showCheckbox = true }) => {
  const handleScroll = useScroll()
  const checkbox = useCheckboxes(getIndexes(data))
  const { widths, handleResize } = useResize(columns.map(() => 100))

  return (
    <GridContainer onScroll={handleScroll}>
      <Grid
        onMouseDown={handleResize}
        onMouseUp={handleResize}
        onMouseMove={handleResize}
        onMouseLeave={handleResize}
      >
        <GridHead>
          {showCheckbox ? (
            <GridActionCell data-freeze>
              <Checkbox {...checkbox.all} />
            </GridActionCell>
          ) : null}
          <GridActionCell data-freeze>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </GridActionCell>
          {columns.map(({ name }, i) => (
            <GridCell
              key={name}
              data-freeze={isFreeze(i)}
              style={{ width: widths[i], maxWidth: widths[i] }}
            >
              {name}
              <GridSortLabel active direction="asc" />
              <Resize data-cell-resize={i} />
            </GridCell>
          ))}
        </GridHead>
        <GridBody>
          {data.map((row, rowIdx) => (
            <GridRow key={rowIdx}>
              {showCheckbox ? (
                <GridActionCell data-freeze>
                  <Checkbox {...checkbox.row(rowIdx)} />
                </GridActionCell>
              ) : null}
              <GridActionCell data-freeze>
                <IconButton>
                  <MenuIcon />
                </IconButton>
              </GridActionCell>
              {columns.map(({ field }, i) => (
                <GridCell key={i} data-freeze={isFreeze(i)} style={{ maxWidth: widths[i] }}>
                  {row[field]}
                </GridCell>
              ))}
            </GridRow>
          ))}
        </GridBody>
      </Grid>
    </GridContainer>
  )
}
