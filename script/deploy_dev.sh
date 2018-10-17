#!/bin/bash
set -e

eb use withdrawal-dev
eb list 
eb deploy withdrawal-dev
eb status