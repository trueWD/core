import {ref} from "vue";
import axios from "axios";

export default function Service(){
  const records = ref([]);

  const allRecords = async (route, searchParameter, parameters= '') => {
    const response = await axios.get(route+'?search='+searchParameter + parameters);
    records.value = response.data;
  }
  const getAndAddNewRecords = async (route, searchParameter, parameters= '', pageLink) => {
    const pageNumber = pageLink.split('page=')[1];
    const response = await axios.get(route+'?search='+searchParameter+parameters+'&page='+pageNumber);
    records.value.links = response.data.links;
    records.value.meta = response.data.meta;
    records.value.data = records.value.data.concat(response.data.data);
  }

  return {
    records,
    allRecords,
    getAndAddNewRecords
  }
}