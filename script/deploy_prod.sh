#!/bin/bash
set -e

eb use withdrawal-prod
eb list 
eb deploy withdrawal-prod
eb status