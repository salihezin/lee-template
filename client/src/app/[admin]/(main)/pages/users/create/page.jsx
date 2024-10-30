'use client';

import React, {useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {useRouter} from "next/navigation";
import {createUser} from "../../../../../services/users";

const UsersCreatePage = () => {
    const router = useRouter();
    const [formState, setFormState] = useState({
        email: {
            value: '',
            error: false,
        },
        password: {
            value: '',
            error: false,
        },
    });

    const [postState, setPostState] = useState({
        loading: false,
        error: false,
        success: false,
    });

    const handleSubmit = () => {
        if (formState.email.value === '') {
            setFormState({...formState, email: {...formState.email, error: true}});
            return;
        }

        if (formState.password.value === '') {
            setFormState({...formState, password: {...formState.password, error: true}});
            return;
        }

        setPostState({loading: true, error: false, success: false});
        const userData = {
            email: formState.email.value,
            password: formState.password.value,
        };

        createUser(userData).then(response => {
            setPostState({loading: false, error: false, success: true});
            router.push('/admin/pages/users/list');
        }).catch(error => {
            setPostState({loading: false, error: true, success: false});
        });
    };

    return (
        <div className="card input-group-lg">
            <div className="flex flex-column gap-2">
                <label htmlFor="email" className="text-light">Email</label>
                <InputText id="email" aria-describedby="email-help"
                           onChange={event => setFormState({...formState, email: {value: event.target.value}})}
                           invalid={formState.email.error} value={formState.email.value}/>
                {formState.email.error && <small id="email-help" className="p-error">Email giriniz</small>}
            </div>
            <div className="flex flex-column gap-2 pt-3">
                <label htmlFor="password" className="text-light">Şifre</label>
                <Password
                    value={formState.password.value}
                    onChange={(e) => setFormState({...formState, password: {value: e.target.value}})}
                    inputStyle={{width: '100%'}} invalid={formState.password.error}
                />
                {formState.password.error && <small id="password-help" className="p-error">Şifre giriniz</small>}
            </div>
            <div className="pt-3 w-100">
                <Button label="Kaydet" disabled={postState.loading} severity="help" rounded outlined className="w-100"
                        onClick={handleSubmit}/>
            </div>
        </div>
    );
}

export default UsersCreatePage;
