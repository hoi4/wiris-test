aws ecr get-login-password | docker login --username AWS --password-stdin 713012407065.dkr.ecr.eu-central-1.amazonaws.com
docker build -f froala-wiris.docker -t "713012407065.dkr.ecr.eu-central-1.amazonaws.com/froala-wiris:latest" .
docker push 713012407065.dkr.ecr.eu-central-1.amazonaws.com/froala-wiris:latest