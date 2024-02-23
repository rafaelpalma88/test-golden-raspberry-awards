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
    { length: movies?.totalPages - 1 },
    (_, index) => index + 1
  )

  return (
    <Pagination>
      <PaginationContent>
        {/* TODO: Improve pagination using first and last page */}
        {/* <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem> */}
        {pages?.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={selectedPage === page}
              onClick={() => {
                handleClick(page)
                // setSelectedPage(page)
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem> */}
        {/* <PaginationItem>
        <PaginationNext onClick={handleNextPage} href="#" />
      </PaginationItem> */}
      </PaginationContent>
    </Pagination>
  )
}
