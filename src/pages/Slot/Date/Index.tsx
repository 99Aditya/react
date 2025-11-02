import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import DateList from "./List";
import { Link } from "react-router";

import PageMeta from "../../../components/common/PageMeta";

export default function Index() {
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Date List" />
        <div className="flex items-center justify-between mb-4">
           
          <Link
            to="/add-slot-date"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          > Add New Date
          </Link>
        </div>

        <div className="space-y-6">
          {/* <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard /> */}
          <DateList />
        </div>
      
    </>
  );
}
