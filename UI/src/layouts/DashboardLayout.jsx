import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardIcon from "../assets/Circled Menu.png";
import SupportIcon from "../assets/Support.png";
import PluginsIcon from "../assets/Puzzle.png";
import HelpIcon from "../assets/Help.png";
import SunIcon from "../assets/sun.gif";
import MaleUser from "../assets/Rectangle 10.png";
import Briefcase from "../assets/Briefcase.png";
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const navList = [
    { label: "Dashboard", icon: DashboardIcon },
    { label: "Support", icon: SupportIcon },
    { label: "Plugins", icon: PluginsIcon },
    { label: "Helo", icon: HelpIcon },
  ];
  const navs = (
    <div className="h-full bg-slate-800 flex flex-col">
      <div className="flex flex-col items-center py-20">
        <img className="w-24 h-24" src={Briefcase} alt="" />
        <h1 className="text-gray-300 font-extrabold">StatsBoard</h1>
      </div>
      <div className="flex flex-col items-end my-10 ">
        {navList.map(({ label, icon }, index) => (
          <div
            key={label}
            className={`my-2 rounded-s-xl w-5/6 ${currentPath==`/${label.toLowerCase()}`?'text-slate-900 bg-white':'bg-slate-900 text-white hover:text-slate-900 hover:bg-slate-50'} transition-colors duration-300`}
            onClick={()=>navigate(label.toLowerCase())}
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={icon} alt="" />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </div>
        ))}
      </div>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {navs}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {navs}
        </Drawer>
      </Box>
      <div className="bg-blue-100 h-full  w-full">
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            color: "black",
            boxShadow: "0",
            bgcolor: "#DBEAFE",
            pt:1
          }}
        >
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="flex items-center flex-wrap">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <div className="flex flex-wrap">
                <h1>Good Morning!</h1>
                <img className="ms-1 w-6" src={SunIcon} alt="Sun Gif" />
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-xl p-2 flex">
              <div className="mx-1 sm:mx-2">
                <p className="text-xs  sm:text-base" >John Doe</p>
                <p className="text-xs">john@doe.com</p>
              </div>
              <img src={MaleUser} alt="Male's image " />
            </div>
          </Toolbar>
        </AppBar>
        <div className="mt-10 pt-20">
          <Outlet />
        </div>
      </div>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
