import { FC, useState } from 'react'

import { ITableProps } from './types'
import { useStyles } from './styles'
import { useHandleScroll, useHandleRowCheck, useResize } from './hooks'
import { Checkbox, HeadCell } from './components'

export const Table: FC<ITableProps> = ({ columns, data, showCheckbox = false }) => {
  const [rows, setRows] = useState(data)
  const resize = useResize()
  const handleScroll = useHandleScroll()
  const handleRowCheck = useHandleRowCheck(setRows)
  const classes = useStyles()

  const isSomeChecked = rows.some(({ checked }) => checked)
  const isIndeterminate = isSomeChecked && !rows.every(({ checked }) => checked)

  return (
    <div className={classes.root} onScroll={handleScroll}>
      <table {...resize}>
        <thead>
          <tr>
            <Checkbox
              show={showCheckbox}
              checked={isSomeChecked}
              indeterminate={isIndeterminate}
              onChange={handleRowCheck}
              header
            />

            {columns.map((column, i) => (
              <HeadCell key={i} isFreeze={i === 0 || null} {...column} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <Checkbox
                show={showCheckbox}
                checked={Boolean(row.checked)}
                onChange={handleRowCheck}
                rowIndex={rowIndex}
              />

              {columns.map(({ field }, i) => (
                <td key={i} data-freeze={i === 0 || null}>
                  <div>{row[field]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
