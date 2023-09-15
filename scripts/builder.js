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
			'Compute Savings Plans provide a discount on usage in exchange for a commitment to a specific amount of usage (measured in $/hr) for a 1- or 3-year term. While Compute Savings Plans can offer significant savings, they do not provide a guarantee of capacity or specific instance types. This means they may not be suitable for processes that require a specific instance type and cannot be interrupted.',
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
			"The Amazon EFS console provides a user interface for managing files in your file system. However, it doesn't have a direct option to move files between storage classes. It primarily allows you to view, create, delete, and modify files and directories.",
			"This statement is not accurate in this context. For Amazon EFS with the specified configuration (Standard Storage to Standard-IA with Intelligent Tiering disabled), once a file is moved to the IA storage class, it remains there indefinitely unless manually moved back. The system doesn't automatically move it back to standard storage upon access.",
			'Disabling lifecycle management would prevent any further automatic transitions between storage classes. However, since the files are already in the IA storage class, disabling lifecycle management would not move them back to standard storage. It would simply prevent further transitions.',
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
			"Setting the minimum capacity to eight (8) instances. This would ensure that there are always at least eight instances in the auto scaling group, but it doesn't specifically guarantee that these will be on-demand instances. Spot instances might also be included in the group.",
			"Setting the auto scaling group's optional on-demand base to eight (8) instances. This option allows you to set a specific number of on-demand instances as a base, which ensures that at least eight on-demand instances will always be part of the group. This aligns with the requirement specified in the scenario.",
			"Setting the desired capacity to eight (8) instances. This would control the desired number of instances in the group, but it doesn't guarantee that at least eight of them will be on-demand. It's possible that they could all be spot instances if the spot price is low.",
			"Setting the instance weighting for on-demand instances to eight (8) instances. This doesn't directly address the requirement for a minimum of eight on-demand instances. Instance weighting is used for distributing instances proportionally, but it doesn't enforce a minimum number of on-demand instances.",
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
			'The ListFilters API in Amazon Inspector is used to retrieve a list of Amazon Inspector assessment templates that have a specific set of attributes (filters) applied to them. This can be useful for organizing and managing assessment templates based on specific criteria.',
			'The ListMembers API in Amazon Inspector is used in the context of Amazon Inspector assessment targets. It retrieves a list of assessment targets within an AWS account. Assessment targets are resources that are evaluated by Amazon Inspector.',
			'The ListUsageTotals API in Amazon Inspector provides information about the usage of Amazon Inspector in terms of assessment runs, assessment templates, and agents. It can be used to get an overview of the resources and assessments used in an account.',
			'Inside Amazon Inspector, a set of rules with different severity levels perform security checks against EC2 instances. The list of these instances forms an assessment target. The assessment template defines which set of rules (package) run on an assessment target. Results of running assessment templates are reported in assessment runs. These logs are called findings. To see the list of findings from Amazon Inspector assessment runs, you can call the ListFindings API or use the Amazon Inspector console.',
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
			"The IAM user can now perform all operations on the bucket and objects within the bucket. This statement is not accurate for the scenario described. ACLs (Access Control Lists) within S3 cannot grant access to another AWS account via IAM user credentials. To share objects or buckets across AWS accounts, you'd typically use Cross-Account IAM Roles or Bucket Policies.",
			'The IAM user now has read permissions for objects within the S3 bucket. This statement is also not applicable based on the scenario. ACLs are not the mechanism to grant permissions between AWS accounts. ACLs in S3 are generally used within a single AWS account to manage access permissions.',
			'Each Amazon S3 bucket and object has an ACL (Access Control List) associated with it. An ACL is a list of grants identifying the grantee and the permission granted. The user can use ACLs to grant basic read/write permissions to other AWS accounts. ACLs use an Amazon S3-specific XML schema. The account owner cannot grant permissions to other accounts using IAM.',
			"This statement is also not relevant to the scenario described. It's important to note that ACLs alone cannot be used to grant permissions to objects or buckets in a different AWS account.",
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
			'While DynamoDB is a powerful and scalable NoSQL database service, it may not be suitable for all types of applications, especially if the legacy application relies on Oracle database features that are not easily replicated in DynamoDB. Additionally, migrating from Oracle to DynamoDB might require significant code refactoring.',
			'This approach involves running Oracle on an EC2 instance. It can be expensive, especially if a new license is required. Additionally, it might require more maintenance compared to managed services like RDS.',
			'Refactoring the code to make it compatible with DynamoDB might be a significant effort, and it may not be suitable for a low-cost and low-maintenance migration approach, especially if the application heavily relies on Oracle-specific features.',
			'The choice that uses Amazon RDS seems like a good choice because it would meet the low-cost and low- maintenance requirements. RDS for PostgreSQL an open-source database that is cheaper than purchasing new licenses, and it is less maintenance because RDS is a managed service. The team can use AWS Database Migration Service (DMS) and the AWS Schema Conversion Tool (SCT) to migrate the data from an Oracle database to a PostgreSQL.',
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
			'SSL (Secure Sockets Layer) encryption is used to secure the communication between a client and a server. It ensures that the data transmitted between the two parties is encrypted and secure. While SSL encryption is crucial for protecting data in transit, it does not specifically address the requirement of restricting access based on geographic location.',
			'Server-Side encryption refers to the practice of encrypting data at rest on the server or storage system. In the context of AWS services like S3, it means that the data stored in the S3 bucket is encrypted. While this is essential for data security, it also does not directly relate to restricting access based on geographic location.',
			'Geo-Restriction in Amazon CloudFront allows you to control access to your content based on the geographic location of your viewers. You can either allow or disallow access to your content based on the countries from which users are attempting to access it. This directly addresses the requirement of restricting access based on geographic location.',
			'IAM (Identity and Access Management) roles are used to delegate permissions to AWS services and resources. While IAM roles are important for managing access within an AWS environment, they do not specifically handle geographic restrictions or content distribution via CloudFront.',
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
		answer: [1, 3],
		explanation: [
			"Amazon EC2 provides resizable compute capacity in the cloud. It allows you to run virtual servers, known as instances, on-demand. With EC2, you have full control over the underlying virtual machines, including the operating system, networking, and storage. You can install and manage your own Kubernetes clusters on EC2 instances. However, in this case, where the company's development team prefers AWS to manage the host instances and containers as much as possible, this may not be the most hands-off option.",
			"Amazon EKS is a managed Kubernetes service that makes it easier to run, manage, and scale containerized applications using Kubernetes. EKS-Managed node groups are a feature of EKS that allow AWS to handle the provisioning, scaling, and termination of the EC2 instances in your cluster. This is a good option for the company's requirement as it allows AWS to manage the host instances, while you still manage the Kubernetes pods and applications.",
			"With self-managed node groups in Amazon EKS, you are responsible for managing the underlying EC2 instances. This means you have to handle tasks like provisioning, scaling, and termination of nodes. While EKS provides a managed Kubernetes control plane, you still have to manage the nodes. This option might not align with the developer's preference for AWS to manage both host instances and containers.",
			"AWS Fargate is a serverless compute engine for containers. It allows you to run containers without managing the underlying EC2 instances. When you run EKS on Fargate, AWS takes care of the infrastructure completely, including the host instances and containers. This aligns with the developer's preference for AWS to manage both host instances and containers.",
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
			'S3 Transfer Acceleration is useful for accelerating uploads to S3, but it may not directly address the buffering and lag issues experienced by users when streaming video content. It focuses on improving upload times.',
			'AWS Global Accelerator is used to improve the availability and performance of applications. While it can be beneficial for routing traffic across AWS regions, it may not directly address the video buffering and lag issues.',
			'This option is the most suitable for improving the delivery of video content. CloudFront is a content delivery network (CDN) that caches content at edge locations closer to the users. This reduces the distance data has to travel, resulting in faster and more reliable streaming. Additionally, configuring Route 53 with an alias record ensures that users are directed to the CloudFront distribution.',
			'While increasing the EC2 instance size and using Auto Scaling can help with scalability and performance, it may not directly address the buffering and lag issues related to video streaming. This solution focuses on server capacity, which may not be the primary bottleneck in this scenario.',
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
			"Amazon Data Lifecycle Manager (DLM) allows you to automate the creation, retention, and deletion of EBS snapshots. With DLM, you can define lifecycle policies to create snapshots on a regular basis (e.g., daily) and specify the number of snapshots to retain. This aligns with the team's requirement to back up the system each day and retain a specific number of backups. Additionally, DLM can be used in conjunction with AWS Systems Manager Automation to launch a new instance and attach the associated EBS volumes automatically.",
			"AWS Backup primarily focuses on managing backups of various AWS resources, including EBS volumes. While it provides automated backup capabilities, it doesn't directly handle the creation of Amazon Machine Images (AMIs) or launching new instances.",
			"AWS File Gateway is used for hybrid cloud storage solutions, but it doesn't directly address the requirement for creating and managing AMIs or automating system recovery.",
			"While you can use EBS snapshots to back up data, managing the creation, retention, and restoration of Amazon Machine Images (AMIs) would typically require additional scripting or automation. There isn't a direct service to automate AMI lifecycles using EBS snapshots alone.",
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
