"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react';

import logo from "@/assets/ic-logo.png";
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
};

const navItems: NavItem[] = [
    {
        label: "About Us",
        link: "/",
        children: [
            {
                label: "About Us",
                link: "/about",
            },
            {
                label: "test",
                link: "/",
            },
            {
                label: "test",
                link: "/",
            },
        ]
    },
    {
        label: "Placements",
    }
]

const PrimaryNavbar = () => {
    const [isSideMenuOpen, setSideMenu] = useState(false);
    const openSideMenu = () => { setSideMenu(true); }
    const closeSideMenu = () => { setSideMenu(false); }
    const [animationParent] = useAutoAnimate();

  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm bg-gray-500/30 rounded-md">
        {/* left side */}
        <section ref={animationParent} className="flex items-center gap-10">
            {/* logo */}
            <Image src={logo} alt="logo" className="w-10 h-10 transition-all duration-500 hover:[transform:rotateY(180deg)]" />
            {/* nav links */}
            {
                isSideMenuOpen &&
                <MobilePrimaryNavbar closeSideMenu={closeSideMenu} />
            }   
            <div className="hidden md:flex items-center gap-4 transition-all">
                {
                    navItems.map((item) => (
                        <Link key={item.label} href={item.link ?? "/"} className="relative group px-2 py-3 transition-all">
                            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                                <span>{item.label}</span>
                                {
                                    item.children && (
                                        <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                                    )
                                }
                            </p>

                            {/* dropdown */}
                            {
                                item.children && (
                                    <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                                    {
                                        item.children.map((subitem) => (
                                            <Link
                                                key={subitem.label}
                                                href={subitem.link ?? "/"}
                                                className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
                                                {/* icon */}
                                                <IoIosArrowDropright />
                                                {/* item */}
                                                <span className="whitespace-nowrap pl-3">{subitem.label}</span>
                                            </Link>
                                        ))
                                    }
                            </div>
                                )
                            }
                            
                        </Link>
                    ))
                }
                
            </div>
        </section>

        {/* right side */}
        <section className="flex items-center gap-8">

        </section>

        {/* menubar icon */}
        <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden" />
    </div>
  )
}

function MobilePrimaryNavbar({closeSideMenu}:{closeSideMenu: () => void}) {
    return (
        <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
            <div className="h-full w-[65%] bg-white px-4 py-4">
                <section className="flex justify-end">
                    <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
                </section>
                <div className="flex flex-col text-base gap-2 transition-all">
                {
                    navItems.map((item) => (
                        <SingleNavItem key={item.label} label={item.label} link={item.link}>
                            { item.children }
                        </SingleNavItem>
                    ))
                }
                
            </div>
            </div>
        </div>
    )
}

function SingleNavItem(item: NavItem) {
    const [isItemOpen, setItem] = useState(false);
    const [animationParent] = useAutoAnimate();

    const toggleItem  = () => {
        return setItem(!isItemOpen);
    }

    return (
        <Link 
            ref={animationParent}
            key={item.label} 
            href={item.link ?? "/"} 
            className="relative px-2 py-3 transition-all"
            onClick={toggleItem}
        >
            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                <span>{item.label}</span>
                {
                    item.children && (
                        <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />
                    )
                }
            </p>

            {/* dropdown */}
            {
                isItemOpen && item.children && (
                    <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
                    {
                        item.children.map((subitem) => (
                            <Link
                                key={subitem.label}
                                href={subitem.link ?? "/"}
                                className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
                                {/* icon */}
                                <IoIosArrowDropright />
                                {/* item */}
                                <span className="whitespace-nowrap pl-3">{subitem.label}</span>
                            </Link>
                        ))
                    }
                    </div>
                )
            }
            
        </Link>
    )
}

export default PrimaryNavbar