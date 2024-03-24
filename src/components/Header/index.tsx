import Link from 'next/link'

import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

export function Header(): JSX.Element {
  return (
    <>
      <Menubar className="px-7">
        <MenubarMenu>
          <MenubarTrigger className="text-violet11 data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4 flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[13px] leading-none outline-none ">
            <Link href="/list">Movies List</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-violet11 data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4 flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[13px] leading-none outline-none">
            <Link href="/dashboard">Dashboard</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  )
}
