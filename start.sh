#!/bin/bash
json-server --watch db.json &
ng serve --host 0.0.0.0
