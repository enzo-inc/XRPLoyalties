# XRPLoyalties
![dashboard.jpeg](screenshots%2Fdashboard.jpeg)
![community.jpeg](screenshots%2Fcommunity.jpeg)

Artist royalties distribution service built on XRPL using the [MPEG-21](https://www.mpeg.org/standards/MPEG-21/21/) Media Contract Ontology (MCO) standard from the Moving Picture Experts Group (MPEG) to define royalties distribution rules in a smart contract.

# Architecture
![XRPLoyalties Architecture.png](screenshots%2FXRPLoyalties%20Architecture.png)

We use Ripple's blockchain for:
- To settle cross-border payments from several Performing Righths Organizations
- Escrow accounts to hold the funds until the royalties are claimed by the right holders

We use the EVM sidechain for:
- To deploy IPEntity smart contract to store the IP Entities of each NFT. This smart contract translates the [MPEG-21 Media Contract Ontology (MCO)](https://www.semanticscholar.org/paper/Overview-of-the-MPEG-21-Media-Contract-Ontology-Rodr%C3%ADguez-Doncel-Delgado/9d0de4c4818b893f3b8eeffaa540a799c640241a), a part of the standard ISO/IEC 21000, into a smart contract.
- To mint NFTs for each IP Entity
- The IP Entity metadata for each NFT is generated using the [MPEG-21 Media Contract Ontology (MCO)](https://www.semanticscholar.org/paper/Overview-of-the-MPEG-21-Media-Contract-Ontology-Rodr%C3%ADguez-Doncel-Delgado/9d0de4c4818b893f3b8eeffaa540a799c640241a), a part of the standard ISO/IEC 21000.

# Metadata
The metadata is generated using the [MPEG-21 Digital Item Declaration Language (DIDL)](https://mpeg.chiariglione.org/standards/mpeg-21/digital-item-declaration) standard using its [XML schema definition](https://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-21_schema_files/did/). The metadata is stored in IPFS and used for minting the IP Entity of each NFT.

# Royalties
The [MPEG-21 Media Contract Ontology (MCO)](https://www.semanticscholar.org/paper/Overview-of-the-MPEG-21-Media-Contract-Ontology-Rodr%C3%ADguez-Doncel-Delgado/9d0de4c4818b893f3b8eeffaa540a799c640241a), a part of the standard ISO/IEC 21000, "is an ontology to represent contracts dealing with rights on multimedia assets and intellectual property protected content in general" from the work of _[Kudumakis, Panos, Thomas Wilmering, Mark B. Sandler, Víctor Rodríguez-Doncel, Laurent, Boch and Jaime Delgado. “MPEG Intellectual Property Rights Ontologies.” (2019)](https://www.semanticscholar.org/paper/MPEG-Intellectual-Property-Rights-Ontologies-Kudumakis-Wilmering/020b0b333015859657d91739087cd874a9edcda7)_ is used to define royalties distribution rules in the IPEntity smart contract.

# References

- [ISO/IEC 21000-23:2022 Information technology — Multimedia framework (MPEG-21) — Part 23: Smart Contracts for Media](https://www.iso.org/standard/82527.html)
- [ISO/IEC 21000 Digital Item Declaration Language (DIDL)](https://mpeg.chiariglione.org/standards/mpeg-21/digital-item-declaration) 
- [ISO/IEC 21000 Digital Item Declaration Language (DIDL)'s Schema](https://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-21_schema_files/did/)
- [Overview of the MPEG-21 Media Contract Ontology (MCO)](https://www.semanticscholar.org/paper/Overview-of-the-MPEG-21-Media-Contract-Ontology-Rodr%C3%ADguez-Doncel-Delgado/9d0de4c4818b893f3b8eeffaa540a799c640241a)
- [Kudumakis, Panos, Thomas Wilmering, Mark B. Sandler, Víctor Rodríguez-Doncel, Laurent, Boch and Jaime Delgado. “MPEG Intellectual Property Rights Ontologies.” (2019).](https://www.semanticscholar.org/paper/MPEG-Intellectual-Property-Rights-Ontologies-Kudumakis-Wilmering/020b0b333015859657d91739087cd874a9edcda7)
- White Paper on MPEG-21 Contract Expression Language (CEL) and MPEG-21 Media Contract Ontology (MCO)
