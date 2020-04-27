import React from 'react';
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import classes from '../style.module.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { removeNotification } from './behavior';



const AppHeader = (props) => {

  return (
      <AppBar  position='fixed' className={[classes.appBar, classes.appBarShift].join(' ')}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" noWrap className={classes.title}>
            ECOM-SITE
          </Typography>

          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {props.userInfos.fullName}
         </Typography>

            <IconButton 
            aria-label="show 6 new notifications"
             color="inherit"
             onClick={() => props.removeNotification()}>
              <Badge badgeContent={props.count} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
        </Toolbar>
      </AppBar>
  );
}

export function mapStateToProps(state) {
    return {
      count: state.notifications.notificationCount,
      userInfos: state.userInfos,
    }
  }
  
  export default connect(mapStateToProps, { removeNotification })(AppHeader);
