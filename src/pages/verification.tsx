import { ExternalLinkIcon } from "@heroicons/react/solid";
import HackverseIcon from "assets/img/hackverse.png";
import storage from "utils/storage";

const Verification = () => {
	const regEmail = storage.get("regEmail");

	return (
		<div className="flex flex-col items-center justify-center w-full mt-36">
			<img src={HackverseIcon} alt="logo" className="w-36" />
			<h2 className="font-bold text-center text-3xl mt-4">
				Please verify email to activate your account.
			</h2>
			<h4 className="w-3/5 text-black text-center text-base mt-2">
				Your Registration Process has been done successfully. A verification
				mail has been sent to <strong>{regEmail}</strong>.
			</h4>
			{getMailBoxUrl(regEmail) ? (
				<a
					href="https://mail.google.com/mail/u/0/#inbox"
					target="__blank"
					className="flex items-center px-5 py-2 font-medium hover:text-white bg-green-400 mt-7"
				>
					Open Mailbox
					<ExternalLinkIcon className="w-5 h-5 ml-1.5" />
				</a>
			) : null}
		</div>
	);
};

export default Verification;

const getMailBoxUrl = (email: string) => {
	const [, host] = email.split("@");

	switch (host) {
		case "gmail.com":
			return "https://mail.google.com";
	}
};
