import { RoleType as R, ModuleType as M, PageType as P } from 'types'
import { permissions, PermsType, } from 'assets'

const getPermissions = (type: PermsType, roles: R[]) => {
    const result = new Set()
    roles.forEach((role) => {
        permissions[type][role].forEach((i) => result.add(i))
    })
    return [...result]
}

export const getPermsModules = (roles: R[]) =>
    getPermissions('modules', roles) as M[]

export const getPermsPages = (roles: R[]) =>
    getPermissions('pages', roles) as P[]
