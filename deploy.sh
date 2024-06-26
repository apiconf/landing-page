#!/usr/bin/env bash

set -o errexit
set -o errtrace
set -o nounset
set -o pipefail

init() {
  echo "verifying node and npm"
  node --version;
  npm --version
}

install () {
  echo "Installing dependencies"
  npm install
}

build () {
  echo "Generating build files"
	npm run build
}

handle_redirects () {
echo "setup redirect files for netlify server"
  eval \ 
`cat > dist/_redirects << EOF
/*  /index.html  200
EOF
`;
}

deploy() {
  echo "deploying to netlify..."
  netlify deploy -p -d dist    
}


finish () {
  echo "Deployment successfully completed at `date`"
}

init
install
build
handle_redirects
deploy
finish