import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import URLSearchParams from "url-search-params";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import SideNavOption from "./SideNavOption";
import { changeDirection, setDarkTheme, setThemeColor } from "actions/index";

const ColorOption = (props) => {
  const dispatch = useDispatch();
  const [drawerStatus, setDrawerStatus] = useState(false);
  const { themeColor, darkTheme, isDirectionRTL } = useSelector(
    ({ settings }) => settings
  );

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    if (params.has("theme-name")) {
      document.body.classList.add(params.get("theme-name"));
    } else {
      document.body.classList.add(themeColor);
    }
  }, [props.location.search, themeColor]);


  const handleDarkTheme = () => {
    dispatch(setDarkTheme());
    const body = document.body.classList;
    body.toggle(themeColor);
    body.toggle("dark-theme");
  };

  return null;
};

export default withRouter(ColorOption);
