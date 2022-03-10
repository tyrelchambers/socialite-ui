import { Link, useNavigate } from "react-location";
import React, { useEffect } from "react";
import {
  faCircle,
  faHistory,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import DashboardHome from "../DashboardHome/DashboardHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../layouts/Header/Header";
import NavItem from "../../components/NavItem/NavItem";
import Profile from "../Profile/Profile";
import StreamHistory from "../StreamHistory/StreamHistory";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import { useGetCurrentTab } from "../../hooks/useGetCurrentTab";
import { useUser } from "../../hooks/useUser";

const Dashboard = () => {
  const url = new URLSearchParams(useHistory().location.search);
  const { currentTab, setTab } = useGetCurrentTab(url.get("tab"));
  const userQuery = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setTab(url.get("tab"));
  }, [url]);

  if (userQuery.isSuccess && !userQuery.data) return null;

  const linkHandler = (tab) => {
    setTab(tab);
    navigate(`/dashboard?tab=${tab}`);
  };

  return (
    <>
      <Header />

      <Wrapper className="mt-4">
        <div className="flex gap-6">
          <aside className="w-80 flex flex-col gap-4">
            <Link to="/dashboard/live">
              <div className="w-full p-3 px-4 bg-red-500 rounded-md flex items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-white mr-4"
                  size="1x"
                />
                <p>Go Live</p>
              </div>
            </Link>
            <NavItem
              onClick={() => linkHandler("home")}
              icon={faHome}
              active={currentTab === "home"}
            >
              <p>Dashboard</p>
            </NavItem>
            <NavItem
              icon={faHistory}
              active={currentTab === "history"}
              onClick={() => linkHandler("history")}
            >
              <p>Past Streams</p>
            </NavItem>
            <NavItem
              icon={faUser}
              active={currentTab === "profile"}
              onClick={() => linkHandler("profile")}
            >
              <p>Profile</p>
            </NavItem>
          </aside>
          <section>
            {currentTab === "home" && <DashboardHome />}
            {currentTab === "history" && (
              <StreamHistory user={userQuery.data} />
            )}
            {currentTab === "profile" && <Profile user={userQuery.data} />}
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;
