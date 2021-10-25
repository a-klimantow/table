import * as React from 'react'
import { observer } from 'mobx-react-lite'

import {
  Button,
  Drawer,
  Inner,
  Title,
  Block,
  Subtitle,
  Bottom,
  Cancel,
  Submit,
  List,
  ListItem,
} from './atoms'
import {
  useStateExport,
  useFetchExportLists,
  useFetchExportFile,
  useUrl,
} from './hooks'
import {} from 'hooks'

export const FileExport = observer<{ query: string }>(({ query }) => {
  const state = useStateExport()
  const url = useUrl(state)
  useFetchExportLists(state.start, state.setter)
  useFetchExportFile(url, query, state)

  return (
    <React.Fragment>
      <Button onClick={state.toggleOpen} />
      <Drawer open={state.open} onClose={state.toggleOpen} anchor="right">
        <Inner>
          <Title />
          <Block>
            <Subtitle>Платежная система</Subtitle>
            <List list={state.pays}>
              {(item) => (
                <ListItem
                  key={item.id}
                  name={item.common_name}
                  checked={item.active}
                  onChange={() => state.setPay(item.id)}
                  radio
                />
              )}
            </List>
          </Block>
          <Block>
            <Subtitle>Статус заявки</Subtitle>
            <List list={state.statuses}>
              {(item) => (
                <ListItem
                  key={item.id}
                  name={item.common_name}
                  checked={item.active}
                  onChange={() => state.setStatus(item.id)}
                  radio
                />
              )}
            </List>
          </Block>
          <Block>
            <Subtitle>Панели</Subtitle>
            <List list={state.panels}>
              {(item) => (
                <ListItem
                  key={item.id}
                  name={item.name}
                  checked={
                    state.isKassa ? item.active : state.panelIds.has(item.id)
                  }
                  onChange={() => state.setPanelId(item.id)}
                  disabled={state.isKassa}
                />
              )}
            </List>
          </Block>
          <Bottom>
            <Cancel onClick={state.toggleOpen}>Отмена</Cancel>
            <Submit
              disabled={state.disabled}
              loading={state.loading}
              onClick={state.exportStart}
            >
              Экспортировать
            </Submit>
          </Bottom>
        </Inner>
      </Drawer>
    </React.Fragment>
  )
})
