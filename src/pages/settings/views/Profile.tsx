import { message } from "antd";
import { Button, Input } from "lib";
import { useContext, useEffect, useState } from "react";
import { sendSettingValue } from "services/settings";
import { SettingsContext, SettingsTitle } from "..";

export default function Profile() {
  const [settingvalue, setSettingvalue] = useState<any>();
  const { data } = useContext(SettingsContext);

  useEffect(() => {
    if (data) {
      setSettingvalue(data.profile);
    }
  }, [data]);

  const settingvalueSubmit = (e: any) => {
    console.log(settingvalue);

    // e.preventDefault();
    // try {
    //   await sendSettingValue(settingvalue);
    //   message.success("Setting Updated Successfully");
    // } catch {
    //   message.error("Something went wrong");
    // }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setSettingvalue({ ...settingvalue, [name]: value });
  };

  return (
    <>
      <div>
        <SettingsTitle>Profile</SettingsTitle>
        {/* <div className="flex items-center mt-4">
					<img
						src="https://www.sragenkab.go.id/assets/images/demo/user-7.jpg"
						alt="user"
						className="rounded-full w-14 h-14 object-cover"
					/>
					<label htmlFor="profile-img">
						<span className="rounded-md shadow-sm cursor-pointer text-primary-700 ml-5 font-semibold px-4 py-2 border">
							Upload
						</span>
					</label>
					<input type="file" id="profile-img" className="hidden" />
				</div> */}
      </div>
      <div className="grid grid-cols-2 gap-x-7 gap-y-5 mt-8">
        <div className="col-span-1">
          <Input
            label="First name"
            name="first_name"
            value={settingvalue?.first_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-1">
          <Input
            label="Last name"
            name="last_name"
            value={settingvalue?.last_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-1">
          <Input
            label="Address"
            name="address"
            value={settingvalue?.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-1">
          <Input
            label="Phone no"
            name="phone_number"
            value={settingvalue?.phone_number}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <Button className="mt-6 ml-auto" onClick={settingvalueSubmit}>
        Save Changes
      </Button>
    </>
  );
}
