import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { CustomPagination } from '.'

describe('Component: Custom Pagination', () => {
  it('should render correctly custom pagination component', () => {
    const mock = {
      movies: {
        content: [
          {
            id: 16,
            year: 1982,
            title: 'Inchon',
            studios: ['MGM'],
            producers: ['Mitsuharu Ishii'],
            winner: true,
          },
          {
            id: 17,
            year: 1982,
            title: 'Annie',
            studios: ['Columbia Pictures'],
            producers: ['Ray Stark'],
            winner: false,
          },
          {
            id: 18,
            year: 1982,
            title: 'Butterfly',
            studios: ['Analysis Film Releasing'],
            producers: ['Matt Cimber'],
            winner: false,
          },
          {
            id: 19,
            year: 1982,
            title: 'Megaforce',
            studios: ['20th Century Fox'],
            producers: ['Albert S. Ruddy'],
            winner: false,
          },
          {
            id: 20,
            year: 1982,
            title: 'The Pirate Movie',
            studios: ['20th Century Fox'],
            producers: ['David Joseph'],
            winner: false,
          },
          {
            id: 21,
            year: 1983,
            title: 'The Lonely Lady',
            studios: ['Universal Studios'],
            producers: ['Robert R. Weston'],
            winner: true,
          },
          {
            id: 22,
            year: 1983,
            title: 'Hercules',
            studios: ['Cannon Films', 'MGM', 'United Artists'],
            producers: ['Menahem Golan', 'Yoram Globus'],
            winner: false,
          },
          {
            id: 23,
            year: 1983,
            title: 'Jaws 3-D',
            studios: ['Universal Studios'],
            producers: ['Rupert Hitzig'],
            winner: false,
          },
          {
            id: 24,
            year: 1983,
            title: 'Stroker Ace',
            studios: ['Universal Studios', 'Warner Bros.'],
            producers: ['Hank Moonjean'],
            winner: false,
          },
          {
            id: 25,
            year: 1983,
            title: 'Two of a Kind',
            studios: ['20th Century Fox'],
            producers: ['Joe Wizan', 'Roger M. Rothstein'],
            winner: false,
          },
          {
            id: 26,
            year: 1984,
            title: 'Bolero',
            studios: ['Cannon Films'],
            producers: ['Bo Derek'],
            winner: true,
          },
          {
            id: 27,
            year: 1984,
            title: 'Cannonball Run II',
            studios: ['Warner Bros.'],
            producers: ['Albert S. Ruddy'],
            winner: false,
          },
          {
            id: 28,
            year: 1984,
            title: 'Rhinestone',
            studios: ['20th Century Fox'],
            producers: ['Howard Smith', 'Marvin Worth'],
            winner: false,
          },
          {
            id: 29,
            year: 1984,
            title: 'Sheena',
            studios: ['Columbia Pictures'],
            producers: ['Paul Aratow'],
            winner: false,
          },
          {
            id: 30,
            year: 1984,
            title: "Where the Boys Are '84",
            studios: ['TriStar Pictures'],
            producers: ['Allan Carr'],
            winner: false,
          },
        ],
        pageable: {
          sort: {
            unsorted: true,
            sorted: false,
            empty: true,
          },
          offset: 15,
          pageSize: 15,
          pageNumber: 1,
          paged: true,
          unpaged: false,
        },
        totalPages: 14,
        totalElements: 206,
        last: false,
        size: 15,
        number: 1,
        sort: {
          unsorted: true,
          sorted: false,
          empty: true,
        },
        first: false,
        numberOfElements: 15,
        empty: false,
      },
      selectedPage: 1,
      handleNextPage: () => {},
    }
    render(
      <CustomPagination
        movies={mock.movies}
        selectedPage={mock.selectedPage}
        handleNextPage={mock.handleNextPage}
      />
    )
    // TODO: I need to finish this test
    expect(1).toBe(1)
  })
})
