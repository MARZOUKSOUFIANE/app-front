import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PaymentIcon from '@material-ui/icons/Payment';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import {Link} from 'react-router-dom'


export const mainListItems= (
    <div>
         <List>
          <ListItem component={Link} to={'/'} button >
            <ListItemIcon>
              {<StorefrontIcon /> }
            </ListItemIcon>
            <ListItemText primary="Produits" />
          </ListItem>

          <ListItem component={Link} to={'/commandes'} button >
            <ListItemIcon>
              {<ShoppingCartIcon /> }
            </ListItemIcon>
            <ListItemText primary="Commandes" />
          </ListItem>

          <ListItem component={Link} to={'/paiement'} button>
            <ListItemIcon>
              {<PaymentIcon /> }
            </ListItemIcon>
            <ListItemText primary="Paiement" />
          </ListItem>

          <ListItem component={Link} to={'/dashboard'} button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </div>
)


export const secodaryListItems= (
    <div>
         <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
)