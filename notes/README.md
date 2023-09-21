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

## Amazon Instance Store

Amazon Instance Store, also known as ephemeral storage, provides temporary block-level storage for Amazon EC2 Instance. It is physically
attached to the host computer on which your instance runs and is ideal for temporary storage of data that changes frequently.

- ### Amazon Instance Store Characteristics

  - Instance Store volumes are directly attached to the physical hardware of the host machine.

  - They provide very high input/output operations per second (IOPS) performance.

  - Data on an Instance Store volume is not persisted beyond the life of the associated instance. If the instance is stopped or terminated, all data on the instance store is lost.

  - Not all EC2 instance types come with Instance Store. When selecting an instance type, you need to choose one that specifies an "Instance Store" under the "Storage" section.

  - When an instance is stopped (but not terminated), the data on the Instance Store is preserved. However, it's important to note that if the underlying hardware fails, you may lose data.

  - Unlike Instance Store, Amazon Elastic Block Store (EBS) volumes provide persistent, network-attached block storage that can be detached from one instance and attached to another.

  - Instance store volumes do not support snapshots, so you cannot create backups or migrate data easily.

## Amazon Elastic Block Store (EBS)

Amazon Elastic Block Store (Amazon EBS) is a block-level storage service provided by Amazon Web Services (AWS) for use with Amazon Elastic
Compute Cloud (EC2) instances. It offers durable and scalable block-level storage that you can attach to your EC2 instances.

- ### EBS Volumes

  - **Block-Level Storage**: Amazon Elastic Block Store (EBS) provides raw storage volumes that can be directly attached to EC2 instances. This
    characteristic allows you to utilize EBS much like a physical hard drive, making it suitable for a wide array of applications.

  - **Dynamic Volume Types**: EBS volume types can be modified seamlessly. For example, transitioning from a gp2 volume to an io2 volume can
    be accomplished while the instance is operational.

  - **Resizable Volumes**: EBS volumes can be adjusted in size without the need to halt or restart the associated instance. However, it's
    important to note that the filesystem within the operating system must be extended in order for the OS to recognize the resized volume.

- ### EBS Volume Types

  - #### General Purpose (SSD)

    - General Purpose SSD volumes, also known as gp2, provide a balance of price and performance for a wide range of workloads, They are designed to deliver consistent baseline
      performance and burst performance for applications with varying I/O needs.

    - General-purpose SSD volumes are suitable for most types of workloads, including small to medium-sized databases, development and test environments, and boot volumes.

    - Up to 99.9% durability.

  - #### Provisioned IOPS (SSD)

    - Provisioned IOPS SSD volumes, also known as io1, are designed for I/O-intensive workloads that require consistently high performance. You specify the desired number
      of IOPS when you create the volume.

    - While being the most expensive type, Provisioned IOPS volumes ensure top-tier performance for applications that demand low-latency and high-throughput storage.

    - Provisioned IOPS volumes are ideal for applications that require low-latency, high-performance storage such as critical business applications, large databases,
      and high-transactional workloads.

    - Up to 99.9% durability.

  - #### Throughput Optimized (HDD)

    - Throughput Optimized HDD volumes, also known as st1, are designed for frequently accessed, large, sequential workloads. They are optimized for consistency,
      high-throughput performance.

    - Throughput Optimized volumes are suitable for data warehouses, log processing, and other workloads that require high-volume, sequential read and write operations.

    - Up to 99.9% durability.

  - #### Cold (HDD)

    - Cold HDD volumes, also known as sc1, are designed for less frequently accessed workloads with large, sequential read and write. They offer the lowest storage cost but with
      the trade-off of lower performance compared to other volume types.

    - Cold Volumes is typically the lowest-cost option among Amazon Web Services (AWS) EBS volume types.

    - Cold volumes are suitable for scenarios where cost-effectiveness is a priority, and occasional access to the data is sufficient, such as infrequently accessed archives or
      backup storage.

    - Up to 99.9% durability.

- ### EBS Snapshots

  - **Backup and Recovery**: EBS Snapshots allow you to create backups of your EBS volumes, providing a reliable way to recover your data in case of accidental deletion, corruption,
    or other data loss scenarios.

  - **Incremental Backups**: EBS Snapshots are incremental, which means that only the blocks that have changed since the last snapshot are copied. This reduces both time and costs
    associated with creating and storing backups.

  - **Stored in Amazon S3**: EBS Snapshots are stored in Amazon S3, a highly durable and redundant storage service. This ensures the durability and availability of your snapshots.

  - **Consistent Snapshot**: To ensure a consistent snapshot, it is advisable to stop the instance before taking a snapshot.

  - **Snapshot Lifecycle Policies**: AWS provides tools like Amazon Data Lifecycle Manager (DLM) that allow you to automate the creation and retention of EBS snapshots. This helps you
    manage your backup strategy more effectively.

  - **Sharing Snapshot**: Snapshots can be shared, but only in the region in which they were created. To share to other regions, you will need to copy them to the destination region first.

  - **Encrypted Snapshots**: You can choose to encrypt your EBS snapshots using AWS Key Management Service (KMS) keys for added security.

