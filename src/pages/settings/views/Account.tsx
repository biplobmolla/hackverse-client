import { message } from "antd";
import { Button, Input } from "lib";
import React, { useContext, useEffect, useState } from "react";
import { sendEmail } from "services/settings";
import { SettingsContext, SettingsTitle } from "..";

export default function Account() {
  const [email, setEmail] = useState<any>();
  const { data } = useContext(SettingsContext);

  useEffect(() => {
    if (data) {
      setEmail(data.account);
    }
  }, [data]);

  const saveEmail = async (e: any) => {
    e.preventDefault();
    try {
      await sendEmail(email);
      message.success("Email Updated Successfully");
    } catch {
      message.error("Something went wrong");
    }
  };

  const inputHandleChange = (e: any) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };
  return (
    <div>
      <SettingsTitle>Account</SettingsTitle>
      <div className="grid grid-cols-1 gap-x-7 gap-y-5">
        <div className="col-span-1">
          <Input
            label="Primary Email"
            name="primary_email"
            value={email?.primary_email}
            onChange={inputHandleChange}
          />
        </div>
        <div className="col-span-1">
          <Input
            label="Secondary Email"
            name="secondary_email"
            value={email?.secondary_email}
            onChange={inputHandleChange}
          />
        </div>
      </div>
      <Button className="mt-6 ml-auto" onClick={saveEmail}>
        Save Changes
      </Button>
    </div>
  );
}
