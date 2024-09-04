# Bako ID

Bako ID is a native naming system for the Fuel ecosystem, designed to help users seamlessly bridge their Web2 handles to Web3. The primary goal of Bako ID is to provide a secure and engaging user experience across Fuel by offering a unified identity interface.

## Directory Structure
Inside the repository, you will find the following main directories:

- [packages/sway](https://github.com/Bako-Labs/bako-id/tree/main/packages/sway): Contains all the smart contracts and libraries used by Bako ID.
- [packages/sdk](https://github.com/Bako-Labs/bako-id/tree/main/packages/sway): A TypeScript SDK for interacting with the smart contracts.
- [packages/image-generator](https://github.com/Bako-Labs/bako-id/tree/main/packages/sway): A server-side component responsible for generating images for NFTs.
- [apps/doc](https://github.com/Bako-Labs/bako-id/tree/main/apps/docs): Documentation for Bako ID, providing detailed information about its functionality and usage.
- [apps/ui](https://github.com/Bako-Labs/bako-id/tree/main/apps/ui): The user interface for Bako ID, providing an interactive frontend for users to manage their identities.

For for information, check out the [Documentation page](https://docs.bako.id/).

## Installation

```bash
npm install fuels @bako-id/sdk
```

## Getting Started

### Domain resolver
```ts
import { resolver } from '@bako-id/sdk';

const providerURL = 'https://beta-5.fuel.network/graphql';

// Get Bako handle resolver
const fuelDomain = await resolver('@my_domain');
console.log(fuelDomain); // { owner: '0x000...', resolver: '0x000...' }
```

### Domain register
```ts
import { register } from '@bako-id/sdk';
import { Wallet } from 'fuels';

// Fuel Wallet instance
const wallet: Wallet;

// Register a Bako handle 
await register({
  account: wallet,
  resolver: '0x0000...',
  domain: '@my_domain',
});
```

## 📜 License

This repo is licensed under the `Apache-2.0` license. See [`LICENSE`](./LICENSE) for more information.
