"use client";

import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';
import logoImg from '/public/logoG.svg';
import { LogOutIcon } from 'lucide-react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';


export function Header() {

  const router = useRouter();

  async function handleLogout() {
    deleteCookie('session', {path: '/'});

    router.replace('/');

  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image
            src="/logoG.svg"
            alt="Logo de la pizzería del gatito"
            width={150}
            height={110}
            priority={true}
            quality={100}
          />
        </Link>

        <nav>
          <Link href='/dashboard/category'>
          categoria
          
          </Link>
          <Link href='/dashboard/products'>
          produtos
        
          </Link>

          <form action={handleLogout}>
            <button type='submit'>
              <LogOutIcon size={24} color="#fff"/>
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}