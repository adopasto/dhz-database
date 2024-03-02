import { List, ListItemButton, ListItemText } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'
import { validRoutes } from '../../utils'
import { ListItemMain, ListItemSub, RootDrawer } from './components/Drawer'

type Props = {}
function NavigationBar(props: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  // redux TBD
  // function hanleListItemChange() {
  // TBD
  // }

  // setup DATE FNS
  // redux
  // context
  //theme?
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

  // TODO after item clicked let user know that its selected (styled button / item font bold ...)
  return (
    <Wrapper>
      <RootDrawer variant="permanent" anchor="left">
        <List>
          <ListItemMain>
            <ListItemButton onClick={(_e) => navigate('/zakladnyPrehlad')}>
              <ListItemText primary="Zakladny prehlad" />
            </ListItemButton>
          </ListItemMain>
          <ListItemMain>
            <ListItemButton onClick={() => navigate('/technika')}>
              <ListItemText primary="Technika" />
            </ListItemButton>
          </ListItemMain>
          <ListItemMain>
            <ListItemText primary="Zoznam clenov" />
          </ListItemMain>
          <List component="div" disablePadding>
            <ListItemSub>
              <ListItemButton onClick={() => navigate('/zoznamClenov')}>
                <ListItemText secondary="Zakladny" />
              </ListItemButton>
            </ListItemSub>
            <ListItemSub>
              <ListItemButton onClick={() => navigate('/vybor')}>
                <ListItemText secondary="Vybor" />
              </ListItemButton>
            </ListItemSub>
            <ListItemSub>
              <ListItemButton onClick={() => navigate('/dhzo')}>
                <ListItemText secondary="DHZO" />
              </ListItemButton>
            </ListItemSub>
          </List>
          <ListItemMain>
            <ListItemButton onClick={() => navigate('/profil')}>
              <ListItemText primary="Profil" />
            </ListItemButton>
          </ListItemMain>
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
