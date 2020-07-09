<template>
  <article
    class="layer-popup"
    v-if="dialog.active"
  >
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        {{ dialog.msgTitle }}
      </v-card-title>
      <v-card-text>
        {{ dialog.msg }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          text
          @click="confirmModal"
        >

          {{ dialog.okText }}
        </v-btn>
        <template v-if="dialog.isChoice">
          <v-btn
            color="primary"
            text
            @click="cancelModal"
          >
            {{ dialog.cancelText }}
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </article>
</template>

<script>
import bus from '../utils/bus';

export default {
  data () {
    return {
      dialog: {
        active: false,
        msgTitle: '알림',
        msg: '',
        okText: '확인',
        cancelText: '취소',
        confirmHandler: null,
        isChoice: false
      }
    }
  },
  watch: {
    dialog: function (newValue) {
      console.log(newValue)
      this.$emit('updateDialog', newValue.active)
    }
  },
  methods: {
    resetDialog () {
      console.log('reset')
      this.dialog = {
        active: false,
        msgTitle: '알림',
        msg: '',
        okText: '확인',
        cancelText: '취소',
        confirmHandler: null,
        isChoice: false
      }
    },
    modalContent(payload) {
      this.dialog = {
        active: payload.dialog.active,
        msg: payload.dialog.msg || this.dialog.msg,
        msgTitle: payload.dialog.msgTitle || this.dialog.msgTitle,
        confirmHandler: payload.dialog.confirmHandler || this.dialog.confirmHandler,
        isChoice: payload.dialog.isChoice || this.dialog.isChoice,
        okText: payload.dialog.okText || this.dialog.okText,
        cancelText: payload.dialog.cancelText || this.dialog.cancelText
      };
    },
    cancelModal() {
      if (this.dialog.confirmHandler && this.dialog.confirmHandler.cancel) {
        this.dialog.confirmHandler.cancel();
      }
      this.resetDialog();
      this.dialog.active = false
    },
    confirmModal() {
      if (this.dialog.confirmHandler && this.dialog.confirmHandler.ok) {
        this.dialog.confirmHandler.ok();
      }
      this.resetDialog();
      this.dialog.active = false
    }
  },
  beforeMount () {
    console.log('beforeMount')
    bus.$on('dialog', this.modalContent)
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    bus.$off('dialog', this.modalContent)
  }
}
</script>
<style lang="scss">
  .layer-popup {
    width: 500px;
  }
</style>
