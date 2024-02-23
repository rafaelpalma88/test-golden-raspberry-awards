import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import Link from 'next/link'

export function Header(): JSX.Element {
  return (
    <Menubar className="px-7">
      <MenubarMenu>
        <Link href="/list">
          <MenubarTrigger>Movies List</MenubarTrigger>
        </Link>
        <Link href="/dashboard">
          <MenubarTrigger>Dashboard</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  )
}
