import { Col, Row, Table } from "antd";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function JobsManage() {
	return (
		<div>
			<div>
				<div className="text-lg font-bold mb-2.5">Posted Jobs</div>
			</div>
			<Table columns={columns} dataSource={data} />
		</div>
	);
}

const columns = [
	{
		title: "Job Title",
		dataIndex: "name",
		key: "name",
		width: 450,
		render: (text: string) => (
			<div>
				<Link to="/jobs/view/123" className="font-semibold text-lg">
					{text}
				</Link>
				<p className="text-xs mt-0.5">Created: July 28, 2022</p>
			</div>
		),
	},
	{
		title: "Candidates",
		dataIndex: "candidates",
		key: "candidates",
		width: 650,
		render: (text: string) => {
			return (
				<Row align="middle" className="bg-gray-50 py-1.5 rounded-sm">
					<Col span={6} className="font-medium text-center">
						3 Active <br /> Candidates
					</Col>
					<Col span={18}>
						<Row>
							<Col span={6} className="text-center">
								0 <div className="font-medium">Awaiting</div>
							</Col>
							<Col span={6} className="text-center">
								1 <div className="font-medium">Reviewed</div>
							</Col>
							<Col span={6} className="text-center">
								2 <div className="font-medium">Contacting</div>
							</Col>
							<Col span={6} className="text-center">
								0 <div className="font-medium">Hired</div>
							</Col>
						</Row>
					</Col>
				</Row>
			);
		},
	},
	{
		title: "Status",
		key: "status",
		dataIndex: "status",
		render: (text: string) => (
			<div
				className={classNames({
					"text-primary-700": text === "Open",
					"text-red-700": text === "Closed",
				})}
			>
				{text}
			</div>
		),
	},
	{
		title: "Action",
		key: "action",
		render: () => (
			<div>
				<span className="cursor-pointer mr-3">Edit</span>
				<span className="cursor-pointer">Delete</span>
			</div>
		),
	},
];
const data = [
	{
		key: "1",
		name: "Senior Software Engineer",
		age: 32,
		address: "New York No. 1 Lake Park",
		status: "Open",
	},
	{
		key: "2",
		name: "Android Developer",
		age: 42,
		address: "London No. 1 Lake Park",
		status: "Open",
	},
	{
		key: "3",
		name: "Senior UX Engineer",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		status: "Closed",
	},
	{
		key: "4",
		name: "Junior Flutter Developer",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		status: "Closed",
	},
];