- ### EBS Encryption

  - **Data Security**: Amazon EBS Encryption is a feature that allows you to encrypt your Elastic Block Store (EBS) volumes at rest.

  - **AWS Key Management Service (KMS)**: EBS Encryption uses AWS Key Management Service (KMS) to manage the encryption keys. KMS is a fully managed encryption service that allows
    you to create and control cryptographic keys used for encryption.

  - **Granular Control**: With AWS KMS, you have granular control over the encryption keys. You can create, rotate, disable, and delete keys, as well as audit key usage to enhance security.

  - **Snapshot Encryption**: When you create a snapshot of an encrypted EBS volume, the snapshot is also encrypted. This ensures that data remains protected throughout its lifecycle.

  - **Snapshots Sharing**: You can share snapshots of encrypted volumes with other AWS accounts, but the snapshots remain encrypted. The recipient account must have the necessary
    permissions to use the shared snapshot.

- ### How to encrypt EBS Volumes that are not encrypted

  - Create a snapshot of the unencrypted root EBS volume.

  - Create a copy of the snapshot and select the encryption option.

  - Create an AMI from the encrypted snapshot.

  - Use that AMI to launch new encrypted instances.

- ### EBS Hibernation

  - **Preservation of In-Memory State**: Amazon EBS Hibernation is a feature that allows you to pause and resume Amazon EC2 instances, preserving their in-memory state. When
    an instance is hibernated, the contents of its RAM are written to the associated EBS root volume. This enables you to quickly restart the instance in the same state it
    was in when it was hibernated.

  - **EBS Volume Encryption**: To use hibernation, the root EBS volume must be encrypted. This ensures that the in-memory state is securely stored.

  - **Quick Resume**: When you restart a hibernated instance, it can quickly resume from the point at which it was hibernated. This is particularly useful for instances with
    long start-up times or important in-memory data.

  - **Hibernation Time**: The maximum hibernation time for an Amazon EC2 instance is 60 days. This means that an instance can remain hibernated for up to 60 days before it needs to be
    started again.

  - **Instance Type**: Hibernation is only available for On-Demand and Reserved Instances.

## Amazon Elastic File System (EFS)

Amazon Elastic File System (Amazon EFS) is a scalable and fully managed file storage service provided by AWS. It's designed to provide shared access to a file system, allowing multiple EC2 instances to read and write to the same file system at the same time.

- ### EFS Classes

  - #### EFS Standard

    - **Designed for**: Frequently accessed data requiring the highest durability and availability.

    - **Durability**: Up to 99.999999999% durability.

    - **Availability**: Up to 99.99% availability.

  - #### EFS Standard–Infrequent Access (IA)

    - **Designed for**: Long lived, infrequently accessed data requiring the highest durability and availability.

    - **Durability**: Up to 99.999999999% durability.

    - **Availability**: Up to 99.99% availability.

- ### EFS Characteristics

  - **Shared File Storage**: Amazon EFS provides a shared file system that can be accessed by multiple EC2 instances and services concurrently.

  - **Scalable**: EFS can automatically scale to accommodate the storage needs of your applications. You can increase or decrease storage capacity as needed.

  - **Backup and Restore**: EFS can automatically scale to accommodate the storage needs of your applications. You can increase or decrease storage capacity as needed.

  - **Suppor**: Amazon Elastic File System (EFS) supports the Network File System version 4 (NFSv4)

  - **Cost Efficiency**: Amazon EFS offers a pay-as-you-go model, meaning you're billed only for the storage you use, without the need for pre-provisioning or upfront
    commitments.

  - **Encryption**: Amazon Elastic File System (EFS) provides encryption at rest by default. When you create a new Amazon EFS file system, the data and metadata
    are automatically encrypted using an AWS Key Management Service (KMS) key.

  - **Encryption**: Amazon Elastic File System (EFS) provides encryption at rest by default. When you create a new Amazon EFS file system, the data and metadata
    are automatically encrypted using an AWS Key Management Service (KMS) key.

## Amazon FSx for Windows

Amazon FSx for Windows File Server is a fully managed file storage service provided by AWS. It is designed to provide a fully compatible, native Windows
file system experience to applications and workloads that require shared file storage.

- ### FSx for Windows Characteristics

  - **Fully Managed Service**: Amazon FSx for Windows File Server is a fully managed service, which means AWS handles the underlying infrastructure,
    maintenance, and updates for the file system.

  - **Windows Native File System**: It provides a native Windows file system, making it compatible with Windows applications and workloads without
    requiring any modifications.

  - **SMB Protocol Support**: Amazon FSx supports the Server Message Block (SMB) protocol versions 2.0, 2.1, 3.0, and 3.1.1, allowing seamless integration
    with Windows environments.

## Amazon FSx for Lustre

Amazon FSx for Lustre is a high-performance, fully managed file system designed for compute-intensive workloads. It provides scalable and parallel file
storage that is optimized for applications that require fast access to large amounts of data.

