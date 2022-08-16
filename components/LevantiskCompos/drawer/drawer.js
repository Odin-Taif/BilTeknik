import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import style from "./drawer.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
//-=-=-=-=-=- components import
import BusinessCard from "../BusinessCard/businessCard";
import { SideBar } from "../componentsHub";

function MuiDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <div className={style.drawerContainer}>
        <IconButton />
        <IconButton
          size="large"
          edge="start"
          onClick={() => setDrawerOpen(true)}
        >
          <AiOutlineMenu
            style={{ color: "white", fontSize: "2rem" }}
            className={style.icon}
          />
        </IconButton>
      </div>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
          sx={{ p: 2, margin: "1rem auto", padding: "2rem" }}
        >
          <Typography variant="h6" component="div">
            <SideBar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
            <BusinessCard />
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;
