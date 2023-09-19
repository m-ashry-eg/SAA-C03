const builder = [
	{
		question:
			'What action is required to establish a VPC VPN connection between an on-premises data center and an Amazon VPC virtual private gateway?',
		options: [
			'A. Modify the main route table to allow traffic to a network address translation instance.',
			'B. Use a dedicated network address translation instance in the public subnet.',
			'C. Assign a static Internet-routable IP address to an Amazon VPC customer gateway.',
			'D. Establish a dedicated networking connection using AWS Direct Connect.',
		],
		answer: [3],
		explanation: [
			"(A). This option involves modifying the route table, which is not directly related to establishing a VPN connection between an on-premises data center and an Amazon VPC. Modifying the route table might be necessary for other configurations, but it's not the primary step for creating a VPN connection.",
			'(B). This is a crucial step for setting up a VPN connection. The customer gateway needs to have a static public IP address that AWS can use to establish a secure connection. This is a correct step in the process.',
			'(C). This is a crucial step for setting up a VPN connection. The customer gateway needs to have a static public IP address that AWS can use to establish a secure connection. This is a correct step in the process.',
			'(D). This is the correct option because it refers to using AWS Direct Connect to establish a dedicated networking connection between an on-premises data center and an Amazon VPC. This is an alternative to a VPN connection and can provide higher performance and security.',
		],
	},
	{
		question:
			'How can software determine the public and private IP addresses of the EC2 instance that it is running on?',
		options: [
			'A. Query the local instance metadata.',
			'B. Query the local instance userdata.',
			'C. Query the appropriate Amazon CloudWatch metric.',
			'D. Use an ipconfig or ifconfig command.',
		],
		answer: [0],
		explanation: [
			'(A). Query the local instance metadata: EC2 instances have access to a special HTTP service called the "instance metadata service." This service provides a wealth of information about the instance, including its instance ID, region, security group, and importantly, its public and private IP addresses. By making a simple HTTP request to a well-known URL (http://169.254.169.254/latest/meta-data/), software running on the instance can retrieve this information.',
			"(B). Query the local instance userdata: User data is information that you can pass to an EC2 instance when it starts. While it can be used for various purposes, it doesn't provide information about the instance's public or private IP addresses.",
			"(C). Query the appropriate Amazon CloudWatch metric: CloudWatch metrics provide monitoring data for AWS resources, but they don't directly provide information about the IP addresses of the instance.",
			'(D). Use an ipconfig or ifconfig command: These commands are typically used in operating systems to view network configurations. However, they are not the preferred method for applications running on an EC2 instance to programmatically determine their own IP addresses.',
		],
	},
	{
		question:
			'You have an EC2 security group with several running EC2 instances. You change the security group rules to allow inbound traffic on a new port and protocol, and launch several new instances in the same security group. The new rules apply:',
		options: [
			'A. Immediately to all instances in the security group.',
			'B. Immediately to the new instances only.',
			'C. Immediately to the new instances, but old instances must be stopped and restarted before the new rules apply.',
			'D. To all instances, but it may take several minutes for old instances to see the changes.',
		],
		answer: [0],
		explanation: [
			'(A). When you change the rules of a security group, the changes are immediately applied to all instances associated with that security group. However, there might be a short delay before all instances fully recognize the updated rules.',
			'(B). Changing the rules of a security group affects all instances associated with that group, not just new instances. The changes apply to both existing and new instances.',
			'(C). Security group rule changes do not require instances to be stopped and restarted. The changes apply immediately to both new and existing instances.',
			'(D). When you modify the rules of a security group, the changes apply immediately to all instances associated with that security group.',
		],
	},
	{
		question: 'A VPC public subnet is one that:',
		options: [
			'A. Has at least one route in its associated routing table that uses an Internet Gateway (IGW).',
			'B. Includes a route in its associated routing table via a Network Address Translation (NAT) instance.',
			'C. Has a Network Access Control List (NACL) permitting outbound traffic to 0.0.0.0/0.',
			'D. Has the Public Subnet option selected in its configuration.',
		],
		answer: [0],
		explanation: [
			'Option A correctly defines a public subnet by stating that it must have at least one route in its associated routing table that uses an Internet Gateway (IGW).',
			'Option B mentions a route via a Network Address Translation (NAT) instance, which is typically used for resources in private subnets to access the Internet indirectly. This is not a characteristic of a public subnet.',
			'Option C refers to Network Access Control Lists (NACLs), which control inbound and outbound traffic at the subnet level. While a NACL can be configured to allow outbound traffic to 0.0.0.0/0, it is not the defining characteristic of a public subnet.',
			'Option D is not a standard term or characteristic associated with VPC subnets. The nature of a subnet (public or private) is primarily determined by its routing configuration.',
		],
	},
	{
		question: 'A VPC public subnet is one that:',
		options: [
			'A. Has at least one route in its associated routing table that uses an Internet Gateway (IGW).',
			'B. Includes a route in its associated routing table via a Network Address Translation (NAT) instance.',
			'C. Has a Network Access Control List (NACL) permitting outbound traffic to 0.0.0.0/0.',
			'D. Has the Public Subnet option selected in its configuration.',
		],
		answer: [0],
		explanation: [
			'Option A correctly defines a public subnet by stating that it must have at least one route in its associated routing table that uses an Internet Gateway (IGW).',
			'Option B mentions a route via a Network Address Translation (NAT) instance, which is typically used for resources in private subnets to access the Internet indirectly. This is not a characteristic of a public subnet.',
			'Option C refers to Network Access Control Lists (NACLs), which control inbound and outbound traffic at the subnet level. While a NACL can be configured to allow outbound traffic to 0.0.0.0/0, it is not the defining characteristic of a public subnet.',
			'Option D is not a standard term or characteristic associated with VPC subnets. The nature of a subnet (public or private) is primarily determined by its routing configuration.',
		],
	},
	{
		question:
			'What combination of the following options will protect S3 objects from both accidental deletion and accidental overwriting?',
		options: [
			'A. Enable S3 versioning on the bucket.',
			'B. Access S3 data using only signed URLs.',
			'C. Disable S3 delete using an IAM bucket policy.',
			'D. Enable S3 Reduced Redundancy Storage.',
			'E. Enable multi-factor authentication (MFA) protected access.',
		],
		answer: [0],
		explanation: [
			'(A). Enabling S3 versioning is the correct choice. It keeps multiple versions of an object in the same bucket. Even if an object is deleted or overwritten, you can still access previous versions, thus protecting against accidental deletion and overwriting.',
			"(B). Using signed URLs is a way to control who can access your S3 objects, but it doesn't inherently prevent accidental deletion or overwriting. It's a security measure for controlling access, not for versioning or preventing accidental data changes.",
			'(C). Creating an IAM bucket policy that denies the "s3:DeleteObject" and "s3:DeleteObjectVersion" actions can prevent objects from being deleted. This is a valid method to protect against accidental deletion.',
			"(D). Enabling Reduced Redundancy Storage is about changing the storage class for your objects to a lower level of durability, and it does not protect against accidental deletion or overwriting. It's a cost-saving measure but doesn't enhance data protection.",
			"(E). Enabling MFA for S3 access adds an extra layer of security to your AWS account, but it doesn't directly protect against accidental deletion or overwriting of S3 objects. It primarily helps secure access to the AWS account itself.",
		],
	},
	{
		question:
			'Before I delete an EBS volume, what can I do if I want to recreate the volume later?',
		options: [
			'A. Create a copy of the EBS volume (not a snapshot)',
			'B. Store a snapshot of the volume',
			'C. Download the content to an EC2 instance',
			'D. Back up the data in to a physical disk',
		],
		answer: [1],
		explanation: [
			"(A). Creating a copy of the EBS volume without taking a snapshot means you're essentially duplicating the existing volume. This is useful if you want an identical copy of the volume for some reason. However, it doesn't provide the same level of data backup and recovery as a snapshot.",
			"(B). Storing a snapshot of the volume means you're creating a point-in-time backup of the data on the volume. This allows you to recreate the volume later from the snapshot if needed. Snapshots are a reliable way to back up and recover EBS volumes.",
			"(C). Downloading the content to an EC2 instance is an option, but it doesn't directly relate to recreating the EBS volume later. It's more about transferring data to an existing EC2 instance.",
			"(D). While backing up data to a physical disk is a valid approach, it's not specific to recreating an EBS volume. It involves copying data to an external storage device, which can be useful for offline backups, but it doesn't pertain to the process of recreating an EBS volume.",
		],
	},
	{
		question:
			'Select the most correct answer: The device name /dev/sda1 (within Amazon EC2 ) is _____',
		options: [
			'A. Possible for EBS volumes',
			'B. Reserved for the root device',
			'C. Recommended for EBS volumes',
			'D. Recommended for instance store volumes',
		],
		answer: [1],
		explanation: [
			"(A). This option is not accurate. /dev/sda1 is generally reserved for the root device, and it's not recommended to use it for additional EBS volumes.",
			"(B). This is the correct answer. In Amazon EC2, /dev/sda1 is typically reserved for the root device, which is where the operating system is installed. It's not recommended to use this device name for additional EBS volumes.",
			"(C). Using /dev/sda1 is generally not recommended for additional EBS volumes. It's typically reserved for the root device.",
			"(D). /dev/sda1 is typically used for the root device, whether it's backed by an EBS volume or an instance store. It's not specifically recommended for instance store volumes.",
		],
	},
	{
		question: 'What does RRS stand for when talking about S3?',
		options: [
			'A. Redundancy Removal System',
			'B. Relational Rights Storage',
			'C. Regional Rights Standard',
			'D. Reduced Redundancy Storage',
		],
		answer: [3],
		explanation: [
			'(A). This is not the correct expansion of RRS in the context of Amazon S3. RRS stands for Reduced Redundancy Storage, which is a specific storage option provided by Amazon S3.',
			'(B). This is not the correct expansion of RRS in the context of Amazon S3, RRS stands for Reduced Redundancy Storage, which is a storage class designed for non-critical, reproducible data.',
			'(C). This is not the correct expansion of RRS in the context of Amazon S3. RRS stands for Reduced Redundancy Storage, which is a specific storage class offered by Amazon S3.',
			'(D). RRS stands for Reduced Redundancy Storage. It is a storage option provided by Amazon S3 designed for non-critical, reproducible data. Objects stored with RRS are replicated across fewer facilities than objects stored with Standard Storage, which makes it less durable but more cost-effective for certain use cases.',
		],
	},
	{
		question:
			'All Amazon EC2 instances are assigned two IP addresses at launch. Which one can only be reached from within the Amazon EC2 network?',
		options: [
			'A. Multiple IP address',
			'B. Public IP address',
			'C. Private IP address',
			'D. Elastic IP Address',
		],
		answer: [2],
		explanation: [
			'(A). This option is not specific enough. All Amazon EC2 instances are assigned multiple IP addresses, including both public and private addresses. This is not a distinct category of IP address.',
			'(B). The public IP address assigned to an Amazon EC2 instance is reachable from the public internet. It allows the instance to communicate with the internet, and external entities on the internet can reach the instance using this IP address. This option is not only reachable from within the Amazon EC2 network.',
			"(C). The private IP address is only reachable from within the Amazon EC2 network or from connected Virtual Private Clouds (VPCs) if applicable. It's used for communication within the AWS network.",
			'(D). Elastic IP Address (Incorrect): An Elastic IP address is a static, public IPv4 address that you can allocate to your AWS account and associate with your EC2 instances. While it can be remapped to different instances, it is also reachable from the public internet. Therefore, it can be accessed both within the Amazon EC2 network and from external sources on the internet.',
		],
	},
	{
		question: 'What does Amazon SWF stand for?',
		options: [
			'A. Simple Web Flow',
			'B. Simple Work Flow',
			'C. Simple Wireless Forms',
			'D. Simple Web Form',
		],
		answer: [1],
		explanation: [
			'(A). This is not the correct expansion of SWF. SWF stands for Simple Workflow, not "Simple Web Flow". SWF is a fully managed workflow service provided by Amazon Web Services (AWS).',
			'(B). This is the correct expansion of SWF. SWF stands for Simple Workflow. It is a fully managed service provided by AWS for building applications with distributed, asynchronous tasks.',
			'(C). This is not the correct expansion of SWF. SWF stands for Simple Workflow, not "Simple Wireless Forms". It is not related to wireless forms.',
			'(D). This is not the correct expansion of SWF. SWF stands for Simple Workflow, not "Simple Web Form". It is not related to web forms.',
		],
	},
	{
		question: 'What is the Reduced Redundancy option in Amazon S3?',
		options: [
			'A. Less redundancy for a lower cost.',
			"B. It doesn't exist in Amazon S3, but in Amazon EBS.",
			'C. It allows you to destroy any copy of your files outside a specific jurisdiction.',
			"D. It doesn't exist at all",
		],
		answer: [0],
		explanation: [
			'(A). Reduced Redundancy Storage (RRS) was a storage option offered by Amazon S3 that provided a lower level of redundancy compared to Standard storage. It was designed for non-critical, reproducible data where durability was less critical. It was less expensive than Standard storage.',
			'(B). Reduced Redundancy Storage (RRS) was indeed a storage option available in Amazon S3, not Amazon EBS (Elastic Block Store).',
			'(C). This option does not accurately describe Reduced Redundancy Storage. RRS was about providing a lower level of redundancy for cost savings, not about jurisdictional control or data destruction.',
			'(D). Reduced Redundancy Storage (RRS) did exist, but it has been deprecated. As of my last knowledge update in September 2021, AWS has announced the end of new RRS storage class objects. Existing RRS objects will continue to be supported.',
		],
	},
	{
		question:
			'Fill in the blanks: Resources that are created in AWS are identified by a unique identifier called an _____.',
		options: [
			'A. Amazon Resource Number',
			'B. Amazon Resource Name tag',
			'C. Amazon Resource Name',
			'D. Amazon Reesource Namespace',
		],
		answer: [2],
		explanation: [
			"(A). This is not a standard term or identifier used in AWS. It's not a recognized concept in AWS services.",
			'(B). While AWS resources can have tags associated with them (key-value pairs for organizational purposes), the unique identifier for an AWS resource is not referred to as a "tag." Tags are used for metadata and management purposes, but they are not the primary identifier of a resource.',
			"(C). This is the correct term. An Amazon Resource Name (ARN) is a unique identifier that is assigned to AWS resources. It's a string of characters that identifies a specific resource in AWS. ARNs are used to uniquely identify resources across AWS services and accounts.",
			"(D). This term is not used in AWS to refer to the unique identifier of a resource. It's not a recognized term in the context of AWS resource identification.",
		],
	},
	{
		question:
			"What does the command 'ec2-run-instances ami-e3a5408a -n 20 -g appserver' do?",
		options: [
			'A. Start twenty instances as members of appserver security group',
			'B. Creates 20 rules in the security group named appserver',
			'C. Terminate twenty instances as members of appserver group',
			'D. Start 20 security groups',
		],
		answer: [0],
		explanation: [
			'(A). The ec2-run-instances command is used to launch EC2 instances. In the command provided, it specifies to launch 20 instances (-n 20) using the Amazon Machine Image (AMI) ami-e3a5408a. The -g appserver part indicates that these instances will be placed in the security group named appserver. Therefore, it is correct to say that the command is starting twenty instances as members of the appserver group.',
			"(B). This interpretation is incorrect. The command ec2-run-instances is used for launching instances, not for creating rules in a security group. It doesn't create rules; instead, it associates instances with an existing security group (-g appserver) when launching them.",
			'(C). This interpretation is incorrect. The ec2-run-instances command is used to launch instances, not to terminate them. It has no functionality for terminating instances.',
			'(D). This interpretation is also incorrect. The command is not used to start security groups. Security groups are typically created and configured separately in AWS, and they are associated with instances when those instances are launched.',
		],
	},
	{
		question:
			'A solutions architect is in charge of configuring an AWS auto scaling group for an application that has an unpredictable load pattern. The DevOps team that supports this application has observed that when the average CPU utilization for the application servers exceeds 50%, users report slow response times. What steps should the solutions architect take to handle this variable load pattern while ensuring that the system performs well for customers and the organization is not paying for unused computing resources?',
		options: [
			"A. Add a target tracking scaling policy to the group to adjust the desired capacity needed to keep the auto scaling group's average CPU utilization at 50%.",
			"B. Add a step scaling policy to the group to adjust the desired capacity needed to keep the auto scaling group's average CPU utilization at 50%.",
			"C. Set a CloudWatch alarm to alert a system administrator when the average CPU utilization of the auto scaling group exceeds 50% and then manually adjust the group's desired capacity.",
			'D. Configure the auto scaling group to maintain a fixed number of application servers that keep the average CPU utilization at 50% during peak traffic.',
		],
		answer: [0],
		explanation: [
			'(A). A target tracking scaling policy allows you to set a target value for a specific metric, such as average CPU utilization, and AWS Auto Scaling adjusts the desired capacity of the Auto Scaling group in response to changes in demand. In this case, the target should be set to 50% average CPU utilization. This way, when the CPU utilization exceeds 50%, Auto Scaling will automatically add more instances to handle the increased load. Conversely, if the CPU utilization drops below 50%, it will scale down the number of instances to save costs.',
			'(B). Add a step scaling policy to the group might be suitable for more complex scaling scenarios, but it involves setting specific thresholds and actions for scaling, which may not be as responsive to the unpredictable load pattern described in the scenario.',
			'(C). Set a CloudWatch alarm to alert a system administrator involves manual intervention, which is not ideal for handling variable workloads, as it may not respond quickly enough to meet performance requirements.',
			'(D). Maintaining a fixed number of application servers does not align with the goal of optimizing resource usage based on demand.',
		],
	},
	{
		question:
			'You run accounting software in the AWS US West (Oregon) region. This software needs to be available continuously on a large general-purpose instance during normal business hours, eight hours a day, every day of the week. You also have other unrelated batch jobs that need to run once per day at any time of your choosing. These batch jobs require a large general-purpose instance and take four hours a day to complete.How should you minimize cost?',
		options: [
			'A. Purchase two separate On-Demand Instances, one to host the online software during the fixed schedule and another to run the batch jobs.',
			'B. Purchase a Convertible Reserved Instance to run the accounting software. Stop the accounting software instance after hours. Run the batch jobs on a separate instance with the same instance class, so the Reserved Instance credit is applied to the batch jobs.',
			'C. Purchase a Standard Reserved Instance to run the accounting software. Stop the accounting software instance after hours. Run the batch jobs with an instance of the same instance class, so the Reserved Instance credit is applied to the batch jobs.',
			'D. Purchase a Standard Reserved Instance to run the accounting software. Turn it off after hours. Purchase an On-Demand to run the batch jobs.',
		],
		answer: [2],
		explanation: [
			'(A). This option involves using two separate On-Demand instances, which means you would be paying the full, higher On-Demand price for both instances. This is likely to be more expensive than using Reserved Instances.',
			'(B). This option involves using a Convertible Reserved Instance for the accounting software. While Convertible RIs offer flexibility, they are generally more expensive than Standard RIs. Additionally, stopping the accounting software instance does not make use of the Reserved Instance benefit, as RIs are billed for regardless of whether the instance is running or not.',
			'(C). This is the correct option. It suggests purchasing a Standard Reserved Instance for the accounting software. Stopping the accounting software instance after hours helps minimize costs. Running the batch jobs with an instance of the same instance class ensures that the Reserved Instance credit is applied, further reducing costs. This option maximizes cost savings.',
			"(D). While this option suggests using a Standard Reserved Instance for the accounting software, purchasing an On-Demand instance for the batch jobs is not as cost-effective. It's better to use Reserved Instances for both the accounting software and the batch jobs to maximize cost savings.",
		],
	},
	{
		question:
			'You run accounting software in the AWS US West (Oregon) region. This software needs to be available continuously on a large general-purpose instance during normal business hours, eight hours a day, every day of the week. You also have other unrelated batch jobs that need to run once per day at any time of your choosing. These batch jobs require a large general-purpose instance and take four hours a day to complete.How should you minimize cost?',
		options: [
			'A. Multi-AZ deployment',
			'B. Increased IOPS',
			'C. Elastic Load Balancing',
			'D. Sharding',
		],
		answer: [3],
		explanation: [
			"(A). While Multi-AZ improves availability, it doesn't inherently increase the capacity or scale of the database. It provides redundancy, but it doesn't distribute the workload across multiple instances.",
			"(B). While increasing IOPS can improve the performance of the underlying storage for a single RDS instance, it doesn't directly address the need for horizontal scaling to handle a higher volume of requests. It's more about improving the performance of a single instance.",
			"(C). ELB is used for distributing traffic across multiple EC2 instances or other resources. It's not directly applicable to horizontally scaling a database. It's more relevant for distributing requests to application servers.",
			'(D). In the given scenario, where the client is receiving greater than expected traffic and there is a need to scale the database horizontally, sharding is the appropriate technique. It enables you to expand the database capacity by adding more shards as needed.',
		],
	},
	{
		question:
			"A system administrator is unable to connect via SSH into an EC2 instance in the company's VPC. You begin reviewing the configuration and see that he has tried to configure a custom access control list (ACL) and a security group. The instance security group allows SSH from a block of company IP addresses, but its outbound traffic rule has been removed. The ACL is configured to allow inbound traffic from the same block of IP addresses, and to deny all outbound traffic. What does the administrator need to change to enable SSH access?",
		options: [
			'A. Allow outbound traffic on the security group.',
			'B. Allow outbound traffic on the ACL.',
			'C. Connect via RDP to enable communication.',
			'D. Create a NAT instance to enable communication.',
		],
		answer: [1],
		explanation: [
			'(A). This option suggests allowing outbound traffic on the security group. However, security groups are stateful, meaning that if you allow inbound traffic for a specific protocol and port, the corresponding outbound traffic for that connection is automatically allowed. Therefore, explicitly allowing outbound traffic in the security group is not necessary.',
			'(B). The ACL (Access Control List) is a network-level filter that controls inbound and outbound traffic at the subnet level. In this scenario, the ACL is configured to deny all outbound traffic, which is preventing the instance from sending responses to the SSH connection. Allowing outbound traffic on the ACL will resolve the issue.',
			'(C). Remote Desktop Protocol (RDP) is used to connect to Windows instances, whereas SSH is used for Linux instances. Since the administrator is trying to connect via SSH, using RDP is not applicable in this context.',
			"(D). A NAT instance is used to allow instances in a private subnet to initiate outbound traffic to the internet, but it's not relevant to the scenario described. The issue here is related to the ACL and security group configuration for SSH access, and a NAT instance is not necessary to resolve the problem.",
		],
	},
	{
		question:
			"An organization is using AWS to host the infrastructure for its WordPress site. For this deployment, WordPress uses Amazon Aurora for MySQL DB cluster for its database. As traffic to the website has increased and the database has scaled, costs for the DB have also risen. The organization wants to implement a more cost-efficient architecture for WordPress's read-intensive workload without sacrificing performance. Which of the following solutions can help reduce database costs without affecting performance?",
		options: [
			'A. Migrate to Amazon RDS for MySQL.',
			'B. Change the database engine to PostgreSQL',
			'C. Use Aurora Global Database for the deployment',
			'D. Enable in-memory object caching using Amazon Elasticache',
		],
		answer: [3],
		explanation: [
			'(A). This would involve moving from Amazon Aurora (which is a high-performance database) to Amazon RDS for MySQL. However, this might not necessarily lead to cost savings, and performance may or may not be comparable depending on the specific workload.',
			"(B). Switching the database engine from MySQL to PostgreSQL might have its benefits, but it's a significant migration effort and doesn't directly address cost efficiency.",
			"(C). Aurora Global Database is designed for replicating a database across multiple AWS regions, which is typically used for disaster recovery and global deployments. While it's a useful feature, it's not primarily intended for cost reduction in a single-region deployment.",
			'(D). This option is a very effective way to reduce database costs for a read-intensive workload. Amazon ElastiCache is a caching service that can be used to store frequently accessed data in-memory, reducing the need to query the database for the same information repeatedly. This can lead to significant cost savings and improved performance for read-heavy workloads.',
		],
	},
	{
		question:
			'A company needs to maintain system access logs for a minimum of 2 years due to financial compliance policies. Logs are rarely accessed, and access must be requested at least 12 hours in advance. is the most cost-effective method to store logs that satisfies the compliance requirement and delivers log requested in a timely manner?',
		options: [
			'A. Store the logs in CloudWatch logs and configure a two-year retention period.',
			'B. Store the logs in Amazon S3 in the Intelligent-Tiering storage class. Configure a lifecycle policy to delete the logs after two years.',
			'C. Store the logs in Amazon S3 in the S3 Glacier Deep Archive storage class. Configure a lifecycle policy that deletes the logs after two years.',
			'D. Store the logs in Amazon S3 in the S3 One Zone-IA storage class. Configure a lifecycle policy to delete the logs after two years.',
		],
		answer: [2],
		explanation: [
			'(A). While CloudWatch can store logs for an extended period, it may not be as cost-effective as other storage options, especially for logs that are rarely accessed.',
			'(B). Intelligent-Tiering is optimized for objects with changing access patterns. Since the logs are rarely accessed in this scenario, it may not be the most cost-effective choice for long-term storage.',
			'(C). This option is the most cost-effective because it is specifically designed for long-term archival of rarely accessed data. The lifecycle policy ensures compliance with the two-year retention requirement, and the lower cost of Glacier Deep Archive makes it an efficient choice.',
			'(D). While One Zone-IA is designed for infrequently accessed data and is less expensive than standard S3 storage, it may not be the most cost-effective option for long-term archival, especially when compared to S3 Glacier Deep Archive which is specifically designed for archival and is even more cost-effective. Additionally, Glacier Deep Archive provides even lower costs for long-term storage.',
		],
	},
	{
		question:
			'A company with a lot of AWS resources contracted you to protect a list of its resources and buckets The company would like to seamlessly change the subset of resources that are backed up on AWS Backup. What strategy will you implement to easily backup a subset of resources?',
		options: [
			'A. Create lists of resource names for each subset and associate the resource names before running new backup plans.',
			'B. Find the resource ID of each resource to be protected and add the resource ID of each resource to the backup plan before a new run.',
			'C. Add descriptions to each resource. To run new backup plans, specify the common descript to the targeted resources.',
			'D. Add tags with key-value pairs to each resource. To run new backup plans, include targeted resources using tag key-value pair.',
		],
		answer: [3],
		explanation: [
			'(A). This approach could become unwieldy and difficult to manage as the number of resources grows. It also requires manual intervention every time the company wants to change the subset of resources being backed up.',
			'(B). Similar to option 1, manually managing resource IDs can become impractical and error-prone, especially for a large number of resources.',
			'(C). Descriptions may not be as flexible or robust for resource management compared to tags.',
			'(D). Tags provide a flexible and scalable way to categorize and manage resources. This makes it easy to identify and select a subset of resources for backup without the need for manual intervention or management of resource lists or IDs.',
		],
	},
	{
		question:
			'A company is migrating its on-premises data center to the AWS cloud. They need to transfer data AWS and require high bandwidth and consistent network connection. The team responsible for the migration is concerned about high data transfer costs associated with their current internet provider an looking for a cost-effective solution for this long-term project. Which of the following Amazon solution should the team choose to connect the on-premises network to AWS for this migration project?',
		options: [
			'A. Use AWS Direct Connect to connect AWS with the remote on-premises network.',
			'B. Use an Amazon Site-to-site VPN connection to connect AWS with the remote on-premises network.',
			'C. Use a transit gateway to connect AWS with the remote on-premises network.',
			'D. Use Amazon S3 with Transfer Acceleration',
		],
		answer: [0],
		explanation: [
			'(A). AWS Direct Connect provides a dedicated network connection that bypasses the public internet. This ensures high bandwidth and consistent network performance, which is essential for a data migration project.',
			'(B). Amazon Site-to-site VPN is also a viable option, but it may not provide the same level of performance and consistency as AWS Direct Connect. VPN connections rely on the public internet, which can introduce variability in network performance.',
			'(C). Transit Gateway is a useful tool for managing multiple VPC connections, but it is not specifically designed for high-bandwidth, consistent connectivity between an on-premises network and AWS.',
			'(D). Amazon S3 with Transfer Acceleration is not applicable in this scenario. It is a service optimized for fast transfers to and from Amazon S3 buckets, but it does not address the need for high-bandwidth, consistent connectivity between the on-premises network and AWS.',
		],
	},
	{
		question:
			"You are an engineer at a large bank, responsible for managing your firm's AWS infrastructure. Your finance team has approached you, indicating their concern over the growing S3 budget. They have asked to identify strategies to reduce S3 storage costs without compromising data quality before the next mont billing cycle. What options below are the most efficient and effective at reducing object storage costs? (Choose 2 answers)",
		options: [
			'A. Develop a custom script to compress file S3 object files size.',
			'B. Utilize S3 Standard-Infrequent Access (IA) storage class for objects that are infrequently requested.',
			'C. Use Snowball for large data objects to avoid data transfer rates.',
			'D. Implement lifecycle to archive older objects to the S3 Glacier Flexible Retrieval storage class.',
		],
		answer: [1, 3],
		explanation: [
			'(A). Compression might not be effective for all types of data, such as already compressed formats like images, videos, or binary data. Additionally, developing and maintaining custom compression scripts can be complex and time-consuming.',
			'(B). S3 Standard-IA offers a lower storage cost compared to S3 Standard, making it a cost-effective choice for objects that are not frequently accessed. It allows you to reduce storage costs without compromising data quality, as the data is still readily available when needed.',
			"(C). Snowball is designed for data transfer and migration, not for reducing storage costs of existing objects in S3. It's not a suitable solution for this specific cost optimization task.",
			'(D). The S3 Glacier Flexible Retrieval storage class offers very low storage costs for archival data. By using a lifecycle policy, you can automatically move older, infrequently accessed data to this storage class, reducing storage costs significantly. It allows you to save on storage costs while maintaining data quality, as the data can still be retrieved when needed.',
		],
	},
	{
		question:
			"You are leading a design meeting on security in your company's new AWS VPC. Your team is debating the merits of using security groups, Network Access Control Lists or both. It is important to be aware of the benefits of each and how that might interact if deployed together. What differences between security groups and Network Access Control Lists must you be aware of before deploying? (Choose 2 answers)",
		options: [
			'A. Security Groups are stateless, return traffic must be explicitly allowed by rules.',
			'D. Security Groups are stateful, return traffic is allowed regardless of any rules.',
			'C. NACLS are stateless, return traffic must be explicitly allowed by rules.',
			'D. NACLS are stateful, return traffic is allowed regardless of any rules.',
		],
		answer: [1, 2],
		explanation: [
			"(A). This statement is incorrect. Security Groups in AWS are actually stateful. When you allow inbound traffic, the corresponding outbound traffic for responses is automatically allowed. This means you don't need to create separate rules for return traffic.",
			'(B). This statement is correct. Security Groups are indeed stateful. If you allow inbound traffic from a certain source, the return traffic is automatically allowed, regardless of outbound rules.',
			'(C). This statement is correct. Network Access Control Lists (NACLS) in AWS are stateless. This means that for each rule allowing inbound traffic, you need to create a corresponding outbound rule to allow return traffic. Unlike Security Groups, NACLS do not automatically permit return traffic based on inbound rules.',
			'(D). This statement is incorrect. Network Access Control Lists (NACLS) are indeed stateless. They do not automatically allow return traffic like Security Groups do. Return traffic must be explicitly allowed through outbound rules.',
		],
	},
	{
		question:
			"A DevOps team is deploying a new application to an Amazon EC2 instance with an EBS data volume. The team does not fully understand the application's EBS performance needs and does not wa to over-provision, so they have started with a general-purpose SSD volume (gp2). However, they woul like the option to modify the volume type without any downtime if they need to move to a Provisioned IOPS SSD (io1). What steps can the team take to change the volume type without any downtime for th EC2 instance?",
		options: [
			'A. Use the Amazon EBS Elastic Volumes feature to change the volume type.',
			'B. Resize the EC2 instance and choose an EBS-backed instance with the appropriate volume type.',
			'C. Take a snapshot of the current EBS volume and create a new io1 volume from the snapshot.',
			'D. Modify the EC2 instance to use instance storage for the data volume.',
		],
		answer: [0],
		explanation: [
			'(A). The Amazon EBS Elastic Volumes feature allows you to modify the volume type of an existing EBS volume, including changing from gp2 to io1, without any downtime. This ensures continuous availability of the application while making necessary adjustments to the volume type.',
			'(B). This option involves changing the entire EC2 instance type. While this would allow you to choose an EBS-backed instance with the desired volume type, it is a more drastic measure than simply modifying the volume type. It may not be necessary and could result in additional downtime.',
			"(C). While this approach could create a new volume with the desired volume type, it would involve creating a new volume and potentially requiring downtime to switch the application to use the new volume. It doesn't meet the requirement of changing the volume type without any downtime.",
			"(D). This option suggests using instance storage, which is not as flexible or persistent as EBS volumes. It may not be suitable for the application's requirements, especially if the team initially chose an EBS volume for data persistence.",
		],
	},
	{
		question:
			'A company using PostgreSQL on-premise as the database for a customer-facing application is migra to the AWS cloud. The development team needs to select a high-performance Amazon database solution that offers increased throughput and minimal lock contention for this migration. Another obje of the migration is to minimize the resources needed to maintain the database server. The developmen team has designed the application to support concurrent queries and transactions and wants to ensure the database solution can support this workload. Which of the following database services would the te choose to meet these requirements?',
		options: [
			'A. Migrate to Amazon RDS for PostgreSQL',
			'B. Migrate to Amazon Aurora for PostgreSQL',
			'C. Migrate to Amazon DynamoDB',
			'D. Migrate the PostgreSQL database to Amazon EC2',
		],
		answer: [1],
		explanation: [
			'(A). While RDS for PostgreSQL is a good choice for managed PostgreSQL databases, it may not offer the same level of performance optimization and scalability as Amazon Aurora. Aurora is specifically designed for high-performance applications and can provide higher throughput.',
			"(B). Amazon Aurora for PostgreSQL is designed for applications that require high throughput and low latency. It provides increased throughput, minimal lock contention, and is compatible with PostgreSQL. Additionally, it's a fully managed service, which reduces the resources needed to maintain the database server.",
			"(C). DynamoDB is a NoSQL database, which means it has a different data model compared to PostgreSQL. Migrating to DynamoDB would likely require significant changes to the application code and schema, which may not align with the team's migration goals.",
			'(D). Migrating to Amazon EC2 would require the development team to manage the entire infrastructure, including the operating system, security, backups, and more. This option would likely result in higher operational overhead compared to using a managed service like Aurora.',
		],
	},
	{
		question:
			'A video game company is developing a big project and needs to share its AWS resources with another company it recently acquired. The newly acquired company has its own AWS account but needs to access the parent company resources to participate in the hot project. How can the resources be shared with reduced operational overhead and without resource duplication?',
		options: [
			'A. Use AWS console or command line to make a copy of all resources needed for the project and provide the acquisition account access to the copy.',
			'B. Use Amazon S3 console to share the resources with the acquisition account.',
			'C. The parent company uses AWS RAM to allow the acquisition account access to resources needed to complete the project.',
			'D. Use AWS SSO to sign into the parent resources from the acquisition AWS account.',
		],
		answer: [2],
		explanation: [
			"(A). This option involves manually duplicating resources and providing access to the copies in the acquisition account. Duplicating resources can lead to synchronization issues, increased management overhead, and potential discrepancies between the original and copied resources. This approach doesn't leverage AWS features designed for resource sharing.",
			"(B). This option is specific to sharing objects in Amazon S3, which may not be suitable for sharing other types of AWS resources like EC2 instances, databases, etc. While this option is valid for sharing S3 objects, it doesn't address the broader requirement of sharing various types of AWS resources across accounts.",
			'(C). AWS Resource Access Manager (RAM) is designed for sharing AWS resources across accounts within an organization. It enables controlled and secure sharing without resource duplication. This option is the most suitable for the scenario. It allows the parent company to share resources with the acquisition account, reducing operational overhead and avoiding resource duplication.',
			"(D). AWS Single Sign-On (SSO) is a service that allows users to sign in to multiple AWS accounts using a single set of credentials. However, it's more focused on user authentication and access, rather than sharing resources directly between accounts. While AWS SSO is a useful service for managing user access, it doesn't directly address the requirement of sharing resources between the parent company and the acquisition account.",
		],
	},
	{
		question:
			"An advertising company is running all of its websites, databases, and file storage in the AWS cloud. They are hiring hundreds of new employees to manage regional advertising campaigns to be launched on multiple continents. The permissions for each employee will vary based on the employee's location and job title within the company, and management is concerned about consistently applying access to resources as new users are rapidly added to existing AWS accounts. What is the most efficient way to maintain consistency with a minimal amount of reorganizing the existing corporate access and policy structure in AWS?",
		options: [
			'A. Attach IAM policies to each IAM user based on their location and job title.',
			'B. Create IAM groups based on location and job title and attach an IAM role to each group. Assign IAM users to their corresponding group.',
			'C. Create IAM groups based on location and job title and attach IAM policies to each group. Assign IAM users to their corresponding group.',
			'D. Create Organizational Units (OU) for each location and apply Service Control Policies for each Organizational Unit.',
		],
		answer: [2],
		explanation: [
			'(A). This option suggests assigning policies directly to individual IAM users based on their location and job title. While technically possible, it is not the most efficient way to manage permissions, especially in a scenario with hundreds of new employees. This approach could lead to a complex and potentially error-prone management process, especially as the number of users grows. It would require manual assignment and potentially lead to inconsistency in permissions.',
			'(B). This option involves creating IAM groups and attaching IAM roles to them. However, this approach is not ideal for managing permissions for individual employees, as roles are typically assumed by services or applications, not users. Using roles for individual employee permissions can lead to a more complex and potentially confusing setup. Additionally, roles are typically used for cross-account access or for services within an account, rather than for individual users.',
			'(C). This option is the most efficient and effective way to manage permissions. It involves creating logical groupings based on location and job title, then attaching policies to these groups. Users are then assigned to the appropriate groups, inheriting the associated permissions. This approach provides a structured and organized way to manage permissions. It allows for efficient policy assignment and ensures consistency across users with similar roles and responsibilities.',
			'(D). This option involves using AWS Organizations to create organizational units (OUs) and applying service control policies (SCPs) to control access at an organizational level. While useful for high-level access control, it may not provide the fine-grained control needed based on both location and job title. While useful for overall organizational control, this approach may not meet the specific requirements of assigning permissions based on both location and job title.',
		],
	},
	{
		question:
			'A customer has EC2 instances in two different VPCs and wants them to easily communicate with each other. VPC peering seems ideal without the need for a transit gateway, but there are some things you need to consider. Which two of the following do you need to ensure are correct for this to work? (Choose 2 answers)',
		options: [
			'A. The VPCs are directly connected with a single peering connection.',
			"B. The VPCs' CIDR blocks cannot overlap.",
			'C. The VPCs both need to have EC2 instances with the same operating system.',
			'D. The VPCs both need to have only public subnets.',
		],
		answer: [0, 1],
		explanation: [
			'(A). This is a crucial requirement. VPCs involved in peering must have non-overlapping IP address ranges. If the CIDR blocks overlap, the peering connection cannot be established.',
			'(B). VPC peering requires a direct connection between the VPCs. Each VPC must establish a peering connection to the other. This establishes a one-to-one relationship between the VPCs.',
			'(C). The operating system of the instances in the VPCs is not a requirement for VPC peering. The instances can run different operating systems.',
			"(D). The subnets in the VPCs can be public or private; it doesn't affect the feasibility of VPC peering.",
		],
	},
	{
		question:
			"As part of your backup and restore initiative, your IT department is copying petabytes of on-premise data of many different types to Amazon S3. The on-premise data is organized by its related project, and in the event of a disaster, applications will be rerouted to connect with the objects stored in S3 to complete object-based workloads. As part of the data restoration plan, you need to implement a detailed metadata policy for all files stored on Amazon S3 that helps identify each object's related project. What is the best method to backup the data cost-effectively and apply the metadata policy to the S3 objects?",
		options: [
			'A. Use AWS Snowball to migrate the data to Amazon S3 buckets with the appropriate bucket tags, and which will be applied as object tags to objects as they are uploaded.',
			'B. Upload objects to Amazon S3 using multipart uploads, and then use Amazon Athena to query data and organize objects by their project.',
			'C. Use AWS Snowball to migrate the data to Amazon S3, and apply object tags using S3 batch operations.',
			'D. Use AWS Storage Gateway tape gateways to migrate the files to Amazon S3, and apply object tags using S3 batch operations.',
		],
		answer: [2],
		explanation: [
			"(A). This option suggests using AWS Snowball to migrate data, which is a valid approach. However, it mentions using bucket tags, which are used to tag entire S3 buckets. Bucket tags do not automatically translate to object tags. While you can tag a bucket, it won't apply tags to the objects within the bucket automatically. Therefore, this option is incorrect in its assertion about the application of tags.",
			'(B). This option suggests using Amazon S3 multipart uploads, which is a valid way to upload large objects. However, it then proposes using Amazon Athena for querying and organizing objects. While Amazon Athena is a powerful querying service, it is not primarily used for organizing or applying metadata to objects. It is used for querying and analyzing data stored in S3 using SQL-like queries. Therefore, this option is incorrect for the purpose stated.',
			'(C). This option correctly suggests using AWS Snowball for data migration, which is a cost-effective method. It also mentions applying object tags, which can be done using S3 batch operations. This is an appropriate method for applying metadata policies to the S3 objects. Therefore, this option is correct for the scenario described.',
			'(D). This option suggests using AWS Storage Gateway tape gateways, which are used for integrating on-premises applications with cloud storage. While it is a valid service, it may not be the most efficient or cost-effective solution for this specific scenario. Additionally, the mention of using S3 batch operations to apply object tags is correct, but the choice of using Storage Gateway tape gateways may not be the best fit for this context. Therefore, this option is less suitable for the described scenario compared to Option 3.',
		],
	},
	{
		question:
			'A customer is using a NAT Gateway to allow a cluster of EC2 instances on a private subnet in their VPC to access an S3 bucket in the same region. After a recent uptick in usage, the customer noticed that data transfer charges rose beyond what they expected. The customer has requested that you find a solution that minimizes data transfer costs without exposing the EC2 instances to the Internet directly. Which option best meets the requirements?',
		options: [
			'A. Use a NAT Instance instead of the NAT Gateway and update the routing table for the private subnet to route traffic to the S3 bucket to the NAT Instance',
			'B. Use CloudFront to cache frequently accessed data',
			'C. Create a VPC Endpoint for the S3 bucket and update the routing table for the private subnet to route traffic to the S3 bucket to the VPC Endpoint',
			'D. Create a DX connection between the S3 bucket and the private subnet',
		],
		answer: [2],
		explanation: [
			'(A). This option suggests using a NAT Instance, which would allow the EC2 instances in the private subnet to access the internet, including S3. However, it is not the most efficient solution for accessing S3, as NAT Instances can introduce additional complexities, require manual management, and might not be as cost-effective as other options.',
			'(B). This option involves using CloudFront, which is a content delivery network (CDN) service. While CloudFront can cache frequently accessed data and reduce data transfer costs for content it serves, it is not a direct solution for accessing an S3 bucket from EC2 instances in a VPC. Additionally, this option may not be the most efficient for this specific use case.',
			'(C). This option is the most suitable for the given scenario. A VPC Endpoint allows resources within the VPC to communicate with AWS services like S3 without going over the internet. It ensures that data transfer stays within the AWS network, minimizing costs and providing secure access to the S3 bucket.',
			'(D). Direct Connect (DX) is used for establishing a dedicated network connection between your on-premises network and AWS. It is not used for VPC-to-service communication within AWS. This option is not relevant to the scenario described and does not address the requirement of minimizing data transfer costs for EC2 instances accessing an S3 bucket.',
		],
	},
	{
		question:
			'A large company is expanding its AWS cloud infrastructure and expects to grow the number of VPCs managed by different IT departments. The technical team anticipates that resources within multiple VPCs will need access to resources in other VPCs and access to on-premises resources. Which of the following solutions should the technical team choose to enable connectivity between multiple VPCs and on-premises resources?',
		options: [
			'A. Connect the different VPCs to AWS Transit Gateway using VPC peering connections. Connect the on-premises network to the same AWS Transit Gateway using a VPN connection.',
			'B. Create VPC peering connections between each VPC. Connect the VPC network to the on- premises resources using a VPN connection.',
			'C. Create VPC peering connections between each VPC. Connect the VPC network to the on- premises resources using AWS Direct Connect.',
			'D. Connect the multiple VPCs with VPN connections. Connect the VPC network to the on- premises resources using AWS Direct Connect.',
		],
		answer: [0],
		explanation: [
			'(A). This option correctly leverages AWS Transit Gateway, which acts as a hub for connecting multiple VPCs. VPC peering connections allow VPCs to communicate with each other. Connecting the on-premises network to the same AWS Transit Gateway using a VPN connection is the right approach for secure communication between on-premises resources and AWS.',
			'(B). While VPC peering connections are used for communication between VPCs, this option lacks the central management provided by AWS Transit Gateway. Managing multiple VPC peering connections can become complex and less scalable.',
			"(C). AWS Direct Connect provides a dedicated network connection between on-premises and AWS. However, using Direct Connect for VPC-to-VPC communication is not a standard approach. It's typically used for connecting on-premises resources directly to AWS. Similar to Option B, this option lacks the central management provided by AWS Transit Gateway, which can become complex as the number of VPCs increases.",
			'(D). While VPN connections can be used for secure communication, connecting multiple VPCs using VPN connections can be complex and less scalable compared to using AWS Transit Gateway. AWS Direct Connect for on-premises resources is a correct approach for secure and reliable communication.',
		],
	},
	{
		question:
			'A company is building a Machine Learning application hosted on EC2 Linux instances in the same VPC subnet. This application will require multiple instances to process jobs in parallel, so the network speed between instances in the subnet and CPU processing speed of single instances are both critical. Management currently authorizes general purpose, compute optimized and storage optimized instances, and dislikes the idea of purchasing other instance types such as accelerated computing for this specific application because it is too specialized. Instead, they would like for your team to use familiar instance types that developers have experience with, and find ways to optimize them for this application. Which solution would you implement to improve the compute and networking performance of the available EC2 instance types for this application?',
		options: [
			'A. Attach Elastic Network Adapters (ENA) to your instances.',
			'B. Attach Elastic Fabric Adapters (EFA) to your instances.',
			"C. Deploy the application's instances in a spread placements group.",
			'D. Attach Elastic Network Interfaces (ENI) to your instances.',
		],
		answer: [0],
		explanation: [
			'(A). While attaching ENA can improve networking performance, it may not provide the specialized low-latency communication needed for machine learning workloads. ENA is more geared towards general networking improvements.',
			'(B). This option is correct. EFA is specifically designed to optimize networking performance for specialized workloads like machine learning that require both high CPU processing speed and fast network communication between instances.',
			"(C). This option doesn't directly address the compute and networking performance requirements mentioned in the scenario. It focuses more on availability and fault tolerance.",
			"(D). ENIs are crucial for normal network connectivity, but they don't provide the specialized networking capabilities required for high-performance machine learning applications.",
		],
	},
	{
		question:
			"A micro-finance startup awarded your team the security of their application built on AWS. You are tasked with enabling a dedicated, single tenancy Hardware Security Module (HSM) for this client's needs. Which AWS service will provide the required hardware-based encryption device?",
		options: [
			'A. AWS KMS',
			'B. AWS Systems Manager',
			'C. AWS CloudHSM',
			'D. AWS Macie',
		],
		answer: [2],
		explanation: [
			'(A). AWS Key Management Service (KMS) is a managed service for key management. It provides a secure and convenient way to manage encryption keys for various AWS services and applications. While AWS KMS is a powerful service for key management, it does not provide dedicated, single tenancy HSMs. KMS uses multi-tenant HSMs managed by AWS, which means that the hardware is shared among multiple AWS customers.',
			'(B). AWS Systems Manager does not provide hardware-based encryption devices like an HSM. It focuses on management and automation of operational tasks.',
			'(C). AWS CloudHSM is a dedicated hardware security module for cryptographic operations and key storage. It offers a secure, single-tenant environment for key management and encryption. This option is correct. AWS CloudHSM aligns with the requirement for a dedicated, single tenancy HSM. It provides the required hardware-based encryption device.',
			'(D). AWS Macie is a service that uses machine learning to automatically discover, classify, and protect sensitive data. It is focused on data discovery and classification, rather than providing dedicated HSMs. AWS Macie is not related to providing a dedicated HSM. It serves a different purpose in data security and privacy.',
		],
	},
];

export default builder;
