<div align="center">
<img src='https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png' height='140'>

</div>

<h1 align="center">
  AWS Solutions Architect Associate - Notes
</h1>

<p align="center">
A compilation of notes for the SAA-C03 exam. These notes are meticulously organized to provide a structured study guide.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/state-in_development-blue" alt="version">
</p>

## Storage Services

### Simple Storage Service (S3)

- #### S3 Characteristics
  
  - **Object Storage Service**: S3 functions as an object storage service, enabling the storage and retrieval of data in the form of objects.
  Each object comprises data, a unique key for identification, and associated metadata.

  - **Scalability**: S3 exhibits exceptional scalability, allowing for the storage of virtually limitless data. It dynamically adjusts to meet
  your expanding storage requirements.

  - **Maximum Object Size**: Amazon S3 accommodates objects with a maximum size of up to 5 terabytes (TB).
 
  -  **Universal Namespace**: Amazon S3 operates on a global namespace principle. This mandates that bucket names must be globally unique across all
  AWS accounts. This precaution guarantees that no two users or accounts can create buckets with identical names, regardless of their respective regions.

  - **Durability and Availability**: S3 is architected for an extraordinary 99.999999999% durability and 99.99% availability over the course of a year,
  providing a highly reliable storage solution.

  - **Privacy Settings**: By default, S3 Buckets are set to private. However, if you intend to grant public access, you have the option to employ Access
  Control Lists (ACLs) and Bucket Policies to manage permissions.

  - **Strong Read-After-Write Consistency**: Following a successful write operation (PUT) of a new object or an overwrite of an existing one, any subsequent
  read request promptly retrieves the most up-to-date version of the object. This ensures strong data consistency after write operations.

- #### S3 Bucket Policies
  
  - ##### S3 Bucket Policies Characteristics
    
    - **Definition**: S3 Bucket Policies serve as a mechanism to regulate who can access your buckets and the actions they are permitted to perform.
   
    - **JSON-Based Configuration**: Amazon S3 Bucket Policies are structured in JSON (JavaScript Object Notation) format. This allows for precise
    management of permissions for your S3 buckets.

    - **Granular Access Control**: Bucket policies provide a granular level of control over permissions, allowing you to specify detailed access rules
    for different entities or actions.
   
    - **Flexibility and Customization**: By leveraging JSON-based policies, you have the flexibility to craft highly customized access rules, tailoring
    them to your specific security requirements.

  - ##### Components of a Bucket Policy
 
    - **Statement**: This serves as a foundational element within a policy, delineating the permissions, resources, and conditions. It is possible to have
    multiple statements within a policy.

    - **Effect**: This parameter explicitly specifies whether a given statement grants or denies access. It can be set to either 'Allow' or 'Deny'.
   
    - **Principals**: This section designates the entity to which the policy applies, be it an AWS account, IAM users, or a group.
   
    - **Action**: It details the specific actions that are either permitted or prohibited.
   
    - **Resources**: This section identifies the AWS resources (such as buckets or objects) that the policy pertains to.
   
    - **Condition**: While optional, this facet allows for the imposition of additional conditions that must be met for the policy to be enforced.
   
- #### S3 ACLs
  
  - ##### S3 ACLs Characteristics
 
    - **Definition**: S3 Access Control Lists (ACLs) represent legacy methods for managing access to S3 objects and buckets.
   
    - **Granular Access Control**: ACLs provide a more fine-grained level of control over access compared to bucket policies. They allow for specific
    permissions to be assigned to individual objects and buckets.

    - **XML-Based Configuration**: Amazon S3 Access Control Lists (ACLs) are structured in XML (eXtensible Markup Language) format, providing a structured
    way to define access rules.

  - ##### Types of ACLs
 
    - **Bucket ACL**: This type of ACL controls who can perform certain bucket-level operations, such as creating new objects within the bucket.
   
    - **Object ACL**: Object ACLs dictate who can perform operations on individual objects within a bucket. This includes actions like reading
    and writing object data.

  - ##### S3 ACLs Permissions
 
    - **READ**: Grants a user the ability to list the objects in a bucket and read the data of those objects.
   
    - **WRITE**: Enables a user to create new objects, overwrite existing ones, and delete objects.
   
    - **READ_ACP**: Allows a user to read the Access Control Lists associated with objects.
   
    - **WRITE_ACP**: Permits a user to modify an object's Access Control List.
   
    - **FULL_CONTROL**: Grants a user the ability to perform any action on the object, including both read and write operations.
   
- #### Static Website Hosting

  - **Definition**: Amazon S3 can be utilized as a platform for hosting static websites, encompassing HTML, CSS, JavaScript, images, and various other client-side assets.
 
  - **Cost-Effectiveness**: This method of hosting provides an efficient and economical solution for delivering content that doesn't necessitate server-side processing.
  It minimizes operational costs associated with traditional web hosting services.

- #### Object Versioning

  - **Definition**: Object versioning in Amazon S3 is a feature that enables you to retain multiple versions of an object within a bucket.
 
  - **Overview**: Upon activation, any write operation (such as a PUT request) performed on an existing object generates a new version of that object.
 
  - **Version Status**: Once versioning is enabled, it cannot be outright disabled; it can only be temporarily suspended.
 
  - **Version ID**: Every iteration of an object is furnished with a distinct identifier, known as a Version ID.
 
  - **Latest Version**: By default, when you request an object, S3 provides the most recent version. However, if necessary, you can specify a particular
  version to retrieve. This allows for precise control over which version of an object is accessed.

- #### S3 Lifecycle Policies

  - ##### S3 Lifecycle Policies Characteristics
 
    - **Definition**: S3 Lifecycle policies provide a means to establish rules for the automated management of objects throughout their lifecycle.
   
    - **Overview**: These policies encompass a range of actions, including transitioning objects to different storage classes or even orchestrating their deletion
    after a specified period.

    - **Automated Cleanup**: They enable the automated removal of objects that are no longer needed, helping to keep storage usage efficient and clutter-free.
   
    - **Cost Optimization**: By automating the transition of objects to lower-cost storage classes, lifecycle policies help reduce overall storage expenses over time.
   
  - ##### Components of a Lifecycle Policy
 
    - **Transition Actions**: This component dictates when objects migrate from one storage class to another. For instance, transitioning from Standard to S3 Standard-IA
    after a defined number of days.

    - **Expiration Actions**: This facet allows for the establishment of rules concerning when objects are to be permanently removed, for instance, after a specified
    number of days.

