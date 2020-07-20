<template>
  <v-app>
    <v-content>
      <test1/>
      <v-icon class="material-icons-outlined">home</v-icon>
      <alert/>
      <loading/><br>
      <button @click="setCookie">쿠키세팅</button><br>
      <button @click="removeCookie">쿠키삭제</button>
    </v-content>
    <hello-world/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Test1 from './pages/test3';
import Alert from './components/Alert';
import Loading from './components/Loading';

export default {
  name: 'App',

  components: {
    Loading,
    Alert,
    HelloWorld,
    Test1
  },

  data: () => ({
    //
  }),

  methods: {
    setCookie () {
      this.$cookies.set('_auth','dsdksjvnkdfjvfbdkjvnk');
      console.log('추가')
    },
    removeCookie () {
      this.$cookies.remove('_auth');
      console.log('삭제')
    }
  },
  mounted () {
  }
};
</script>
