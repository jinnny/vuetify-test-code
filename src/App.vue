<template>
  <v-app>
    <v-content>
      <test1/>
      <v-icon class="material-icons-outlined">home</v-icon>
      <alert/>
    </v-content>
    <hello-world/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Test1 from './pages/test1';
import Alert from './components/Alert';

export default {
  name: 'App',

  components: {
    Alert,
    HelloWorld,
    Test1
  },

  data: () => ({
    //
  }),

  methods: {}
};
</script>
