import * as React from 'react'
//
import { IErrors } from 'types'
import { useLoginPost } from 'hooks'
import { StoreType } from './store'

export const useFetch = (store: StoreType) => {
  const login = useLoginPost()

  React.useEffect(() => {
    store.form.data &&
      (async () => {
        try {
          await login(store.form.data)
        } catch (err) {
          const { email, password, form } = store
          form.fail()

          const { errors } = err as IErrors
          errors?.code === '404' && email.setError(errors.description)
          errors?.code === '400' && password.setError(errors.description)
        }
      })()
  }, [store.form.data, store, login])
}
