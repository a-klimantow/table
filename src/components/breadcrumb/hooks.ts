import { useHistory } from 'react-router-dom'
import { useLocalObservable } from 'mobx-react-lite'

const GetHistory = () => {
  const history = useHistory()
  return history.location.pathname
}

export const useStateExport = () =>
  useLocalObservable(() => ({
    get breadCrumbOptionList() {
      return [
        {
          path: '/rewards/requests',
          value: ['Вознагрождения', 'Заявки']
        },
        {
          path: '/rewards/accruals/',
          value: ['Вознагрождения', 'Начисления']
        },
        {
          path: '/rewards/requests/',
          value: ['Вознагрождения', 'Заявки']
        },
        {
          path: '/rewards/reports/',
          value: ['Вознагрождения', 'Отчеты']
        }
      ]
    },

    get currentPath() {
      return GetHistory
    }
  }))