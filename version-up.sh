# sed -i -e "s/\"version\": \"0.0.0\",/\"version\": \"${v:1}\",/" package.json
sed -i -e "0.0.1" package.json
