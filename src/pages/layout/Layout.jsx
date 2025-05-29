import React from 'react'
// Header and Footer

import Footer from "../../components/Footer";
// Outlet, serves as a variable, as it changes content or page (component) according to route
import { Outlet } from 'react-router-dom';
import { SuspenseCustom } from '../../utils/utils';
import Header from '../../components/header';

const Layout = () => {
    return (
        <>
            <Header/>
            <main className='site_main'>
                <SuspenseCustom>
                    <Outlet />
                </SuspenseCustom>
            </main>
            <Footer />
        </>
    )
}

export default React.memo(Layout);