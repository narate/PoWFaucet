
export interface IFaucetConfig {
  faucetTitle: string;
  faucetStatus: IFaucetStatus[];
  faucetImage: string;
  faucetHtml: string;
  faucetCoinSymbol: string;
  hcapProvider: string;
  hcapSiteKey: string | null;
  hcapSession: boolean;
  hcapClaim: boolean;
  shareReward: number;
  minClaim: number;
  maxClaim: number;
  powTimeout: number;
  claimTimeout: number;
  powParams: IPoWParams;
  powNonceCount: number;
  resolveEnsNames: boolean;
  ethTxExplorerLink: string;
}

export interface IPoWParams {
  n: number; // cpu and memory cost
  r: number; // block size
  p: number; // paralellization
  l: number; // key length
  d: number; // difficulty
}

export interface IFaucetStatus {
  text: string;
  level: string;
  ishtml: boolean;
}