- ### FSx for Lustre Characteristics

  - **High Performance**: FSx for Lustre is optimized for high-performance computing (HPC) and other demanding workloads. It provides low-latency
    access to data, making it ideal for applications like machine learning, analytics, and simulations.

  - **Fully Managed Service**: Like other FSx offerings, Amazon FSx for Lustre is a fully managed service. AWS takes care of the infrastructure,
    maintenance, and updates, allowing you to focus on your applications.

  - **Lustre File System**: FSx for Lustre is built on the Lustre file system, a widely used open-source parallel file system. It is designed for
    high-speed access to data across multiple nodes.

  - **Integration with S3**: You can seamlessly integrate FSx for Lustre with Amazon S3, allowing you to efficiently move data between the two services.
    This is useful for data processing workflows that require both high-speed processing and long-term storage.

## Amazon EFS vs. Amazon FSx for Windows vs. Amazon FSx for Lustre

- **Amazon EFS**: Distributed and highly resilient storage for Linux instances and Linux-based applications.

- **Amazon FSx for Windows**: entralized storage for Windows-based applications, including Microsoft SQL Server, Workspaces, IIS Web Server, and other
  native Microsoft applications.

- **Amazon FSx for Lustre**: High-speed, high-capacity distributed storage, ideal for high-performance computing (HPC), financial modeling,
  and more. It can also directly store data on Amazon S3.

## Amazon Relational Database Service (RDS)

Amazon RDS (Relational Database Service) is a managed database service provided by Amazon Web Services (AWS). It makes it easier to set up, 
operate, and scale a relational database in the cloud. 

  - ### RDS Engines
    
    - MySQL
   
    - PostgreSQL
   
    - MariaDB
   
    - Oracle
   
    - Microsoft SQL Server
   
  - ### RDS Multi-AZ

    - **What is**: RDS Multi-AZ is a feature that provides high availability and fault tolerance for database instances. Its designed to
    enhance the reliability of your database by automatically replicating data to a standby instance located in a different Availability Zone
    within the same AWS region.

    - **Primary Database**: You have a primary database instance that handles both read and write operations. This instance is located
    in one Availability Zone.

    - **Standby Replica**: A standby replica of the primary database is created in a different Availability Zone. This replica is an exact
    copy of the primary database.

  - ### RDS Read Replica
    
    - **What is**: An Amazon RDS Read Replica is a copy of a source database that is asynchronously updated in near
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

  - ### RDS Automatic Backups

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

  - ### RDS Snapshots

    - **Manual Creating**: Unlike automated backups, which are taken automatically within a specific window, RDS snapshots are created manually by the user.
      
    - **Retention Period**: RDS snapshots are kept until you choose to delete tem. They do not expire after a specific time period like automated backups.
      
    - **Amazon S3 Bucket**: When you create an RDS snapshot, it is stored in an Amazon S3 bucket. Each AWS region has a default Amazon S3 bucket for RDS snapshot
    storage. It's important to note that users cannot directly view the Amazon S3 bucket used for storing Amazon RDS snapshots using the AWS Management Console
    or the AWS CLI. The RDS snapshot is managed by AWS, and the bucket is typically not accessible or visible to AWS customers through standard AWS interfaces.

  - ### RDS Automatic Backups vs. RDS Snapshots
    
    - #### Creation Method

      - **Automated Backups**: created automatically within a use-defined backup window.
        
      - **Snapshots**: Created manually by the user.

    - #### Frequency
    
      - **Automated Backups**: Taken daily during the defined backup window.
        
      - **Snapshots**: Created on-demand, whenever the user initiates the snapshot process.
        
    - #### Retention Period
    
      - **Automated Backups**: Retained for a user-defined period (default is 7 days, can be extended up to 35 days).
      
      - **Snapshots**: Retained indefinitely until manually deleted.

  - ### RDS Encryption at Rest
 
    - **AWS Manage Key (AWS KMS)**: This is the default option and uses AWS Key Management Service (KMS) to manage encryption keys.
    With this option, AWS manages the keys for you, and you have the option to use default keys or create custom ones.
    
    - **AWS Customer Manage Key (CMK)**: With this option, you can use KMS keys that you create and manage. This allows you for more
    fine-grained control over key management.

## Amazon Backup

AWS Backup is a fully managed backup service provided by Amazon Web Services. It makes it easy for you to centralize and automate the backup
of your data across various AWS services and on-premises resources.

- ### Amazon Backup Characteristics

  - **Centralized Backup Management**: AWS Backup allows you to centralize the management of backups for your AWS resources, making it easier to
    implement and manage backup policies.

  - **Supported AWS Services**: AWS Backup supports a wide range of AWS services, including Amazon EBS, Amazon RDS, Amazon DynamoDB,
    AWS Storage Gateway, and more. This makes it versatile for backing up various types of data.

  - **Lifecycle Policies**: You can define backup retention policies and lifecycle rules to automatically transition backups to cold storage or
    delete them after a specified period.

  - **Integration with AWS Organizations**: AWS Backup can be integrated with AWS Organizations, making it easy to apply backup policies across
    multiple AWS accounts.
