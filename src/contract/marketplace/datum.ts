import { Data } from "lucid-cardano";


const nftMarketplaceDatumShema = Data.Object({
    policyId: Data.Bytes(),
    assetName: Data.Bytes(),
    seller: Data.Bytes(),
    price: Data.Integer(),

})

type NFTMarketplaceDatum = Data.Static<typeof nftMarketplaceDatumShema>; /*unresolved*/

export const NFTMarketplaceDatum = nftMarketplaceDatumShema as unknown as NFTMarketplaceDatum; 