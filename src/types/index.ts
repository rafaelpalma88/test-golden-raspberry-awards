export interface IMovie {
  id: number
  year: number
  title: string
  studios: string[]
  producers: string[]
  winner: boolean
}

export interface IPageable {
  sort: {
    unsorted: boolean
    sorted: boolean
    empty: boolean
  }
  offset: number
  pageSize: number
  pageNumber: number
  paged: boolean
  unpaged: boolean
}

export interface IMoviesResponse {
  content: IMovie[]
  pageable: IPageable
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  sort: {
    unsorted: boolean
    sorted: boolean
    empty: boolean
  }
  first: boolean
  numberOfElements: number
  empty: boolean
}

export interface IYearData {
  year: number
  winnerCount: number
}

export interface IMoviesWinnerInfo {
  id: number
  producers: string[]
  studios: string[]
  title: string
  winner: boolean
  year: number
}

export interface IYearsWithWinnerCount {
  years: IYearData[]
}

export interface IInterval {
  followingWin: number
  interval: number
  previousWin: number
  producer: string
}

export interface IIntervalList {
  max: IInterval[]
  min: IInterval[]
}

export interface IStudio {
  name: string
  winCount: number
}

export interface IStudioWithCountResponse {
  studios: IStudio[]
}
