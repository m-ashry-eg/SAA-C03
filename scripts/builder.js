const builder = [
	{
		question:
			'A company runs multiple applications on EC2 instances within a single VPC in the US West (Oregon) region. The application needs to establish a private connection to an Amazon RDS database in a VPC that is owned by a separate AWS account and is deployed in the US East (Ohio) region. Requests from the application to the RDS database should not be sent over the public internet. What would be the most cost-effective solution?',
		options: [
			'AWS Global Accelarator',
			'VPC peering',
			'VPC Interface Endpoints',
			'VPC Transit Gateway',
		],
		answer: [1],
		explanation: [
			'VPC peering is the best option in this case. It provides a simple, effective way to connect the separate VPCs and can be done across regions.',
			'AWS Global Accelerators are a way to minimize latency in customers requests reaching.',
			'Transit Gateway is a way to simplify hybrid network connection between on-premises networks and VPCs, and do not first use this use case.',
			'VPC Interface Endpoints are available for Amazon RDS, but are not as cost-effective as a VPC peering connection.The purpose of VPC Interface gateway is to connect services, while Vpc peering’s goal is to connect VPCs together.',
		],
	},
	{
		question:
			'An IT department for a company with about 3000 employees spread across 30 office locations in Europe manages Windows-based file storage to support user directories and department file shares. Due to increase costs and resources required to maintain this file storage, the company plans to move its storage to the AWS cloud. The IT department is looking for a fully managed storage solution that will allow employers to continue to use their user directories and department files as usual. Which of the following Amazon storage solutions would be a good choice for this organization?',
		options: [
			'Migrate existing file storage to Amazon FSx for Windows File Server.',
			'Migrate existing file storage to Amazon EFS.',
			'Use Amazon Storage Gateway to store files in Amazon S3.',
			'Migrate existing file storage to Amazon FSx for Lustre.',
		],
		answer: [0],
		explanation: [
			'The best choice for this organization would be to migrate their existing file storage to Amazon FSx for Windows File Server. Amazon FSx for Windows File Server is a fully managed Windows file server that provides a native Windows file system experience.',
			'Amazon EFS is a fully managed file system, but it is a Linux file server.',
			'Amazon Storage Gateway can be used to store files in Amazon S3, but it is not a fully managed service. This means that the IT department would have to manage the underlying infrastructure, which could be time-consuming and complex.',
			'Amazon FSx for Lustre is a high-performance file system, but it is not designed for user directories and department file shares. It is designed for workloads that require high performance and scalability.',
		],
	},
	{
		question:
			"A company has multiple AWS accounts to isolate development, testing, and production environments for several applications. They're using AWS organizations and these accounts are contained under the Engineering Organization Unit. Occasionally, when a new release needs to be deployed, users in the Developer Group in the Development account need to access the Ec2 instances in the Production account. Following AWS best practices, what should a Solutions Architect implement to allow users in the Developers IAM Group from the Development account access to EC2 instances in the Production account?",
		options: [
			'Create an IAM Group for the developers in the Production account with read/write access to EC2 instances. Create an IAM user for each developer in this Group.',
			'Create an IAM user for each developer in the Developer Group in the Production account with read/write access to EC2 instances.',
			'Create an IAM role in the Production account with read/write access to EC2 instances. Allow access to the IAM role assigning a Service Control Policy with the Development account.',
			'Create an IAM role in the Production account with read/write access to EC2 instances and grant access to assume the role to the Developers Group in the Development account.',
		],
		answer: [3],
		explanation: [
			'Create permanent IAM users in the Production account. This could give the developers more access than they need, and it could also make it more difficult to manage the users.',
			'Create a large number of IAM users in the Production account. This could make it more difficult to manage the users, and it could also increase the risk of a security breach.',
			'SCPs are a way to control the permissions that IAM users and roles have in an AWS account. However, SCPs are not as flexible as IAM roles. In this case, we need to be able to grant the Developers Group in the Development account the ability to assume the IAM role in the Production account. This is not possible with an SCP.',
			'The best alternative is to create an IAM role in the Production account with read/write access to EC2 instances and grant access to assume the role to the Developers Group in the Development account. This is the most secure and flexible solution.',
		],
	},
	{
		question:
			"A development team at a software company is building a custom issue tracking application that will allow customers to report problems they experience using the company's software products. The application is composed of several microservices that use Amazon Simple Notification Service (SNS) to fan out notifications to various subscribers and services. The development team for the application is implementing a new requirement to archive messages published from specific SNS topics to Amazon S3. Which of these implementations should the solutions architect recommend to the team to capture and archive these event messages?",
		options: [
			'Create a Kinesis Data Firehose delivery stream with the S3 bucket as the destination. Subscribe the delivery stream to the appropriate SNS topic.',
			'Use the SNS topic to publish messages to the appropriate S3 endpoint.',
			'Create a Kinesis Data Stream with the S3 bucket as the destination. Subscribe the data stream to the appropriate SNS topics.',
			'Use Amazon EventBridge to subscribe to the SNS topic and save messages to the S3 bucket.',
		],
		answer: [0],
		explanation: [
			'Kinesis Data Firehose is a fully managed service that can automatically deliver streaming data to Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Amazon OpenSearch Service. It can also buffer data and retry delivery if there are any errors. This means that the team can be confident that all messages published to the SNS topic will be delivered to the S3 bucket, even if there are temporary network outages or other problems.',
			'Use the SNS topic to publish messages to the appropriate S3 endpoint. This is not a scalable solution because it would require the team to manually publish messages to the S3 endpoint. This could be time-consuming and error-prone, especially if the team is publishing a large number of messages.',
			'Creating a Kinesis Data Stream with the S3 bucket as the destination. Subscribe the data stream to the appropriate SNS topics. This is not as reliable as Kinesis Data Firehose because Kinesis Data Streams does not buffer data. This means that if there are any errors, the data could be lost.',
			'Use Amazon EventBridge to subscribe to the SNS topic and save messages to the S3 bucket.',
		],
	},
];

export default builder;
