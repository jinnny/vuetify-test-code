<template>
  <div>
    <button @click.prevent="testMyDialog()">my button test2</button>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import bus from '../utils/bus';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import '../assets/vendors/swiper.css'

  export default {
    name: 'test1',
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
      return {
        swiperOptions: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
          // ...
        }
      }
    },
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
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    }
  };
</script>

<style scoped>

</style>
