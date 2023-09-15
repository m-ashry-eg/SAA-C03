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
	{
		question:
			'A user is implementing resources for batch processes that will run on a set of instances in the US East (N. Virginia) region during non-business hours. The process should take approximately 6 hours to complete and cannot be interrupted. These batch processes will require different size instances within the compute- optimized instance family. These batch processes will be run every night for the next twelve months. The company uses other instances types within in its other environments. Which choice will offer the greatest cost savings for these batch process instances?',
		options: [
			'Instances on a Compute Savings Plan',
			'Spot instances',
			'Convertible Reserved instances',
			'Instances on an EC2 instance savings plan',
		],
		answer: [3],
		explanation: [
			'A spot instance is not the right instance type for this scenario because they would very likely be interrupted before a 6 hour job would be complete.',
			'A convertible instance and a compute savings plan both offer up to 66 percent off. However, an EC2 instance savings plan offers up to 72 percent discount.',
		],
	},
	{
		question:
			"You are in charge of a web application which is running on EC2 instances. Your site occasionally experiences spikes in traffic that cause your EC2 instances' resources to become overwhelmed. During these spikes, the application may freeze up and lose recently-submitted requests from users. You have implemented Auto Scaling to deploy additional EC2 instances to handle spikes, but the new instances are not deploying fast enough to prevent the existing application servers from freezing. Which of the following is likely to provide the cheapest solution to avoid losing recently submitted requests, assuming that you cannot find a pattern to when these spikes are occurring?",
		options: [
			'Deploy additional EC2 spot instances when needed.',
			'Set up another Availability Zone with the same resources and use that when the spikes occur.',
			'Use Amazon SQS to delete acknowledged messages and redeliver failed messages.',
			'Implement caching to store recent requests in-memory and remove workload from the EC2 instances.',
		],
		answer: [2],
		explanation: [
			'The use of an SQS queue allows submitted requests to be retained as messages in the SQS queue until the application resumes normal operation and can process the requests. Using Amazon SQS to delete acknowledged messages and delivery failed messages is decoupling the application components.',
			'Using EC2 resources, whether you use reserved or spot instances, is not cost-effective owing to the infrequency of the spikes in traffic.',
			'SQS queues are preferable to in-memory cache because in-emory storage will operate at all times and can be fairly expensive to address an issue that only comes up during spikes.',
		],
	},
	{
		question:
			'A company that provides an online auction site for customers to buy and sell products uses Amazon Simple Queue Service (SQS) to process incoming product bids. Each organization auctioning products has its own FIFO queue, and there is a messaging group for each product offered by the organization. The development team supporting this application has noticed that some queues have lower than expected throughput. What can the solutions architect suggest to increase throughput for these queues?',
		options: [
			'Convert to a LIFO (last-in-first-out) queue.',
			'Enable short polling.',
			'Use SQS batch actions.',
			'Increase the message retention period.',
		],
		answer: [2],
		explanation: [
			'There are two queue types to choose from when using Amazon SQS. The first one is Standard queue, when the message order is not essential, and you need high throughput. The second one is, FIFO queue, when message order is essential. Throughput is not as high as with a standard queue, but you can improve throughput if you use batch actions.',
			'In the scenario presented for this question, the message order is important, so using a FIFO queue is the appropriate solution. Also, Amazon SQS does not provide a LIFO queue type. Adding batch actions to a FIFO queue can increase its capacity from 300 transactions per second to 3,000 per API method. Batching, in tandem with adding more producers and consumers, results in higher throughput.',
			'The other options to enable short polling and increase the message retention period would not improve throughput.',
		],
	},
	{
		question:
			'Two companies are joining their assets; both have AWS accounts. The first company has a large user base in AWS Directory Service Managed Active Directory. The second company has a very dynamic application to provide to users from the first company. How can you easily and securely share the identity store of the first company with the second company?',
		options: [
			'Use AWS KMS to create handshakings between the two accounts.',
			'Export the users information from the first company account to the second company account.',
			'Bring both accounts under the same AWS organization and allow the second account access to the identity store of the first account.',
			'Use AWS Config to create handshaking between the two accounts.',
		],
		answer: [2],
		explanation: [
			'With AWS Organizations, you can share account resources. In this scenario, you can share the AWS Directory Service Managed AD as a central identity store. This enables applications in other accounts to have access to a central identity store. You can always share your directory with other trusted AWS accounts within the same organization.',
			'AWS Key Management Service (KMS) provides you with a centrally managed control over cryptographic keys that you manage and securely store them in Hardware Security Modules (HSM).',
			'Exporting the user information is a security and management challenge as the user directory will be changing and regular exports are not secure and practical solutions.',
			"AWS Config provides a centralized view of your AWS resources' configurations while Guard Rail from AWS Control Tower enables ongoing governance over your overall AWS environment.",
		],
	},
	{
		question:
			'A department using Amazon EFS has configured a lifecycle policy that transfers files from EFS Standard Storage to EFS Standard-IA with Intelligent Tiering disabled.A group of files has been moved to the infrequent access storage class after not being accessed in over 30 days. These files will be accessed more frequently moving forward, and the system administrator would like to move these files immediately to the standard storage class. What should the administrator do to move these files to the EFS standard storage class?',
		options: [
			'Copy the files to another location on the file system.',
			'Use the Amazon EFS console to move the files to standard storage.',
			'No action is needed; as soon as the file is accessed, the system will automatically move the file to standard storage.',
			'Disable lifecycle management for the file system.',
		],
		answer: [0],
		explanation: [
			'Amazon EFS provides two storage classes: standard storage and infrequent access. The system automatically moves files between these storage classes based on the Lifecycle Management policy you specify for the file system. Lifecycle policies apply to the entire filesystem, not just individual files or directories. When you turn on lifecycle management, you select a time interval after which a file is moved to the IA storage class if it has not been accessed. Once the system moves a file to the IA storage class, it remains there indefinitely; the only way to transition a file back to the standard storage class is to copy the file to a new location.',
		],
	},
	{
		question:
			"To optimize the cost associated with your application's compute layer, your development team decided to integrate spot instances to support spikes in your workload. However, your auto scaling group should always contain eight (8) on-demand or reserved instances to process the normal amount of requests, and deploy a combination of spot and on-demand instances to manage spikes of activity requiring more than eight (8) instances. How can you ensure there are always eight (8) on-demand instances to support your compute layers' typical workload?",
		options: [
			"Within your launch template, set the auto scaling group's minimum capacity to eight (8) instances.",
			"Within your launch template, set the auto scaling group's optional on-demand base to eight (8) instances.",
			"Within your launch template, set the auto scaling group's desired capacity to eight (8) instances.",
			'Within your launch template, set the instance weighting for on-demand instances to eight (8) instances.',
		],
		answer: [1],
		explanation: [
			'When you want to include instances with multiple purchase types in the same auto scaling group, you have the ability to maintain a set number of on-demand instances will be deployed at all times, and then split the remaining instances between multiple purchase types as you see fit. To configure this, set a number of instances as your "optional on-demand base" within your launch template. This is not possible using a launch configuration.',
		],
	},
	{
		question:
			'You have designed a web application and deployed Amazon Inspector on all EC2 instances involved. You tested Amazon Inspector by running an assessment template; the results generated by the assessment run are reported in some logs. How can you find the list of these logs from Amazon Inspector?',
		options: [
			'Run ListFilters API.',
			'Run ListMembers API.',
			'Run ListUsageTotals API.',
			'Run ListFindings API.',
		],
		answer: [3],
		explanation: [
			'Inside Amazon Inspector, a set of rules with different severity levels perform security checks against EC2 instances. The list of these instances forms an assessment target. The assessment template defines which set of rules (package) run on an assessment target. Results of running assessment templates are reported in assessment runs. These logs are called findings. To see the list of findings from Amazon Inspector assessment runs, you can call the ListFindings API or use the Amazon Inspector console.',
		],
	},
	{
		question:
			'A company is developing a mission-critical API on AWS using a Lambda function that accesses data stored in Amazon DynamoDB. Once it is in production, the API should respond in microseconds. The database configuration needs to handle high throughput and be capable of withstanding spikes in CPU consumption. Which configuration options should the solutions architect choose to meet these requirements?',
		options: [
			'DynamoDB with DAX burstable instances.',
			'DynamoDB on-demand capacity.',
			'DynamoDB provisioned capacity.',
			'DynamoDB with auto scaling.',
		],
		answer: [0],
		explanation: [
			'DAX is an in-memory cache specifically used for DynamoDB. It improves the database latency from milliseconds to microseconds for reads. DAX burstable instances are designed to provide on-demand high CPU performance.',
		],
	},
	{
		question:
			"One AWS account owns an S3 bucket with objects that should be shared with another AWS account. The bucket owner wants to give full access to the second AWS account by granting permission via ACL, using the second AWS account's IAM user credentials. Using this method, what will be the end result?",
		options: [
			'The IAM user can now perform all operations on the bucket and objects within the bucket.',
			'The IAM user now has read permissions for objects within the S3 bucket.',
			'No change - S3 ACLS cannot grant access to an account via IAM credentials.',
			'The IAM user now has write permissions for all objects within the S3 bucket.',
		],
		answer: [2],
		explanation: [
			'Each Amazon S3 bucket and object has an ACL (Access Control List) associated with it. An ACL is a list of grants identifying the grantee and the permission granted. The user can use ACLs to grant basic read/write permissions to other AWS accounts. ACLs use an Amazon S3-specific XML schema. The account owner cannot grant permissions to other accounts using IAM.',
		],
	},
	{
		question:
			'A company is migrating a legacy application hosted on-premise to the AWS cloud. The process will include migrating application data currently stored in an on-premises Oracle database. The developers working on this migration are looking for a low-cost and low-maintenance approach to migrate and host the data in AWS.Which of the following should the solutions architect recommend?',
		options: [
			'Migrate the database to Amazon DynamoDB using AWS Database Migration Service (DMS) and AWS Schema Conversion Tool (SCT).',
			'Procure a new license and launch an EC2 on-demand instance with Oracle installed.',
			'Refactor the code to be Amazon DynamoDB compatible and migrate the database to DynamoDB using AWS Database Migration Service (DMS).',
			'Migrate the database to Amazon RDS for PostgreSQL using AWS Database Migration Service (DMS) and AWS Schema Conversion Tool (SCT).',
		],
		answer: [3],
		explanation: [
			'The choice that uses Amazon RDS seems like a good choice because it would meet the low-cost and low- maintenance requirements. RDS for PostgreSQL an open-source database that is cheaper than purchasing new licenses, and it is less maintenance because RDS is a managed service. The team can use AWS Database Migration Service (DMS) and the AWS Schema Conversion Tool (SCT) to migrate the data from an Oracle database to a PostgreSQL.',
		],
	},
	{
		question:
			"You are placed in charge of your company's cloud storage and need to deploy empty EBS volumes. You are concerned about an initial performance hit when the new volumes are first accessed. What steps should you take to ensure peak performance when the empty EBS volumes are first accessed?",
		options: [
			'Do nothing - empty EBS volumes do not require initialization',
			'Force the immediate initialization of the entire volume',
			'Enable fast snapshot restore',
			'Creating a RAID O array',
		],
		answer: [0],
		explanation: [
			'Initializing volumes (formerly known as pre-warming) has changed from its prior functionality. Formerly, you would have to initialize (pre-warm) a newly created volume from scratch. This is no longer necessary. Newly created volumes created from snapshots still need to be pre-warmed by reading from the blocks that contain data.',
		],
	},
	{
		question:
			'Your new client is a federal agency utilizing a hybrid cloud environment. The agency distributes large amounts of sensitive data through the whirl. Your task is to ensure that the data is secure using various encryption techniques as well as security groups and access control lists. One of the requirements is to distribute content utilizing CloudFront for optimal performance but completely restrict access from within certain disallow-list countries. What CloudFront feature can you enable to fulfill this requirement?',
		options: [
			'SSL encryption.',
			'Server-Side encryption.',
			'Geo-Restriction.',
			'IAM roles.',
		],
		answer: [2],
		explanation: [
			'You can use Geo-Restriction, also known as geoblocking, to prevent users in specific geographic locations from accessing content that you are distributing through a CloudFront web distribution.',
		],
	},
	{
		question:
			"A company’s container applications are managed with Kubernetes and hosted on Windows virtual servers. The company wants to migrate these applications to the AWS cloud, and needs a solution that supports Kunerts pods hosted on Windows server. It is essential that the solution manages the Kunertes API servers and the etcd cluster. The company’s development team would prefer that AWS manage the host instances and containers as much as possible, but is willing to manage them both if necessary. Which AWS service offers the best option for the developer's p[references and the company’s essential requirements for their container application? (Choose 2 answers)",
		options: [
			'Amazon Elastic Compute Cloud (EC2).',
			'Amazon Elastic Kubernetes Service (EKS) with EKS-Managed node groups.',
			'Amazon Elastic Kubernetes Service (EKS) with self-managed node groups.',
			'Amazon Elastic Kubernetes Service (EKS) on AWS Fargate.',
		],
		answer: [2, 3],
		explanation: [
			'The self-managed node group would satisfy the requirement of hands-on container management, and AWS Fargate would provide a managed solution.',
			'AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without managing servers. AWS Fargate is compatible with both Amazon Elastic Container Service (Amazon ECS) and Amazon Elastic Kubernetes Service (Amazon EKS).',
		],
	},
	{
		question:
			'A solutions architect set up an AWS network load balancer (NLB) with cross-zone load balancing enabled. There are 12 instances in a single target group; 4 instances are in availability zone A and 8 instances in availability zone B. The target group has a health check that uses TCP, and two instances in availability zone B are marked unhealthy. Which of the following correctly describes how the load balancer routes traffic to the remaining healthy instances?',
		options: [
			'The traffic is distributed evenly between the remaining healthy target, with each target getting roughly 10% of the traffic.',
			'Targets in availability zone A will get a slightly higher percentage of the traffic, with each target getting roughly 12.5% of the traffic.',
			'Targets in availability zone B will get a slightly higher percentage of the traffic, with each target getting roughly 16.7% of the traffic.',
			'Targets in availability zone B will receive no traffic, with 100% of the traffic ground to availability zone A.',
		],
		answer: [0],
		explanation: [
			'In this case, the solution architect has enabled cross-zone load balancing for the NLB. As a result, the load balancer will distribute the load evenly among the targets in all associated availability zones.',
			'If cross-zone load balancing were disabled, the traffic would be split evenly between each availability zone. With cross-zone load balancing disabled, the targets in availability zone A would get 12.5% of the traffic, and in availability zone B would get 8.33%.',
			'Keep in mind that with cross-zone load balancing disabled, each Availability Zone operated independently. This means that if one zone has more healthy instances than another, it will receive a larger share of the traffic.',
		],
	},
	{
		question:
			'A company is running an online course platform hosted on m5.large EC2 instances behind Application Load Balancers (ALB) with video courses stored in an S3 bucket. Customers have complained about buffering and lag when watching videos.  When they begin to experience buffer or lag, they have to pause the videos to allow them to finish downloading to prevent the entire experience from becoming choppy. A Solutions Architect is asked to optimize the delivery of the video content to minimize the amount of issues users experience. What of the following solutions should be implemented?',
		options: [
			'Enable S3 Transfer Acceleration for the S3 bucket hosting the video content.',
			'Configure AWS Global Accelerator for the VPCs ghosting the application’s m5.large instances.',
			'Deploy a CloudFront distribution with the host S3 bucket as the origin, and configure Route 53 with an alias record point to your distribution.',
			'Increase the EC2 instances size to m5.4xlarge and configure an Auto Scaling Group with a target tracking policy.',
		],
		answer: [2],
		explanation: [
			'Amazon CloudFront is a web service that speeds up the distributing of your static and dynamic web content, such as videos, to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you are serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.',
			'Enabling S3 transfer Acceleration can help improve the speed of uploading and downloading objects to and from an S3 bucket. However, it may not be the most effective solution for addressing the specific issue of video buffering and lag experience by users when streaming.',
		],
	},
	{
		question:
			'A DevOps team manages an EBS-backed Amazon EC2 instance that hosts a staging environment for a web-based application. The group does not have a backup for the staging environment and would like to set up a process to automatically back it up. If needed, the team should be able to launch a new instance to restore the staging environment from a backup, with each associated EBS volume automatically attached to the instance. The system should be backed up each day and retain the last given backups. Which of the following solutions could the DevOps team use to automate their EC2 backups and allow system recovery as described?',
		options: [
			'Use Amazon Data Lifecycle Manager to automate Amazon Machine Image (AMI) lifecycles.',
			'Use AWS Backup to automate Amazon Machine Image (AMI) lifecycles.',
			'Use AWS File Gateway to create and manage snapshots for EBS boot device volumes and data volumes.',
			'Use the EBS snapshot service to automate Amazon Machine Image (AMI) lifecycle.',
		],
		answer: [0],
		explanation: [
			'The primary approach to backup EBS storage is using EBS snapshots. EBS snapshots allow you to back up EBS data and store the snapshots in S3. This approach helps reduce storage costs by not duplicating data with each backup. However, the snapshot service does not alone have a way to build policies to create, retain, and delete snapshots automatically.',
			'In This case, Amazon Data Lifecycle Manager (DLM) can automate AMI lifecycles. For example, you can use DLM to create an EBS-backed AMI and then make additional snapshots regularly.',
		],
	},
	{
		question:
			'A gaming company comes to you and asks you to build infrastructure for their site. They are unsure how big they will be because, as with all startups, they have limited money and big ideas. What they do tell you is that if the game becomes successful, like one of their previous games, it may rapidly grow to millions of users and generate tens (or even hundreds) of thousands of writes and reads per second. After considering all of this, you decide that they need a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability and persistent storage. Which of the following databases do you think would best fit their needs?',
		options: [
			'Amazon DynamoDB',
			'Amazon RDS',
			'Amazon Elasticache',
			'Amazon Redshift',
		],
		answer: [0],
		explanation: [
			"DynamoDB is a fully managed NoSQL database service provided by AWS. It is designed for high availability, scalability, and low-latency performance. DynamoDB is suitable for applications that require fast and seamless access to large amounts of structured data. It's used for web and mobile applications, gaming, IoT, and more.",
			'RDS is a managed relational database service that supports multiple database engines such as MySQL, PostgreSQL, MariaDB, Oracle, and Microsoft SQL Server. It handles routine database tasks like patch management, backups, and automatic failover, allowing developers to focus on application development rather than database management.',
			'ElastiCache is a managed in-memory caching service provided by AWS. It supports popular caching engines like Redis and Memcached. ElastiCache helps improve application performance by caching frequently accessed data in memory, reducing the need to retrieve data from the database. This is especially beneficial for applications that require low-latency access to frequently accessed information.',
			"Redshift is a fully managed data warehousing service that allows you to analyze large datasets using SQL queries. It's optimized for Online Analytical Processing (OLAP) workloads, making it suitable for data analytics and business intelligence applications. Redshift is capable of handling large-scale data warehousing needs with high performance and scalability.",
		],
	},
	{
		question:
			'A website that requires an international presence is deployed as follows: It is hosted on 30 EC2 instances. It is deployed in 15 regions around the globe. Each region has 2 instances. All the instances are in a public hosted zone. Which of the following are the best ways to configure your site to maintain availability with minimal downtime if one of the 15 regions lost network connectivity for an extended period of time? (choose 2 answers)',
		options: [
			'Create a Route 53 Weighted resource record set with two or more resource record sets that have the same combination of DNS name and type, and assign each resource record set a unique identifier and a relative weight.',
			'Create a Route 53 Latency Based Routing Record set that resolves to an Elastic Load Balancer in each region and has the Evaluate Target Health flag set to true.',
			'Create a Route 53 Geolocation Routing Policy that resolves to an Elastic Load Balancer in each region and has the Evaluate Target Health flag set to false.',
			'Create a Route 53 failover routing policy and configure an active-passive failover.',
		],
		answer: [1, 3],
		explanation: [
			'Create a Route 53 Latency Based Routing Record. This configuration routes traffic to the region with the lowest latency, which helps ensure that users are directed to the region with the best performance. The Evaluate Target Health flag ensures that only healthy instances receive traffic.',
			'Create a Route 53 failover routing policy and configure an active-passive failover. With this configuration, you can designate one region as the primary and another as the standby (passive). If the primary region experiences network connectivity issues, traffic is automatically redirected to the standby region. This provides a high level of availability in case of a region failure.',
			"Weighted routing is useful for controlling the distribution of traffic between resources, but it wouldn't be as effective in maintaining availability in the event of an entire region losing connectivity. It distributes traffic based on configured weights, which might not guarantee availability in a region-specific outage.",
			"Geolocation routing directs traffic based on the geographic location of the user, but it may not be as effective in this scenario. Additionally, setting Evaluate Target Health to false means that Route 53 doesn't consider the health of the targets, which may not be ideal for maintaining availability.",
		],
	},
];

export default builder;
