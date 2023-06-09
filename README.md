# XRPLoyalties
Royalty Distribution Platform built on XRPL as part of Paris Blockchain Week 2023.

# Problem
Royalty distribution costs artist millions because the current processes are inaccurate and obscure. 

# Solution
A blockchain-based royalty distribution and tracking platform for artists and royalty collection societies. Artists can also manage their communities through NFTs to engage their audience more.

# Screenshots

![dashboard.jpeg](screenshots%2Fdashboard.jpeg)
![community.jpeg](screenshots%2Fcommunity.jpeg)

Artist royalties distribution service built on XRPL using the [MPEG-21](https://www.mpeg.org/standards/MPEG-21/21/) Media Contract Ontology (MCO) standard from the Moving Picture Experts Group (MPEG) to define royalties distribution rules in a smart contract.

# Architecture
![XRPLoyalties Architecture.png](screenshots%2FXRPLoyalties%20Architecture.png)

We use Ripple's blockchain for:
- To settle cross-border payments from several Performing Rights Organizations
- Escrow accounts to hold the funds until the royalties are claimed by the right holders

We use Ripple's EVM sidechain for:
- To deploy MCO smart contract to store the IP Entities of each NFT. This smart contract translates the [MPEG-21 Media Contract Ontology (MCO)](https://www.semanticscholar.org/paper/Overview-of-the-MPEG-21-Media-Contract-Ontology-Rodr%C3%ADguez-Doncel-Delgado/9d0de4c4818b893f3b8eeffaa540a799c640241a), a part of the standard ISO/IEC 21000, into a smart contract.
- To mint NFTs for each IP Entity
- The MCO Smart Contract's metadata for each NFT is generated using the [MPEG-21 Media Contract Ontology (MCO)](https://www.semanticscholar.org/paper/Overview-of-the-MPEG-21-Media-Contract-Ontology-Rodr%C3%ADguez-Doncel-Delgado/9d0de4c4818b893f3b8eeffaa540a799c640241a), a part of the standard ISO/IEC 21000.

# Metadata
The metadata is generated using the [MPEG-21 Digital Item Declaration Language (DIDL)](https://mpeg.chiariglione.org/standards/mpeg-21/digital-item-declaration) standard using its [XML schema definition](https://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-21_schema_files/did/). The metadata is stored in IPFS and used for minting the IP Entity of each NFT.

# Royalties
The [MPEG-21 Media Contract Ontology (MCO)](https://www.semanticscholar.org/paper/Overview-of-the-MPEG-21-Media-Contract-Ontology-Rodr%C3%ADguez-Doncel-Delgado/9d0de4c4818b893f3b8eeffaa540a799c640241a), a part of the standard ISO/IEC 21000, "is an ontology to represent contracts dealing with rights on multimedia assets and intellectual property protected content in general" from the work of _[Kudumakis, Panos, Thomas Wilmering, Mark B. Sandler, Víctor Rodríguez-Doncel, Laurent, Boch and Jaime Delgado. “MPEG Intellectual Property Rights Ontologies.” (2019)](https://www.semanticscholar.org/paper/MPEG-Intellectual-Property-Rights-Ontologies-Kudumakis-Wilmering/020b0b333015859657d91739087cd874a9edcda7)_ is used to define royalties distribution rules in the IPEntity smart contract.

# Web App

To run the web app there are only three easy steps:

    1. In your terminal navigate to the "XRPLoyalties" directory and execute:
    
        npm install
    
    2. Then run:
    
        npm start
      
    3. Enjoy using the App!

Note: Currently not all functionalities are developed. The app will be fully connected to the backend logic and completely working in future development cycles.

# Process Flow
To run a demo of a royalties distribution process from a Property Rights Organization to the different rights holders, follow these steps:

    1. Add the EVM sidechain configuration:
        brownie networks import ./src/network-config.yaml

    2. To mint an NFT for an IP Entity of a Song and deploy the MPEG-21 Media Contract Ontology (MCO)'s smart contract, run:
    
        brownie run ./src/scripts/deploy.py main True --network ripple-evm-sidechain
    
    3. To run a demo from the distribution of royalties from a Property Rights Organization to the different rights holders, which interacts with the deployed MCO Smart Contract in the EVM Sidechain and Escrow Accounts in the XRPL, run:
    
        brownie run ./src/scripts/demo.py --network ripple-evm-sidechain

# References

- [ISO/IEC 21000-23:2022 Information technology — Multimedia framework (MPEG-21) — Part 23: Smart Contracts for Media](https://www.iso.org/standard/82527.html)
- [ISO/IEC 21000 Digital Item Declaration Language (DIDL)](https://mpeg.chiariglione.org/standards/mpeg-21/digital-item-declaration) 
- [ISO/IEC 21000 Digital Item Declaration Language (DIDL)'s Schema](https://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-21_schema_files/did/)
- [Overview of the MPEG-21 Media Contract Ontology (MCO)](https://www.semanticscholar.org/paper/Overview-of-the-MPEG-21-Media-Contract-Ontology-Rodr%C3%ADguez-Doncel-Delgado/9d0de4c4818b893f3b8eeffaa540a799c640241a)
- [Kudumakis, Panos, Thomas Wilmering, Mark B. Sandler, Víctor Rodríguez-Doncel, Laurent, Boch and Jaime Delgado. “MPEG Intellectual Property Rights Ontologies.” (2019).](https://www.semanticscholar.org/paper/MPEG-Intellectual-Property-Rights-Ontologies-Kudumakis-Wilmering/020b0b333015859657d91739087cd874a9edcda7)
- White Paper on MPEG-21 Contract Expression Language (CEL) and MPEG-21 Media Contract Ontology (MCO)
