import { message } from "antd";
import { Button, Input } from "lib";
import React, { useState } from "react";
import { sendPass } from "services/settings";
import { SettingsTitle } from "..";

export default function Password() {
  const [password, setPassword] = useState<any>("");
  const savePass = async (e: any) => {
    e.preventDefault();
    try {
      await sendPass(password);
      setPassword(password);
      message.success("Password Updated Successfully");
    } catch {
      message.error("Something went wrong");
    }
  };

  const inputHandleChange = (e: any) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };
  return (
    <div>
      <SettingsTitle>Password</SettingsTitle>
      <div className="grid grid-cols-2 gap-x-7 gap-y-5">
        <div className="col-span-2">
          <Input
            type="password"
            label="Old password"
            name="old_password"
            value={password?.old_password}
            onChange={inputHandleChange}
          />
        </div>
        <div className="col-span-1">
          <Input
            type="password"
            label="New password"
            name="new_password"
            value={password?.new_password}
            onChange={inputHandleChange}
          />
        </div>
        <div className="col-span-1">
          <Input
            type="password"
            label="Confirm new password"
            name="confirm_password"
            value={password?.confirm_password}
            onChange={inputHandleChange}
          />
        </div>
      </div>
      <Button className="mt-6 ml-auto" onClick={savePass}>
        Save Changes
      </Button>
    </div>
  );
}
