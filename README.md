# rns-auction-registrar

RNS initial auction registrar.

> Actual registrar in https://github.com/rnsdomains/rns-rskregistrar

## Install

```
npm i @rsksmart/rns-auction-registrar
```

## JS

```js
const Web3 = require('web3');
const TokenRegistrarData = require('@rsksmart/rns-auction-registrar/TokenRegistrarData.json');
const web3 = new Web3('https://public-node.rsk.co')
const TokenRegistrar = new web3.eth.Contract(TokenRegistrarData.abi, TokenRegistrarData.address.rskMainnet);
```

## Types

There are TypeScript typing definitions of the contracts published together with the original contracts. 
Supported contract's libraries are: 

* `web3` version 1.* - `web3-v1-contracts`
* `web3` version 2.* - `web3-v2-contracts`
* `truffle` - `truffle-contracts`
* `ethers` - `ethers-contracts`

You can use them as follow:

```typescript
import Web3 from 'web3'
import TokenRegistrar from '@rsksmart/rns-auction-registrar/types/web3-v1-contracts/TokenRegistrarData.d.ts'
import TokenRegistrarData from '@rsksmart/rns-auction-registrar/TokenRegistrarData.json'

const web3 = new Web3('https://public-node.rsk.co')
const registrar = new web3.eth.Contract(TokenRegistrarData.abi, TokenRegistrarData.address.rskMainnet) as TokenRegistrar
```

Replace `web3-v1-contracts` with the proper library version.

---

- [Docs](https://developers.rsk.co/rif/rns/architecture/Registrar/)
- RSK Mainnet: [0x5269f5bc51cdd8aa62755c97229b7eeddd8e69a6](https://explorer.rsk.co/address/0x5269f5bc51cdd8aa62755c97229b7eeddd8e69a6)
- RSK Testnet: [0x3d1a11c623bd21375f2b69f4eec814f4ceeb1d8d](https://explorer.testnet.rsk.co/address/0x3d1a11c623bd21375f2b69f4eec814f4ceeb1d8d)
