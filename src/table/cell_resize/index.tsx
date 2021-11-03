import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'
import * as RDom from 'react-dom'

import { useCellResize } from './hooks'

export const CellResize = React.memo(() => {
  const resize = useCellResize()
  return (
    <React.Fragment>
      {RDom.createPortal(
        <Mobx.Observer>
          {() => (
            <Mui.Backdrop
              data-resize
              open={resize.start}
              onMouseMove={resize.move}
              onMouseUp={resize.up}
            />
          )}
        </Mobx.Observer>,
        document.body
      )}
      <Mui.ButtonBase component="div" data-resize onMouseDown={resize.down}>
        <Icon.HorizontalRule />
      </Mui.ButtonBase>
    </React.Fragment>
  )
})
