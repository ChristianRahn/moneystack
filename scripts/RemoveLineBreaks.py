#!/usr/bin/python
import argparse
import fileinput

parser = argparse.ArgumentParser(description='Remove line breaks from Splitwise CSV dumps')
parser.add_argument('--input', dest='input', help='Source file')

args = parser.parse_args()

for lines in fileinput.FileInput(args.input, inplace=1):
    lines = lines.strip()
    if lines == '': continue
    print lines