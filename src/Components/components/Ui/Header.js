import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../../assets/logo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const menuOptions = [
  {
    name: "Services",
    link: "/services",
    activeIndex: 1,
    selectedIndex: 1
  },
  {
    name: "Custom Software",
    link: "/customsoftware",
    activeIndex: 1,
    selectedIndex: 2
  },
  {
    name: "Ios/Android App Devlopment",
    link: "/mobileapps",
    activeIndex: 1,
    selectedIndex: 3
  },
  {
    name: "Website Devlopment",
    link: "/websites",
    activeIndex: 1,
    selectedIndex: 4
  }
];

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "1.25em"
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    margin: " 0px 25px 0px 25px ",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7"
  },
  selectedDrawerItem: {
    opacity: 1
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerIconContainer: {
    marginLeft: "auto",
    marginRight: "5px",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  customDivider: {
    borderBottom: "1px solid orange"
  }
}));

const Header = ({ value, setValue, setSelectedIndex, selectedIndex }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  //const matches = useMediaQuery('(min-width: 960px)');

  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = e => {
    setOpenMenu(false);
    setAnchorEl(null);
  };

  const handleMenuItemClick = (e, i) => {
    // setAnchorEl(e.currentTarget);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      onOverMouse: e => handleClick(e),
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaHasPopup: anchorEl ? "true" : undefined
    },
    {
      name: "The Revolution",
      link: "/revolution",
      activeIndex: 2
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 3
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 4
    }
  ];

  useEffect(() => {
    const pathname = window.location.pathname;
    const index = routes.findIndex(route => route.link === pathname);
    const selectedIndex = menuOptions.findIndex(menu => menu.link === pathname);

    if (pathname === "/estimate") setValue(false);
    else setValue(index === -1 ? 1 : index);

    setSelectedIndex(selectedIndex);
  }, [routes, value, setValue, selectedIndex, setSelectedIndex]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        className={classes.tabContainer}
      >
        {routes.map(route => (
          <Tab
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            onMouseOver={
              route.link === "/services" ? e => route.onOverMouse(e) : null
            }
            key={route.name}
            aria-controls={route.link === "/services" ? route.ariaOwns : ""}
            aria-haspopup={route.link === "/services" ? route.ariaHasPopup : ""}
          />
        ))}
      </Tabs>
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        onClick={() => setOpenDrawer(true)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            onClick={e => {
              handleMenuItemClick(e, i);
              setValue(1);
              handleClose();
            }}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              button
              divider
              selected={value === route.activeIndex}
              component={Link}
              to={route.link}
              onClick={() => {
                setValue(route.activeIndex);
                setOpenDrawer(false);
              }}
              key={route.name}
            >
              <ListItemText
                disableTypography
                className={
                  value === route.activeIndex
                    ? [classes.drawerItem, classes.selectedDrawerItem].join(" ")
                    : classes.drawerItem
                }
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            button
            divider
            className={
              value === 5
                ? [classes.drawerItemEstimate, classes.selectedDrawerItem]
                : classes.drawerItemEstimate
            }
            component={Link}
            to="/estimate"
            selected={value === 5}
            onClick={() => {
              setValue(5);
              setOpenDrawer(false);
            }}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              to="/"
              component={Link}
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={Logo} className={classes.logo} alt="Company Logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
