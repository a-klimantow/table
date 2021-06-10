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
  const [widths, setWidths] = useState(columns.map(() => 100))
  const [resizeIdx, setResizeIdx] = useState(-1)

  const handleResize = (event: SyntheticEvent) => {
    const current = event.currentTarget as HTMLElement

    switch (event.type) {
      case 'mousedown':
        const target = event.target as HTMLElement
        if (target.hasAttribute('data-cell-resize')) {
          current.style.cursor = 'col-resize'
          event.preventDefault()
          const { cellResize } = target.dataset
          setResizeIdx(Number(cellResize))
        }
        break
      case 'mouseleave':
      case 'mouseup':
        setResizeIdx(Number(-1))
        current.style.cursor = ''
        break
      case 'mousemove':
        if (resizeIdx > -1) {
          const x = (event as MouseEvent).movementX
          const newWidth = widths.map((w, i) =>
            i === resizeIdx ? Math.min(Math.max(w + x, 100), 500) : w
          )
          setWidths(newWidth)
        }
        break
      default:
        console.log(event.type)
        break
    }
  }

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
