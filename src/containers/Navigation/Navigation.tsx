import { List, ListItemButton, ListItemText } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'
import { ListItemMain, ListItemSub, RootDrawer } from './components/Drawer'

type Props = {}
function NavigationBar(props: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  const validRoutes = ['/dashboard']

  // redux TBD
  // function hanleListItemChange() {
  // TBD
  // }

  // setup DATE FNS
  // redux
  // context
  // middleware (sagas ?)
  // Theme -(+mobile)
  // .env
  // prod. setup
  // BE holds algo
  // APIs
  // JWT
  // auth

  const handleLogout = () => {
    // Perform logout logic here

    // Redirect to login page
    navigate('/login')
  }

  if (
    location.pathname === '/login' ||
    !validRoutes.includes(location.pathname)
  ) {
    return <> </>
  }

  return (
    <Wrapper>
      <RootDrawer variant="permanent" anchor="left">
        <List>
          <ListItemMain>
            <ListItemButton onClick={(_e) => console.log('first')}>
              <ListItemText primary="Zakladny prehlad" />
            </ListItemButton>
          </ListItemMain>
          <ListItemMain>
            <ListItemButton onClick={(_e) => console.log('sec')}>
              <ListItemText primary="Technika" />
            </ListItemButton>
          </ListItemMain>
          <ListItemMain>
            <ListItemText primary="Zoznam clenov" />
          </ListItemMain>
          <List component="div" disablePadding>
            <ListItemSub>
              <ListItemButton onClick={() => console.log('Zakladny clicked')}>
                <ListItemText secondary="Zakladny" />
              </ListItemButton>
            </ListItemSub>
            <ListItemSub>
              <ListItemButton onClick={() => console.log('Rozsireny clicked')}>
                <ListItemText secondary="Rozsireny" />
              </ListItemButton>
            </ListItemSub>
            <ListItemSub>
              <ListItemButton onClick={() => console.log('Vybor clicked')}>
                <ListItemText secondary="Vybor" />
              </ListItemButton>
            </ListItemSub>
            <ListItemSub>
              <ListItemButton onClick={() => console.log('DHZO clicked')}>
                <ListItemText secondary="DHZO" />
              </ListItemButton>
            </ListItemSub>
          </List>
          <ListItemMain>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItemMain>
        </List>
      </RootDrawer>
    </Wrapper>
  )
}

export default NavigationBar
