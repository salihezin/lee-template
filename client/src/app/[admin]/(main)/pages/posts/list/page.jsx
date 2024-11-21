'use client'

import {getPosts} from "../../../../../services/posts";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {Button} from "primereact/button";
import {Toast} from 'primereact/toast';
import {confirmPopup, ConfirmPopup} from 'primereact/confirmpopup';
import axios from "axios";

const PostListPage = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const toast = useRef(null);

    useEffect(() => {
        getPosts().then(response => {
            setPosts(response);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const goToPost = id => {
        router.push(`/admin/pages/posts/update/${id}`);
    };

    const deletePost = (id) => {
        const relatedPost = posts.find(post => post.id === id);
        axios.delete(`http://localhost:3001/api/posts/${id}`).then(response => {
            getPosts().then(response => {
                setPosts(response);
            }).catch(error => {
                console.log(error);
            });
            toast.current.show({
                severity: 'success',
                summary: 'Silindi',
                detail: relatedPost.title + ' silindi.',
                life: 3000
            });
        }).catch(error => {
            reject();
        })
    }

    const accept = id => {
        deletePost(id);
    };

    const reject = () => {
        toast.current.show({severity: 'warn', summary: 'Vazgeçildi', detail: 'Silmekten vazgeçtiniz', life: 3000});
    }


    const deleteThisPost = (event, id) => {
        console.log("ID: ", id);
        confirmPopup({
            target: event.currentTarget,
            message: 'Silmek istediğinize emin misiniz?',
            rejectLabel: 'Hayır',
            acceptLabel: 'Evet',
            icon: 'pi pi-exclamation-triangle',
            accept: () => accept(id),
            reject,
        });
    };

    return (
        <div className="card">
            <Toast ref={toast}/>
            <ConfirmPopup />
            <DataTable value={posts} className="p-datatable-sm">
                <Column field="title" header="Başlık" className="link-primary"
                        body={
                            rowData => <div onClick={() => goToPost(rowData.id)}>{rowData.title}</div>
                        }/>
                <Column field="content" header="İçerik"
                        body={(rowData) => rowData.content.substring(0, 50) + "..."}
                />
                <Column field="id" header="Güncelle" className="link-primary"
                        body={
                            rowData => <div onClick={() => goToPost(rowData.id)}>
                                <Button icon={"pi pi-pencil"} className="p-button-rounded p-button-outlined"
                                        aria-label="Cancel"/>
                            </div>
                        }
                />
                <Column field="id" header="Sil" className="link-danger"
                        body={
                            rowData => <div onClick={event => deleteThisPost(event, rowData.id)}>
                                <Button icon={"pi pi-trash"}
                                        className="p-button-rounded p-button-outlined p-button-danger"
                                        aria-label="Cancel"/>
                            </div>
                        }
                />
            </DataTable>
        </div>
    );
}

export default PostListPage;
