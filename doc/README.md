<h1 align="center">
  AWS Solutions Architect Associate - Notes
</h1>

A compilation of notes for the SAA-C03 exam. These notes are meticulously organized to provide a structured study guide.

## 1 - Storage Services

### 1.2 - Amaon Elastic Block Store (EBS)

Amazon Elastic Block Store (Amazon EBS) is a block-level storage service provided by Amazon Web Services (AWS) for use with Amazon Elastic 
Compute Cloud (EC2) instances. It offers durable and scalable block-level storage that you can attach to your EC2 instances.

#### 1.2.1 - EBS Volumes

 - **Block-Level Storage**: Amazon Elastic Block Store (EBS) provides raw storage volumes that can be directly attached to EC2 instances. This
   characteristic allows you to utilize EBS much like a physical hard drive, making it suitable for a wide array of applications.

- **Dynamic Volume Types**: EBS volume types can be modified seamlessly. For example, transitioning from a gp2 volume to an io2 volume can
  be accomplished while the instance is operational.

- **Resizable Volumes**: EBS volumes can be adjusted in size without the need to halt or restart the associated instance. However, it's
  important to note that the filesystem within the operating system must be extended in order for the OS to recognize the resized volume.

#### 1.2.2 - EBS Volume Types

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

  
  
