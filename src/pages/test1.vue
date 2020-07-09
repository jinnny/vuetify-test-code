<template>
  <div>
    <button @click.prevent="openMyDialog()">my button</button><br>
    <button @click.prevent="testMyDialog()">my button test2</button>
  </div>
</template>

<script>
  import bus from '../utils/bus';

  export default {
    name: 'test1',
    methods: {
      open () {
        console.log('open')
        this.$nextTick(() => {
          bus.$emit('dialog',
            {
              dialog: {
                active: true,
                msg: '확인되었습니다.',
                isChoice: false,
                okText: '확'
              }
            }
          )
        })
      },
      openMyDialog () {
        bus.$emit('dialog',
          {
            dialog: {
              active: true,
              msg: '뭐하실래요?',
              isChoice: true,
              okText: '확인용',
              cancelText: '취소염',
              confirmHandler: {
                ok: () => {
                  this.open()
                },
                cancel: () => {
                  console.log('캔슬기능')
                }
              }
            }
          }
        )
      },
      testMyDialog () {
        bus.$emit('dialog',
          {
            dialog: {
              active: true,
              msg: '뭐뭐뭐.',
              okText: '확용',
              confirmHandler: {
                ok: () => {
                  console.log('ok기능인가봉가')
                }
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
