'use client';

import React, {useEffect, useState} from "react";
import {Tree} from 'primereact/tree';
import {InputText} from "primereact/inputtext";
import {InputSwitch} from "primereact/inputswitch";
import {Button} from "primereact/button";
import {Message} from "primereact/message";

import {getMenus, postNavbarMenus} from "../../../../../services/navbarMenus";

const NavbarMenuCreatePage = () => {
    const [menus, setMenus] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [formState, setFormState] = useState({
        title: '',
        url: '',
        isActive: false
    });
    const [errorState, setErrorState] = useState({
        title: {
            error: false,
            message: ''
        },
        url: {
            error: false,
            message: ''
        }
    });

    const postNavbar = () => {
        const postData = {
            title: formState.title,
            url: formState.url,
            isActive: formState.isActive,
            parentId: getParentId() ?? null
        };
        postNavbarMenus(postData).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    const fetchMenus = () => {
        getMenus().then(response => {
            setMenus(response);
        }).catch(error => {
            console.log(error);
        });
    }


    useEffect(() => {
        fetchMenus();
    }, []);

    const parentMenus = menus.filter(menu => menu.parentId === null);

    const treeData = parentMenus.map(parentMenu => {
        const children = menus.filter(menu => menu.parentId === parentMenu.id);
        return {
            key: parentMenu.id,
            label: parentMenu.title,
            children: children.map(child => {
                return {
                    key: child.id,
                    label: child.title,
                    children: []
                }
            })
        }
    });

    treeData.forEach(parent => {
        parent.children.push({
            key: `new-${parent.key}`,
            label: 'Yeni Menü',
            children: []
        });
    });
    treeData.push({
        key: 'new',
        label: 'Yeni Menü',
        children: []
    });

    const getParentId = () => {
        console.log('selectedLocation', selectedLocation);
        if (selectedLocation === null) {
            return null;
        }

        if (typeof selectedLocation === 'number') {
            return null;
        }

        if (selectedLocation.toString() === 'new') {
            return null;
        }


        return parseInt(selectedLocation.toString().split('-')[1]);
    }


    const handleSubmit = () => {
        if (formState.title === '') {
            setErrorState({...errorState, title: {error: true, message: 'Başlık boş olamaz'}});
            return;
        }

        if (formState.url === '') {
            setErrorState({...errorState, url: {error: true, message: 'URL boş olamaz'}});
            return;
        }

        if (!formState.url.startsWith('/')) {
            setErrorState({...errorState, url: {error: true, message: 'URL / ile başlamalıdır'}});
            return;
        }

        postNavbar();
    }

    return (
        <div className="card input-group-lg">
            <div className="flex flex-column gap-2">
                <Tree value={treeData} selectionMode="single" selectionKeys={selectedLocation}
                      onSelectionChange={e => setSelectedLocation(e.value)}/>
                {selectedLocation && selectedLocation.toString().includes('new') && (
                    <div className="flex flex-column gap-2">
                        <InputText id="title" aria-describedby="title-help" placeholder="Başlık Örneğin: Hakkımızda"
                                   invalid={errorState.title.error} value={formState.title}
                                   onFocus={() => setErrorState({...errorState, title: {error: false, message: ''}})}
                                   onChange={e => setFormState({...formState, title: e.target.value})}/>
                        {errorState.title.error && <Message severity={'error'} text={errorState.title.message}/>}
                        <InputText id="url" aria-describedby="url-help" placeholder="URL Örneğin: /about-us"
                                   invalid={errorState.url.error} value={formState.url}
                                   onFocus={() => setErrorState({...errorState, url: {error: false, message: ''}})}
                                   onChange={e => setFormState({...formState, url: e.target.value})}/>
                        {errorState.url.error && <Message severity={'error'} text={errorState.url.message}/>}
                        <div className="flex gap-2">
                            <label htmlFor="isActive" className="text-light">Aktif mi?</label>
                            <InputSwitch id="isActive" aria-describedby="isActive-help" checked={formState.isActive}/>
                        </div>
                        <Button label="Kaydet" onClick={() => handleSubmit()} className="p-button-primary"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavbarMenuCreatePage;
