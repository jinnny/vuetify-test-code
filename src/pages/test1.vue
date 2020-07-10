<template>
  <div>
    <button @click.prevent="openMyDialog()">my button</button><br>
    <button @click.prevent="testMyDialog()">my button test2</button>

    <v-card
      style="background: #ccc;"
      class="mx-auto"
      max-width="300"
      tile
    >
      <v-list max-height="670" nav class="slide-list">
        <v-subheader>REPORTS</v-subheader>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          no-action
          :ripple="false"
        >
          <template v-slot:activator>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </template>
          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            link
            :ripple="false"
          >
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
  import bus from '../utils/bus';

  export default {
    name: 'test1',
    data: () => ({
      model: null,
      items: [
        {
          action: 'local_activity',
          title: '가나다라',
          items: [
            { title: 'List Item' },
          ],
        },
        {
          action: 'restaurant',
          title: '위메프패션',
          items: [
            { title: '가나123' },
            { title: '어드민' },
            { title: '메뉴' },
          ],
        },
        {
          action: 'school',
          title: 'Education',
          items: [
            { title: 'List Item' },
          ],
        },
        {
          action: 'directions_run',
          title: 'Family',
          items: [
            { title: 'List Item' },
          ],
        },
        {
          action: 'healing',
          title: 'Health',
          items: [
            { title: 'List Item' },
          ],
        },
        {
          action: 'content_cut',
          title: 'Office',
          items: [
            { title: 'List Item' },
          ],
        },
        {
          action: 'local_offer',
          title: 'Promotions',
          items: [
            { title: 'List Item' },
          ],
        }
      ]
    }),
    methods: {
      open () {
        console.log('open')
        bus.$emit('alert',
          {
            alert: {
              active: true,
              text: '수정되었습니다.'
            }
          }
        )
      },
      test () {
        bus.$emit('alert',
          {
            alert: {
              active: true,
              text: '넴?.',
              type: 'info'
            }
          }
        )
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
                  this.test()
                }
              }
            }
          }
        )
      }
    }
  };
</script>

<style lang="scss">
.slide-list {
  &.v-list {
    overflow-y: auto;
    background: #fff !important;
    .v-subheader {
      padding: 0 12px;
      font-weight: 600;
      font-size: 1rem;
    }
    .v-list-group__header {
      padding: 0 12px;
      .v-list-item__icon {
        .v-icon {
          color: #4f5663;
        }
      }
    }
    .v-list-group {
      &--active {
        .v-list-group__header {
          .v-list-item__icon {
            .v-icon {
              color: #ffffff;
            }
          }
        }
      }
    }
    .v-list-group__items {
      padding-left: 40px;
      position: relative;
      &:before {
        content: '';
        height: calc(100% - 10px);
        width: 1px;
        background: #cccccc;
        display: block;
        position: absolute;
        left: 20px;
        top: 10px;
      }
      .v-list-item {
        min-height: 32px;
        &:first-child {
          padding-top: 10px;
        }
        .v-list-item__content {
          padding: 8px 0;
        }
        .v-list-item__title {
          color: #4f5663;
        }
        &.v-list-item--link {
          padding-left: 0;
          &:hover {
            color: #4545;
          }
          &:active,
          &:focus,
          &:hover {
            &:before {
              background: none;
              opacity: 1;
            }
          }
          &:before,&:after {
            background: none;
          }
        }
        .v-list-item__title {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.5;
          &:hover {
            color: #444;
            font-weight: 600;
          }
        }
      }
    }
  }
  .v-list-item.v-list-item--active {
    color: #ffffff;
    background: #007aff;
  }
  .v-list-item {
    margin-bottom: 0;
    background: #fff;
  }
  &.v-list .v-list-item:not(:last-child):not(:only-child), &.v-list .v-list-item:not(:last-child):not(:only-child) {
    margin-bottom: 0;
  }
  &.v-list .v-list-item, &.v-list .v-list-item::before, &.v-list .v-list-item > .v-ripple__container {
    border-radius: 0;
    /*box-shadow: 0 3px 6px rgba(0,0,0,.08);*/
  }
}
</style>
