= Cheatsheet Setup =

=== Download and install VirtualBox. 
=== Download Ubuntu 16.04.03 and create a VM.
=== Follow these instructions (also summarized below the link):
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

First, add the GPG key for the official Docker repository to the system:
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

Add the Docker repository to APT sources:
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

Next, update the package database with the Docker packages from the newly added repo:
sudo apt-get update

Make sure you are about to install from the Docker repo instead of the default Ubuntu 16.04 repo (see link to validate output):
apt-cache policy docker-ce

Finally, install Docker:
sudo apt-get install -y docker-ce

Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it's running (see link to validate output):
sudo systemctl status docker

If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group:
sudo usermod -aG docker ${USER}

To apply the new group membership, you can log out of the server and back in, or you can type the following:
su - ${USER}

You will be prompted to enter your user's password to continue. Afterwards, you can confirm that your user is now added to the docker group by typing:
id -nG

=== Get the repository

mkdir repo
cd repo
git clone https://github.gatech.edu/gt-hit-spring2018/Project-Livermore.git
cd Project-Livermore/prototype/docker/local/simpleDocker


=== Build and run the Dockerfile for the prototype

# Build it
docker build -t threejs1:latest .
# Run it
docker run -d -p 5000:5000 threejs1

=== Launch browser and point to project

--> 0.0.0.0:5000

=== How to clean things up

# Get container id
docker ps -a

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
bc51cc0f105f        threejs1            "/bin/sh -c 'python …"   34 seconds ago      Up 33 seconds       0.0.0.0:5000->5000/tcp   vigorous_morse
  
# Stop container
docker stop bc51cc0f105f

# Purge container
docker container prune

# Make sure it's gone
docker ps -a


