<h1 align="center">
  AWS Solutions Architect Associate - Notes
</h1>

A compilation of notes for the SAA-C03 exam. These notes are meticulously organized to provide a structured study guide.

## Storage Services

### Amaon Elastic Block Store (EBS)

Amazon Elastic Block Store (Amazon EBS) is a block-level storage service provided by Amazon Web Services (AWS) for use with Amazon Elastic 
Compute Cloud (EC2) instances. It offers durable and scalable block-level storage that you can attach to your EC2 instances.

#### EBS Volumes

 - **Block-Level Storage**: Amazon Elastic Block Store (EBS) provides raw storage volumes that can be directly attached to EC2 instances. This
   characteristic allows you to utilize EBS much like a physical hard drive, making it suitable for a wide array of applications.

- **Dynamic Volume Types**: EBS volume types can be modified seamlessly. For example, transitioning from a gp2 volume to an io2 volume can
  be accomplished while the instance is operational.

- **Resizable Volumes**: EBS volumes can be adjusted in size without the need to halt or restart the associated instance. However, it's
  important to note that the filesystem within the operating system must be extended in order for the OS to recognize the resized volume.

#### EBS Volume Types

 -  **General Purpose (SSD)**
   
      - General Purpose SSD volumes, also known as gp2, provide a balance of price and performance for a wide range of workloads, They are designed to deliver consistent baseline
      performance and burst performance for applications with varying I/O needs.
  
    - General-purpose SSD volumes are suitable for most types of workloads, including small to medium-sized databases, development and test environments, and boot volumes.

  -  **Provisioned IOPS (SSD)**
   
      - Provisioned IOPS SSD volumes, also known as io1, are designed for I/O-intensive workloads that require consistently high performance. You specify the desired number
        of IOPS when you create the volume.
  
      - While being the most expensive type, Provisioned IOPS volumes ensure top-tier performance for applications that demand low-latency and high-throughput storage. 
   
      - Provisioned IOPS volumes are ideal for applications that require low-latency, high-performance storage such as critical business applications, large databases,
        and high-transactional workloads.

  -  **Throughput Optimized (HDD)**
   
      - Throughput Optimized HDD volumes, also known as st1, are designed for frequently accessed, large, sequential workloads. They are optimized for consistency,
        high-throughput performance.
  
      - Throughput Optimized volumes are suitable for data warehouses, log processing, and other workloads that require high-volume, sequential read and write operations.

  -  **Cold (HDD)**
   
      - Cold HDD volumes, also known as sc1, are designed for less frequently accessed workloads with large, sequential read and write. They offer the lowest storage cost but with
        the trade-off of lower performance compared to other volume types.
  
      - Cold volumes are suitable for scenarios where cost-effectiveness is a priority, and occasional access to the data is sufficient, such as infrequently accessed archives or
        backup storage.

#### EBS Snapshots

 - **Backup and Recovery**: EBS Snapshots allow you to create backups of your EBS volumes, providing a reliable way to recover your data in case of accidental deletion, corruption,
   or other data loss scenarios.

 - **Incremental Backups**: EBS Snapshots are incremental, which means that only the blocks that have changed since the last snapshot are copied. This reduces both time and costs
   associated with creating and storing backups.
   
 - **Stored in Amazon S3**: EBS Snapshots are stored in Amazon S3, a highly durable and redundant storage service. This ensures the durability and availability of your snapshots.

 - **Snapshot Lifecycle Policies**: AWS provides tools like Amazon Data Lifecycle Manager (DLM) that allow you to automate the creation and retention of EBS snapshots. This helps you
   manage your backup strategy more effectively.

 - **Sharing Snapshot**: Snapshots can be shared, but only in the region in which they were created. To share to other regions, you will need to copy them to the destination region first.
   
 - **Encrypted Snapshots**: You can choose to encrypt your EBS snapshots using AWS Key Management Service (KMS) keys for added security.

#### EBS Encryption

 - **Data Security**: Amazon EBS Encryption is a feature that allows you to encrypt your Elastic Block Store (EBS) volumes at rest.

 - **AWS Key Management Service (KMS)**: EBS Encryption uses AWS Key Management Service (KMS) to manage the encryption keys. KMS is a fully managed encryption service that allows
   you to create and control cryptographic keys used for encryption.

 - **Granular Control**: With AWS KMS, you have granular control over the encryption keys. You can create, rotate, disable, and delete keys, as well as audit key usage to enhance security.

 - **Snapshot Encryption**: When you create a snapshot of an encrypted EBS volume, the snapshot is also encrypted. This ensures that data remains protected throughout its lifecycle.

 - **Snapshots Sharing**: You can share snapshots of encrypted volumes with other AWS accounts, but the snapshots remain encrypted. The recipient account must have the necessary
   permissions to use the shared snapshot.

#### How to encrypt EBS Volumes that are not encrypted

 - Create a snapshot of the unencrypted root EBS volume.

 - Create a copy of the snapshot and select the encryption option.

 - Create an AMI from the encrypted snapshot.

 - Use that AMI to launch new encrypted instances.

#### EBS Hibernation

 - **Preservation of In-Memory State**: Amazon EBS Hibernation is a feature that allows you to pause and resume Amazon EC2 instances, preserving their in-memory state. When 
an instance is hibernated, the contents of its RAM are written to the associated EBS root volume. This enables you to quickly restart the instance in the same state it
was in when it was hibernated.

 - **EBS Volume Encryption**: To use hibernation, the root EBS volume must be encrypted. This ensures that the in-memory state is securely stored.

 - **Quick Resume**: When you restart a hibernated instance, it can quickly resume from the point at which it was hibernated. This is particularly useful for instances with 
long start-up times or important in-memory data.

 - **Hibernation Time**: The maximum hibernation time for an Amazon EC2 instance is 60 days. This means that an instance can remain hibernated for up to 60 days before it needs to be 
started again.

 - **Instance Type**: Hibernation is only available for On-Demand and Reserved Instances.

  
  