'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'
import { type IMoviesResponse } from '@/types'

interface IProps {
  movies: IMoviesResponse
  selectedPage: number
  handleNextPage: (page: number) => void
}

export function CustomPagination({
  movies,
  selectedPage,
  handleNextPage,
}: IProps): JSX.Element {
  function handleClick(page: number): void {
    handleNextPage(page)
  }

  const pages = Array.from(
    { length: movies?.totalPages },
    (_, index) => index + 1
  )
  return (
    <Pagination>
      <PaginationContent>
        {pages?.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={selectedPage + 1 === page}
              onClick={() => {
                handleClick(page)
              }}
              data-testid={`pagination-link-${page}`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
