import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import SearchBox from "components/SearchBox";
import MailNotification from "../../../../components/MailNotification";
import AppNotification from "../../../../components/AppNotification";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/LanguageSwitcher/index";
import UserInfoPopup from "components/UserInfo/UserInfoPopup";
import { switchLanguage, toggleCollapsedNav } from "../../../../actions";

const Header = (props) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchBox, setSearchBox] = useState(false);
  const [mailNotification, setMailNotification] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [langSwitcher, setLangSwitcher] = useState(false);
  const [appNotification, setAppNotification] = useState(false);
  const [apps, setApps] = useState(false);

  const { locale } = useSelector(({ settings }) => settings);

  const onAppNotificationSelect = () => {
    setAppNotification(!appNotification);
  };

  const onMailNotificationSelect = () => {
    setMailNotification(!mailNotification);
  };

  const onLangSwitcherSelect = () => {
    setLangSwitcher(!langSwitcher);
  };

  const onSearchBoxSelect = () => {
    setSearchBox(!searchBox);
  };

  const onAppsSelect = () => {
    setApps(!apps);
  };

  const onUserInfoSelect = () => {
    setUserInfo(!userInfo);
  };

  const handleRequestClose = () => {
    setLangSwitcher(false);
    setUserInfo(false);
    setMailNotification(false);
    setAppNotification(false);
    setSearchBox(false);
    setApps(false);
  };

  const onToggleCollapsedNav = (e) => {
    dispatch(toggleCollapsedNav());
  };

  const onSwitchLanguage = (lang) => {
    dispatch(switchLanguage(lang));
  };

  const Apps = () => {
    return (
      <ul className="jr-list jr-list-half">
        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/calendar/basic">
            <i className="zmdi zmdi-calendar zmdi-hc-fw" />
            <span className="jr-list-text">
              <IntlMessages id="sidebar.calendar.basic" />
            </span>
          </Link>
        </li>
      </ul>
    );
  };

  const updateSearchText = (evt) => {
    setSearchText(evt.target.value);
  };

  return (
    <AppBar className="app-main-header">
      <Toolbar className="app-toolbar" disableGutters={false}>
        <div
          className="d-block d-md-none pointer mr-3"
          onClick={onToggleCollapsedNav}
        >
          <span className="jr-menu-icon">
            <span className="menu-icon" />
          </span>
        </div>
        <ul className="header-notifications list-inline ml-auto">
          <li className="list-inline-item">
            <Dropdown>
              <DropdownMenu>{Apps()}</DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
