Go to the profile of Will Warren
Will Warren
Co-founder and CEO @0xProject. Previously research @LosAlamosNatLab, MechE @UCSanDiego.
Nov 8

Canonical WETH
Towards a Community Adopted ERC20 Compliant Ether Token
We are calling on the Ethereum community to join us in establishing a canonical ERC20-compliant wrapped ether token (WETH) in the interest of standardization across dApps and safer smart contract coding conventions. Our colleagues at Augur, district0x, Ethfinex, Gnosis, Maker, Melon, Paradex, Radar Relay and The 0cean have agreed to join us in utilizing a shared WETH implementation, allowing our end users to convert ETH to WETH a single time and then use these same WETH tokens across each dApp.

Background
ERC20 established a standard interface for Ethereum tokens, allowing developers to create decentralized applications that can easily interact with any token conforming to the standard. Ether, the native currency used to fuel computation and data storage within the Ethereum Virtual Machine, does not conform to the ERC20 token interface. Numerous dApp developers have found that by abstracting ether as an ERC20 compliant ether token, smart contract code can be simplified by eliminating special business logic for handling ETH.


There are many flavors of WETH, but we only need one secure implementation.
While many dApp developers have identified the need for a WETH token, there has not been an effort to rally the community around a single implementation. As a result, there are numerous WETH implementations that provide the same functionality. The lack of a canonical WETH token causes confusion for dApp users and creates friction when users move between dApps. The lack of a canonical WETH token has also made it challenging for developers to create the educational resources and tooling needed to easily deal with this helpful abstraction.

Implementation Details
The proposed canonical WETH contract is based upon Stefan George’s EtherToken.sol contract but with added support for unlimited allowances; a single line implementation detail that can increase gas efficiency and that has received a positive reaction from the community thus far. Most importantly, the source code for the proposed WETH contract has been thoroughly audited.

Deployed contract addresses
Mainnet: 0x2956356cd2a2bf3202f771f50d3d14a367b48070
Kovan: 0x05d090b51c40b020eab3bfcb6a2dff130df22e9c
Ropsten: 0xc00fd9820cd2898cc4c054b7bf142de637ad129a
When can we expect a permanent solution?
There has been some conversation on official communication channels regarding ETH natively exposing an ERC20 token interface. If this were to occur, it would be within the currency abstraction proposal to be included in the Serenity hard fork. Anecdotally, I have observed strong community support for such a change and would be interested to hear Vitalik Buterin or others from the core team weigh in. Despite some lingering debate around alternative token interfaces such as ERC223, ERC20 has gone through the EIP process and has been widely accepted as the de facto standard.

Join the conversation
If you would like to join us in supporting the canonical WETH token within your dApp, feel free to voice your support. We also welcome and appreciate constructive feedback; source code may be found here.

EthereumBitcoinBlockchainDecentralizationSmart Contracts
One clap, two clap, three clap, forty?
By clapping more or less, you can signal to us which stories really stand out.

Go to the profile of Will Warren
Will Warren
Co-founder and CEO @0xProject. Previously research @LosAlamosNatLab, MechE @UCSanDiego.

0x Protocol
0x Protocol
The protocol for trading tokens.