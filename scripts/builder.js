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
			'Query the local instance metadata: EC2 instances have access to a special HTTP service called the "instance metadata service." This service provides a wealth of information about the instance, including its instance ID, region, security group, and importantly, its public and private IP addresses. By making a simple HTTP request to a well-known URL (http://169.254.169.254/latest/meta-data/), software running on the instance can retrieve this information.',
			"Query the local instance userdata: User data is information that you can pass to an EC2 instance when it starts. While it can be used for various purposes, it doesn't provide information about the instance's public or private IP addresses.",
			"Query the appropriate Amazon CloudWatch metric: CloudWatch metrics provide monitoring data for AWS resources, but they don't directly provide information about the IP addresses of the instance.",
			'Use an ipconfig or ifconfig command: These commands are typically used in operating systems to view network configurations. However, they are not the preferred method for applications running on an EC2 instance to programmatically determine their own IP addresses.',
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
			'Enable S3 versioning on the bucket (Right): Enabling S3 versioning is the correct choice. It keeps multiple versions of an object in the same bucket. Even if an object is deleted or overwritten, you can still access previous versions, thus protecting against accidental deletion and overwriting.',
			"Access S3 data using only signed URLs (Wrong): Using signed URLs is a way to control who can access your S3 objects, but it doesn't inherently prevent accidental deletion or overwriting. It's a security measure for controlling access, not for versioning or preventing accidental data changes.",
			'Disable S3 delete using an IAM bucket policy (Right): Creating an IAM bucket policy that denies the "s3:DeleteObject" and "s3:DeleteObjectVersion" actions can prevent objects from being deleted. This is a valid method to protect against accidental deletion.',
			"Enable S3 Reduced Redundancy Storage (Wrong): Enabling Reduced Redundancy Storage is about changing the storage class for your objects to a lower level of durability, and it does not protect against accidental deletion or overwriting. It's a cost-saving measure but doesn't enhance data protection.",
			"Enable multi-factor authentication (MFA) protected access (Wrong): Enabling MFA for S3 access adds an extra layer of security to your AWS account, but it doesn't directly protect against accidental deletion or overwriting of S3 objects. It primarily helps secure access to the AWS account itself.",
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
			"Creating a copy of the EBS volume without taking a snapshot means you're essentially duplicating the existing volume. This is useful if you want an identical copy of the volume for some reason. However, it doesn't provide the same level of data backup and recovery as a snapshot.",
			"Storing a snapshot of the volume means you're creating a point-in-time backup of the data on the volume. This allows you to recreate the volume later from the snapshot if needed. Snapshots are a reliable way to back up and recover EBS volumes.",
			"Downloading the content to an EC2 instance is an option, but it doesn't directly relate to recreating the EBS volume later. It's more about transferring data to an existing EC2 instance.",
			"While backing up data to a physical disk is a valid approach, it's not specific to recreating an EBS volume. It involves copying data to an external storage device, which can be useful for offline backups, but it doesn't pertain to the process of recreating an EBS volume.",
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
			"Possible for EBS volumes (Wrong): This option is not accurate. /dev/sda1 is generally reserved for the root device, and it's not recommended to use it for additional EBS volumes.",
			"Reserved for the root device (Right): This is the correct answer. In Amazon EC2, /dev/sda1 is typically reserved for the root device, which is where the operating system is installed. It's not recommended to use this device name for additional EBS volumes.",
			"Recommended for EBS volumes (Wrong): Using /dev/sda1 is generally not recommended for additional EBS volumes. It's typically reserved for the root device.",
			"Recommended for instance store volumes (Wrong): /dev/sda1 is typically used for the root device, whether it's backed by an EBS volume or an instance store. It's not specifically recommended for instance store volumes.",
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
			'Redundancy Removal System (Wrong): This is not the correct expansion of RRS in the context of Amazon S3. RRS stands for Reduced Redundancy Storage, which is a specific storage option provided by Amazon S3.',
			'Relational Rights Storage (Wrong): This is not the correct expansion for RRS. In the context of Amazon S3, RRS stands for Reduced Redundancy Storage, which is a storage class designed for non-critical, reproducible data.',
			'Regional Rights Standard (Wrong): This is not the correct expansion of RRS in the context of Amazon S3. RRS stands for Reduced Redundancy Storage, which is a specific storage class offered by Amazon S3.',
			'Reduced Redundancy Storage (Right): This is the correct answer. RRS stands for Reduced Redundancy Storage. It is a storage option provided by Amazon S3 designed for non-critical, reproducible data. Objects stored with RRS are replicated across fewer facilities than objects stored with Standard Storage, which makes it less durable but more cost-effective for certain use cases.',
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
			'Multiple IP address (Incorrect): This option is not specific enough. All Amazon EC2 instances are assigned multiple IP addresses, including both public and private addresses. This is not a distinct category of IP address.',
			'Public IP address (Incorrect): The public IP address assigned to an Amazon EC2 instance is reachable from the public internet. It allows the instance to communicate with the internet, and external entities on the internet can reach the instance using this IP address. This option is not only reachable from within the Amazon EC2 network.',
			"Private IP address (Correct): The private IP address is only reachable from within the Amazon EC2 network or from connected Virtual Private Clouds (VPCs) if applicable. It's used for communication within the AWS network.",
			'Elastic IP Address (Incorrect): An Elastic IP address is a static, public IPv4 address that you can allocate to your AWS account and associate with your EC2 instances. While it can be remapped to different instances, it is also reachable from the public internet. Therefore, it can be accessed both within the Amazon EC2 network and from external sources on the internet.',
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
			'Simple Web Flow (Incorrect): This is not the correct expansion of SWF. SWF stands for Simple Workflow, not "Simple Web Flow". SWF is a fully managed workflow service provided by Amazon Web Services (AWS).',
			'Simple Work Flow (Correct): This is the correct expansion of SWF. SWF stands for Simple Workflow. It is a fully managed service provided by AWS for building applications with distributed, asynchronous tasks.',
			'Simple Wireless Forms (Incorrect): This is not the correct expansion of SWF. SWF stands for Simple Workflow, not "Simple Wireless Forms". It is not related to wireless forms.',
			'Simple Web Form (Incorrect): This is not the correct expansion of SWF. SWF stands for Simple Workflow, not "Simple Web Form". It is not related to web forms.',
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
];

export default builder;
