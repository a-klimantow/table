import * as React from 'react'
import * as Mui from '@mui/material'
import { observer, Observer } from 'mobx-react-lite'

import { Icon } from 'components/icon'
import { useExportContext, ExportContext } from './context'
import {
  useExport,
  // useFetchLists,
  useFetchExport,
} from './hooks'

export const ExportProvider = observer(({ children }) => {
  const exp = useExport()
  return <ExportContext.Provider value={exp}>{children}</ExportContext.Provider>
})

export const ExportButton = React.memo(() => {
  const exp = useExportContext()
  return (
    <Mui.Button startIcon={<Icon type="export" />} onClick={exp.toggleOpen}>
      Экспорт
    </Mui.Button>
  )
})

export const ExportDrawer = observer(() => {
  const exp = useExportContext()
  useFetchExport(exp)
  return (
    <Mui.Drawer open={exp.isOpen} anchor="right" onClose={exp.toggleOpen}>
      <Mui.Stack mx={3} my={4} width={440} height="100%" gap={4}>
        <Mui.Typography variant="subtitle1">Экспорт заявок</Mui.Typography>
        <Block title="Платежная система">{/* <Payments /> */}</Block>
        <Block title="Статус заявки">{/* <Statuses /> */}</Block>
        <Block title="Панели" info={<Info />}>
          {/* <Panels /> */}
        </Block>
        <Buttons />
      </Mui.Stack>
    </Mui.Drawer>
  )
})

const Block = observer<{ title: string; info?: React.ReactNode }>(
  ({ children, title, info }) => (
    <Mui.Stack>
      <Mui.Typography variant="subtitle2" sx={{ display: 'flex', gap: 1 }}>
        {title} {info}
      </Mui.Typography>
      {children}
    </Mui.Stack>
  )
)

const Buttons = React.memo(() => {
  const exp = useExportContext()
  return (
    <Mui.Stack mt="auto" direction="row" gap={2}>
      <Mui.Button variant="outlined" onClick={exp.toggleOpen}>
        Отменить
      </Mui.Button>
      <Observer>
        {() => (
          <Mui.Button
            variant="contained"
            onClick={exp.exportStart}
            disabled={exp.loading}
          >
            Экспортировать
            <Loader />
          </Mui.Button>
        )}
      </Observer>
    </Mui.Stack>
  )
})

const Loader = observer(() => {
  const exp = useExportContext()

  if (!exp.loading) return null

  return (
    <Mui.LinearProgress
      sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
    />
  )
})

// const Payments = observer(() => {
//   const items = useFetchLists('payment-systems')
//   const exp = useExportContext()

//   React.useEffect(() => {
//     items && exp.setPay(items[0].name)
//   }, [items, exp])

//   if (!items) return <Mui.CircularProgress />

//   return (
//     <Mui.RadioGroup
//       name="payments"
//       value={exp.pay}
//       onChange={(e) => exp.setPay(e.target.value)}
//     >
//       {items?.map((item) => (
//         <Mui.FormControlLabel
//           key={item.id}
//           control={<Mui.Radio />}
//           label={item.common_name}
//           value={item.name}
//         />
//       ))}
//     </Mui.RadioGroup>
//   )
// })

// const Statuses = observer(() => {
//   const items = useFetchLists('export-withdrawal-statuses')
//   const exp = useExportContext()

//   React.useEffect(() => {
//     items && exp.setStatus(items[0].name)
//   }, [items, exp])

//   if (!items) return <Mui.CircularProgress />

//   return (
//     <Mui.RadioGroup
//       name="payments"
//       value={exp.status}
//       onChange={(e) => exp.setStatus(e.target.value)}
//     >
//       {items?.map((item) => (
//         <Mui.FormControlLabel
//           key={item.id}
//           control={<Mui.Radio />}
//           label={item.common_name}
//           value={item.name}
//         />
//       ))}
//     </Mui.RadioGroup>
//   )
// })

// const Panels = React.memo(() => {
//   const items = useFetchLists('export-withdrawal-panels')
//   const exp = useExportContext()

//   if (!items) return <Mui.CircularProgress />

//   return (
//     <Mui.FormGroup>
//       {items?.map((item) => (
//         <Observer key={item.id}>
//           {() => (
//             <Mui.FormControlLabel
//               control={<Mui.Checkbox />}
//               label={item.name}
//               value={item.id}
//               disabled={exp.disabledPanels}
//               checked={exp.panelIds.has(item.id)}
//               onChange={() => exp.setId(item.id)}
//             />
//           )}
//         </Observer>
//       ))}
//     </Mui.FormGroup>
//   )
// })

const texts = [
  'Выгружаются заявки только для RU',
  'Статус меняется на “В обработке”',
  'Экспортируются заявки старше 3 дней',
]

const Text = React.memo(() => {
  const exp = useExportContext()
  return (
    <Mui.Stack>
      {texts.map((txt, i) =>
        i === 0 ? (
          <Observer key={txt}>
            {() =>
              exp.isUkassa ? (
                <Mui.Typography variant="body2">{txt}</Mui.Typography>
              ) : null
            }
          </Observer>
        ) : (
          <Mui.Typography key={txt} variant="body2">
            {txt}
          </Mui.Typography>
        )
      )}
    </Mui.Stack>
  )
})

const Info = React.memo(() => (
  <Mui.Tooltip placement="right" title={<Text />}>
    <Mui.Box display="inline-flex">
      <Icon type="error" fontSize="small" />
    </Mui.Box>
  </Mui.Tooltip>
))
