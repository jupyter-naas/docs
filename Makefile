project_name = $(shell basename $(shell pwd))
dc = docker-compose run
dcd = $(dc) --workdir /app/$(project_name) docusaurus


start: $(project_name) setup
	docker-compose up


up: 
	docker-compose up

down:
	docker-compose down

$(project_name)/build: build

build: $(project_name)
	$(dcd) npm run build

setup: $(project_name)/node_modules

$(project_name)/node_modules:
	$(dcd) npm install

sh:
	$(dcd) bash

serve: $(project_name) $(project_name)/build
	$(dcd) npm run serve

$(project_name):
	$(dc) docusaurus npx create-docusaurus@latest $(project_name) classic

.PHONY: start build setup up