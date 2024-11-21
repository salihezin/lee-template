'use client'

import {InputText} from 'primereact/inputtext';
import {Editor} from 'primereact/editor';
import {Button} from 'primereact/button';
import {Toast} from 'primereact/toast';

import {useRef, useState} from "react";
import {postPost} from "../../../../../services/posts";
import {useRouter} from "next/navigation";

const CreatePostPage = () => {
    const toast = useRef();
    const router = useRouter();

    const [formState, setFormState] = useState({
        title: '',
        content: '',
        isPublished: false
    });
    const [errorState, setErrorState] = useState({
        title: {
            value: false,
            message: ''
        },
        content: {
            value: false,
            message: ''
        }
    });

    const validateThisPost = () => {
        if (formState.title.length < 3 && formState.content.length < 10) {
            setErrorState({
                title: {value: true, message: 'Başlık en az 3 karakter olmalıdır.'},
                content: {value: true, message: 'İçerik en az 10 karakter olmalıdır.'}
            })
        } else if (formState.title.length < 3) {
            setErrorState({...errorState, title: {value: true, message: 'Başlık en az 3 karakter olmalıdır.'}});
        } else if (formState.content.length < 10) {
            console.log('formState.content', formState);
            setErrorState({...errorState, content: {value: true, message: 'İçerik en az 10 karakter olmalıdır.'}});
        }
    };

    const postThisPost = () => {
        console.log('errorState', errorState);
        if (errorState.title.value || errorState.content.value) {
            return;
        }
        const postData = {
            title: formState.title,
            content: formState.content,
            isPublished: formState.isPublished,
            authorId: 4
        }
        postPost(postData).then(response => {
            toast.current?.show({severity: 'success', summary: 'Başarılı', detail: 'Post eklendi', life: 3000});
            router.push('/admin/pages/posts/list');
        }).catch(error => {
            toast.current?.show({severity: 'error', summary: 'Hata', detail: 'Post eklenemedi', life: 3000});
        });
    };

    const handleSubmit = () => {
        validateThisPost();
        postThisPost();
    };

    return (
        <div className="card input-group-lg">
            <div className="flex flex-column gap-2">
                <Toast ref={toast}/>
                <InputText placeholder="Başlık" value={formState.title} invalid={errorState.title.value}
                           onFocus={() => setErrorState({...errorState, title: {value: false, message: ''}})}
                           onChange={(e) => setFormState({...formState, title: e.target.value})}/>
                <Editor style={{height: '320px'}} value={formState.content} content={formState.content}
                        onFocus={() => setErrorState({...errorState, content: {value: false, message: ''}})}
                        onTextChange={(e) => setFormState({...formState, content: e.htmlValue})}/>
                <span>
                    {errorState.content.value && <small className="text-danger">{errorState.content.message}</small>}
                </span>
                <Button label="KAYDET" className="p-button-primary mt-3"
                        onClick={() => handleSubmit()}/>
            </div>
        </div>
    )
}

export default CreatePostPage;
