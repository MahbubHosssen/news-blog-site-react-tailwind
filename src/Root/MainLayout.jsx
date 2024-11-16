import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Latest from '../components/Latest';
import LeftNav from '../components/LeftNav';
import News from '../components/news';
import RightNav from '../components/RightNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <Latest></Latest>
                </section>
            </header>

            <nav className='w-11/12 mx-auto'>
                <Navbar>

                </Navbar>
            </nav>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
                <aside className='left-nav col-span-3'>
                   <LeftNav></LeftNav>
                </aside>

                <section className='mid-nav col-span-6'>
                    <Outlet></Outlet>
                </section>
                
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>

            <Footer>

            </Footer>
        </div>
    );
};

export default MainLayout;