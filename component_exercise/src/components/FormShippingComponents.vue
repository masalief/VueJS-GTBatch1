<template>
        <div class="row justify-content-center my-5">
      <div class="col-4 border border-dark p-5 rounded bg-light" id="formmain">
          <h1 class=" text-center">Shipping Form</h1>
          <form class="mt-5" id="formshiping" @submit.prevent="inputShipping" v-show="!success">
              <div class="d-flex">
                  <div class="form-group">
                      <label for="exampleInputEmail1">First Name</label>
                      <input v-model="shippingData.first_name" type="text" class="form-control" id="namaform"
                          placeholder="Enter your first name" required />
                  </div>
                  <div class="form-group mx-3">
                      <label for="exampleInputPassword1">Phone number</label>
                      <input v-model="shippingData.phone_number" type="phone" class="form-control" id="phoneform"
                          placeholder="Enter phone number" required/>
                  </div>
              </div>

              <div class="d-flex">
                  <div class="form-group">
                      <label for="exampleInputEmail1">Last name</label>
                      <input v-model="shippingData.last_name" type="last" class="form-control" id="lastnameform"
                          placeholder="Enter your last name" required />
                  </div>
                  <div class="form-group mx-3">
                      <label for="exampleInputPassword1">City</label>
                      <input v-model="shippingData.city" type="city" class="form-control" id="cityform" placeholder="Enter city" required/>
                  </div>
              </div>

              <div class="d-flex">
                  <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input v-model="shippingData.email" type="email" class="form-control" id="emailform"
                          placeholder="Enter Email" required />
                  </div>
                  <div class="form-group mx-3">
                      <label for="exampleInputPassword1">Postal Code</label>
                      <input v-model="shippingData.postal_code" type="postal" class="form-control" id="postalform"
                          placeholder="Enter postal code" required/>
                  </div>
              </div>

              <div class="form-group">
                  <label for="exampleInputEmail1">Address</label>
                  <textarea v-model="shippingData.address" type="address" class="form-control" id="addressform" aria-describedby="emailHelp"
                      placeholder="Enter address" required></textarea>
              </div>
              <button type="submit" class="btn btn-success">{{ buttonValue }}</button>
          </form>
            <SuccessForm v-show="success"></SuccessForm>
      </div>
  </div>

</template>

<script>
import shippingService from '@/service/ShippingService';
import SuccessForm from "./SuccessFormComponents.vue"

export default {

    data() {
        return {
            
            shippingData : {
            "first_name" : null,
            "last_name" : null,
            "phone_number" : null,
            "city" : null,
            "postal_code" : null,
            "address" : null,
            },
            success : false,
            buttonValue : "Submit"
        }
    },
    methods : {
        inputShipping(){
                let data = this.shippingData;
                
                if(this.buttonValue === "Submit"){
                    shippingService.create(data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }else{
                    shippingService.updateShipping(data.id, data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }
            },
        },
        components : {
            SuccessForm
        },
        props: ["shippingDataProps"],
        watch: {
            'shippingDataProps'(newValue) {
                this.shippingData = newValue;
                console.log(this.shippingData);
                this.buttonValue = "Update"
            }
    }
}

</script>

<style>

</style>