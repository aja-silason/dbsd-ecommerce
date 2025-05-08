"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { ProductMenuSVG } from "@/components/svg/product-menu";
import { ContactMenuSVG } from "@/components/svg/contact-menu";
import { HomeMenuSVG } from "@/components/svg/home-menu";
import { UsersFour } from "@phosphor-icons/react";

export function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu = [
    {
      link: "/",
      tag: "Home",
      icon: <HomeMenuSVG />
    },
    {
      link: "product",
      tag: "Productos",
      icon: <ProductMenuSVG />
    },
    {
      link: "/about",
      tag: "Sobre nós",
      icon: <UsersFour />
    },
    {
      link: "#contact",
      tag: "Contactos",
      icon: <ContactMenuSVG />
    }
  ]

  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Acesse o menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ background: "#0071c1", width: 40, height: 40 }}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            width: "120%",
            height: "40%",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.3))",
            mt: 2,
            "& .MuiAvatar-root": {},
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {
          menu?.map((item: {link: string, tag: string, icon: React.ReactNode}) => (
              <Link href={item?.link} prefetch={true}>
                <MenuItem onClick={handleClose} className="p-5">
                  <ListItemIcon>
                    {item?.icon}
                  </ListItemIcon>
                  {item?.tag}
                </MenuItem>
              </Link>
          ))
        }

      </Menu>
    </React.Fragment>
  );
}
