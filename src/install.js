import LeafletMap from "./components/LeafletMap.vue";

const LeafletMapMain = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("leaflet-map", LeafletMap);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(LeafletMapMain);
}

export default LeafletMapMain;
