terraform {
    required_providers {
        vercel = {
            source  = "vercel/vercel"
            version = "3.0.1" 
        }
    }
}

provider "vercel" {
    api_token = var.vercel_api_token
}

resource "vercel_project" "kland" { 
    name    = "kland-website"
    git_repository = {
        type = "github"
        repo = "Klanes09/websiteCloud"
    }
}