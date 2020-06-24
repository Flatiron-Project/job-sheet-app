import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-material-ui'

const BottomNavigationBar = () => {
  const [active, setActive] = useState('')

  return (
    <BottomNavigation active={active} hidden={false}>
      <BottomNavigation.Action
        key='today'
        icon='today'
        label='Today'
        onPress={() => setActive('today')}
      />
      <BottomNavigation.Action
        key='people'
        icon='people'
        label='People'
        onPress={() => setActive('people')}
      />
      <BottomNavigation.Action
        key='bookmark-border'
        icon='bookmark-border'
        label='Bookmark'
        onPress={() => setActive('bookmark-border')}
      />
      <BottomNavigation.Action
        key='settings'
        icon='settings'
        label='Settings'
        onPress={() => setActive('settings')}
      />
    </BottomNavigation>
  )
}

export default BottomNavigationBar
