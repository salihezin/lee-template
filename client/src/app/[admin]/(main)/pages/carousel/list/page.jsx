"use client";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const CarouselListPage = () => {
  const toast = useRef(null);
  const [carouselList, setCarouselList] = useState([]);
  const fetchCarouselList = () => {
    axios
      .get("http://localhost:3001/api/carousel")
      .then((response) => {
        setCarouselList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCarouselList();
  }, []);

  const deleteThisCarousel = (event, id) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to delete this carousel?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        axios
          .delete(`http://localhost:3001/api/carousel/${id}`)
          .then((response) => {
            fetchCarouselList();
            toast.current.show({
              severity: "success",
              summary: "Success",
              detail: "Carousel deleted successfully",
              life: 3000,
            });
          })
          .catch((error) => {
            console.log(error);
            toast.current.show({
              severity: "error",
              summary: "Error",
              detail: "Failed to delete carousel",
              life: 3000,
            });
          });
      },
      reject: () => {
        toast.current.show({
          severity: "info",
          summary: "Info",
          detail: "Delete cancelled",
          life: 3000,
        });
      },
    });
  }

  return (
    <div className="card">
      <Toast ref={toast} />
      <ConfirmPopup />
      <DataTable value={carouselList} className="p-datatable-sm">
        <Column field="title" header="Title"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="imageUrl" header="Image"></Column>
        <Column field="carouselButtonLabel" header="Button Label"></Column>
        <Column field="carouselUrl" header="Button URL"></Column>
        <Column
          field="id"
          header="Actions"
          body={(rowData) => {
            return (
              <div>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-success p-mr-2"
                  onClick={() => {
                    console.log("Edit", rowData.id);
                  }}
                />
                <Button
                  icon="pi pi-trash"
                  className="p-button-rounded p-button-danger"
                  onClick={event => deleteThisCarousel(event, rowData.id)}
                />
              </div>
            );
          }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default CarouselListPage;
