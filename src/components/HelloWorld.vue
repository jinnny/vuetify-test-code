<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        {{ msgTitle }}
      </v-card-title>
      <v-card-text>
        {{ msg }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          text
          @click="confirmModal"
        >

          {{ okText }}
        </v-btn>
        <template v-if="isChoice">
          <v-btn
            color="primary"
            text
            @click="cancelModal"
          >
            {{ cancelText }}
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import bus from '../utils/bus';

  export default {
    data () {
      return {
        dialog: false,
        msgTitle: '알림',
        msg: '',
        okText: '확인',
        cancelText: '취소',
        confirmHandler: null,
        isChoice: false
      }
    },
    methods: {
      modalContent(payload) {
        this.dialog = payload.value;
        this.msg = payload.msg || this.msg;
        this.msgTitle = payload.msgTitle || this.msgTitle;
        this.confirm = payload.confirm || this.confirm;
        this.confirmHandler = payload.confirmHandler || this.confirmHandler;
        this.isChoice = payload.isChoice || this.isChoice;
        this.okText = payload.okText || this.okText;
        this.cancelText = payload.cancelText || this.cancelText;
      },
      cancelModal() {
        if (this.confirmHandler && this.confirmHandler.cancel) {
          this.confirmHandler.cancel();
        }
        this.dialog = false
      },
      confirmModal() {
        if (this.confirmHandler && this.confirmHandler.ok) {
          this.confirmHandler.ok();
        }
        this.dialog = false
      }
    },
    beforeMount () {
      bus.$on('dialog', this.modalContent)
    },
    beforeDestroy () {
      bus.$off('dialog', this.modalContent)
    }
  }
</script>
