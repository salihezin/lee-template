'use client';

import {useEffect, useState} from "react";
import axios from "axios";

const Navbar = () => {
    const [menus, setMenus] = useState([]);
    const [mainMenu, setMainMenu] = useState();

    useEffect(() => {
        axios.get(' http://localhost:3001/api/navbar-menus')
            .then(response => {
                setMenus(response.data);
                response.data.forEach(menu => {
                    if (menu.mainMenu) {
                        setMainMenu(menu);
                    }
                });
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const logoView = () => (
        <>
            <a className="navbar-brand" href={mainMenu?.url}>{mainMenu?.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    );

    const singleMenu = (menu) => (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={menu.url}>{menu.title}</a>
        </li>
    );

    const dropdownMenu = (menu) => (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
                {menu.title}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {menus.map((subMenu, index) => {
                    if (subMenu.parentId === menu.id) {
                        return (
                            <li key={index}>
                                <a className="dropdown-item" href={subMenu.url}>{subMenu.title}</a>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </li>
    );

    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    {mainMenu && logoView()}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            {menus.map((menu, index) => {
                                if (menu.mainMenu) {
                                    return null;
                                }
                                return menu.children.length > 0 ? dropdownMenu(menu) : menu.parentId ? null : singleMenu(menu);
                            })}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
