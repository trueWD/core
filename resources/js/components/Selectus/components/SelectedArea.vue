<script setup>
import {computed, ref} from "vue";

const emits = defineEmits(["openTrigger","clearSelectedData"]);
const props = defineProps({
  placeholder: {
    type: String,
    default: "Kayıt Ara / Seç"
  },
  hasError:{
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    required: false,
  },
  dropdownState: {
    type: Boolean,
    required: true
  },
  cancelButton:{
    type: Boolean,
    default: true
  }
});

const isInvalid = computed(() => {
  if (props.hasError) return 'text-danger border-danger';
})
const isOpen = ref(false);
const clickProcess = () => {
  emits('openTrigger');
}
const cancelClickProcess = () => {
  if (props.text) emits('clearSelectedData');
}
const computedRounded = computed(() => {
  if (props.dropdownState) return 'rounded-bottom-0';
  return 'rounded-bottom-2';
})
</script>

<template>
  <div  @click.stop="clickProcess" class="selected-area cursor-pointer d-flex justify-content-between align-items-center px-3 py-1 rounded-2 border" :class="[isInvalid, computedRounded]">
    <span v-if="text" class="text-truncate user-select-none text-selected-color">{{text}}</span>
    <span v-else class="text-truncate user-select-none">{{placeholder}}</span>
    <i v-if="text && cancelButton" @click.stop="cancelClickProcess" class="bi bi-x-circle cursor-pointer"/>
    <i v-else class="bi bi-chevron-down"/>
  </div>
</template>

<style scoped>
.selected-area {
  min-height: 2.5rem;
}
.selected-area:hover {
  background-color: rgb(243 244 246);
}
.cursor-pointer {
  cursor: pointer;
}
.text-selected-color {
    color: #0c0b1c;

}
</style>
