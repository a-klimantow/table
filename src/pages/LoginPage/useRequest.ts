import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import superagent from 'superagent'

// import { useUrl, useAppStore } from 'hooks'
// import { FormType } from './useForm'

// export function useRequest(form: FormType) {
//   const history = useHistory()
//   const app = useAppStore()
//   const url = useUrl('login')

//   useEffect(() => {
//     if (form.data) {
//       superagent
//         .post(url)
//         .type('application/json')
//         .send(form.data)
//         .then((res) => {
//           form.success()
//           app.setUser(res.body.data)
//         })
//         .catch((e) => {
//           form.fail(e.response.body.errors)
//         })
//     }
//   }, [form, form.data, url, app, history])
// }
