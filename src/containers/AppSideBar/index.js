import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {mainListItems,secodaryListItems} from './listItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KeycloakService from "../../keycloak";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
  },
 
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

function AppSideBar(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();


    return (
        <div className={classes.root}>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                container={container}
                variant="permanent"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.toolbar} />
                <Divider/>
                {mainListItems}

                <Divider/>
                {secodaryListItems}
                <Divider />

                <ListItem>
                  <Button onClick={() => KeycloakService.doLogout()}>
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="LogOut" />
                  </Button>
                </ListItem>

              </Drawer>
          </nav>
        </div>
      );
}

export default AppSideBar
 