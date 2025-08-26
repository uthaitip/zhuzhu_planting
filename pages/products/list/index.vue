<template>
  <div>
    <BasesHeadTopic :title="'รายการสินค้า123'" />
    <div class="grid grid-cols-2">
      <div class="flex">
        <input
          type="text"
          placeholder="ค้นหารายการสินค้า "
          class="input mr-2 focus:outline-none focus:ring-0 focus:border-gray-300"
        />
        <button class="btn btn-active btn-primary">ค้นหา</button>
      </div>
      <div class="flex justify-end">
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>เลือกสถานะ</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
    </div>
    <div class="flex justify-end mt-4">
      <button class="btn btn-active btn-primary" @click="createModal">
        เพิ่มสินค้า
      </button>
    </div>

    <div class="overflow-x-auto mt-4">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>ชื่อสินค้า</th>
            <th>ประเภท</th>
            <th>ภาพสินค้า</th>
            <th>จำนวนคงเหลือ</th>
            <th>ราคาขาย</th>
            <th>ราคาทุน</th>
            <th>สถานะ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(product, index) in dataProductList">
            <th>{{ index + 1 }}</th>
            <td>{{ product.productName }}</td>
            <td>{{ product.type }}</td>
            <td></td>
            <td>{{ product.amount }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.cost }}</td>
            <td>{{ product.status }}</td>
            <td class="w-[10%]">
              <button class="btn btn-warning mr-2">แก้ไข</button>
              <button class="btn btn-error">ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center mt-4">
        <div class="join">
          <button class="join-item btn">1</button>
          <button class="join-item btn btn-active">2</button>
          <button class="join-item btn">3</button>
          <button class="join-item btn">4</button>
        </div>
      </div>
    </div>

    <BasesModal
      id="create"
      ref="createProduct"
      title="เพิ่มสินค้า"
      modal-id="createModal"
      width="max-w-7xl"
    >
      <form @submit.prevent="saveProduct">
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label for="nameProduct">ชื่อสินค้า</label>
            <input
              id="nameProduct"
              v-model="newProduct.name"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>
          <div>
            <label for="price">ราคาสินค้า</label>
            <input
              id="price"
              v-model="newProduct.price"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <button type="submit" class="btn btn-active btn-primary">
            บันทึก
          </button>
        </div>
      </form>
    </BasesModal>

    <BasesModal
      id="modalRef"
      ref="modalRef"
      modal-id="modal_2"
      title="Confirm Action"
      message="Are you sure?"
      width="max-w-7xl"
      :show-confirm="true"
      @confirm="closeModal"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { reactive } from "vue";
import { BasesHeadTopic } from "#components";
const modalRef = ref();
const createProduct = ref();

// const my_modal_2 = ref<HTMLDialogElement | null>(null);

const dataProductList = ref<any[]>([]);
dataProductList.value = [
  {
    id: "1",
    productName: "Quality Control Specialist",
    type: "",
    image: [],
    amount: "20",
    price: "2000",
    cost: "200",
    status: "open",
  },
  {
    id: "2",
    productName: "Desktop Support Technician",
    type: "",
    image: [],
    amount: "20",
    price: "2000",
    cost: "200",
    status: "out-of-order",
  },
  {
    id: "3",
    productName: "Tax Accountant",
    type: "",
    image: [],
    amount: "20",
    price: "2000",
    cost: "200",
    status: "open",
  },
];

const openModal = () => {
  modalRef?.value?.openModal();
};

const closeModal = () => {
  modalRef?.value?.close();
};

const createModal = () => {
  createProduct?.value?.openModal();
};

const newProduct = reactive({
  name: "",
  price: "",
});

const saveProduct = () => {
  newProduct.name = '';
  newProduct.price = '';
  createProduct?.value?.closeModal();
};
</script>

<style></style>
