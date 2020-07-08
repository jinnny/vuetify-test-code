<template>
  <v-app>
    <v-content>
      <test1/>
    </v-content>
    <hello-world/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Test1 from './pages/test2';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Test1
  },

  data: () => ({
    //
  }),

  methods: {}
};
</script>
