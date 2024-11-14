'use client';

import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('../../public/technoIt/components/ClientSide'), {
    ssr: false
});

export default function Home() {

    return (
        <div>
            <NoSSR/>
        </div>
    );
}
