<template>
  <dialog ref="modal" class="modal">
    <div :class="['modal-box p-6 rounded-xl shadow-lg', width]">
      <div class="flex justify-between">
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <i class="fi fi-br-cross cursor-pointer" @click="closeModal"></i>
      </div>
      
      <p v-if="!!message" class="py-4">{{ message }}</p>

      <slot />

      <!-- <div class="modal-action flex justify-end gap-2 mt-4">
        <button class="btn btn-outline" @click="closeModal">{{ closeText }}</button>
        <button v-if="showConfirm" class="btn btn-primary" @click="handleConfirm">{{ confirmText }}</button>
      </div> -->
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  modalId: string
  title?: string
  message?: string
  closeText?: string
  confirmText?: string
  showConfirm?: boolean
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Modal Title',
  message: '',
  closeText: 'Close',
  confirmText: 'Confirm',
  showConfirm: false,
  width: 'max-w-lg'
})

const { width, title, message, closeText, confirmText, showConfirm } = props

const modal = ref<HTMLDialogElement>()

const openModal = () => modal.value?.showModal()
const closeModal = () => modal.value?.close()
const handleConfirm = () => {
  closeModal()
}
defineExpose({ openModal, closeModal })
</script>
