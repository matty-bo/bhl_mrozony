import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../sites/dashboard/dashboard";
import {
  SidebarWrapper,
  SIDEBAR_WIDTH,
} from "../sites/dashboard/dashboard.styles";
import { MessagesView } from "./messages/MessaagesView";
import { NavigationBar } from "./navbar";
import { NotificationsView } from "./notifications/NotificationsView";
import { MainListItems } from "./sidebar";

export function Main() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <SidebarWrapper>
          <MainListItems></MainListItems>
        </SidebarWrapper>

        <Box sx={{ width: "100%", marginLeft: SIDEBAR_WIDTH }}>
          <NavigationBar />

          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/dashboard" />}
            ></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route exact path="/regionData" element={<Dashboard />}></Route>
            <Route exact path="/waterQuality" element={<Dashboard />}></Route>
            <Route
              exact
              path="/notifications"
              element={<NotificationsView />}
            />
            <Route exact path="/messages" element={<MessagesView />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
