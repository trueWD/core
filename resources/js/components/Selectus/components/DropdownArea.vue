<script setup>
import { computed } from "vue";
import {vFocus} from "../utils/index.js";

const emits = defineEmits(['update:modelValue','getAndEmitSelectedData','getMoreData']);
const props = defineProps({
  size: {
    type: String,
    default: "sm"
  },
  data:{
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: false
  },
  columns: {
    type: Array,
    required: true
  },
  links: {
    type: Object,
    required: false
  }
});
const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue',val)
  }
});

const columnFormatter = (payload) => {
  return props.columns.map(column => {
    if (column.includes('->')){
      return payload[column.split('->')[0]][column.split('->')[1]];
    }
    return payload[column];
  }).join(' | ');
}

</script>

<template>
<div class="position-relative">
  <div class="st-dropdown-area d-flex flex-column gap-2 p-2 position-absolute top-0 start-0 w-100 bg-white border rounded-bottom-2 shadow-sm">
    <input v-focus v-model="value" type="text" class="form-control" placeholder="Kayıt Ara">
    <ul class="rounded border overflow-auto p-2 mb-0">
      <li
          v-if="data.length > 0"
          @click="$emit('getAndEmitSelectedData', record)"
          class="st-list-item p-2 rounded text-truncate" v-for="record in data"
          :key="'selectus_'+record.id">
        {{columnFormatter(record)}}
      </li>
      <li v-else>
        Kayıt Bulunamadı!
      </li>
    </ul>
    <a v-if="links && links.next" @click="$emit('getMoreData', links.next)" href="#" class="more-data-button">Daha Fazla</a>
  </div>
</div>
</template>

<style scoped>
.st-dropdown-area {
  max-height: 300px;
  z-index: 999999999;
}
.st-list-item {
  cursor: pointer;
}
.st-list-item:hover{
  background-color: rgb(243 244 246);
}
.more-data-button {
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: #3b82f6;
  transition: all;
}
.more-data-button:hover {
  color: #2563eb;
}
</style>