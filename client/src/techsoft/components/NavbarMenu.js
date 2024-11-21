import {useEffect, useState} from "react";
import axios from "axios";

const NavbarMenu = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/navbar-menus")
            .then((response) => {
                setMenus(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const SingleMenu = ({menu}) => {
        return (
            <li key={menu.id}>
                <a href={menu.url}>{menu.title}</a>
            </li>
        );
    };

    const MultiMenu = ({menu}) => {
        console.log("Menu: ", menu);
        return (
            <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                <a href={menu.url}>{menu.title}</a>
                <span className="rd-navbar-submenu-toggle"/>
                <ul className="rd-navbar-dropdown">
                    {menu.children.map((child) => {
                        return <SingleMenu menu={child} />;
                    })}
                </ul>
            </li>
        );
    }

    console.log("Menus: ", menus);

    return (
        <div className="rd-navbar-nav-wrap toggle-original-elements">
            <div className="rd-navbar-element">
                {/* RD Navbar Search*/}
                <div
                    className="rd-navbar-search rd-navbar-search-toggled toggle-original-elements">
                    <button
                        className="rd-navbar-search-toggle toggle-original"
                        data-rd-navbar-toggle=".rd-navbar-search"
                    />
                    <form
                        className="rd-search"
                        action="search-results.html"
                        data-search-live="rd-search-results-live"
                        method="GET"
                    >
                        <div className="form-wrap">
                            <input
                                className="form-input"
                                id="rd-navbar-search-form-input"
                                type="text"
                                name="s"
                                autoComplete="off"
                            />
                        </div>
                        <button
                            className="rd-navbar-search-submit"
                            type="submit"
                        />
                        <label
                            className="form-label rd-input-label"
                            htmlFor="rd-navbar-search-form-input"
                        >
                            Search...
                        </label>
                        <div
                            className="rd-search-results-live"
                            id="rd-search-results-live"
                        />
                    </form>
                </div>
            </div>
            {/* RD Navbar Nav*/}
            <ul className="rd-navbar-nav">
                {menus.map((menu) => {
                    if (menu.children.length > 0) {
                        return <MultiMenu menu={menu} />;
                    } else if (menu.children.length === 0 && !menu.parentId) {
                        return <SingleMenu menu={menu} />;
                    } else {
                        return null;
                    }
                })}

                <li className="rd-navbar--has-megamenu rd-navbar-submenu">
                    <a href="#">Pages</a>
                    <span className="rd-navbar-submenu-toggle"/>
                    {/* RD Navbar Megamenu*/}
                    <ul className="rd-navbar-megamenu rd-navbar-open-right">
                        <li>
                            <h5 className="rd-megamenu-header">Pages 1</h5>
                            <ul className="rd-megamenu-list">
                                <li>
                                    <a href="faq.html">FAQ</a>
                                </li>
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="cart-page.html">Cart page</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h5 className="rd-megamenu-header">Pages 2</h5>
                            <ul className="rd-megamenu-list">
                                <li>
                                    <a href="404-page.html">404 page</a>
                                </li>
                                <li>
                                    <a href="503-page.html">503 page</a>
                                </li>
                                <li>
                                    <a href="coming-soon.html">Coming soon</a>
                                </li>
                                <li>
                                    <a href="maintenance.html">Maintenance</a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">
                                        Privacy policy
                                    </a>
                                </li>
                                <li>
                                    <a href="search-results.html">
                                        Search results
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h5 className="rd-megamenu-header">Elements</h5>
                            <ul className="rd-megamenu-list">
                                <li>
                                    <a href="buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="forms.html">Forms</a>
                                </li>
                                <li>
                                    <a href="grid-system.html">Grid system</a>
                                </li>
                                <li>
                                    <a href="progress-bars.html">Progress bars</a>
                                </li>
                                <li>
                                    <a href="tables.html">Tables</a>
                                </li>
                                <li>
                                    <a href="tabs-and-accordions.html">
                                        Tabs and Accordions
                                    </a>
                                </li>
                                <li>
                                    <a href="typography.html">Typography</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default NavbarMenu;
