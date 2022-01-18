import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy',
    icon: 'TradeIcon',
    items: [
      {
        label: '$Viltrumita',
        href: 'https://pancakeswap.finance/swap',
      },
      {
        label: '$Refined Viltrumita',
        href: 'https://pancakeswap.finance/swap',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Refined Viltrumite Bar',
    icon: 'PoolIcon',
    href: '/Viltrumitabar',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/AzazelIV/cashcow-uikit',
      },
      {
        label: 'Whitepaper',
        href: 'https://www.cryptominespacex.com/whitepaperandtokenomic',
      },
    ],
  },
  
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/CashCowProject',
  //     },
  //     {
  //       label: 'Whitepaper',
  //       href: 'https://cashcowprotocol.gitbook.io/cashcow/',
  //     },
  //   ],
  // },
  {
      label: 'Partnerships/IFO',
      icon: 'GooseIcon',
      href:
        'https://www.cryptominespacex.com/request-your-ifo',
    },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
