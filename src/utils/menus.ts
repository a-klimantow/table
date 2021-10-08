import { PageType as P, StructureType as S } from 'types'
import { name, structure, icon } from 'assets'

type ItemsType = ReturnType<typeof getModuleMenuHeader>

export function getModuleMenuHeader(s: S) {
  return s.map(([m, pgs]) => ({
    path: `/${m}/`,
    name: name(m),
    disabled: !pgs.length,
  }))
}

export function getUserMenuHeader(...args: P[]): ItemsType {
  return args.map((p) => ({
    path: `#${p}`,
    name: name(p),
    disabled: false,
  }))
}

const createRewardsMenu = (perms: P[]) =>
  structure
    .filter((i) => i[0] === 'rewards')
    .flatMap((i) => i[1])
    .map((i) => ({
      name: name(i),
      icon: icon(i),
      path: i,
      disabled: !perms.includes(i),
    }))
