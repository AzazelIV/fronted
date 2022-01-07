import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0, // Has zero aloc, we use this just to calculate USD price
    risk: 3,
    isTokenOnly: false,
    hide: true,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 1,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'VLTR-BUSD LP',
    lpAddresses: {
      97: '0xc6231bfbc66ab4b9dfd4ed8966f119d41c9eeb45', // MILK-BUSD LP
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // MILK-BUSD LP
    },
    tokenSymbol: 'VLTR-BUSD',
    tokenAddresses: {
      97: '0x3eFA66aB2b1690e9BE8e82784EDfF2cF2dc150e0', // MILK
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // MILK
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 2, 
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'VLT-BUSD LP',
    lpAddresses: {
      97: '0xc214b43d8f7cccffc28c273ae74cf946538c2037', // COW-BUSD LP
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // COW-BUSD LP
    },
    tokenSymbol: 'VLT-BUSD',
    tokenAddresses: {
      97: '0x562d2BFc80FD1afF3bF5e4Bd8Fa5312E65305C14', // COW
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // COW
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 3,
    risk: 1,
    decimals: 9,
    isTokenOnly: true,
    lpSymbol: 'Viltrumita',
    lpAddresses: {
      97: '0xc214b43d8f7cccffc28c273ae74cf946538c2037',  // COW BUSD LP
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // COW BUSD LP
    },
    tokenSymbol: 'Viltrumita',
    tokenAddresses: {
      97: '0x562d2BFc80FD1afF3bF5e4Bd8Fa5312E65305C14', // COW
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // COW
    },
     quoteTokenSymbol: QuoteToken.BUSD,
     quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 4,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Refined Viltrumite',
    lpAddresses: {
      97: '0xc6231bfbc66ab4b9dfd4ed8966f119d41c9eeb45', // MILK-BUSD LP
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // MILK-BUSD LP
    },
    tokenSymbol: 'Refined Viltrumite',
    tokenAddresses: {
      97: '0x3eFA66aB2b1690e9BE8e82784EDfF2cF2dc150e0', // MILK
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // MILK
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'VLTR Unity Game',
    lpAddresses: {
      97: '0xa59a583e3513e93abe4c31b0c26d5d5d3683581d',
      56: '0xa59a583e3513e93abe4c31b0c26d5d5d3683581d', // GOL-BUSD LP
    },
    tokenSymbol: 'VLTRG',
    tokenAddresses: {
      97: '0xa59a583e3513e93abe4c31b0c26d5d5d3683581d',
      56: '0xa59a583e3513e93abe4c31b0c26d5d5d3683581d', // GOL
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
