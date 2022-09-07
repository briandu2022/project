{
	"account_name" = "awsBrian"
	"availability_domains" = tolist([])
	"aviatrix_firenet_vpc" = false
	"aviatrix_transit_vpc" = false
	"azure_vnet_resource_id" = tostring(null)
	"cidr" = "10.10.0.0/16"
	"cloud_type" = 1
	"enable_native_gwlb" = false
	"enable_private_oob_subnet" = false
	"fault_domains" = tolist([])
	"id" = "aws-vpc"
	"name" = "aws-vpc"
	"num_of_subnet_pairs" = tonumber(null)
	"private_subnets" = tolist([
	  {
		"cidr" = "10.10.0.0/20"
		"name" = "aws-vpc-Private-1-us-west-1a"
		"subnet_id" = "subnet-0858bd98cef7abd87"
	  },
	  {
		"cidr" = "10.10.16.0/20"
		"name" = "aws-vpc-Private-2-us-west-1b"
		"subnet_id" = "subnet-0b1d1f39ae9968c6a"
	  },
	])
	"public_subnets" = tolist([
	  {
		"cidr" = "10.10.32.0/20"
		"name" = "aws-vpc-Public-1-us-west-1a"
		"subnet_id" = "subnet-03348b813ea4ebee6"
	  },
	  {
		"cidr" = "10.10.48.0/20"
		"name" = "aws-vpc-Public-2-us-west-1b"
		"subnet_id" = "subnet-05f68d6eb59776436"
	  },
	])
	"region" = "us-west-1"
	"resource_group" = tostring(null)
	"route_tables" = tolist([
	  "rtb-04f61dbf8c1b8d1c6",
	  "rtb-09e8266399c7b52fc",
	  "rtb-05c97e73578f761c7",
	  "rtb-0c623331c631f6b0a",
	])
	"subnet_size" = tonumber(null)
	"subnets" = tolist([
	  {
		"cidr" = "10.10.0.0/20"
		"name" = "aws-vpc-Private-1-us-west-1a"
		"region" = ""
		"subnet_id" = "subnet-0858bd98cef7abd87"
	  },
	  {
		"cidr" = "10.10.16.0/20"
		"name" = "aws-vpc-Private-2-us-west-1b"
		"region" = ""
		"subnet_id" = "subnet-0b1d1f39ae9968c6a"
	  },
	  {
		"cidr" = "10.10.32.0/20"
		"name" = "aws-vpc-Public-1-us-west-1a"
		"region" = ""
		"subnet_id" = "subnet-03348b813ea4ebee6"
	  },
	  {
		"cidr" = "10.10.48.0/20"
		"name" = "aws-vpc-Public-2-us-west-1b"
		"region" = ""
		"subnet_id" = "subnet-05f68d6eb59776436"
	  },
	])
	"vpc_id" = "vpc-0342abeaa763caa76"
  }