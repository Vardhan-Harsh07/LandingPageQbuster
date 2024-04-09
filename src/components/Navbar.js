import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Frapp(){
    window.location.href='http://localhost:3001/';
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
     
    {
      text: "About",
      icon: <InfoIcon />,
      hf: "#about-section-container",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      hf: "#testimoni",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      hf: "#about-section-container",
    },
    {
      text: "Admin's Corner",
      icon: <AccountCircleIcon />,
      hf: "#about-section-container",
    },
    {
      text: "Add Restaurant",
      icon: <AddCircleOutlineIcon />,
      hf: "#about-section-container",
    },
  ];

  return (
    <nav>
      <button href="" className="nav-logo-container">
        Q-Buster
      </button>
      <div className="navbar-links-container">
        {menuOptions.map((item, index , hf) => (
          <a key={index} href={item.hf}>
            {item.text}
          </a>
        ))}
        <button className="primary-button" onClick={Frapp} >Sign In</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
