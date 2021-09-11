import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import superagent from 'superagent'

import { useUrl, useAppStore } from 'hooks'
import { FormType } from './useForm'

export function useRequest(form: FormType) {
  const history = useHistory()
  const { user } = useAppStore()
  const url = useUrl('login')

  useEffect(() => {
    if (form.data) {
      superagent
        .post(url)
        .type('application/json')
        .send(form.data)
        .then((res) => {
          form.success()
          user.update(res.body.data)
          history.replace(user.defaultUrl)
        })
        .catch((e) => {
          form.fail(e.response.body.errors)
        })
    }

    if (user.name) {
      history.replace(user.defaultUrl)
    }
  }, [form, form.data, url, user, history])
}
