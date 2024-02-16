import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };

  const doubleCount = computed(() => count.value * 2);

  //async

  const list = ref([]);
  const getList = async () => {
    const res = await fetch(API_URL)
      .then((res) => res.json())
      .then((json) => (list.value = json));

    // const res = await axios.get(API_URL);
    // list.value = res.data;
  };

  return {
    count,
    increment,
    doubleCount,
    list,
    getList,
  };
});
