import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Button from "../../components/ui/button/Button";

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Add Partner" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
            <div>
              <Label htmlFor="input">Name</Label>
              <Input type="text" id="input" placeholder="Enter Name" />
            </div>
        </div>
        <div className="space-y-6">
            <div>
              <Label htmlFor="input">Contact No</Label>
              <Input type="text" id="input" placeholder="Enter Contact No" />
            </div>
        </div>
        <div className="space-y-6">
            <div>
              <Label htmlFor="input">Email</Label>
              <Input type="email" id="email" placeholder="Enter Email" />
            </div>
        </div>
        <div className="space-y-6">
            <div>
              <Label htmlFor="input">Password</Label>
              <Input type="password" id="password" placeholder="*********" />
            </div>
        </div>
        <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
                Submit
            </Button>
        </div>
      </div>
    </div>
  );
}
