# NodeJS TFTP client
Simple TFTP client for NodeJS.
## Installation
```
git clone https://github.com/brianparry/tftp-client
npm install
```
## Usage
### Put a file to tftp server
```tftp-client put <file> <host> [-t/--tsize] [-b/--blksize size] [-t/--timeout ms] [-w/--windowsize size]```
### Get a file from tftp server
```tftp-client get <file> <host> [-t/--tsize] [-b/--blksize size] [-t/--timeout ms] [-w/--windowsize size]```
