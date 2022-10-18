SHELL:=/bin/bash


create-migration:
  db-migrate create --config ./migrations/database.json $(arg1)