# node-directory-store

### Node bindings for the Aserto Directory service

## Build

```sh
yarn install
yarn gen
```
### Build with a local build of directory-store
```
BUF_PATH=/path/to/directory-store.bin yarn gen
```

## Usage

This repository contains only the bindings.
See https://github.com/aserto-dev/aserto-node#directory for usage.

## Troubleshooting

**On M1 Mac**: Run `arch -x86_64 zsh` first and the continue normally.
