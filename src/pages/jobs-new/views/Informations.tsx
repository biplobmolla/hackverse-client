import { Col, Row } from "antd";
import { Card, Input } from "lib";
import React from "react";

export default function Informations() {
	return (
		<Card.Settings className="col-span-1">
			<Row gutter={[16, 24]}>
				<Col span={24}>
					<Input label="Job Title" />
				</Col>
				<Col span={24}>
					<Input
						type="textarea"
						label="Describe your job"
						className="min-h-[120px]"
					/>
				</Col>
				<Col span={24}>
					<Row gutter={16}>
						<Col span={8}>
							<Input label="Job type" />
						</Col>
						<Col span={8}>
							<Input label="Deadline" />
						</Col>
						<Col span={8}>
							<Input label="Salary" />
						</Col>
					</Row>
				</Col>
			</Row>
		</Card.Settings>
	);
}
