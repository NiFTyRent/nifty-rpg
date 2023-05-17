import { NiftyRent } from "@niftyrent/sdk"

export const CANDLE_NFT_TOKEN_IDS = [...Array(25).keys()].map(x => x.toString());
export let niftyrent = new NiftyRent({
    defaultContractAddr: "niftyrpg.mintspace2.testnet",
    allowedRentalProxies: ["nft-rental.testnet"],
});

export function getNftItems(accountId, callback) {
  niftyrent.init().then(() => {
    Promise.all(CANDLE_NFT_TOKEN_IDS.map(id =>
        niftyrent.is_current_user(accountId, id)
    )).then(results => {
        const count = results.filter(x => x).length
        if (count > 0) {
          callback(count)
        }
    })
  })
}