<template>
  <div>
    <div class="">
      <div>
        <BasesHeadTopic :title="'รายชื่อลูกค้า'" />
      </div>
      <div class="grid grid-cols-2">
        <div class="flex">
          <input
            type="text"
            placeholder="ค้นหาชื่อ-นามสกุล "
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
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
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
    </div>
  </div>
</template>

<script lang="ts">
import { BasesHeadTopic } from "#components";

export default {
  setup() {
    definePageMeta({
      layout: "default",
    });
  },
};
</script>

<style></style>
