variable "region" {
	type    = string
	default = "us-east-1"
}

variable "is_prod" {
  type    = bool
  default = false
}

variable "deploy-count" {
  type    = number
  default = 10
}