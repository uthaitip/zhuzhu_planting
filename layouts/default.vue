<template>
  <div>
    <!-- Nav fixed background -->
    <nav class="fixed w-full bg-white px-4 py-4 z-20 drop-shadow-sm">
      <div class="flex justify-end items-center ox-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          class="w-10 h-10 rounded-full border-2 border-gray-200 mr-4"
        />
        <div class="">
          <span class="hidden sm:inline text-md text-start">John Doe</span
          ><br />
          <!-- <span class="hidden sm:inline text-sm">Admin</span> -->
        </div>
      </div>
    </nav>

    <!-- Aside overlay บน nav -->
    <aside
      class="fixed left-0 top-0 w-64 min-h-screen bg-primary text-white z-30"
    >
      <h1 class="m-5 text-center text-xl">CMS Stock-service</h1>

      <!-- {{  listMenu }} -->
      <div>
        <ul v-for="menu in listMenu" class="cursor-pointer">
          <li class="ml-5 my-3" @click="onChangeMenu(menu)">{{ menu.name }}</li>
        </ul>
      </div>
    </aside>

    <!-- Main content -->
    <main class="ml-64 py-20 px-10">
      <!-- <p>Content goes here...</p> -->
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter();
const listMenu = [
  {
    key: 'dashboard',
    path: '/dashboard',
    name: 'Dashboard'
  },
  {
    key: "customers",
    path: "/customers/list",
    name: "ลูกค้า",
  },
  {
    key: "products",
    path: "/products/list",
    name: "รายการสินค้า",
  },
];

const onChangeMenu = (menuData: any) => {

  router.push(menuData.path)
};
</script>

<style></style>
