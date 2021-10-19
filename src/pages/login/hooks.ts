import * as React from 'react'
//
import { IErrors } from 'types'
import { useFetchLogin } from 'hooks'
import { StoreType } from './store'

export const useFetch = ({ form, email, password }: StoreType) => {
  const post = useFetchLogin('', form.data)

  React.useEffect(() => {
    form.data &&
      post().catch(({ errors }: IErrors) => {
        form.fail()
        if (errors) {
          errors.code === '404' && email.setError(errors.description)
          errors.code === '400' && password.setError(errors.description)
        }
      })
  }, [form, form.data, post, email, password])
}
