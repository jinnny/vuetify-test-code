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
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            link
            ripple
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
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
      item: 1,
      items: [
        {
          action: 'local_activity',
          title: 'Attractions',
          items: [
            { title: 'List Item' },
          ],
        },
        {
          action: 'restaurant',
          title: 'Dining',
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
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
        },
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
    .v-list-group__items {
      padding-left: 40px;
      position: relative;
      &:before {
        content: '';
        height: 100%;
        width: 1px;
        background: #cccccc;
        display: block;
        position: absolute;
        left: 20px;
        top: 10px;
      }
      .v-list-item {
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
          &:hover {
            color: #4545;
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
