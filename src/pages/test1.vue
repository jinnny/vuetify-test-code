<template>
  <div>
    <button @click.prevent="openMyDialog()">my button</button>
  </div>
</template>

<script>
  import bus from '../utils/bus';

  export default {
    name: 'test1',
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
      }
    }
  };
</script>

<style scoped>

</style>
