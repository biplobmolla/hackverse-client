import { message } from "antd";
import { Button, Input } from "lib";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCompanyData } from "services/company";
import { sendOrganization } from "services/settings";
import storage from "utils/storage";
import { SettingsTitle } from "..";

export default function Organization() {
  const [organization, setOrganization] = useState<any>();

  const companyId = storage.get("UserInfo").company;
  const { isLoading, error, data } = useQuery("getCompanyData", async () => {
    return await fetchCompanyData(companyId);
  });

  useEffect(() => {
    if (data) {
      delete data.data.logo;
      setOrganization(data.data);
    }
  }, [data]);
  const saveOrganization = async (e: any) => {
    e.preventDefault();
    try {
      await sendOrganization(companyId, organization);
      message.success("Organization Updated Successfully");
    } catch {
      message.error("Something went wrong");
    }
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setOrganization({ ...organization, [name]: value });
  };

  return (
    <div>
      <SettingsTitle>Organization</SettingsTitle>
      <div className="grid grid-cols-12 gap-x-7 gap-y-5">
        <div className="col-span-12">
          <Input
            label="Company name"
            value={organization?.name}
            name="name"
            onChange={handleInput}
          />
        </div>
        <div className="col-span-6">
          <Input
            label="Address"
            value={organization?.address}
            name="address"
            onChange={handleInput}
          />
        </div>
        <div className="col-span-6">
          <Input
            label="Contact"
            value={organization?.phone}
            name="phone"
            onChange={handleInput}
          />
        </div>
        <div className="col-span-4">
          <Input
            label="Page url"
            value={organization?.page_url}
            name="page_url"
            onChange={handleInput}
          />
        </div>
        <div className="col-span-4">
          <Input
            label="Website"
            value={organization?.website}
            name="website"
            onChange={handleInput}
          />
        </div>
        <div className="col-span-4">
          <Input
            label="Company size"
            value={organization?.size}
            name="size"
            onChange={handleInput}
          />
        </div>
      </div>
      <Button onClick={saveOrganization} className="mt-6 ml-auto">
        Save Changes
      </Button>
    </div>
  );
}
