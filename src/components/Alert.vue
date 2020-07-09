<template>
  <v-alert :type="alert.type" class="alert-content" v-if="alert.active">
    {{ alert.text }}
  </v-alert>
</template>

<script>
  import bus from '../utils/bus';

  export default {
    name: 'Alert',
    data () {
      return {
        alert: {
          active: false,
          text: '등록되었습니다.',
          type: 'success'
        }
      }
    },
    watch: {
      alert: function (newValue) {
        if (newValue.active) {
          setTimeout(this.resetAlert, 3000);
          // clearTimeout(timer)
        }
      }
    },
    methods: {
      resetAlert () {
        console.log('reset')
        this.alert = {
          active: false,
          text: '등록되었습니다.',
          type: 'success',
          time: 3000
        }
      },
      alertContent(payload) {
        this.alert = {
          active: payload.alert.active,
          text: payload.alert.text || this.alert.text,
          type: payload.alert.type || this.alert.type,
          time: payload.alert.time || this.alert.time
        };
      }
    },
    beforeMount () {
      bus.$on('alert', this.alertContent)
    },
    beforeDestroy () {
      bus.$off('alert', this.alertContent)
    }
  };
</script>

<style scoped>
.alert-content {
  width: 300px;
  position: absolute;
  right: 0;
}
</style>
