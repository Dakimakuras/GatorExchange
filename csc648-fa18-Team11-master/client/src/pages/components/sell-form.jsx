import React, { Component } from "react";
import { } from 'bootstrap';

export default class SellForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*
  Styling By: Juan Valdez
  The whole point of the sell-form styling is to create an appealing sell form 
  where it is presentable and easy to use for a user. A card styl fill out form
  without the upload image function and backend connection.
  */

  categoryValidation() {
    var input;
    input = document.getElementById("category").value;

    if(input === undefined) {
      alert("Please select a category");
      return false;
    }
  }

  emptyStringValidation() {
    var nameInput;
    nameInput = document.getElementById("title").value;
    if(nameInput === undefined) {
      alert("Please enter item name");
      return false;
    }
  }
 
  render() {
    return (
      //NEEDS UPLOAD IMAGE AND CONNECTION TO BACK END
      <div className="row justify-content-md-center h-100">
        <div className="card-wrapper w-50">
          <div className="card fat">
            <div className="card-body">
              <form action='/api/post' method='POST' encType="multipart/form-data">
                <div class=" form-group container-fluid">
                  <title>Create Listing/Sell</title>
                  <div class="row justify-content-md-center">
                    <h4 className="card-title">Create Listing/Sell</h4>
                  </div>
                  <div class="form-group row justify-content-md-center">
                    <div class="col-md-1.5">
                      <select name="category" class="custom-select" required>
                        <option selected>Select Category</option>
                        <option value="Books">Books</option>
                        <option value="Car">Car</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Supplies">Supplies</option>
                      </select>
                    </div>
                  </div>
                
                  <div class="form-group row">
                    <label for="Item-Name" class="col-sm-2">Item Name: </label>

                    <div class="col-sm-10 d-flex justify-content-center">
                      <input name="title" type="text" class="form control w-75" placeholder="Item Name" required></input>
                    </div>
                  </div>

                  <div class="form-group row ">
                    <label for="Item-Description" class="col-sm-2 col-form-label">Item Description: </label>
                    <div class="col-sm-10 col-sm-2 col-form-label d-flex justify-content-center">
                      <input name="description" type="text" class="form-control w-75" id="description" placeholder="Item Description" required></input>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="Item-Price" class="col-sm-2 col-form-label col-sm-2">Price:</label>
                    <div class="col-sm-10 col-sm-2 col-form-label d-flex justify-content-center">
                      <input name="price" id="price" type="number" class="form-control w-75" placeholder="Price" required></input>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label htmlFor = "image" className="col-sm-2 col-form-label col-sm-2">Upload Picture:</label>
                    <input type='file' name='image' required></input>
                  </div>
                  
                  <div class = "form-group row justify-content-center">
                  <input type="submit" value="Post"></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}