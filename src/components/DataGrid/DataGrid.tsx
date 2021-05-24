import { ChangeEvent, FC, MouseEvent, useState, TouchEvent, useRef } from 'react'
import { CheckboxProps } from '@material-ui/core'
import { Remove as ResizeIcon } from '@material-ui/icons'

import { CheckboxCell } from './CheckboxCell'
import { GridCell } from './GridCell'
import { MenuCell } from './MenuCell'

import { useGridStyles } from './styles'
import { IGridProps } from './types'

const columns = [
  { field: 'id', name: 'ID', width: 100 },
  { field: 'firstName', name: 'First name', width: 100 },
  { field: 'lastName', name: 'Last name', width: 100 },
  { field: 'age', name: 'Age', type: 'number', width: 100 },
  {
    field: 'firstName',
    name: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    width: 100,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

]

const setWidth = (n: number) => Math.max(n, 80)

export const DataGrid: FC<IGridProps> = ({ columns: a = columns }) => {
  const [cols, setCols] = useState(a)
  const [resizeCol, setResizeCol] = useState<number | null>(null)
  const [touch, setTouch] = useState(0)
  const [checked, setChecked] = useState<number[]>([])
  const classes = useGridStyles()
  const refGrid = useRef<HTMLDivElement | null>(null)

  const handleResizeStart = (idx: number) => (
    event: MouseEvent<SVGElement> | TouchEvent<SVGElement>
  ) => {
    setResizeCol(idx)
    if (refGrid.current !== null)
      if (event.type === 'touchstart') {
        refGrid.current.style.overflowX = 'hidden'

        const currentTouch = (event as TouchEvent).touches[0].clientX

        setTouch(currentTouch)
      } else {
        refGrid.current.style.cursor = 'col-resize'
      }
  }

  const handleResizeMove = (event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (refGrid.current !== null)
      if (event.type === 'touchmove') {
        const currentTouch = (event as TouchEvent).touches[0].clientX

        setCols((prev) =>
          prev.map((col, i) =>
            i === resizeCol ? { ...col, width: setWidth(col.width + currentTouch - touch) } : col
          )
        )

        setTouch(() => currentTouch)
      } else {
        const movementX = (event as MouseEvent).movementX
        setCols((prev) =>
          prev.map((col, i) =>
            i === resizeCol ? { ...col, width: setWidth(col.width + movementX) } : col
          )
        )
      }
  }

  const handleResizeStop = (event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    setResizeCol(null)

    if (refGrid.current !== null)
      if (event.type === 'touchend') {
        refGrid.current.style.overflowX = 'auto'
        setTouch(0)
      } else {
        refGrid.current.style.cursor = 'initial'
      }
  }

  const handleChechboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    if (name === 'all') {
      setChecked(rows.length === checked.length ? [] : rows.map((_, i) => i))
    } else {
      const index = Number(name)
      setChecked((c) => (c.includes(index) ? c.filter((i) => i !== index) : [...c, index]))
    }
  }

  const checkboxHeadProps: CheckboxProps = {
    indeterminate: Boolean(checked.length) && checked.length !== rows.length,
    checked: checked.length === rows.length,
    onChange: handleChechboxClick,
    name: 'all',
  }

  const checkboxCellProps = (idx: number): CheckboxProps => ({
    checked: checked.includes(idx),
    onChange: handleChechboxClick,
    name: String(idx),
  })

  return (
    <div
      className={classes.grid}
      onMouseMove={handleResizeMove}
      onTouchMove={handleResizeMove}
      onMouseLeave={handleResizeStop}
      onMouseUp={handleResizeStop}
      onTouchEnd={handleResizeStop}
      ref={refGrid}
    >
      <div className={classes.head}>
        <CheckboxCell head className={classes.cell} {...checkboxHeadProps} />
        <MenuCell className={classes.cell} data-head />
        {cols.map(({ name, width }, colIndex) => (
          <GridCell key={name} width={width} className={classes.cell} head freeze={colIndex === 0}>
            <span>{name}</span>
            <ResizeIcon
              className={classes.resize}
              onMouseDown={handleResizeStart(colIndex)}
              onTouchStart={handleResizeStart(colIndex)}
            />
          </GridCell>
        ))}
      </div>

      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {rows.map((row: any, rowIndex) => (
        <div key={rowIndex} className={classes.row} onClick={() => console.log(rowIndex)}>
          <CheckboxCell className={classes.cell} {...checkboxCellProps(rowIndex)} />
          <MenuCell className={classes.cell} data-cell />
          {cols.map((col, idx) => (
            <GridCell key={col.name} width={col.width} className={classes.cell} freeze={idx === 0}>
              {row[col.field]}
            </GridCell>
          ))}
        </div>
      ))}
    </div>
  )
}
