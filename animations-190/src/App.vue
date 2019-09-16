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
        <select v-model="animationType" class="form-control">
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
        <!--appear create smoothness after page opens-->
        <transition type="animation"
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
          <div class="alert alert-danger"
               v-if="showSlide">
            <p>Some special kinda stuff!</p>
          </div>
        </transition>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showFade: false,
        showSlide: true,
        animationType: 'fade'
      };
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
