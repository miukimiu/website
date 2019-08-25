import BerlinIcon from '../assets/icons/berlin/berlin.svg'
import BerlinHoverIcon from '../assets/icons/berlin/berlin-hover.svg'
import CoupIcon from '../assets/icons/berlin/coup.svg'

const makeDate = (d, m, y) => new Date(y, m - 1, d)

export const frontmatter = {
  info: {
    city: 'Berlin',
    link: 'berlin',
    date: makeDate(23, 7, 2019),
    icon: BerlinIcon,
    iconHover: BerlinHoverIcon,
    hostIcon: CoupIcon,
    hostName: 'Co.up Community'
  },
  site: {
    location: 'Co-up, Berlin',
    date: '2019-07-23T17:00:00.000Z',
    organizers: null,
    googleMapsLink: 'https://goo.gl/maps/VV6YUwPJaT79ESGG9',
    calendarLink:
      'https://www.google.com/calendar/render?action=TEMPLATE&text=QueerJS&location=Adalbertstra%C3%9Fe+8%2C+10999+Berlin&dates=20190723T170000Z%2F20190723T193000Z',
    cfp: false
  },
  mainOrganizer: [
    {
      name: 'Sara Vieira',
      main: true,
      phoneNumber: '+351 91 729 6830',
      twitterHandle: '@NikkitaFTW',
      email: 'hey@iamsaravieira.com'
    }
  ],
  organizers: [
    {
      id: 'ab3c7473-4bfd-4656-931f-f338aba73d97',
      name: 'Sara Vieira',
      email: 'hey@iamsaravieira.com',
      twitterHandle: '@NikkitaFTW'
    }
  ],
  thanks: [
    {
      id: '7e61667e-40cd-477e-9bcf-847a1265dae5',
      link: 'http://co-up.de/',
      name: 'co.up',
      reason: 'Space'
    }
  ],
  sponsors: [
    {
      name: 'Samsung Internet',
      link: 'https://www.samsung.com/de/apps/samsung-internet/',
      media:
        'https://cdn.sanity.io/images/atggkqis/production/062cc6c9edf62f567b0f65c13860fe8a6ea293df-355x90.svg'
    },
    {
      name: 'GitNation',
      link: 'https://gitnation.org/',
      media:
        'https://cdn.sanity.io/images/atggkqis/production/0a7d14ab63ce92901328ccccb668ec20678a3789-400x400.png'
    },
    {
      name: 'Jason Lengstorf',
      link: 'https://lengstorf.com/',
      media:
        'https://cdn.sanity.io/images/atggkqis/production/e92554910f306a81ba7bf1d25962ab51746c2267-200x200.png'
    }
  ],
  speakers: [
    {
      id: '5cbd7173-1809-46cf-986a-d83cd1324a07',
      mc: null,
      name: 'Pilar Andrea Huidobro Peltier',
      twitterLink: 'tamacodechi',
      photo:
        'https://cdn.sanity.io/images/atggkqis/production/6ae5868776184e82a2ab933c68fd1b1fb1203140-680x510-png'
    },
    {
      id: '662fc2e5-cd95-4642-b3e0-236ffc14a626',
      mc: null,
      name: 'Charlie Owen',
      twitterLink: 'sonniesedge',
      photo:
        'https://cdn.sanity.io/images/atggkqis/stockholm/c8e3a30272c47ea48fd4b7035657560495232d1e-200x200-png'
    },
    {
      id: '6cb4cafe-7a01-4403-be40-33daf7f3c15a',
      mc: null,
      name: 'Ada Rose Cannon',
      twitterLink: 'Lady_Ada_King',
      photo:
        'https://cdn.sanity.io/images/atggkqis/stockholm/4c79c26e81c425da52d85e0c5b6969665374dedb-200x200-png'
    },
    {
      id: '87e8c2b4-432f-446a-a324-86e8ef3c0624',
      mc: null,
      name: 'Steven Langbroek',
      twitterLink: 'stevendotjs',
      photo:
        'https://cdn.sanity.io/images/atggkqis/stockholm/5aa39e2fcf96f7ef38756dd77f01450182b791ea-400x400-png'
    },
    {
      id: 'c4a0d835-d7e0-4938-98c0-ae0b5f5a3d37',
      mc: null,
      name: 'Irina Shestak',
      twitterLink: '_lrlna',
      photo:
        'https://cdn.sanity.io/images/atggkqis/stockholm/385b29ac4ad9d90664abff19cddce47e414653d7-460x460-png'
    },
    {
      id: 'f28e49d7-6a79-4ae0-8770-0f21b5d8c033',
      mc: null,
      name: 'Kate Beard',
      twitterLink: 'SBinLondon',
      photo:
        'https://cdn.sanity.io/images/atggkqis/stockholm/af7a5edff5a84dd4d0908380bc8b71fb32e4ebbd-200x200-png'
    }
  ]
}
