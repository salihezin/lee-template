'use client';

import {PrimeReactProvider} from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import './styles/layout/layout.scss';
import './styles/demo/Demos.scss';
import {LayoutProvider} from "./layout/context/layoutcontext";

export default function RootLayout({ children }) {
    return (
        <PrimeReactProvider>
            <LayoutProvider>
                <main>
                    {children}
                </main>
            </LayoutProvider>
        </PrimeReactProvider>
    );
}
