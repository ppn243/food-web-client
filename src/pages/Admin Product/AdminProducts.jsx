import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import axios from "axios";

const AdminProducts = () => {
  const [isFirst, setFirst] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const name = useRef();
  const image = useRef();
  const unit_price = useRef();
  const promotion_price = useRef();
  const description = useRef();
  const type_id = useRef();

  const [showEdit, setShowEdit] = useState(false);
  const [editobject, setEditObject] = useState({});
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleEdit = () => {};

  const [showDelete, setShowDelete] = useState(false);
  const [deleteObject, setDeleteObject] = useState({});
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    await axios
      .get("http://food-web-api-1.herokuapp.com/api/get-products")
      .then((resp) => {
        setProducts(resp.data);
        // console.log(products);
      });
  };

  const handleStore = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://food-web-api-1.herokuapp.com/api/create-product",
        {
          name: name.current.value,
          image: image.current.value,
          unit_price: unit_price.current.value.toString(),
          promotion_price: promotion_price.current.value.toString(),
          description: description.current.value,
          type_id: type_id.current.value,
        }
      );
      console.log(res.data);
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://food-web-api-1.herokuapp.com/api/update/" + editobject.id,
        {
          name:
            name.current.value !== "" ? name.current.value : editobject.name,
          image:
            image.current.value !== "" ? image.current.value : editobject.image,
          unit_price:
            unit_price.current.value.toString() !== ""
              ? unit_price.current.value.toString()
              : editobject.unit_price,
          promotion_price:
            promotion_price.current.value.toString() !== ""
              ? promotion_price.current.value.toString()
              : editobject.promotion_price,
          description:
            description.current.value !== ""
              ? description.current.value
              : editobject.description,
          type_id:
            type_id.current.value !== ""
              ? type_id.current.value
              : editobject.type_id,
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteDone = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        "http://food-web-api-1.herokuapp.com/api/delete/" + deleteObject.id
      );
      console.log(res.data);
      handleCloseDelete();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (isFirst) {
      getProduct();
    } else {
      setFirst(false);
      const timer = setTimeout(() => {
        getProduct();
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [products]);

  useEffect(() => {
    console.log(editobject);
  }, [editobject]);

  return (
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search is not working now hehe"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Products Details</b>
            </h2>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Products
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Image URL</th>
                  <th>Unit Price</th>
                  <th>Promotion Price</th>
                  <th>Description</th>
                  <th>Category ID</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => {
                  return [
                    <tr key={idx}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>
                        <img src={product.image} width={70} height={90} />
                      </td>
                      <td>{product.unit_price}</td>
                      <td>{product.promotion_price}</td>
                      <td>{product.description}</td>
                      <td>{product.type_id}</td>
                      <td>
                        <a
                          class="edit"
                          title="Edit"
                          data-toggle="modal"
                          data-target="#editModal"
                          onClick={(e) => {
                            e.preventDefault();
                            setEditObject(product);
                            handleShowEdit();
                            // console.log(editobject);
                          }}
                        >
                          <i class="material-icons">&#xE254;</i>
                        </a>
                        <a
                          //   href="#"
                          class="delete"
                          title="Delete"
                          data-toggle="modal"
                          data-target="#deleteModal"
                          onClick={() => {
                            setDeleteObject(product);
                            handleShowDelete();
                            // console.log(deleteObject);
                          }}
                          style={{ color: "red" }}
                        >
                          <i class="material-icons">&#xE872;</i>
                        </a>
                      </td>
                    </tr>,
                  ];
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    // id="exampleInputEmail1"
                    // aria-describedby="emailHelp"
                    ref={name}
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    // id="exampleInputEmail1"
                    // aria-describedby="emailHelp"
                    ref={image}
                    placeholder="Enter Image URL"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="number"
                    class="form-control"
                    // id="exampleInputEmail1"
                    // aria-describedby="emailHelp"
                    ref={unit_price}
                    placeholder="Enter Unit Price"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="number"
                    class="form-control"
                    // id="exampleInputEmail1"
                    // aria-describedby="emailHelp"
                    ref={promotion_price}
                    placeholder="Enter Promotion Price if have"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    // id="exampleInputEmail1"
                    // aria-describedby="emailHelp"
                    ref={description}
                    placeholder="Enter Description"
                  />
                </div>

                <div class="form-group mt-3">
                  <input
                    type="numer"
                    class="form-control"
                    // id="exampleInputEmail1"
                    // aria-describedby="emailHelp"
                    ref={type_id}
                    placeholder="Enter Category ID"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-success mt-4"
                  onClick={handleStore}
                >
                  Add Record
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>

        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                  ref={name}
                  placeholder={editobject.name}
                />
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                  ref={image}
                  placeholder={editobject.image}
                />
              </div>
              <div class="form-group mt-3">
                <input
                  type="number"
                  class="form-control"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                  ref={unit_price}
                  placeholder={editobject.unit_price}
                />
              </div>
              <div class="form-group mt-3">
                <input
                  type="number"
                  class="form-control"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                  ref={promotion_price}
                  placeholder={editobject.promotion_price}
                />
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                  ref={description}
                  placeholder={editobject.description}
                />
              </div>

              <div class="form-group mt-3">
                <input
                  type="numer"
                  class="form-control"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                  ref={type_id}
                  placeholder={editobject.type_id}
                />
              </div>

              <button
                type="submit"
                class="btn btn-success mt-4"
                onClick={handleEditSave}
              >
                Edit Record
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showDelete} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Do you want to delete product {deleteObject.name}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDeleteDone}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminProducts;
