import { Col, Empty, Row } from "antd";
import { Card } from "lib";
import React from "react";

export default function Dashboard() {
	return (
		<>
			<Row gutter={20}>
				<Col span={8}>
					<Card title={<span className="font-semibold">Messages (0)</span>}>
						<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
					</Card>
				</Col>
				<Col span={8}>
					<Card title={<span className="font-semibold">Interviews (0)</span>}>
						<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
					</Card>
				</Col>
				<Col span={8}>
					<Card
						title={<span className="font-semibold">Sponsored job billing</span>}
					>
						<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
					</Card>
				</Col>
			</Row>
			<Card
				title={<span className="font-semibold">Career page</span>}
				className="mt-5"
			>
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
			</Card>
			{/* <Card
				title={<span className="font-semibold">Applied jobs</span>}
				className="mt-5"
			>
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
			</Card> */}
		</>
	);
}
