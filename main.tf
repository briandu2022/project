resource "aviatrix_vpc" "aws_vpc" {
  cloud_type           = 1
  account_name         = "awsBrian"
  region               = "us-west-1"
  name                 = "awsvpc"
  cidr                 = "10.13.0.0/16"
  aviatrix_transit_vpc = false
  aviatrix_firenet_vpc = false
}

resource "aviatrix_vpc" "aws_vpc2" {
  cloud_type           = 1
  account_name         = "awsBrian"
  region               = "us-west-1"
  name                 = "awsvpc2"
  cidr                 = "10.18.0.0/16"
  aviatrix_transit_vpc = false
  aviatrix_firenet_vpc = false
}

resource "aviatrix_gateway" "gatewayAws" {
  cloud_type   = 1
  account_name = "awsBrian"
  gw_name      = "gatewayAws"
  vpc_id       = aviatrix_vpc.aws_vpc.vpc_id
  vpc_reg      = "us-west-1"
  gw_size      = "t2.micro"
  subnet       = aviatrix_vpc.aws_vpc.public_subnets[0].cidr
  tags         = {
    name = "value"
  }
}