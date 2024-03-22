<template>
<div v-click-outside="close" class="w-100 d-flex flex-column bg-white rounded">
  <span v-if="label" class="px-3 py-1">{{label}}</span>
  <SelectedArea
    :hasError="errors.length > 0"
    :text="selectedDataText"
    :placeholder="placeholder"
    @openTrigger="open"
    @clearSelectedData="clearSelectedData"
    :dropdownState="dropdownState"
    :cancelButton="cancelButton"
  >
  </SelectedArea>
  <DropdownArea
    @getMoreData="getAndAddNewRecords(endPoint, searchInput, prepareQueryString(), $event)"
    @getAndEmitSelectedData="getSelectedData"
    :columns="columns"
    v-if="dropdownState"
    :data="records.data"
    :links="records.links"
    v-model="searchInput">
  </DropdownArea>
  <ul v-if="errors.length > 0" class="px-3 mb-0 list-unstyled py-2">
    <li class="text-danger" v-for="(error,index) of errors" :key="'st_error_'+index">{{error}}</li>
  </ul>
</div>
</template>

<script setup>
import { vClickOutside } from "./utils";
import SelectedArea from "./components/SelectedArea.vue";
import DropdownArea from "./components/DropdownArea.vue";
import { ref, watch } from "vue";
import Service from "./services";

const emits = defineEmits(['getRecord']);
const props = defineProps({
  label:{
    type: String,
    required: false,
  },
  endPoint:{
    type: String,
    required: true
  },
  columns:{
    type: Array,
    required: true
  },
  errors:{
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    required: false,
  },
  selectedText:{
    type: String,
    required: false,
  },
  params:{
    type: Object,
    required: false,
    default: () => ({})
  },
  cancelButton:{
    type: Boolean,
    default: true
  }
});


let timer = null;
const searchInput = ref('');
const dropdownState = ref(false);
const {records, allRecords, getAndAddNewRecords} = Service();

watch(searchInput, async (val) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(async () => {
    await allRecords(props.endPoint, val, prepareQueryString());
  }, 500);
});
const selectedDataText = ref(props.selectedText);
watch(() => props.selectedText, (val) => {
  selectedDataText.value = val;
})
const prepareQueryString = () => {
  if (!props.params) return false;
  let queryString = '';
  for (const [key, value] of Object.entries(props.params)) {
    queryString += `&${key}=${value}`;
  }
  return queryString;
}
const open = async () => {
  await allRecords(props.endPoint, searchInput.value, prepareQueryString());
  dropdownState.value = true;
}
const close = () => {
  dropdownState.value = false;
}

const clearSelectedData = () => {
  selectedDataText.value = null;
  searchInput.value = '';
  emits('getRecord', null);
}



const getSelectedData = (payload) => {
  selectedDataText.value = props.columns.map(column => {
    if (column.includes('->')){
      return payload[column.split('->')[0]][column.split('->')[1]];
    }
    return payload[column];
  }).join(' | ');
  emits('getRecord', payload);
  close();
}
</script>

<style scoped>

</style>