import {
  defineStore
} from 'pinia';
const options =
  import.meta.globEager('./*.js');
const store = {};

for (const item in options) {
  Object.assign(store, options[item].default);
}
console.log(store, 1);
export default defineStore('userStore', store)
