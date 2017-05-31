# general deps
apt-get install -y byobu git

# js deps
apt-get install -y nodejs npm
npm config set strict-ssl false
npm cache clean -f
npm install -g n
n stable
npm install -g jasmine

# Install Exercism client
wget https://raw.githubusercontent.com/exercism/cli-www/master/public/install
chmod +x install
./install

exercism configure --key=$(cat /home/ubuntu/exercism/key.txt | tr -d '\n')