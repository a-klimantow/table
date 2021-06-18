import { ChangeEvent, FC, ReactNode, useState } from 'react'
import { makeStyles, createStyles, Checkbox, CheckboxProps } from '@material-ui/core'

import { IColumn } from './types'
import { useScroll } from './useScroll'

interface ITableProps {
  columns: IColumn[]
  data: { [key: string]: ReactNode }[]
  selectable?: boolean
  showCheckbox?: boolean
  onCheckedChange?: Function
}

const Cb: FC<CheckboxProps> = ({ name, ...props }) => (
  <Checkbox color="primary" size="small" inputProps={{ name }} {...props} />
)

export const Table: FC<ITableProps> = ({ columns, data, showCheckbox = false }) => {
  const [rows, setRows] = useState(data)
  const classes = useStyles()
  const handleScroll = useScroll()

  const isSomeChecked = rows.some(({ checked }) => checked)
  const isIndeterminate = !rows.every(({ checked }) => checked)

  const handleRowCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target
    if (name === 'all') {
      setRows((r) => r.map((row) => ({ ...row, checked })))
    } else {
      const idx = Number(name)
      setRows((r) => r.map((row, i) => (i === idx ? { ...row, checked } : row)))
    }
  }

  return (
    <div className={classes.container} onScroll={handleScroll}>
      <table className={classes.table}>
        <thead>
          <tr>
            {showCheckbox ? (
              <th data-checkbox>
                <Cb
                  checked={isSomeChecked}
                  indeterminate={isSomeChecked && isIndeterminate}
                  onChange={handleRowCheck}
                  name="all"
                />
                <div className={classes.resize} />
              </th>
            ) : null}
            {columns.map(({ name, field }, i) => (
              <th key={i} data-freeze={i === 0 || null}>
                <div>{name ?? field}</div>
                <div className={classes.resize} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {showCheckbox ? (
                <td data-checkbox>
                  <Cb
                    checked={Boolean(row.checked)}
                    onChange={handleRowCheck}
                    name={String(rowIndex)}
                  />
                </td>
              ) : null}
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

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      overflow: 'auto',
      maxHeight: 200,

      '&[data-scroll] [data-freeze]': {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },

    table: {
      minWidth: 'max-content',
      borderSpacing: 0,

      '& thead, & [data-freeze]': {
        position: 'sticky',
        zIndex: 1,
      },

      '& thead': {
        top: 0,
        zIndex: 2,

        '& > tr': {
          background: theme.palette.grey['100'],
        },
      },

      '& tbody > tr': {
        background: theme.palette.background.paper,
      },

      '& th, & td': {
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.divider,
        padding: theme.spacing(1),
        background: 'inherit',
        textAlign: 'left',

        '&:not([data-freeze])': {
          position: 'relative',
        },

        '&[data-freeze]': {
          left: 0,
        },

        '&[data-checkbox]': {
          padding: 0,
          position: 'sticky',
          left: 0,
          zIndex: 1,

          '& + *': {
            position: 'sticky',
            left: 38,
            zIndex: 1,
          },
        },
      },
    },

    resize: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      cursor: 'col-resize',
      color: theme.palette.divider,
      width: 6,

      '&:hover': {
        color: 'initial',
      },

      '&::after': {
        content: "'|'",
        fontSize: 16,
        margin: 'auto',
      },
    },
  })
)
