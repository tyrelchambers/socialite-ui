import {
  faHome,
  faList,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import NavItem from "../../components/NavItem/NavItem";
import { useGetCurrentTab } from "../../hooks/useGetCurrentTab";

const Sidebar = () => {
  const { currentTab, setTab } = useGetCurrentTab("for you");

  return (
    <aside className="w-80">
      <nav className="flex flex-col gap-2">
        <NavItem
          onClick={() => setTab("for you")}
          icon={faHome}
          active={currentTab === "for you"}
        >
          <p>For you</p>
        </NavItem>

        <NavItem
          onClick={() => setTab("following")}
          icon={faUserFriends}
          active={currentTab === "following"}
        >
          <p>Following</p>
        </NavItem>

        <Link to="/browse">
          <NavItem
            onClick={() => setTab("following")}
            icon={faList}
            active={currentTab === "following"}
          >
            <p>Browse</p>
          </NavItem>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
