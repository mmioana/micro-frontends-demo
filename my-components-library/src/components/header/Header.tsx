import React from 'react';

import { Button } from '../button/Button';

import { Link } from '../../types/Link';

export interface HeaderProps {
    brand: string,
    links?: Link[],
    children?: string | JSX.Element | JSX.Element[],
}

export const Header = ({ brand, links, children }: HeaderProps) => {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-50 p-6">

            <div className='mr-4'>

                <h1 className="text-3xl text-primary font-bold">
                    <a href="/" >
                        {brand}
                    </a>
                </h1>

            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    {links?.map(link => (
                        <a href={link.url} key={link.name} className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-secondary mr-4">
                            {link.name}
                        </a>
                    ))}
                </div>
                { children }
            </div>
        </nav>
    )
}