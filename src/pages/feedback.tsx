import { Button } from "lib";
import { SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { message } from "antd";
import { createFeedback } from "services/feedback";
let initialCompliment = {company: 1, description: ""};

export default function Feedback() {
	const [compliment, setCompliment] = useState(initialCompliment);
	const sendFeedback = async (e: any) => {
		e.preventDefault();
		try{
			await createFeedback(compliment);
			setCompliment(initialCompliment);
			message.success("Feedback Sent Successfully");
		}catch{
			message.error("Something went wrong");
		}
	}
	return (
		<>
			<div className="mb-4">
				<div className="text-xl font-semibold">Feedback</div>
				<span className="text-sm">
					We really appriciate that you're sending your thought about our
					product. Your feedback is valueable to us.
				</span>
			</div>
			<textarea
				name="feedback"
				id="feedback"
				rows={10}
				className="border border-gray-300 min-h-[200px] text-gray-700 text-sm font-medium rounded-lg block w-full py-2.5 px-3 focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300"
				onChange={(e) => setCompliment({...compliment, description: e.target.value})}
				value={compliment.description}
			></textarea>
			<Button
				className="mt-6 ml-auto px-7"
				icon={<SendOutlined className="-translate-y-1 -rotate-45" />}
				onClick={sendFeedback}
			>
				Send
			</Button>
		</>
	);
}
