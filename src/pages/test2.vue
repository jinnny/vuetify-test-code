<template>
  <div>
    <button @click.prevent="testMyDialog()">my button test2</button>
  </div>
</template>

<script>
  import bus from '../utils/bus';

  export default {
    name: 'test1',
    methods: {
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

<style scoped>

</style>
