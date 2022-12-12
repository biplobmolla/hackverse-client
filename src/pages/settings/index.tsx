import classNames from "classnames";
import NotSupported from "components/NotSupported";
import { Card, Menu } from "lib";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Breakpoint } from "react-socks";
import { fetchSettings } from "services/settings";
import Account from "./views/Account";
import Organization from "./views/Organization";
import Password from "./views/Password";
import Profile from "./views/Profile";

export const SettingsContext = React.createContext<any>(null);

const Settings = () => {
  const { isLoading, error, data } = useQuery("fetchSettings", fetchSettings);

  const navigate = useNavigate();

  useEffect(() => navigate("profile"), []);

  return (
    <SettingsContext.Provider value={{ data: data?.data }}>
      <Breakpoint medium up>
        <div className="mx-32 my-7 grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <Menu>
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.key}
                  className={({ isActive }) =>
                    classNames({ "bg-slate-100 block rounded-xl": isActive })
                  }
                >
                  <Menu.Item>{item.title}</Menu.Item>
                </NavLink>
              ))}
            </Menu>
            <Menu className="mt-5">
              {additionalNavItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.key}
                  className={({ isActive }) =>
                    classNames({ "bg-slate-100 block rounded-xl": isActive })
                  }
                >
                  <Menu.Item>{item.title}</Menu.Item>
                </NavLink>
              ))}
            </Menu>
          </div>
          <Card.Settings className="col-span-9">
            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
              <Route path="password" element={<Password />} />
              <Route path="organization" element={<Organization />} />
            </Routes>
          </Card.Settings>
        </div>
      </Breakpoint>

      <Breakpoint medium down>
        <NotSupported />
        {/* <div className="h-52 flex justify-center items-center">
					<div className="relative">
						<p className="absolute right-0">
							<Icons.Gallery />
						</p>
						<img
							className="w-28 h-28 rounded-full"
							src="https://us.123rf.com/450wm/untittled/untittled2006/untittled200600068/149877023-awesome-monkey-glasses-logo-mascot-illustration.jpg?ver=6"
							alt=""
						/>
					</div>
				</div>
				<Collapse
					className="custom-settings-collapse bg-white border-none"
					bordered={false}
					expandIconPosition="right"
					accordion
				>
					{navItems.map(({ key, title, component: Component }) => (
						<Panel className="border-0" header={title} key={key}>
							<Component />
						</Panel>
					))}
				</Collapse>
				<Collapse
					className="custom-settings-collapse bg-white border-none mt-4"
					bordered={false}
					expandIconPosition="right"
					accordion
				>
					{optionalNavItems.map(({ key, title, component: Component }) => (
						<Panel className="border-0" header={title} key={key}>
							<Component />
						</Panel>
					))}
				</Collapse> */}
      </Breakpoint>
    </SettingsContext.Provider>
  );
};

export default Settings;

export const SettingsTitle = ({ children }: any) => {
  return <h5 className="text-xl font-semibold mb-6">{children}</h5>;
};

const navItems = [
  { key: "profile", title: "Profile", component: Profile },
  { key: "account", title: "Account", component: Account },
  { key: "password", title: "Password", component: Password },
];

const additionalNavItems = [
  { key: "organization", title: "Organization", component: Profile },
  // { key: "resume", title: "Resume", component: Account },
];

// const optionalNavItems = [
// 	{ key: "reportbugs", title: "Report a bug", component: ReportBugs },
// 	{ key: "feedback", title: "Send feedback", component: FeedBack },
// ];
