<template>
  <v-app>
    <button @click.prevent="openMyDialog()">my button</button>
    <button @click.prevent="testMyDialog()">my button</button>
    <v-content>
      <hello-world/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import bus from './utils/bus';
export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),

  methods: {
    openMyDialog () {
      bus.$emit('dialog',
        {
          value: true,
          msg: '확인되었습니다.',
          isChoice: true,
          okText: '확인용',
          cancelText: '취소염',
          confirmHandler: {
            ok: () => {
              console.log('ok기능')
            },
            cancel: () => {
              console.log('캔슬기능')
            }
          }
        }
      )
    },
    testMyDialog () {
      bus.$emit('dialog',
        {
          value: true,
          msg: '뭐뭐뭐.',
          okText: '확용',
          confirmHandler: {
            ok: () => {
              console.log('ok기능인가봉가')
            }
          }
        }
      )
    }
  }
};
</script>
