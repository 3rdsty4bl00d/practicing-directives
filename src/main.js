import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        /*el.style.backgroundColor = binding.value;*/
        /*el.style.backgroundColor = 'green;*/
        var delay = 0;
        if(binding.modifiers['delayed']) {
            delay = 5000;
        }
        /*
            this is what we call 'awesome'
            setTimeout() is a javascript function
            above
            we checked if we have a modifier in the 
            custom made directive
            here, modifier is a string object
            if we have a modifier then the value of delay will set to 3sec
            then the color of background is changed 
            to what the user has given
        */
        setTimeout(() => {
            if(binding.arg == 'background'){
            el.style.backgroundColor = binding.value;
        } else {
            el.style.color = binding.value;
        }
        }, delay);
        
        
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
