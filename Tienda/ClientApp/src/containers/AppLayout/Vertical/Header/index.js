import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "constants/ActionTypes";
import SearchBox from "components/SearchBox";
import MailNotification from "../../../../components/MailNotification";
import AppNotification from "../../../../components/AppNotification";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import { switchLanguage, toggleCollapsedNav } from "actions/Setting";
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/LanguageSwitcher/index";

const Index = (props) => {
  const dispatch = useDispatch();
  const { drawerType, locale } = useSelector(({ settings }) => settings);
  const [langSwitcher, setLangSwitcher] = useState(false);
  const [mailNotification, setMailNotification] = useState(false);
  const [appNotification, setAppNotification] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [apps, setApps] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onAppNotificationSelect = () => {
    setAppNotification(!appNotification);
  };

  const onMailNotificationSelect = () => {
    setMailNotification(!mailNotification);
  };
  const onLangSwitcherSelect = (event) => {
    setLangSwitcher(!langSwitcher);
  };

  const onSearchBoxSelect = () => {
    setSearchBox(!searchBox);
  };
  const onAppsSelect = () => {
    setApps(!apps);
  };

  const handleRequestClose = () => {
    setSearchBox(false);
    setLangSwitcher(false);
    setMailNotification(false);
    setSearchBox(false);
    setApps(false);
  };

  const onToggleCollapsedNav = (e) => {
    const val = !false;
    dispatch(toggleCollapsedNav(val));
  };

  const Apps = () => {
    return (
      <ul className="jr-list jr-list-half">
        <li className="jr-list-item">
            <i className="zmdi zmdi-hc-fw  zmdi-shopping-cart" />
            <span className="jr-list-text">
              Pedidos
            </span>
        </li>
      </ul>
    );
  };

  const updateSearchText = (evt) => {
    setSearchText(evt.target.value);
  };

  const onSwitchLanguage = (lang) => {
    dispatch(switchLanguage(lang));
  };

  const drawerStyle = drawerType.includes(FIXED_DRAWER)
    ? "d-block d-xl-none"
    : drawerType.includes(COLLAPSED_DRAWER)
    ? "d-block"
    : "d-none";

  return (
    <AppBar className="app-main-header">
      <Toolbar className="app-toolbar" disableGutters={false}>
        <IconButton
          className={`jr-menu-icon mr-3 ${drawerStyle}`}
          aria-label="Menu"
          onClick={onToggleCollapsedNav}
        >
          <span className="menu-icon" />
        </IconButton>

        <ul className="header-notifications list-inline ml-auto">
          <li className="list-inline-item">
            <Dropdown
              className="quick-menu app-notification"
              isOpen={apps}
              toggle={onAppsSelect}
            >
              <DropdownToggle
                className="d-inline-block"
                tag="span"
                data-toggle="dropdown"
              >
                <span className="app-notification-menu">
                  <span>Carrito</span>
                </span>
              </DropdownToggle>

              <DropdownMenu>{Apps()}</DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Index);
