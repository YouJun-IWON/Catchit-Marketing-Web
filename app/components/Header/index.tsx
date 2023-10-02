'use client';
import Logo from './Logo';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const menuItems = ['Home', 'About', 'Contact', 'Post'];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive={pathName === '/'}>
          <Link href='/' color='foreground'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === '/About'}>
          <Link href='/About' color='foreground'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === '/Contact'}>
          <Link color='foreground' href='/Contact'>
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === '/postBox'}>
          <Link color='foreground' href='/postBox'>
            Posts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        {/* <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            App Download
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color='foreground'
              // color={
              //   index === 2
              //     ? 'primary'
              //     : index === menuItems.length - 1
              //     ? 'danger'
              //     : 'foreground'
              // }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

// const Header = () => {
//   return (
//     <div className='w-full p-4 px-10 flex items-center justify-between'>
//       <Logo />
//       <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2    bg-light-80 backdrop-blur-sm z-50'>
//         <Link href='/' className='mr-2'>
//           Home
//         </Link>
//         <Link href='/about' className='mr-2'>
//           About
//         </Link>
//         <Link href='/contact'>Contact</Link>
//       </nav>
//       <div><a className='inline-block w-6 h-6 mr-4'>
//       <div className='hover:scale-125 transition-all ease duration-200'>Social Links</div>
//         </a></div>
//     </div>
//   );
// };

// export default Header;
