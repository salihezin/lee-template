'use client'

import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Button} from "primereact/button";
import {useEffect, useRef, useState} from "react";
import {Toast} from "primereact/toast";
import {Dropdown} from "primereact/dropdown";
import {Dialog} from "primereact/dialog";
import {createUserRole, getRoles, getUsers} from "../../../../../services/users";

const UsersListPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [roles, setRoles] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);
    const toast = useRef();

    const getUserRolesAndUsers = () => {
        getRoles().then(response => {
            setRoles(response);
        }).catch(error => {
            console.log(error);
        });

        getUsers().then(response => {
            setUsers(response);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getUserRolesAndUsers();
    }, []);

    const postRole = () => {
        const roleData = {
            roleId: selectedRole.id,
            userId: selectedUser.id
        };

        createUserRole(roleData).then(response => {
            toast.current?.show({severity: 'success', summary: 'Başarılı', detail: 'Rol eklendi', life: 3000});
            setDialogVisible(false);
        }).catch(error => {
            toast.current?.show({severity: 'error', summary: 'Hata', detail: 'Rol eklenemedi', life: 3000});
        });
    };

    const openDialog = (user) => {
        setSelectedUser(user);
        setSelectedRole(null);
        setDialogVisible(true);
    };

    const dialogFooter = (
        <div>
            <Button label="İptal" icon="pi pi-times" onClick={() => setDialogVisible(false)} className="p-button-text"/>
            <Button label="Kaydet" icon="pi pi-check" onClick={postRole} className="p-button-primary"/>
        </div>
    );

    return (
        <div className="card">
            <Toast ref={toast}/>
            <Dialog
                header="Rol Ekle"
                visible={dialogVisible}
                style={{ width: '30vw' }}
                footer={dialogFooter}
                onHide={() => setDialogVisible(false)}
            >
                <div className="flex flex-column align-items-center w-full gap-3">
                    <Dropdown
                        value={selectedRole}
                        options={roles}
                        onChange={(e) => setSelectedRole(e.value)}
                        optionLabel="description"
                        placeholder="Rol Seçiniz"
                    />
                </div>
            </Dialog>
            <DataTable value={users} className="p-datatable-sm">
                <Column
                    header="Role"
                    body={(rowData) => rowData.UserRoles?.[0]?.role?.description || (
                        <Button
                            icon="pi pi-plus"
                            size="small"
                            severity="help"
                            onClick={() => openDialog(rowData)}
                            className="p-button-rounded p-button-success"
                            label="Oluştur"
                        />
                    )}
                />
                <Column field="email" header="Email"/>
            </DataTable>
        </div>
    );
};

export default UsersListPage;