- #### Multipart Upload
 
  - **Definition**: Multipart Upload is a fundamental feature in Amazon S3 designed for efficiently handling the upload of large objects. It provides a reliable
  mechanism for uploading files that surpass the size limit for a single operation.
  
  - **Process**: To initiate a multipart upload, a 'POST' request is sent to the specific object's URL endpoint within the S3 bucket. This request returns an
  upload ID, which serves to uniquely identify the multipart upload. Once underway, object parts can be uploaded in any order, each being assigned a distinct part number.

  - **Requirement**: Multipart Upload is recommended for files over 100 MB and required for files over 5 GB.
  
  - **Minimum Part Size**: Each part (except the final part) must have a minimum size of 5 megabytes (MB). The size of the final part may be smaller, contingent on the overall
  size of the object.
  
  - **Reliability and Efficiency**: Multipart Upload ensures the reliable and efficient transfer of large objects, minimizing the risk of upload failures and providing a more
  robust method than single-operation uploads.
  
  - **Resilience to Interruptions**: In the event of network issues or interruptions during the upload process, Multipart Upload allows for the re-upload of only the
  affected parts, rather than the entire object.

- #### S3 Accelerated Transfer

  - **Definition**: Amazon S3 Transfer Acceleration is a feature within Amazon Simple Storage Service (Amazon S3) that facilitates rapid, convenient, and secure file
  transfers over the internet. It leverages the Amazon CloudFront content delivery network (CDN) to expedite the uploading and downloading of objects.

  - **Acceleration Endpoint**: Upon enabling S3 Transfer Acceleration for a specific bucket, AWS furnishes a distinct accelerated endpoint (URL) exclusively designated
  for uploading and downloading objects.

  - **Upload Process**: When utilizing S3 Transfer Acceleration to upload an object, the data initially traverses to an AWS edge location situated nearest to your location.
  Subsequently, it is securely transmitted to the designated S3 bucket.

