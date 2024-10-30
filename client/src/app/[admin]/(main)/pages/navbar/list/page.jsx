'use client'

import React, {useEffect, useRef, useState} from "react";

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputSwitch} from "primereact/inputswitch";
import {Button} from "primereact/button";
import {confirmPopup, ConfirmPopup} from 'primereact/confirmpopup';
import {Toast} from 'primereact/toast';
import {getMenus} from "../../../../../services/navbarMenus";
import axios from "axios";

const NavbarListPage = () => {
    const [menus, setMenus] = useState([]);
    const [parentMenus, setParentMenus] = useState([]);
    const [reOrdered, setReOrdered] = useState(false);
    const toast = useRef(null);

    const fetchMenus = () => {
        getMenus().then(response => {
            setMenus(response);
        }).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchMenus();
    }, []);

    useEffect(() => {
        setParentMenus(menus.filter(menu => menu.parentId === null));
    }, [menus]);

    const getParentMenu = (parentId) => {
        const parentMenu = menus.find(menu => menu.id === parentId);
        return parentMenu ? parentMenu.title : '-';
    }

    const deleteMenu = (id) => {
        const relatedMenu = menus.find(menu => menu.id === id);
        axios.delete(`http://localhost:3001/api/navbar-menus/${id}`).then(response => {
            fetchMenus();
            toast.current.show({
                severity: 'success',
                summary: 'Silindi',
                detail: relatedMenu.title + ' silindi.',
                life: 3000
            });
        }).catch(error => {
            reject();
        })
    }

    const accept = id => {
        deleteMenu(id);
    };

    const reject = () => {
        toast.current.show({severity: 'warn', summary: 'Vazgeçildi', detail: 'Silmekten vazgeçtiniz', life: 3000});
    }

    function deleteThisMenu(event, id) {
        confirmPopup({
            target: event.currentTarget,
            message: 'Silmek istediğinize emin misiniz?',
            rejectLabel: 'Hayır',
            acceptLabel: 'Evet',
            icon: 'pi pi-exclamation-triangle',
            accept: () => accept(id),
            reject,
        });
    }

    function handleReordering() {
        let tempMenus = [];
        parentMenus.forEach((m, index) => {
            tempMenus.push({...m, sortOrder: index + 1});
        });
        axios.put('http://localhost:3001/api/navbar-menus/bulk', tempMenus).then(response => {
            toast.current.show({
                severity: 'success',
                summary: 'Sıralama Günceleme',
                detail: 'Sıralama başarıyla güncellendi.',
                life: 3000
            });
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setReOrdered(false);
        });
    }

    return (
        <div className="card">
            <Toast ref={toast}/>
            <ConfirmPopup/>
            <DataTable value={parentMenus} className="p-datatable-sm" reorderableRows onRowReorder={e => {
                setParentMenus(e.value);
                setReOrdered(true);
            }}>
                <Column
                    headerStyle={{width: '3rem'}}
                    body={() => <i className="pi pi-bars" style={{cursor: 'move'}}/>}
                />
                <Column field="title" header="Başlık"/>
                <Column field="url" header="Url"/>
                <Column field="isActive" header="Aktif"
                        body={rowData => <InputSwitch checked={rowData.isActive} disabled/>}/>
                <Column field="parentId" header="Üst Menü"
                        body={rowData => rowData.parentId ? getParentMenu(rowData.parentId) : '-'}/>
                <Column header="Sil"
                        body={rowData => <Button icon="pi pi-trash" rounded outlined severity="danger"
                                                 aria-label="Cancel" disabled={rowData.children?.length > 0}
                                                 onClick={event => deleteThisMenu(event, rowData.id)}/>
                        }/>
            </DataTable>
            {reOrdered && (
                <Button label="Kaydet" severity={'success'} className="p-button-success"
                        onClick={() => handleReordering()}
                />
            )}
        </div>
    );
}

export default NavbarListPage;
