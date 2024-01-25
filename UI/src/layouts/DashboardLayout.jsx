import * as React from "react";
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
import SunIcon from "../assets/Sun.gif";
import MaleUser from "../assets/Rectangle 10.png";
import Briefcase from "../assets/Briefcase.png";
import LogoutIcon from "../assets/Shutdown.png";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

const drawerWidth = 240;

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
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
      <div className="flex flex-col items-center py-10 sm:py-20">
        <img className="w-20 h-20 sm:w-24 sm:h-24" src={Briefcase} alt="" />
        <h1 className="text-gray-300 font-holtwood">StatsBoard</h1>
      </div>
      <div className="flex flex-col items-end my-10 ">
        {navList.map(({ label, icon }) => (
          <div
            key={label}
            className={`my-2 rounded-s-xl w-5/6 ${
              currentPath == `/${label.toLowerCase()}`
                ? "text-slate-900 bg-white"
                : "bg-slate-900 text-white hover:text-slate-900 hover:bg-slate-50"
            } transition-colors duration-300`}
            onClick={() => navigate(label.toLowerCase())}
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={icon} alt="" />
              </ListItemIcon>
              <ListItemText primary={label} sx={{ fontSize: "10px" }} />
            </ListItemButton>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex" sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="Side Bar"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
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
          <Button className="flex items-center justify-center cursor-pointer w-full !p-4 text-bold !text-red-400 bg-white">
            <span className="me-2 font-semibold capitalize !text-sm">
              Logout
            </span>
            <img src={LogoutIcon} alt="" />
          </Button>
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
          <Button className="flex items-center justify-center cursor-pointer w-full !p-4 text-bold !text-red-400 bg-white">
            <span className="me-2 font-semibold capitalize !text-sm">
              Logout
            </span>
            <img src={LogoutIcon} alt="" />
          </Button>
        </Drawer>
      </Box>
      <div className="bg-blue-100 h-full w-full">
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            color: "black",
            boxShadow: "0",
            bgcolor: "#DBEAFE",
            pt: 1,
            px: 2,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <div className="flex items-center w-full sm:w-fit sm:gap-0 flex-wrap">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <div className="flex flex-wrap">
                <h1>Good Morning!</h1>
                <img className="ms-1 w-6" src={SunIcon} alt="Sun Gif" />
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md m-2 w-full justify-between sm:w-fit p-2 flex items-center">
              <div className="mx-1 sm:mx-2 font-semibold">
                <p className="text-xs">John Doe</p>
                <p style={{ fontSize: "0.65rem" }}>john@doe.com</p>
              </div>
              <img className="w-8 h-8" src={MaleUser} alt="Male's image " />
            </div>
          </Toolbar>
        </AppBar>
        <div className="md:ps-16 md:pe-16 lg:me-0 pt-28 sm:pt-20 w-95pt md:max-w-md lg:max-w-6xl xl:max-w-7xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
