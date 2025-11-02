import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  GridIcon,
  UserCircleIcon,
  ListIcon,
  ChevronDownIcon,
} from "../icons";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string }[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <UserCircleIcon />,
    name: "Users",
    path: "/profile",
  },
  {
    icon: <UserCircleIcon />,
    name: "Partners",
    path: "/partner",
  },
  {
    name: "Slots",
    icon: <ListIcon />,
    subItems: [
      { name: "Time", path: "/slot-time" },
      { name: "Date", path: "/slot-date" },
    ],
  },

  {
    icon: <ListIcon />,
    name: "Category",
    path: "/category",
  },
  {
    icon: <ListIcon />,
    name: "Category Type",
    path: "/category-type",
  },
];

const AppSidebar: React.FC = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const handleToggle = (name: string) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  return (
    <aside className="fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 w-[290px]">
      {/* Logo Section */}
      <div className="py-8 flex justify-start">
        <Link to="/">
          <img
            className="dark:hidden"
            src="/images/logo/logo.svg"
            alt="Logo"
            width={150}
            height={40}
          />
          <img
            className="hidden dark:block"
            src="/images/logo/logo-dark.svg"
            alt="Logo"
            width={150}
            height={40}
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {/* Menu Header */}
            <div>
              <h2 className="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">
                Menu
              </h2>

              <ul className="flex flex-col gap-4">
                {navItems.map((nav) => (
                  <li key={nav.name}>
                    {nav.subItems ? (
                      <>
                        <button
                          onClick={() => handleToggle(nav.name)}
                          className={`menu-item group ${
                            openMenu === nav.name
                              ? "menu-item-active"
                              : "menu-item-inactive"
                          } justify-start w-full text-left`}
                        >
                          <span
                            className={`menu-item-icon-size ${
                              openMenu === nav.name
                                ? "menu-item-icon-active"
                                : "menu-item-icon-inactive"
                            }`}
                          >
                            {nav.icon}
                          </span>
                          <span className="menu-item-text">{nav.name}</span>
                          <ChevronDownIcon
                            className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                              openMenu === nav.name
                                ? "rotate-180 text-brand-500"
                                : ""
                            }`}
                          />
                        </button>

                        {/* Toggle Dropdown */}
                        {openMenu === nav.name && (
                          <ul className="mt-2 space-y-1 ml-9 transition-all duration-300">
                            {nav.subItems.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  to={sub.path}
                                  className={`menu-dropdown-item ${
                                    isActive(sub.path)
                                      ? "menu-dropdown-item-active"
                                      : "menu-dropdown-item-inactive"
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={nav.path || "#"}
                        className={`menu-item group ${
                          isActive(nav.path || "")
                            ? "menu-item-active"
                            : "menu-item-inactive"
                        }`}
                      >
                        <span
                          className={`menu-item-icon-size ${
                            isActive(nav.path || "")
                              ? "menu-item-icon-active"
                              : "menu-item-icon-inactive"
                          }`}
                        >
                          {nav.icon}
                        </span>
                        <span className="menu-item-text">{nav.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>           
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
