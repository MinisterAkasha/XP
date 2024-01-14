import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import '@nextcss/reset';

import { Children } from '@/shared/types/children';
import Theme from '@/app/Theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Notion Clone',
    description: 'Notion App Clone',
};

export default function RootLayout({ children }: Children) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AntdRegistry>
                    <Theme>
                        Layout is Always Here
                        <br />
                        {children}
                    </Theme>
                </AntdRegistry>
            </body>
        </html>
    );
}
