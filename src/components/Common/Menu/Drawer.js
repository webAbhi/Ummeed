import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 250,
    backgroundColor: "#EEEEEE",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    fontSize: "16px",
    marginRight: theme.spacing(5),
  }
}));

function DrawerComponent({ handleLogout, user }) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const divide = {
    width: "200%",
    marginLeft: "-55px"
  }
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.paper }}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Donate" className={classes.link}>Donate</Link>
            </ListItemText>
          </ListItem>
          <Divider style={divide} />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Projects" className={classes.link}>Projects</Link>
            </ListItemText>
          </ListItem>
          <Divider style={divide} />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Initiative" className={classes.link}>Our Story</Link>
            </ListItemText>
          </ListItem>

          <Divider style={divide} />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              {
                (user) ?
                  <Link to="/" className={classes.link} onClick={handleLogout}>Logout</Link> :
                  <Link to="/Login" className={classes.link}>Login</Link>
              }
            </ListItemText>
          </ListItem>
          <Divider style={divide} />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;