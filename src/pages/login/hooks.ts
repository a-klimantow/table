import * as React from 'react'
//
import { IErrors } from 'types'
import { useLoginPost } from 'hooks'
import { StoreType } from './store'

export const useFetch = (store: StoreType) => {
  const { login } = useLoginPost()

  const { data } = store.form

  React.useEffect(() => {
    const { email, password, form } = store
    if (data) {
      login(data).catch((err) => {
        const { errors } = err as IErrors
        form.fail()
        errors?.code === '404' && email.setError(errors.description)
        errors?.code === '400' && password.setError(errors.description)
      })
    }
  }, [store, data, login])
}
