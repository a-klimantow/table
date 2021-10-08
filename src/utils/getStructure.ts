import { PageType as P } from 'types'
import { structure } from 'assets'

export type StructureType = typeof structure
type S = StructureType

export const getStructure = (pages: P[]): S =>
  structure.reduce((acc, [mod, pgs]) => {
    const prommPages = pgs.filter((p) => pages.includes(p))
    acc.push([mod, prommPages])
    return acc
  }, [] as S)
