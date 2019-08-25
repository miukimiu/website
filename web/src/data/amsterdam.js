import AmsterdamIcon from '../assets/icons/amsterdam/amsterdam.svg'
import AmsterdamHoverIcon from '../assets/icons/amsterdam/amsterdam-hover.svg'
import BookingIcon from '../assets/icons/amsterdam/booking.svg'
const makeDate = (d, m, y) => new Date(y, m - 1, d)

export const frontmatter = {
  info: {
    city: 'Amsterdam',
    link: 'amsterdam',
    date: makeDate(2, 10, 2019),
    icon: AmsterdamIcon,
    iconHover: AmsterdamHoverIcon,
    hostIcon: BookingIcon,
    hostName: 'Booking.com'
  },
  site: {
    city: 'Amsterdam',
    location: 'Booking',
    date: '2019-10-02T15:30:00.000Z',
    organizers: null,
    googleMapsLink:
      'https://www.google.com/maps/place/Booking.com+HQ+AMS9/@52.3653734,4.8423399,13z/data=!4m8!1m2!2m1!1sbooking+amsterdam!3m4!1s0x47c6099590ae1d19:0x37f9e7921bb19b73!8m2!3d52.3655546!4d4.8985397',
    calendarLink:
      'http://www.google.com/calendar/event?action=TEMPLATE&dates=20191002T153000Z%2F20191002T190000Z&text=QueerJS%20Amsterdam&location=Booking.com%20HQ%2C%20Herengracht%2C%20Amsterdam&details=',
    cfp: false
  },
  mainOrganizer: [
    {
      name: 'Paul Verbeek-Mast',
      main: true,
      phoneNumber: '+31 642349200',
      twitterHandle: 'paul_v_m',
      email: 'paul@confrere.com'
    }
  ],
  organizers: [
    {
      id: '9c131910-d935-4e75-b988-5db4990c0d16',
      name: 'Paul Verbeek-Mast',
      email: 'paul@confrere.com',
      twitterHandle: 'paul_v_m'
    }
  ],
  thanks: [],
  sponsors: [
    {
      name: 'Booking',
      link: 'https://booking.com',
      media:
        'https://cdn.sanity.io/images/atggkqis/amsterdam/f1fa0d21097b5678961e1c9b10eb030014d79f9f-714x120.png'
    },
    {
      name: 'Samsung Internet',
      link: 'https://www.samsung.com/de/apps/samsung-internet/',
      media:
        'https://cdn.sanity.io/images/atggkqis/amsterdam/57785c7e03e369da149636a6be5813a74cf06a55-355x90.png'
    }
  ],
  speakers: [
    {
      id: 'a203c153-6977-41fb-92f8-a7e710cab1de',
      mc: null,
      name: 'Sanne Kalkman',
      twitterLink: 'sannekalkman',
      photo:
        'https://cdn.sanity.io/images/atggkqis/amsterdam/30bd12b8d9b967379c333d83d038db132fc9a3fe-400x400-png'
    },
    {
      id: 'a35623be-c1a7-4856-baa5-295099b7b619',
      mc: null,
      name: 'Paul Verbeek-Mast',
      twitterLink: 'paul_v_m',
      photo:
        'https://cdn.sanity.io/images/atggkqis/amsterdam/341fbbdff90a0900f9911fba682ca33974a58cfd-400x400-png'
    },
    {
      id: 'a6a442a9-1770-4527-bc11-b39787c8951d',
      mc: null,
      name: 'Ash Kyd',
      twitterLink: 'ashkyd',
      photo:
        'https://cdn.sanity.io/images/atggkqis/amsterdam/a2b6bd67efb7e74d2e780306e90b1e95bb69ce41-400x400-png'
    },
    {
      id: 'b320226f-d634-4fc4-b301-56fb72c82b14',
      mc: null,
      name: 'Ives van Hoorne',
      twitterLink: 'CompuIves',
      photo:
        'https://cdn.sanity.io/images/atggkqis/amsterdam/26f29e826910d1501f08ed861ee9e899984376f4-400x400-png'
    },
    {
      id: 'dcfe46c6-8255-490c-99cb-49c9b68a899f',
      mc: null,
      name: 'HJ Chen',
      twitterLink: 'hj_chen',
      photo:
        'https://cdn.sanity.io/images/atggkqis/amsterdam/a4365cf7e721f1ed0bd7f040d6d585cc0ac3358a-400x400-png'
    }
  ]
}
