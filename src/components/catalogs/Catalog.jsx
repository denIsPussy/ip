import { useState, useEffect } from "react";
import Toolbar from "../common/Toolbar";
import FilmsBar from "../common/FilmsBar";
import Modal from "../common/Modal";
import DataService from '../../services/DataService';

export default function Catalog(props) {
    const [items, setItems] = useState([]);
    const [modalHeader, setModalHeader] = useState('');
    const [modalConfirm, setModalConfirm] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isEdit, setEdit] = useState(false);

    useEffect(() => {
        loadItems();
    }, []);


    
    function handleAdd() {
        setEdit(false);
        setModalHeader('Добавление элемента');
        setModalConfirm('Добавить');
        setModalVisible(true);
        props.onAdd();
    }

    function handleEdit(id, name, rating, movieTracking, image) {
        edit(id, name, rating, movieTracking, image);
    }

    function handleRemove(id) {
        deleteItem(id);
    }

    function loadItems() {
        load();
    }

    function deleteItem(id) {
        del(id).then(() => loadItems());
    }

    function saveItem() {
        save(isEdit).then(() => loadItems());
    }

    function updateItem() {
        save(isEdit).then(() => loadItems());
    }

    function edit(id) {
        get(id)
            .then(data => {
                setEdit(true);
                setModalHeader('Редактирование элемента');
                setModalConfirm('Сохранить');
                setModalVisible(true);
                props.onEdit(data);
            });
    }



    function handleModalHide() {
        setModalVisible(false);
    }

    function handleModalDone() {
        saveItem();
    }

    const save = async function (isEdit) {
        const requestParams = {
            method: `${!isEdit ? "POST" : "PUT"}`,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props.data),
        };
        console.log(props.data)
        const requestUrl = "http://localhost:8080" +
            `/movie${!isEdit ? '' : '/' + props.data.id}`;
        const response = await fetch(requestUrl, requestParams);

    }

    const del = async function (id) {
        const requestParams = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        };
        console.log(props.data)
        const requestUrl = "http://localhost:8080" +
            `/movie/${id}`;
        const response = await fetch(requestUrl, requestParams);
    }

    const load = async function () {
        console.log(props.data)
        const requestUrl = "http://localhost:8080" + "/movie";
        const response = await fetch(requestUrl);
        const movies = await response.json();
        setItems(movies);
    }

    const get = async function (id) {
        console.log(props.data)
        const requestUrl = "http://localhost:8080" + `/movie/${id}`;
        const response = await fetch(requestUrl);
        const movie = await response.json();
        return movie;
    }

    const update = async function (id, name, rating, movieTracking, image) {
        const requestParams = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };
        const requestUrl = host + `/cart/${id}?name=${name}&rating=${rating}&movieTracking=${movieTracking}&image=${image}`;
        const response = await fetch(requestUrl, requestParams);
    }

    return (
        <>
            <Toolbar 
                onAdd={handleAdd}/>
            <div className="row text-center ms-1 gx-1" id="filmBar_2021">
            <FilmsBar 
                items={items}
                onEdit={handleEdit}
                onRemove={handleRemove}/>
            </div>
            <Modal 
                header={modalHeader}
                confirm={modalConfirm}
                visible={modalVisible} 
                onHide={handleModalHide}
                onDone={handleModalDone}>
                    {props.children}
            </Modal>
        </>
    );
}