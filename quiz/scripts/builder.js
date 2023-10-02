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
			"(A). Develop a custom script to compress S3 object files' size. Compression might not be effective for all types of data, such as already compressed formats like images, videos, or binary data. Additionally, developing and maintaining custom compression scripts can be complex and time-consuming.",
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
			'A company using PostgreSQL on-premise as the database for a customer-facing application is migrating to the AWS cloud. The development team needs to select a high-performance Amazon database solution that offers increased throughput and minimal lock contention for this migration. Another objective of the migration is to minimize the resources needed to maintain the database server. The development team has designed the application to support concurrent queries and transactions and wants to ensure the database solution can support this workload. Which of the following database services would the team choose to meet these requirements?',
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
	{
		question:
			'You are designing an AWS cloud environment for a small company with a limited budget. They have decided to provision an Amazon RDS database with a single-AZ database deployment, to ensure the implementation remains within budget. You have convinced them of the benefits of configuring automatic backups of the RDS database and saving incremental backups to Amazon S3. What would be the best time to perform these automatic backups?',
		options: [
			'A. After midnight',
			'B. Two hours before the work day starts',
			'C. At the time of day when write IOPS is typically the lowest.',
			'D. Amazon will determine the best time',
		],
		answer: [2],
		explanation: [
			"(A). After midnight is a specific time, but it doesn't necessarily correspond to a period of low database activity. Activity levels can vary widely depending on the company's operations. Therefore, scheduling backups at this fixed time might not optimize the process.",
			'(B). Similar to the first option, this time is a fixed point that may not align with periods of low database activity. The start of the workday could have a high level of activity, depending on the nature of the business.',
			"(C). This option is the best choice among the given alternatives. It suggests scheduling backups during periods when the database experiences the lowest write IOPS (Input/Output Operations Per Second). This ensures that the backup process has minimal impact on the database's performance during operational hours.",
			"(D). This option means relying on AWS to automatically schedule the backups. While AWS is equipped to make informed decisions about when to perform backups based on its monitoring of the system, it's still important for the company to ensure that the chosen time aligns with their specific usage patterns. Additionally, they should monitor the backups to ensure they meet their recovery point objectives.",
		],
	},
	{
		question:
			'An application that generates water quality reports for a government agency includes an ECS cluster that uses both Amazon EC2 and AWS Fargate. There are several computational steps involved in building a report, and each step generates intermediate data needed in the next step. The application requires a storage service that is accessible to all containers in the ECS cluster and would allow them to access the same files simultaneously. All data generated in this step-by-step process is given nearly identical filenames without applying delimiters or prefixes.Which storage solution can you add to each ECS task definition to provide shared access between all tasks in the cluster?',
		options: [
			'A. Elastic File System (EFS)',
			'B. Elastic Block Storage (EBS)',
			'C. Simple Storage Service (S3) ',
			'D. ElastiCache',
		],
		answer: [0],
		explanation: [
			"(A). EFS is a fully managed NFS (Network File System) file storage service that allows multiple Amazon EC2 instances and AWS Fargate tasks to share files with consistent and low-latency performance. It's designed for scenarios where multiple resources need simultaneous access to the same files. In this case, it would be ideal for allowing all containers in the ECS cluster to access the same files simultaneously, even if they are generating intermediate data with similar filenames.",
			"(B). EBS provides block-level storage volumes that can be attached to individual EC2 instances. While it's suitable for single-instance storage needs, it doesn't support shared access to files across multiple instances or tasks. Each EBS volume is attached to a single EC2 instance and cannot be directly shared.",
			"(C). S3 is an object storage service that allows you to store and retrieve any amount of data at any time. While it is highly scalable and durable, it does not provide a traditional file system interface with simultaneous file access. It's designed for web-scale cloud storage and is not suitable for shared file access between multiple tasks or instances.",
			"(D). ElastiCache is a managed in-memory cache service that is used to improve the performance of web applications by allowing frequently accessed data to be stored in memory. It's not a storage solution for files and does not provide a shared file system.",
		],
	},
	{
		question:
			'A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time. What should a solutions architect propose to ensure users see all of their documents at once?',
		options: [
			'A. Copy the data so both EBS volumes contain all the documents',
			'B. Configure the Application Load Balancer to direct a user to the server with the documents',
			'C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS',
			'D. Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server',
		],
		answer: [2],
		explanation: [
			'(A). While effective, this approach may require a process for periodic or real-time synchronization to ensure both EBS volumes stay consistent. This could potentially introduce complexity in managing data synchronization.',
			"(B). This approach doesn't directly address the underlying issue of data synchronization. While it might improve performance by directing users to the server with the relevant documents, it doesn't guarantee that all documents will be accessible to users. It's more of a workaround than a solution to the synchronization problem.",
			'(C). Migrating data from EBS to EFS involves a data transfer process, which can be time-consuming and may incur additional costs. Modifying the application to save new documents to Amazon EFS requires code changes, potentially introducing new complexities and potential points of failure.',
			"(D). While this approach may technically work, it's less efficient and introduces complexity in handling responses from both servers and merging them. It could lead to potential issues in managing responses and could be less reliable than other solutions.",
		],
	},
	{
		question:
			'An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet. Which solution will provide private network connectivity to Amazon S3?',
		options: [
			'A. Create a gateway VPC endpoint to the S3 bucket.',
			'B. Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.',
			'C. Create an instance profile on Amazon EC2 to allow S3 access.',
			'D. Create an Amazon API Gateway API with a private link to access the S3 endpoint.',
		],
		answer: [0],
		explanation: [
			'(A). This option establishes a private connection between your VPC and the Amazon S3 service. It allows resources within your VPC, like the EC2 instance in this case, to access the S3 bucket without requiring internet connectivity. This is the most suitable solution for the scenario described.',
			"(B). While this solution could be useful for log management and analysis, it doesn't directly address the requirement of providing the EC2 instance with private network connectivity to the S3 bucket. It introduces an additional step of exporting logs to the S3 bucket from CloudWatch, but it doesn't establish a private connection between the EC2 instance and S3.",
			'(C). Creating an instance profile is a necessary step for granting permissions to the EC2 instance to access the S3 bucket. However, this alone does not provide private network connectivity. It would still require a VPC endpoint or other network configurations to ensure that the traffic stays within the AWS network.',
			"(D). This option involves setting up an API Gateway with a private link, which is used for securely accessing APIs. It is not relevant to accessing S3 buckets directly. This option does not align with the scenario's requirement of enabling the EC2 instance to access the S3 bucket.",
		],
	},
	{
		question:
			'A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture. What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?',
		options: [
			'A. Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.',
			'B. Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.',
			'C. Use Amazon Athena directly with Amazon S3 to run the queries as needed.',
			'D. Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.',
		],
		answer: [2],
		explanation: [
			"(A). Amazon Redshift is a powerful data warehousing solution. It's optimized for complex analytics and querying large datasets. However, in this scenario, the requirement is for simple, on-demand log analysis. Using Redshift would introduce more operational overhead as it requires provisioning and managing a cluster, which may be overkill for this use case. It's not the most efficient solution for simple, ad-hoc queries on JSON log files.",
			'(B). CloudWatch Logs is designed primarily for managing and analyzing logs generated by AWS services. While it does provide some querying capabilities, it may not be the best fit for analyzing proprietary application logs stored in JSON format. Additionally, running SQL queries directly from the CloudWatch console for this scenario might not be as efficient or flexible as using a specialized tool like Athena.',
			"(C). Amazon Athena is a serverless, interactive query service that allows you to analyze data directly in Amazon S3 using SQL. It's designed for on-demand querying of data in S3. This option aligns well with the scenario where the company needs to analyze JSON log files stored in an S3 bucket with simple queries. Athena doesn't require the company to provision or manage any infrastructure, which minimizes operational overhead.",
			'(D). This option involves more complexity and operational overhead. AWS Glue is a service for ETL (Extract, Transform, Load) tasks, and it can catalog data for querying. It can be powerful for complex data transformations, but it may introduce more complexity than necessary for this scenario. Additionally, using Apache Spark on EMR for simple log analysis might be over-engineering the solution.',
		],
	},
	{
		question:
			'A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?',
		options: [
			'A. Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.',
			'B. Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.',
			'C. Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.',
			'D. Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.',
		],
		answer: [0],
		explanation: [
			"(A). S3 Transfer Acceleration is designed to accelerate uploads to S3 by using Amazon CloudFront's globally distributed edge locations. It can significantly reduce the time it takes to upload objects, especially for large files or over long distances. In this scenario, where data is collected from multiple global sites, enabling S3 Transfer Acceleration can help optimize the upload process and minimize latency.",
			'(B). This option involves uploading data to S3 buckets in the closest regions to the sites, which takes advantage of high-speed Internet connections and reduces latency. Cross-Region Replication is then used to automatically replicate objects to the destination S3 bucket. While this solution is effective, it introduces more steps and complexity compared to option A, which directly leverages S3 Transfer Acceleration.',
			"(C). Using AWS Snowball Edge introduces additional hardware (Snowball devices) and potentially complex job scheduling. While it's a valid solution for large-scale data transfers, it may introduce more operational complexity than needed for this scenario. It might be overkill for aggregating data from multiple sites daily.",
			"(D). This option involves setting up and managing EC2 instances, EBS volumes, and snapshots. While it's a technically feasible solution, it introduces a higher level of operational complexity compared to the other options. It may also be less efficient in terms of data transfer speed compared to option A.",
		],
	},
	{
		question:
			'An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket. A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically. Which combination of actions will meet these requirements? (Choose two.)',
		options: [
			'A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.',
			'B. Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.',
			'C. Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.',
			'D. Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.',
			"E. Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon Sample Notification Service (Amazon SNS) topic with the application owner's email address for further processing.",
		],
		answer: [0, 1],
		explanation: [
			'(A). This is the correct first step. By creating an SQS queue and configuring the S3 bucket to send a notification to the queue, you establish a durable and reliable messaging system. When an image is uploaded, a message will be sent to the SQS queue.',
			'(B). This is also correct. By configuring the Lambda function to use the SQS queue as the event source, it will be triggered whenever there is a message in the queue (which happens when an image is uploaded). Processing the message and then deleting it from the queue ensures that the image is processed only once.',
			"(C). This is not the best approach for this scenario. While it's possible to monitor the S3 bucket directly for new uploads, it introduces complexity and potential issues. Also, using a text file in memory is not a reliable and durable way to keep track of processed images. The SQS queue is a better choice for this purpose.",
			'(D). This introduces unnecessary complexity. Using an EC2 instance to monitor the SQS queue is not recommended in this serverless architecture. It adds operational overhead and is not as efficient as using Lambda functions directly.',
			"(E). This approach focuses on alerting rather than processing the images. While it's possible to use EventBridge and SNS for notifications, it doesn't address the actual processing of the images, which is the primary goal of the scenario.",
		],
	},
	{
		question:
			'A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets. A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server. Which solution will meet these requirements with the LEAST operational overhead?',
		options: [
			"A. Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
			"B. Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
			'C. Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.',
			'D. Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.',
		],
		answer: [3],
		explanation: [
			'(A). This is not the best choice for the scenario. Network Load Balancers are designed primarily for distributing incoming traffic across multiple healthy Amazon EC2 instances in multiple Availability Zones. They are not typically used for routing traffic to third-party virtual firewall appliances. Using a Network Load Balancer for this purpose would introduce unnecessary complexity and might not be well-suited for packet inspection.',
			"(B). Similar to the Network Load Balancer, an Application Load Balancer is designed for routing traffic to multiple backend instances based on application-level routing (e.g., HTTP/HTTPS). It's not intended for routing traffic to a third-party virtual firewall appliance for packet inspection. Using an Application Load Balancer for this purpose would also add complexity and may not be efficient.",
			'(C). While a Transit Gateway is a powerful tool for connecting multiple VPCs and networks, it might be overkill for this scenario. It introduces additional complexity and is typically used for more complex routing scenarios. Using it for routing traffic to a single firewall appliance would add unnecessary overhead and complexity to the architecture.',
			"(D). This is the best option for the scenario. Gateway Load Balancers are designed for routing traffic to third-party network appliances, making them well-suited for packet inspection scenarios. Creating a Gateway Load Balancer endpoint to forward traffic to the virtual firewall appliance in the inspection VPC is a straightforward and efficient solution with minimal operational overhead. It keeps the traffic inspection centralized and focused on the appliance's specific role.",
		],
	},
	{
		question:
			'A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance. A solutions architect needs to minimize the time that is required to clone the production data into the test environment. Which solution will meet these requirements?',
		options: [
			'A. Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.',
			'B. Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.',
			'C. Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.',
			'D. Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment.',
		],
		answer: [3],
		explanation: [
			'(A). EC2 instance store volumes are ephemeral and can be lost if the instance is stopped or terminated, which makes them unsuitable for persistently storing cloned data in a test environment. Restoring snapshots onto instance store volumes would not provide the data persistence required for a test environment. Instance store volumes typically have lower I/O performance compared to EBS volumes, which might not meet the requirement of consistently high I/O performance.',
			"(B). While the EBS Multi-Attach feature allows multiple EC2 instances to attach and access the same EBS volume concurrently, it's generally designed for scenarios where you want shared access to data, such as clustering or distributed file systems. It's not intended for cloning data into a test environment. Cloning production EBS volumes directly to the test environment EC2 instances may impact the production environment and doesn't provide isolation for testing and modification.",
			"(C). This approach adds unnecessary steps and complexity. Initializing new EBS volumes after taking snapshots and before attaching them to the test environment EC2 instances can be time-consuming and inefficient. It's better to restore the snapshots directly into new EBS volumes to minimize the time required for data cloning.",
			'(D). Option D is the right choice because it leverages EBS snapshots and utilizes the EBS fast snapshot restore feature. This combination allows for the swift creation of new EBS volumes from snapshots, ensuring minimal downtime and maximizing data consistency. By attaching these new volumes to EC2 instances in the test environment, the company can efficiently clone large amounts of production data while maintaining consistently high I/O performance. This approach also guarantees that any modifications in the test environment do not affect the production environment, making it an efficient and safe solution for their requirements.',
		],
	},
	{
		question:
			'A suite of web applications is hosted in an Auto Scaling group of EC2 instances across three Availability Zones and is configured with default settings. There is an Application Load Balancer that forwards the request to the respective target group on the URL path. The scale-in policy has been triggered due to the low number of incoming traffic to the application. Which EC2 instance will be the first one to be terminated by your Auto Scaling group?',
		options: [
			'A. The EC2 instance which has been running for the longest time.',
			'B. The Instance will be randomly selected by the Auto Scaling group.',
			'C. The EC2 instance which has the least number of user sessions.',
			'D. The EC2 instance launched from the oldest launch configuration.',
		],
		answer: [3],
		explanation: [
			"(A). This option is not explicitly mentioned in the scenario. It's not a standard termination policy provided by AWS for Auto Scaling groups. Without custom configuration, this is not how Auto Scaling groups determine which instance to terminate.",
			'(B). While custom policies can be set up, this is not part of the standard behavior.',
			"(C). This is not a default behavior of Auto Scaling groups. The termination policy is not based on the number of user sessions. Custom policies could potentially be implemented using metrics and CloudWatch alarms, but it's not the default behavior.",
			'(D). If you did not assign a specific termination policy to the group, Amazon EC2 Auto Scaling uses the default termination policy. It selects the Availability Zone, and terminates the instance that was launched from the oldest launch template or launch configuration.',
		],
	},
	{
		question:
			"A team is deploying AWS resources, including EC2 and RDS database instances, into a VPC's public subnet after recovering from a system failure. The team attempts to establish connections using HTTPS protocol to these new instances from other subnets within the VPC, and from other peered VPCs within the same region, but receives numerous 500 error messages. The team needs to quickly identify the cause or causes of the connection problem that prevents connecting to the new subnet. What AWS solution should they use to identify the cause of the network problem?",
		options: [
			'A. Amazon Route 53 Resolver',
			'B. VPC Reachability Analyzer',
			'C. VPC Network Access Analyzer',
			'D. Amazon Route 53 Application Recovery Controller (ARC)',
		],
		answer: [1],
		explanation: [
			"(A). Amazon Route 53 Resolver is a service that provides recursive DNS resolution within a VPC. It is not specifically designed for troubleshooting network connectivity issues within a VPC. It's more focused on DNS resolution.",
			'(B). VPC Reachability Analyzer is a service that helps you analyze and troubleshoot connectivity between resources within your VPC. It can identify the source of network connectivity problems by evaluating the routing path between resources. In this scenario, it is the most appropriate tool for quickly identifying the cause of the network problem preventing connections to the new subnet.',
			"(C). VPC Network Access Analyzer helps you analyze and evaluate the access policies for resources within your VPC, ensuring that they comply with your security requirements. While it's a valuable tool for security analysis, it's not specifically designed for troubleshooting connectivity issues.",
			"(D). Amazon Route 53 Application Recovery Controller is a service that helps you set up and run an application recovery across multiple AWS regions. It's focused on application-level recovery and resilience, and is not intended for troubleshooting network connectivity within a VPC.",
		],
	},
	{
		question:
			'A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?',
		options: [
			'A. Use AWS Config rules to define and detect resources that are not properly tagged.',
			'B. Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.',
			'C. Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.',
			'D. Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.',
		],
		answer: [0],
		explanation: [
			'(A). AWS Config is a service that provides a detailed view of the configuration of AWS resources. Config rules allow you to define desired configurations and evaluate resources for compliance. In this case, you can create a custom Config rule to check if resources like EC2 instances, RDS DB instances, and Redshift clusters have the required tags. This approach is automated and provides continuous monitoring for compliance.',
			'(B). While Cost Explorer can help you visualize costs and resource usage, it is not designed for tagging enforcement or compliance checking. Manually tagging resources based on Cost Explorer information is not an efficient or scalable solution.',
			"(C). This approach involves writing custom code to check for tags. While it's possible to do this, it requires manual intervention to run the code periodically on an EC2 instance. This is less automated and efficient compared to using AWS Config rules and Lambda functions.",
			'(D). This option involves writing custom code to check for tags, similar to option C. However, it takes it a step further by using AWS Lambda and CloudWatch to automate the process. This is a valid alternative to using AWS Config rules, but it may require more manual setup and management compared to Config rules.',
		],
	},
	{
		question:
			'A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?',
		options: [
			'A. Containerize the website and host it in AWS Fargate.',
			'B. Create an Amazon S3 bucket and host the website there.',
			'C. Deploy a web server on an Amazon EC2 instance to host the website.',
			'D. Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework',
		],
		answer: [1],
		explanation: [
			'(A). While AWS Fargate is a powerful service for running containers without having to manage the underlying infrastructure, it may be overkill for hosting a simple static website. Containerizing the website and using Fargate could incur additional costs and complexity that may not be necessary for this use case.',
			'(B). This is the most cost-effective and straightforward option for hosting a static website. Amazon S3 is designed for static content hosting and is highly scalable and cost-effective. You can directly host static files like HTML, CSS, JavaScript, and images in an S3 bucket. This approach eliminates the need for running servers or containers.',
			'(C). While hosting a website on an EC2 instance is a common approach, it may be over-engineered for a simple static website. It involves provisioning and managing an EC2 instance, which comes with additional maintenance overhead and costs associated with running a server.',
			'(D). This option involves setting up a complex architecture with an Application Load Balancer (ALB), AWS Lambda, and Express.js. This is typically used for serverless applications or microservices, and it may be overcomplicated and costly for hosting a static website.',
		],
	},
];

export default builder;
