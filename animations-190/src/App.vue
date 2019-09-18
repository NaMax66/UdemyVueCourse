<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary"
                @click="showFade = !showFade">Toggle fade
        </button>
        <br><br>
        <label for="anim-type">Choose your destiny</label>
        <select v-model="animationType"
                id="anim-type"
                class="form-control">
          <option value="fade">Set fade</option>
          <option value="slide">Set slide</option>
        </select>
        <br>

        <!--using name for animation-->
        <transition :name="animationType">
          <div class="alert alert-info"
               v-show="showFade">
            <p>Some special kinda stuff!</p>
          </div>
        </transition>
        <hr>
        <button class="btn btn-danger"
                @click="showSlide = !showSlide">Toggle slide
        </button>
        <hr>
        <!--if we use animation and transition we should show the type attribute-->
        <transition name="slide" type="animation">
          <div class="alert alert-danger"
               v-if="showSlide">
            <p>Some special kinda stuff!</p>
          </div>
        </transition>
        <hr>
        <button class="btn btn-warning"
                @click="showExternalCss = !showExternalCss">Toggle slide
        </button>
        <br><br>
        <!--appear create smoothness after page opens-->
        <transition type="animation"
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
          <div class="alert alert-warning"
               v-if="showExternalCss">
            <p>Some special kinda stuff!</p>
          </div>
        </transition>
        <br><br>

        <!--switching between two elements-->
        <button class="btn bg-info" @click="showSwitch = !showSwitch">Change</button>
        <br><br>
        <!--out-in: old gone, new comes in-->
        <transition :name="animationType" mode="out-in">
          <div class="alert alert-info"
               v-if="showSwitch" key="info">
            Info msg
          </div>
          <div class="alert alert-warning"
               v-else key="warning">
            Alert msg
          </div>
        </transition>

        <hr>
        <hr>
        <hr>

        <!--JavaScript animation-->
        <button class="btn btn-primary"
                @click="load = !load">Load / Remove Element
        </button>
        
        <!--transition hooks-->
        <transition @before-enter="beforeEnter" 
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"> <!--tell Vue do not use css-->
          <div style="width: 300px; height: 100px; background-color: lightgreen; margin-top: 1rem"
               v-if="load"></div>
        </transition>

      </div>
    </div>
    <hr>

    <button class="btn bg-success"
            style="margin-bottom: 2rem"
        @click="selectedComponent === 'success-alert' ? selectedComponent = 'danger-alert': selectedComponent = 'success-alert'">Switch</button>

    <!--one component at the time animation-->
    <transition name="fade" mode="out-in">
      <component :is="selectedComponent"></component>
    </transition>

    <hr>
    <!--List animation-->
    <div>
      <button class="btn btn-primary"
              style="margin-bottom: 2rem"
              @click="addItem"
      >Add Item</button>

      <ul class="list-group">
        <transition-group name="slide">
          <li class="list-group-item"
              v-for="(number, index) in numbers"
              @click="removeItem(index)"
              style="cursor: pointer; margin-bottom: .5rem"
              :key="number"
          >{{ number }}</li>
        </transition-group>
      </ul>
    </div>


  </div>
</template>

<script>
  import DangerAlert from "./DangerAlert.vue"
  import SuccessAlert from "./SuccessAlert.vue"

  export default {
    components: {
      DangerAlert,
      SuccessAlert
    },
    data() {
      return {
        showFade: false,
        showSlide: false,
        showSwitch: false,
        showExternalCss: false,
        animationType: "fade",

        load: true,
        elementWidth: 100,
        elementWidthEnd: 300,

        selectedComponent: 'success-alert',

        numbers: [1, 2, 3, 4, 5]
      };
    },

    methods: {
      beforeEnter(el) {
        console.log('before enter');
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px'
      },
      /*done is a function*/
      enter(el, done) {
        console.log('enter');
        let round = 1;
        let currentInterval = 100;

        const interval = setInterval(()=>{
          currentInterval = this.elementWidth + round * 10;
          el.style.width = currentInterval + 'px';
          round ++;
          if (currentInterval >= this.elementWidthEnd) {
            clearInterval(interval);
            /*to say Vue that is animation is done. Need for async code*/
            done();
          }
        }, 20);
      },

      addItem() {
        const i = Math.floor(Math.random() * this.numbers.length);
        const el = this.numbers.length + 1;
        this.numbers.splice(i, 0, el);
      },

      removeItem(index) {
        this.numbers.splice(index, 1);
      },

      afterEnter(el) {
        console.log('after enter');
      },

      enterCancelled(el) {
        console.log('enter cancel');
      },

      beforeLeave(el) {
        console.log('before leave');
        el.style.width = this.elementWidthEnd + 'px';
      },

      leave(el, done) {
        console.log('leave');
        let round = 1;
        let currentInterval = 300;

        const interval = setInterval(()=>{
          currentInterval = this.elementWidthEnd - round * 10;
          el.style.width = currentInterval + 'px';
          round ++;
          if (currentInterval <= this.elementWidth) {
            clearInterval(interval);
            /*to say Vue that is animation is done. Need for async code*/
            done();
          }
        }, 20);
      },

      afterLeave(el) {
        console.log('after leave');
      },

      leaveCancelled(el) {
        console.log('leaveCancelled');
      }
    }
  };
</script>

<style>
  /*it will be removed after one frame*/
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    /*opacity: 1;*/
  }

  .fade-leave-active {
    transition: opacity .5s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in .5s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out .5s ease-out forwards;
    transition: opacity .5s;
    opacity: 0;

    /*need for list animation*/
    position: absolute;
  }

  /*if smth moves*/
  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

</style>
