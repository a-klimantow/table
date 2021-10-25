import { useEffect } from 'react'

// import { useGetList } from 'hooks'
import { useExportContext } from './context'

export function useLists() {
  // const systems = useGetList('list/payment-systems')
  // const statuses = useGetList('list/export-withdrawal-statuses')
  // const panels = useGetList('list/panels')
  const exp = useExportContext()

  // useEffect(() => {
  //   systems && exp.setActiveSytem(systems[0].name)
  // }, [systems, exp])

  // useEffect(() => {
  //   statuses && exp.setActiveStatus(statuses[0].name)
  // }, [statuses, exp])

  // useEffect(() => {
  //   exp.panelIds.clear()
  // }, [exp])

  return { systems: [], statuses: [], panels: [] }
}
