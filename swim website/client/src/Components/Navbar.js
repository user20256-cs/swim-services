
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      link: '/'
    },
    {
      text: "About",
      link: '/about-us'
    },
    {
      text: "Blogs",
      link: '/blogs'
    },
    {
      text: "Contact",
      link: '/contact-us'
    },
    {
      text: "Lessons",
      link: '/lessons'
    },
    {
      text: "Registration",
      link: '/registration'
    },
    {
      text: "Faqs",
      link: '/faqs'
    },
  ];


  return (
    <nav>
      <div className="nav-logo-container">

      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="/lessons">Lessons</a>
        <a href="/about-us">About</a>
        <a href="/contact-us">Contact</a>
        <a href="/registration">Registration</a>
        <a href="/blogs">Blogs</a>
        <a href="/faqs">Faqs</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => navigate(`${item.link}`)}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar