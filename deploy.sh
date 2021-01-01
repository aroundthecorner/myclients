# Pull latest changes
echo "================= Pulling latest changes... ================="
cd /home/martins/Server/myclients && git reset --hard && git pull
printf "done\n"


# Copy & replace env files
echo "==================== Copying env files... ===================="
cp /home/martins/Server/myclients-prod/client/.env /home/martins/Server/myclients/client/.env
cp /home/martins/Server/myclients-prod/server/.env /home/martins/Server/myclients/server/.env
cp /home/martins/Server/myclients-prod/website/index.html /home/martins/Server/myclients/website/index.html
cp /home/martins/Server/myclients-prod/docker-compose.yaml /home/martins/Server/myclients/docker-compose.yaml
printf "done\n"


# Build the frontend
echo "==================== Building frontend... ===================="
npm --prefix /home/martins/Server/myclients/client install
npm --prefix /home/martins/Server/myclients/client run build
printf "done\n"


# Build app with docker-compose
echo "============== Running docker-compose build... =============="
cd /home/martins/Server/myclients && docker-compose build
printf "done\n"


# Bring down the old build
echo "=============== Bringing down the old build... ==============="
cd /home/martins/Server/myclients && docker-compose down
printf "done\n"


# Bring up the new build
echo "================ Bringing up the new bulid... ================"
cd /home/martins/Server/myclients && docker-compose up -d
printf "done\n"