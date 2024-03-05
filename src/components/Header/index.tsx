import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import Link from 'next/link'

export function Header(): JSX.Element {
  return (
    <>
      <Menubar className="px-7">
        <MenubarMenu>
          <MenubarTrigger className="py-2 px-3 outline-none select-none leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4 ">
            <Link href="/list">Movies List</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="py-2 px-3 outline-none select-none leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
            <Link href="/dashboard">Dashboard</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  )
}