- #### S3 Storage Classes

  - ##### S3 Standard
  
    - **Description**:  The Standard storage class is the default and most widely used tier within Amazon S3. It is designed for data with high access frequency,
    providing immediate and low-latency retrieval of stored objects.
    
    - **Cost**: Relatively higher storage cost compared to other classes, but offers the highest availability.
    
    - **Use Case**: Hosting dynamic and frequently accessed content, such as website assets, application data, and real-time analytics.
    
    - **Durability and Availability**: Offers 99.999999999% (11 9's) durability and 99.99% availability over a year.

  - ##### S3 Standard-IA (Infrequent Access)
  
    - **Description**: Standard-IA is tailored for data characterized by less frequent access, yet necessitates prompt retrieval when required. It is an
    economical choice for data that does not require immediate access.
    
    - **Cost**: Incurs a nominal per-GB storage fee and a corresponding per-GB retrieval fee. This makes it cost-effective for data with occasional
    access requirements.
    
    - **Use Case**: Storing data like backup archives, log files, and regulatory compliance records.
    
    - **Transition Considerations**: Objects are automatically transitioned to Standard-IA after 30 days of no access in Standard class.
    
    - **Availability**: Offers the same level of availability as the Standard class.

  - ##### S3 One Zone-IA
  
    - **Description**: One Zone-IA storage class is similar to Standard-IA but is confined to a single Availability Zone. This results in a lower cost, making
    it a cost-effective alternative for infrequently accessed data.
    
    - **Cost Consideration**: Costs approximately 20% less than regular Standard-IA. However, it may have slightly lower availability due to the single Availability Zone deployment.
    
    - **Use Case**: Storing secondary backup copies of data that do not necessitate multi-Availability Zone redundancy.
    
    - **Availability Considerations**: While slightly less available than Standard-IA, it is still suitable for data with infrequent access needs in a single Availability Zone.
   
  - ##### S3 Intelligent-Tiering
  
    - **Description**: Intelligent-Tiering is a dynamic storage class that automatically moves objects between Frequent Access Tier and Infrequent Access Tier based on observed
    access patterns. It optimizes costs for variable workloads.
    
    - **Cost Efficiency**: Automatically transitions objects to a lower-cost tier when access patterns change, saving on storage costs.
    
    - **Use Case**: Ideal for data with unpredictable access patterns, where cost optimization is crucial.
    
    - **Savings Considerations**: It may incur a small monthly monitoring and automation fee, but this is offset by the cost savings achieved through intelligent tiering.
   
  - ##### S3 Glacier Flexible Retrieval
  
    - **Description**: The Glacier storage class is specifically designed for long-term archival storage. It is characterized by retrieval times ranging from minutes to hours.
    
    - **Cost Structure**: Incurs charges for data access, comprising a low per-GB storage cost and a separate per-GB retrieval fee.
    
    - **Use Case**: Storing data that is rarely accessed but requires long-term retention for compliance or legal purposes.
    
    - **Durability and Availability**: Offers the same high durability as Standard class but with slower retrieval times.
   
  - ##### S3 Glacier Deep Archive
  
    - **Description**: Glacier Deep Archive is tailored for data with extraordinarily infrequent access patterns and no immediate retrieval time constraints.
    It offers the lowest storage cost among all S3 storage classes.
    
    - **Cost Structure**: Incurs charges for data access, involving a low per-GB storage cost and a separate per-GB retrieval fee.
    
    - **Use Case**: Suitable for extremely long-term archival, where data access is extremely rare.
    
    - **Retrieval Time**: Retrieval times can take several hours, making it unsuitable for data with immediate retrieval requirements.

- #### S3 Object Replication

  - **Definition**: Amazon S3 Replication is a feature that allows you to automatically and asynchronously replicate objects from one S3 bucket to another
  in the same or a different AWS Region.
  
  - **Cross-Region Replications**: S3 replication can be set up to replicate objects between buckets in different AWS Regions. This provides geographic
  redundancy and helps ensure data availability even in the event of a regional outage.
  
  - **Same-Region Replication**: You can also use S3 replication to replicate objects within the same AWS Region. This can be useful for maintaining copies
  in different accounts, for example, for auditing or security purposes.
  
  - **Supported Storage Classes**: You can replicate objects between buckets that use different storage classes, such as Standard, Standard-IA,
  Intelligent-Tiering, Glacier, and others.
  
  - **Versioning**: In order to set up replication between 2 S3 buckets, you must enable versioning in both the source and destination buckets. This is a
  crucial requirement for replication to function properly.
  
  - **All objects or a subset**: S3 replication allows you to choose whether you want to replicate all objects in a bucket or only a subset based on specific
  criteria, such as objects with a certain prefix in their key names.
  
  - **Ownership**: By default, objects replicated to the destination bucket will retain the ownership of the source account. This means that the original AWS
  account that owns the source bucket will also own the replicated objects.
  
  - **Replication Time Control (RTC)**: RTC allows you to specify an SLA (service level Agreement) for the replications process. You can set rules for how quickly
  objects should be replicated after they are created or modified in the source bucket.
  
  - **Batch Replication**: You can use batch replication to replicate existing objects from the source bucket to the destination bucket. Batch replication is a
  method of replicating a large number of objects in a single operation.
  
  - **One-way replication**: S3 replication is one-way, meaning that objects are replicated from the source bucket to the destination bucket, but changes made in
  the destination bucket are not replicated back to the source.
  
  - **Deletes are not replicated**: if an object is deleted from the source bucket, that deletion is not automatically replicated to the destination bucket. The
  object will remain in the destination bucket unless it is manually deleted.

- #### S3 Events

  - **Definition**: S3 Events are notifications sent by Amazon S3 whenever certain events occur within a bucket.
  
  - **Event Triggers**: S3 Events can be triggered by various actions within a bucket, such as object creation, deletion, or restoration.
  
  - **SNS Topics**: Events can also be sent to Amazon Simple Notification Service (SNS) topics to notify multiple subscribers.
  
  - **Lambda Functions**: S3 Events are often used to trigger AWS Lambda functions, allowing for serverless processing of objects. This is a powerful way
  to automate tasks based on S3 activity.

- #### S3 Object Lock

  - ##### S3 Object Lock Characteristics
  
    - **Definition**: Amazon S3 Object Lock is a feature that allows you to enforce retention policies on objects stored in an S3 bucket.
   
    - **Level**: Object Lock can be implemented at both the individual object level and across the entire bucket.
    
    - **Retention Period**: You can set a specific retention period for objects in days or years.
    
    - **Immutability and Data Integrity**: Object Lock helps to ensure the immutability and integrity of your data, making it suitable for applications
    with strict compliance requirements.
  
  - ##### Retention Modes
 
    - **Legal Hold**: When Legal Hold is applied to an object, it ensures that the object remains in a state of preservation, regardless of any specified
    retention periods. This means the object cannot be deleted or altered until the legal hold is explicitly removed. Legal Hold is typically used for legal
    proceedings, investigations, or situations where data preservation is mandated by law or regulation.
  
    - **Governance Mode**: In this mode, you can specify a retention period during which an object cannot be deleted or overwritten by anyone, including the
    bucket owner. However, a user with appropriate permissions can still remove the retention policy.
    
    - **Compliance Mode**: In this mode, once an object is locked, its retention cannot be shortened, and the object cannot be deleted by anyone until the retention
    period expires. This mode is designed for regulatory compliance requirements.

- #### Glacier Vault Lock

  - **Definition**: Amazon S3 Glacier Vault Lock is a feature that allows you to enforce compliance controls on your S3 Glacier vaults.
  
  - **Compliance Control**: Glacier Vault Lock helps you implement compliance controls for your archived data, ensuring it remains unaltered and secure for the
  specified retention period.
  
  - **Retention Period**: You can set a specific retention period for your Glacier vault, during which the data cannot be deleted or altered.
  
  - **Immutability and Data Integrity**: The Vault Lock feature ensures the immutability and data integrity of your archived data, making it suitable for applications
  with strict compliance requirements.
  
  - **Legal and Regulatory Requirements**: Glacier Vault Lock is designed to help you meet legal and regulatory requirements for data archiving and retention.
  
  - **Retention Policy Enforcement**: Once a Glacier vault is locked, its retention cannot be shortened, and the data cannot be deleted until the specified retention period expires.
  
  - **Emergency Access**: While the Vault Lock is in place, you can create and lock a legal hold to allow for temporary suspension of the retention policy for compliance
  checks or legal investigations.

- #### S3 Access Points

  - ##### S3 Access Points Characteristics

    - **Named Endpoints**: Access Points are named endpoints in S3 that are used to upload and access objects. They are independent of the bucket’s name and can be associated
    with one or more buckets.
    
    - **Access Control Policies**: You can attach specific access policies to an Access Point. This allow you to control who can access the objects through the Access Point,
    and what action they can perform.
    
    - **Endpoint DNS Names**: Each Access Point has its own unique DNS name, allowing you to access objects using the access point’s endpoint.
   
  - ##### Network Controls
 
    - **VPC Endpoints**: Access Points can be associated with Virtual private Cloud (VPC) endpoints, allowing access to S3 resources without traversing the public internet.
    
    - **VPC Endpoints**: You can attach an access policy to an Access Point to control which VPCs or VPC endpoints can use the Access Point.
   
  - ##### Use Cases
 
    - **Multi-Tenant Environment**: Access Points are useful in scenarios where multiple teams or applications share a single bucket, but need separate access controls.
    
    - **Isolation and Control**: Try to provide additional isolation and control over access to your S3 data.
    
    - **Compliance and Security**: Access Points help enforce compliance requirements and enhance security by providing distinct access policies.

- #### Object Encryption

  - **SSE-S3**: Amazon S3 manages the encryption process for you. When you upload an object, S3 uses its own encryption keys to encrypt the object. These keys are unique to your
  account  and the object.
  
  - **SSE-KMS**: Amazon S3 uses AWS Key Management Service (KMS) to manage the encryption keys. With this option, you can have more control over key management, including features
  like key rotation and auditing.
    
  - **SSE–C**: You (customer) provide your own encryption key and manage them outside of AWS. When you upload an object, you need to include the encryption key in the request
  headers, and Amazon S3 uses it to encrypt the object.
      
### Amazon Instance Store

Amazon Instance Store, also known as ephemeral storage, provides temporary block-level storage for Amazon EC2 Instance. It is physically
attached to the host computer on which your instance runs and is ideal for temporary storage of data that changes frequently.

- #### Amazon Instance Store Characteristics

  - **Direct Hardware Attachment**:Instance Store volumes are directly attached to the physical hardware of the host machine,
  providing exceptionally high input/output operations per second (IOPS) performance.

  - **Non-Persistence of Data**: Data on an Instance Store volume is not persisted beyond the life of the associated instance.
  If the instance is stopped or terminated, all data on the instance store is lost.

  - **Instance Type Dependency**: Not all EC2 instance types come with Instance Store. When selecting an instance type, you
  need to choose one that specifies an "Instance Store" under the "Storage" section.

  - **Data Preservation on Instance Stop**: When an instance is stopped (but not terminated), the data on the Instance Store is
  preserved. However, it's important to note that if the underlying hardware fails, you may lose data.

  - **Lack of Snapshot Support**: Instance Store volumes do not support snapshots, which means you cannot easily create backups
  or migrate data.

### Amazon Elastic Block Store (EBS)

Amazon Elastic Block Store (Amazon EBS) is a block-level storage service provided by Amazon Web Services (AWS) for use with Amazon Elastic
Compute Cloud (EC2) instances. It offers durable and scalable block-level storage that you can attach to your EC2 instances.

- #### EBS Characteristics

  - **Block-Level Storage**: Amazon Elastic Block Store (EBS) provides raw storage volumes that can be directly attached to EC2 instances. This
    characteristic allows you to utilize EBS much like a physical hard drive, making it suitable for a wide array of applications.

  - **Dynamic Volume Types**: EBS volume types can be modified seamlessly. For example, transitioning from a gp2 volume to an io2 volume can
    be accomplished while the instance is operational.

  - **Resizable Volumes**: EBS volumes can be adjusted in size without the need to halt or restart the associated instance. However, it's
    important to note that the filesystem within the operating system must be extended in order for the OS to recognize the resized volume.

- #### EBS Volume Types

  - ##### General Purpose (SSD)

    - **Description**: General Purpose SSD volumes, known as gp2, strike a balance between price and performance. They are engineered to offer a
    mix of consistent baseline performance and burst performance, catering to applications with diverse I/O requirements.

    - **Workload Suitability**: These volumes are versatile and suitable for a wide range of workloads, including small to medium-sized databases,
    development and test environments, as well as boot volumes.

    - **Durability**: Up to 99.9% durability.

  - ##### Provisioned IOPS (SSD)

    - **Description**: Provisioned IOPS SSD volumes, also known as io1, are designed for I/O-intensive workloads that require consistently high performance.
    You specify the desired number of IOPS when you create the volume.
    
    - **Performance and Cost Considerations**: While being the most expensive type, Provisioned IOPS volumes ensure top-tier performance for applications
    that demand low-latency and high-throughput storage.
    
    - **Workload Suitability**: Provisioned IOPS volumes are ideal for applications that require low-latency, high-performance storage such as critical
    business applications, large databases, and high-transactional workloads.
    
    - **Durability**: Up to 99.9% durability.

  - ##### Throughput Optimized (HDD)

    - **Description**: Throughput Optimized HDD volumes, also known as st1, are designed for frequently accessed, large, sequential workloads. They are optimized for consistency,
      high-throughput performance.

    - **Workload Suitability**: Throughput Optimized volumes are suitable for data warehouses, log processing, and other workloads that require high-volume, sequential read and write operations.

    - **Durability**: Up to 99.9% durability.

  - ##### Cold (HDD)

    - **Description**: Cold HDD volumes, also known as sc1, are designed for less frequently accessed workloads with large, sequential read and write. They offer the lowest
    storage cost but with the trade-off of lower performance compared to other volume types.
    
    - **Cost-Effectiveness**: Cold Volumes is typically the lowest-cost option among Amazon Web Services (AWS) EBS volume types.
    
    - **Workload Suitability**: Cold volumes are suitable for scenarios where cost-effectiveness is a priority, and occasional access to the data is sufficient,
    such as infrequently accessed archives or backup storage.
    
    - **Durability**: Up to 99.9% durability.

- #### EBS Snapshots

  - **Backup and Recovery**: EBS Snapshots allow you to create backups of your EBS volumes, providing a reliable way to recover your data in case of accidental deletion, corruption,
    or other data loss scenarios.

  - **Incremental Backups**: EBS Snapshots are incremental, which means that only the blocks that have changed since the last snapshot are copied. This reduces both time and costs
    associated with creating and storing backups.

  - **Stored in Amazon S3**: EBS Snapshots are stored in Amazon S3, a highly durable and redundant storage service. This ensures the durability and availability of your snapshots.

  - **Consistent Snapshot**: To ensure a consistent snapshot, it is advisable to stop the instance before taking a snapshot.
 
  - **EBS Fast Snapshot Restore (FSR) feature**: The AWS EBS Fast Snapshot Restore (FSR) feature accelerates the creation of volumes from snapshots. This is done by using additional
  compute and memory to copy the data from the snapshot to the new volume more quickly. FSR can significantly reduce the time it takes to create a volume from a snapshot. For example,
  creating a 1 TB volume from a snapshot without FSR can take several hours, but creating the same volume with FSR enabled can take as little as 10 minutes. You can also use AWS EBS Fast
  Snapshot Restore (FSR) to initialize from inited snapshots. This means that you can create a new EBS volume from an existing snapshot that has already been initialized. 

  - **Snapshot Lifecycle Policies**: AWS provides tools like Amazon Data Lifecycle Manager (DLM) that allow you to automate the creation and retention of EBS snapshots. This helps you
    manage your backup strategy more effectively.

  - **Sharing Snapshot**: Snapshots can be shared, but only in the region in which they were created. To share to other regions, you will need to copy them to the destination region first.

  - **Encrypted Snapshots**: You can choose to encrypt your EBS snapshots using AWS Key Management Service (KMS) keys for added security.

- #### EBS Encryption

  - **Data Security**: Amazon EBS Encryption is a feature that allows you to encrypt your Elastic Block Store (EBS) volumes at rest.

  - **AWS Key Management Service (KMS)**: EBS Encryption uses AWS Key Management Service (KMS) to manage the encryption keys. KMS is a fully managed encryption service that allows
    you to create and control cryptographic keys used for encryption.

  - **Granular Control**: With AWS KMS, you have granular control over the encryption keys. You can create, rotate, disable, and delete keys, as well as audit key usage to enhance security.

  - **Snapshot Encryption**: When you create a snapshot of an encrypted EBS volume, the snapshot is also encrypted. This ensures that data remains protected throughout its lifecycle.

  - **Snapshots Sharing**: You can share snapshots of encrypted volumes with other AWS accounts, but the snapshots remain encrypted. The recipient account must have the necessary
    permissions to use the shared snapshot.

- #### How to encrypt EBS Volumes that are not encrypted

  - **Step 1**: Create a snapshot of the unencrypted root EBS volume.

  - **Step 2**: Create a copy of the snapshot and select the encryption option.

  - **Step 3**: Create an AMI from the encrypted snapshot.

  - **Step 4**: Use that AMI to launch new encrypted instances.

- #### EBS Hibernation

  - **Preservation of In-Memory State**: Amazon EBS Hibernation is a feature that allows you to pause and resume Amazon EC2 instances, preserving their in-memory state. When
    an instance is hibernated, the contents of its RAM are written to the associated EBS root volume. This enables you to quickly restart the instance in the same state it
    was in when it was hibernated.

  - **EBS Volume Encryption**: To use hibernation, the root EBS volume must be encrypted. This ensures that the in-memory state is securely stored.

  - **Quick Resume**: When you restart a hibernated instance, it can quickly resume from the point at which it was hibernated. This is particularly useful for instances with
    long start-up times or important in-memory data.

  - **Hibernation Time**: The maximum hibernation time for an Amazon EC2 instance is 60 days. This means that an instance can remain hibernated for up to 60 days before it needs to be
    started again.

  - **Instance Type**: Hibernation is only available for On-Demand and Reserved Instances.

### Amazon Elastic File System (EFS)

Amazon Elastic File System (Amazon EFS) is a scalable and fully managed file storage service provided by AWS. It's designed to provide shared access to a file system, 
allowing multiple EC2 instances to read and write to the same file system at the same time.

- #### EFS Characteristics

  - **Shared File Storage**: Amazon EFS provides a shared file system that can be accessed by multiple EC2 instances and services concurrently.

  - **Scalable**: EFS can automatically scale to accommodate the storage needs of your applications. You can increase or decrease storage capacity as needed.

  - **Backup and Restore**: EFS can automatically scale to accommodate the storage needs of your applications. You can increase or decrease storage capacity as needed.

  - **Suppor**: Amazon Elastic File System (EFS) supports the Network File System version 4 (NFSv4)

  - **Cost Efficiency**: Amazon EFS offers a pay-as-you-go model, meaning you're billed only for the storage you use, without the need for pre-provisioning or upfront
    commitments.

  - **Encryption**: Amazon Elastic File System (EFS) provides encryption at rest by default. When you create a new Amazon EFS file system, the data and metadata
    are automatically encrypted using an AWS Key Management Service (KMS) key.

- #### EFS Classes

  - ##### EFS Standard

    - **Designed for**: Frequently accessed data requiring the highest durability and availability.

    - **Durability**: Up to 99.999999999% durability.

    - **Availability**: Up to 99.99% availability.

  - ##### EFS Standard–Infrequent Access (IA)

    - **Designed for**: Long lived, infrequently accessed data requiring the highest durability and availability.

    - **Durability**: Up to 99.999999999% durability.

    - **Availability**: Up to 99.99% availability.

### Amazon FSx for Windows

Amazon FSx for Windows File Server is a fully managed file storage service provided by AWS. It is designed to provide a fully compatible, native Windows
file system experience to applications and workloads that require shared file storage.

- #### FSx for Windows Characteristics

  - **Fully Managed Service**: Amazon FSx for Windows File Server is a fully managed service, which means AWS handles the underlying infrastructure,
    maintenance, and updates for the file system.

  - **Windows Native File System**: It provides a native Windows file system, making it compatible with Windows applications and workloads without
    requiring any modifications.

  - **SMB Protocol Support**: Amazon FSx supports the Server Message Block (SMB) protocol versions 2.0, 2.1, 3.0, and 3.1.1, allowing seamless integration
    with Windows environments.

### Amazon FSx for Lustre

Amazon FSx for Lustre is a high-performance, fully managed file system designed for compute-intensive workloads. It provides scalable and parallel file
storage that is optimized for applications that require fast access to large amounts of data.

- #### FSx for Lustre Characteristics

  - **High Performance**: FSx for Lustre is optimized for high-performance computing (HPC) and other demanding workloads. It provides low-latency
    access to data, making it ideal for applications like machine learning, analytics, and simulations.

  - **Fully Managed Service**: Like other FSx offerings, Amazon FSx for Lustre is a fully managed service. AWS takes care of the infrastructure,
    maintenance, and updates, allowing you to focus on your applications.

  - **Lustre File System**: FSx for Lustre is built on the Lustre file system, a widely used open-source parallel file system. It is designed for
    high-speed access to data across multiple nodes.

  - **Integration with S3**: You can seamlessly integrate FSx for Lustre with Amazon S3, allowing you to efficiently move data between the two services.
    This is useful for data processing workflows that require both high-speed processing and long-term storage.

### Amazon EFS vs. Amazon FSx for Windows vs. Amazon FSx for Lustre

- **Amazon EFS**: Distributed and highly resilient storage for Linux instances and Linux-based applications.

- **Amazon FSx for Windows**: entralized storage for Windows-based applications, including Microsoft SQL Server, Workspaces, IIS Web Server, and other
  native Microsoft applications.

- **Amazon FSx for Lustre**: High-speed, high-capacity distributed storage, ideal for high-performance computing (HPC), financial modeling,
  and more. It can also directly store data on Amazon S3.

### Amazon Relational Database Service (RDS)

Amazon RDS (Relational Database Service) is a managed database service provided by Amazon Web Services (AWS). It makes it easier to set up,
operate, and scale a relational database in the cloud.

- #### RDS Engines

  - MySQL

  - PostgreSQL

  - MariaDB

  - Oracle

  - Microsoft SQL Server

- #### RDS Multi-AZ

  - **Definition**: RDS Multi-AZ is a feature that provides high availability and fault tolerance for database instances. Its designed to
    enhance the reliability of your database by automatically replicating data to a standby instance located in a different Availability Zone
    within the same AWS region.

  - **Primary Database**: You have a primary database instance that handles both read and write operations. This instance is located
    in one Availability Zone.

  - **Standby Replica**: A standby replica of the primary database is created in a different Availability Zone. This replica is an exact
    copy of the primary database.

- #### RDS Read Replica

  - **Definition**: An Amazon RDS Read Replica is a copy of a source database that is asynchronously updated in near
    real-time. The purpose of a read replica is to offload read traffic from the primary database, which can
    improve the overall performance and scalability.

  - **Read-Only**: Read replicas are read-only-instances. This means you can use the for SELECT queries but cannot
    perform any write operations (INSERT, UPDATE, DELETE) on them.

  - **Asynchronous Replication**: Read replicas use asynchronous replication, which means that changes made to the primary
    database are propagated to the replica with a small delay (lag).

  - **High Availability**: Read replicas can also be used to improve high availability. If the primary database experiences
    a failure, you can promote one of the read replicas to become the new primary database.

  - **Different Availability Zones or Regions**: Read replicas can be created in the same AWS region as the primary database
    or in a different region. This provides additional fault tolerance and disaster recovery options.

  - **Read Replicas from Read Replicas**: It is possible to create read replicas from existing read replicas in Amazon RDS.
    This is known as creating a “multi-tier-replication”. The read replica you create from an existing read replica will have
    additional replication lag compared to the original source database. This means there may be a delay in data replication.

  - **Example**: An Application Load Balancer (ALB) is a sophisticated traffic distributor provided by Amazon Web Services (AWS).
    Operating at the application layer, it intelligently routes incoming requests based on their content, such as URTs, cookies,
    and headers. When it comes to database management, ALBs play a pivotal role. Integrating ALBs with read replicas allows for
    an even more refined approach. It grants you the ability to present a unified, unique DNS name to your applications. This
    is paramount for seamless database access. Instead of managing individual DNS names for each read replica, you offer a singular
    entry point. The ALB, with its content-based routing capabilities, efficiently distributes read traffic to the replicas,
    ensuring load is balanced and response times are optimized.

- #### RDS Proxy

  - **Definition**: Amazon RDS Proxy is a fully managed database proxy service. Provided by Amazon Web Services (AWS). It is designed
    to improve the scalability and availability of applications using Amazon RDS databases.

  - **Connection Pooling**: RDS Proxy efficiently manages database connections, reducing the overhead of establishing and tearing
    connections. This helps improve the performance and efficiency of your application.

  - **High Availability**: RDS Proxy maintains a pool of database connections and automatically routes traffic to healthy database
    instances. In the event of a database failure, it can quickly redirect connections to a healthy instance, reducing downtime.

  - **Query Caching**: RDS proxy can cache frequently executed queries, reducing the load of the database instances and improving response
    time for those queries.

  - **Cost-Efficiency**: By reducing the number of connections to your RDS instances and optimizing resource utilization, RDS Proxy can potentially
    lead to cost savings, especially in scenarios with a high number of short-lived connections.

  - **Compatible Databases**: RDS Proxy is compatible with Amazon RDS instances for MySQL, PostgreSQL, and Aurora databases. It supports both standard
    and Multi-AZ deployments.

  - **Cross-Zone Deployment**: When you deploy an RDS proxy in a Multi-AZ configuration, the proxy is placed in the same AWS Region as your RDS databases,
    but it spans multiple Availability Zones. This provides availability and fault tolerance within a single AWS Region.

  - **Cross-Region Deployment**: RDS proxy also supports cross-region deployments. This means you can deploy an RDS Proxy in one AWS Region and have it
    route traffic to RDS databases in different AWS Region. This allows you to scale your application globally while benefiting from the performance and security of RDS Proxy.

- #### RDS Automatic Backups

  - **Frequency**: RDS takes automated backups of your database instance daily during a user-defined 8-hours window. The default window is
    chosen by AWS, but you can modify it to better suit your needs.

  - **Retention Period**: By default, RDS retains backups for 7 days. However, you have the option to extend the retention period up to a
    maximum of 35 days.

  - **Full Backups**: The automated backups taken by RDS are full backups of your database.

  - **Multi-AZ Deployments**: In Multi-AZ deployments, RDS automatically creates backups from the standby replica, so there is no impact on
    the primary instance’s performance.

  - **Amazon S3 Bucket**: When you create an RDS Backup, it is stored in an Amazon S3 bucket. Each AWS region has a default Amazon S3 bucket for RDS Backup
    storage. It's important to note that users cannot directly view the Amazon S3 bucket used for storing Amazon RDS Backup using the AWS Management Console
    or the AWS CLI. The RDS Backup is managed by AWS, and the bucket is typically not accessible or visible to AWS customers through standard AWS interfaces.

- #### RDS Snapshots

  - **Manual Creating**: Unlike automated backups, which are taken automatically within a specific window, RDS snapshots are created manually by the user.
    
  - **Retention Period**: RDS snapshots are kept until you choose to delete tem. They do not expire after a specific time period like automated backups.
    
  - **Amazon S3 Bucket**: When you create an RDS snapshot, it is stored in an Amazon S3 bucket. Each AWS region has a default Amazon S3 bucket for RDS snapshot
  storage. It's important to note that users cannot directly view the Amazon S3 bucket used for storing Amazon RDS snapshots using the AWS Management Console
  or the AWS CLI. The RDS snapshot is managed by AWS, and the bucket is typically not accessible or visible to AWS customers through standard AWS interfaces.

- #### RDS Automatic Backups vs. RDS Snapshots

  - ##### Creation Method

    - **Automated Backups**: created automatically within a use-defined backup window.
    - **Snapshots**: Created manually by the user.

  - ##### Frequency

    - **Automated Backups**: Taken daily during the defined backup window.
    - **Snapshots**: Created on-demand, whenever the user initiates the snapshot process.

  - ##### Retention Period

    - **Automated Backups**: Retained for a user-defined period (default is 7 days, can be extended up to 35 days).

    - **Snapshots**: Retained indefinitely until manually deleted.

- #### RDS Encryption at Rest

  - **AWS Manages the Keys (AWS KMS)**: This is the default option and uses AWS Key Management Service (KMS) to manage encryption keys.
    With this option, AWS manages the keys for you, and you have the option to use default keys or create custom ones.

  - **Customer Manages the Keys (CMK)**: With this option, you can use KMS keys that you create and manage. This allows you for more
    fine-grained control over key management.

### Amazon Aurora (RDS)

Amazon Aurora is a MySQL and PostgreSQL compatible relational database built for the cloud, that combines the performance and availability 
of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. It is a fully managed database service
provided by Amazon Web Services (AWS).

- #### Aurora Characteristics

  - **Performance**: Aurora provides high performance, with up to 5 times the throughput of standard MySQL running on the same hardware. It achieves
  this by using a distributed, fault-tolerance, self-healing storage system.
  
  - **High availability**: Aurora is designed for high availability. It replicates six copies of your data across three Availability Zones, and
  continuously backs up your data to Amazon S3.
  
  - Backup: Automated backups are always enabled on Amazon Aurora Instances and backups do not impact database performance.
  
  - **Replication**: Aurora supports both synchronous and asynchronous replication to create read replicas for read scalability. It allows up to 15 read
  replicas per Aurora database cluster.
  
  - **Disk Provisioning**: In standard RDS instances, you typically select the storage type and storage capacity, In contrast, Amazon Aurora uses a distributed,
  fault-tolerance storage system that automatically scales storage capacity as needed, up to 128 terabytes per database.
  
  - **Scalability**: Aurora allows you to scale your database resources up or down with just a few clicks in the AWS Management Console. It also supports
  auto-scaling for Aurora Replicas.

- #### Aurora Severless

  - **Definition**: Aurora Serverless is a database deployment option for Amazon Aurora. Amazon Aurora Serverless is designed to automatically  and dynamically
  adjust database capacity based on the application’s needs. It’s a fully managed service that allows you to run your database without the need to manage
  the underlying infrastructure.
  
  - **Auto Scaling**: Aurora Serverless automatically scales the database capacity up or down based on the actual usage. This means that you don't need to manually
  provision and manage the database instance or cluster.
  
  - **Const-Efficiency**: With Aurora Serverless, you pay only for the capacity you use on a per-second basis. This can lead to cost savings, especially for
  applications with unpredictable or sporadic workloads.
  
  - **Data Replication**: Aurora Serverless can be configured as a Global Database, which means you can have an active-active setup across multiple AWS
  regions for low-latency global access.
  
  - **Data API**: Aurora Serverles provides a Data API that allows you to easily access and interact with your database using HTTPS-based API calls.

- #### Aurora Multi-Master

  - **Definition**: Amazon Aurora Multi-Master is a feature provided by Amazon Web Services (AWS) that allows you to create multiple read/write master instances within an
  Aurora database cluster. This means that each master instance can handle both read and write operations, providing increased availability and fault tolerance
  for your applications.
  
  - **High Availability**: With multiple master instances, your application can continue to operate even if one of the master instances fails. This provides a higher
  level of availability and fault tolerance.
  
  - **One-Region**: Amazon Aurora is limited to a single AWS Region. This means that all master instances within an Aurora Multi-Master cluster must be located within
  the same AWS Region.
  
  - **Consistency Guarantee**: Aurora Multi-Master maintains strong consistency across all master. This means that all writes are immediately visible to subsequent readers.
  
  - **Data Replication**: Data is automatically replicated across all master instances, ensuring that each master has an up-to-data copy of the data.
  
  - **Automatic Scaling**: Aurora Multi-Master clusters can scale both read and write workloads by adding or removing master instances dynamically.
  
  - **Global Database**: You can use Aurora Multi-Master in conjunction with Aurora Global Database to create an active-active setup across multiple AWS regions.
 
- #### Aurora Global Database

  - **Definition**: Amazon Aurora Global Database is a feature provided by Amazon Web Services (AWS) that allows you to create a globally distributed, highly available
  with low-latency access for read and write operation. It is designed for applications that require high availability and low-latency access across multiple
  geographic regions.
  
  - **Global Replicas**: With Aurora Global Database, you can create one primary cluster and up to five secondary clusters around the world.
  
  - **Active-Active Replication**: With Global Database, you can have read and write access to multiple clusters simultaneously. This allows for active-active
  configurations, where applications can read and write from any of the clusters.

  - **Automatic failover**: In the event of a primary cluster failure, Aurora Global Database supports automatic failover to one of the secondary clusters. This ensures
  high availability for your applications.
  
  - **Global Write Commit Policy**: You can choose whether to enforce a “write-anywhere” or “write-to-primary” policy. This allows you to control where writes are allowed,
  based on your application’s requirements.

### Amazon DynamoDB

Amazon DynamoDB is a fully managed NoSQL database service provided by Amazon Web Services (AWS). It is designed to provide fast and predictable performance with 
seamless scalability.

- #### DynamoDB Characteristics
  
  - **Data Replication**: Amazon DynamoDB uses synchronous replications across 3 Availability Zones (AZs) within a region to provide high availability
  and data durability.

  - **Consistency Model**: Amazon DynamoDB is eventually consistent by default. This means that when you perform a read operation on a DynamoDB table without
  specifying a specific consistency level, you will receive the most up-to-date data available, but it might not reflect the most recent write.

- #### RCU and WCU

  - **RCU**: Read Capacity Units (RCUs) represent the read throughput capacity of DynamoDB tables. An RCU represents one strongly consistent read per second, or two eventually
  consistent reads per second, for an item up to 4 KB size. Transactional read requests require two RCUs to perform one read per second for items up to 4 KB. If you need to
  read an item that is larger than 4 KB, DynamoDB must consume additional RCUs.

  - **WCU**: Write Capacity Units (WCUs) represent the write throughput capacity of a DynamoDB table. An WCU represents one write per second (up to 1KB) and two WCUs for each
  additional write per second. For writes greater than 1 KB, total number of writes required = (total item size / 1 KB) rounded up.

- #### DynamoDB Consistency Model
  
  - ##### Strong Consistency
    
    - **Description**: With strong consistency, a read operation returns the most-up-to-date data. This means that after a write operation is acknowledged,
    any subsequent read operation will reflect the updated data.
    
    - **Guaranteed Latest Write**: Strong consistency ensures that all operations are guaranteed to see the latest write. It provides a linearizable
    ordering of operations.
    
    - **Parameter Usage**: To achieve strong consistency, you can use the ‘ConsistentRead’ parameter in your read request.
    
    - **Use Cases**: Suitable for applications where the most up-to-date data is crucial. For example, in a financial application, you might need to ensure
    that you’re working with the latest transition data.
    
    - **Latency Consideration**: Offers a higher level of data consistency, but may have latency compared to eventual consistency.
   
  - ##### Eventual Consistency
 
    - **Description**: With eventual consistency, a read operation might not reflect the most recent write. Instead, it guarantees that, given enough time, all
    replicas of a data item will converge to the same value.
    
    - **Performance Comparison**: Eventual consistency is typically faster and requires fewer resources compared to strong consistency.
    
    - **Default Behavior**: By default, DynamoDB provides eventual consistency. You don’t need to specify anything in your read request to get eventually
    consistent reads.
    
    - **Use Cases**: Often sufficient for many applications where the absolute latest data isn’t required. For example, In a social media application, a slightly
    delayed view count on a post might be acceptable.

- #### DynamoDB Transactions

  - **Definition**: DynamoDB Transitions is a feature that allows you to perform multiple read and write operations on one or more items as an atomic unit of work. This means that
  either all of the operations in the transition succeed, or none of them do.

  - **ACID Properties**: DynamoDB transitions provide ACID (Atomicity, Consistency, isolation, Durability) properties. This ensures that transitions are reliably processed,
  and the data is always in a consistent state.

- #### DynamoDB Accelerator (DAX)

  - **Definition**: Amazon DynamoDB Accelerator (DAX) is an in-memory cache for DynamoDB. It is designed to improve the performance of read-intensive DynamoDB workloads by providing
  low-latency access to frequently accessed items.
  
  - **In-Memory Cache**: DAX stores frequently accessed items from DynamoDB in an in-memory cache. This reduces the need to read data from the underlying DynamoDB table, resulting
  in lower read latencies.
  
  - **High Availability**: DAX clusters are designed for high availability. They are deployed across multiple Availability Zones within an AWS Region. In the event of a node failure,
  DAX automatically redirects requests to healthy nodes.
  
  - **Multi-AZ Replication**: DAX provides data durability by replicating data across multiple Availability Zones within a Region. This ensures that cached data is not lost in the event
  of a node failure.
  
  - **Const Consideration**: While DAX nodes can significantly improve read performance, It’s important to consider the cost implications.  DAX nodes have associated costs, and you’ll want
  to ensure that the performance gains justify the additional expense.
  
  - **Usability**: DynamoDB Accelerator is particularly useful for applications that require low-latency access to frequently accessed data in DynamoDB. It’s commonly used in scenarios
  such as gaming leaderboards, session stores, and real-time analytics.
  
  - **Keep in mind**: DAX is focused on improving read performance. Write operations are still sent directly to DynamoDB and are not cached in DAX.

- #### DynamoDB Read-Replica

  - **Definition**: A DynamoDB read replica is a feature that allows you to create a copy of a DynamoDB table. This replica table is kept in sync with the source table, providing you with
  the ability to offload traffic from the primary database and improve read scalability.
  
  - **Asynchronous Replication**: Data replication from the primary table to the replica is asynchronous. This means there may be a slight delay in data propagation from the source to
  the replica.
  
  - **Cross-Region Replication**: You can create a read replica in a different AWS region. This can be useful for scenarios where you need to serve users in different geographic locations
  with lower latency.
  
  - **Max Read-Replicas**: You can have up to 5 read replicas for a single DynamoDB table.
 
- #### DynamoDB Accelerator (DAX) vs. DynamoDB Read-Replica

  - **Read Replicas**: Suitable when you need to offload read traffic from the primary table, especially in scenarios where you have a geographic distributed user base or need to scale
  read capacity.
 
  - **DAX**: Beneficial when you require extremely low read latencies and want to leverage an in-memory cache to reduce the number of reads directly hitting DynamoDB. It’s particularly
  useful for read-heavy workloads with a high rate of repeated queries for the same data.

- #### DynamoDB Streams

  - **Definition**: DynamoDB Streams is a feature provided by Amazon DynamoDB that captures and streams changes made to items in a DynamoDB table. It allows you to read to changers in
  real-time and build applications that can process these changes.
  
  - **Change Capture**: DynamoDB Streams captures a time-ordered sequence of item-level modifications in a DynamoDB table. This includes both inserts, updates, and deletes.
  
  - **Retention Period**: Streams retain data for 24 hours. This means you have a 24-hour window to read and process the steam records.
  
  - **Integration with Lambda**: One of the most common use cases for DynamoDB Streams is to use AWS Lambda to process the stream records. Lambda function can be set up to
  automatically trigger in response to changes in the DynamoDB table.
  
  - **Cost Considerations**: While enabling DynamoDB Streams doesn’t incur an additional cost, you will be charged to the resource used to process the stream (e.g., Lambda invocations,
  additional DynamoDB Read Capacity).

- #### DynamoDB Global Tables

  - **Definition**: DynamoDB Global Tables is a feature provided by Amazon DynamoDB that enables you to replicate your table across multiple AWS regions. This allows you to achieve
  low-latency access to data for globally distributed applications and provided disaster recovery capabilities.
  
  - **DynamoDB Streams**: In order to use DynamoDB Global Tables, you must have DynamoDB Streams enabled on the source table. Global Tables uses DynamoDB Streams to replicate
  changes from the source table to its replicas in other regions. This ensures that data is kept in sync across multiple AWS regions.
  
  - **Active-Active Replication**: Global Tables supports active-active replication, meaning that you can write to any replication in any region. Changes are automatically
  propagated to all other regions.
  
  - **Automatic Conflict Resolution**: In the rare event that there are conflicting writes to the same item in different regions, DynamoDB provides automatic conflict resolution.
  The last write wins, and no user intervention is required.
  
  - **Strong Consistency**: Global Tables provide strong consistency for reads. This means that when you read data from a global table, you are guaranteed to see the most recent
  write, regardless of the region you’re reading from.
  
  - **Endpoints**: With DynamoDB Global Tables, each region that participates in the global table will have its own endpoint. This means that you will have a separate endpoint for
  each region where a replica of the global table is located.
  
  - **Cost Consideration**: While enabling global tables doesn’t incur an additional cost, you will be charged for the resource used in each region (e.g., storage, provisioned
  throughput, etc.).
 
- #### DynamoDB Point-in-Time Recovery (PITR)

  - **Definition**: DynamoDB Point-in-Time Recovery (PITR) is a feature provided by Amazon DynamoDB that allows you to restore your table data to any point in time within the
  last 35 days. This feature helps protect against accidental deletes, overwrites, or other data corruptions.
  
  - **Continuous Backups**: DynamoDB PITR automatically backs up your table data on an ongoing basis. These backups capture changes to your table data in real-time.
  
  - **Incremental Backup**: Amazon DynamoDB Point-in-Time Recovery (PITR) is incremental in the sense that it continuously backs up your table data and streams it to storage
  over time. When you enable PITR, the service captures changes to your table data and stores them incrementally.
  
  - **No Additional Costs**: PITR is included in the cost of DynamoDB, and you are not charged extra for this feature.
  
  - **Retention period**: Backup data is retained for 35 days, providing a window of time for point-in-time recovery.
 
  - **Amazon S3**: Amazon DynamoDB Point-in-Time Recovery (PITR) backups are stored in Amazon S3 (Simple Storage Service). When you enable PITR for a DynamoDB table, the service
  automatically creates and manages backups of your table data and streams them to an S3 bucket in your AWS account. it's important to note that you do not have direct access to the S3
  bucket where DynamoDB Point-in-Time Recovery (PITR) backups are stored. This bucket is managed by AWS and is not visible or accessible to you through the S3 console.
  
  - **Use Cases**: PITR is useful for scenarios such as recovering from accidental data loss, restoring to known good state after a corruption, and meeting regulatory requirements
  for data recovery.

- #### DynamoDB Encryption at Rest

  - **Automated Encryption**: DynamoDB at Rest automatically encrypts your data using the AWS Key Management Service (KMS) encryption keys. You don’t need to manage the encryption process manually.
  
  - **Server-Side Encryption**: The encryption is applied at the server level, which means that your data is encrypted before it’s written to disk and decrypted when it’s read from disk.
  
  - **Choice of Key Management**: You can choose to use AWS-managed keys or create and manage your own custom KMS keys. This provides flexibility in managing encryption keys.
  
  - **No Additional Costs**: There is nop additional costs for enabling encryption at rest. You are charged for the storage of your data as usual.

### Amazon DocumentDB

Amazon DocumentDB is a fully managed, scalable, and highly available NoSQL database service provided by Amazon Web Services (AWS). It is designed to be compatible with the popular
MongoDB database, which means it supports MongoDB workloads and applications without requiring code changes.

### Amazon Keyspaces

Amazon Keyspaces, formerly known as Amazon managed Apache Cassandra Service (MCS), is a fully managed, serverless, and scalable NoSQL database service provided by Amazon 
Web Services (AWS). It is designed to offer compatibility with Apache Cassandra, a popular open-source distributed database system.

### Amazon Neptune

Amazon neptune is a fully managed graph database service provided by Amazon Web Services (AWS). It’s designed to handle highly connected data and is compatible with 
two popular graph models: Property Graph and W3C’s RDS.

### Amazon Quantum Ledger Database

Amazon Quantum Ledger Database (QLDB) is a fully managed, serverless, and blockchain-like database service provided by Amazon Web Services (AWS). It is designed to provide a 
secure, transparent, and immutable ledger for tracking changes to data.

### Amazon Timestream

Amazon Timestream is a fully managed, serverless, and purpose-built time-series database service provided by Amazon Web Services (AWS). It is designed to handle high volumes 
of data points collected over time, making it well-suited for IoT applications, industrial telemetry, and operational monitoring.
