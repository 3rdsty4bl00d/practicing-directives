<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                    <h1>Built-in directives</h1>
                    <p v-text="'v-text directive'"></p>
                    <!--
                        be sure to sanitize your output
                        while using v-html directive
                        to make sure you're not the
                        victim of cross-sites scripting attacks
                        
                        because you can put html tag in there
                        and it can be a malicious script tags
                    -->
                    <p v-html="'<strong>v-html directive</strong>'"></p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                    <h1>Custom directives</h1>
                    <p v-highlight.delayed="'red'">Color this</p>
                    <p v-local-highlight.delayed="'red'">Color this, too</p>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            localHighlight: {
                bind(el, binding, vnode) {
                    /*el.style.backgroundColor = binding.value;*/
                    /*el.style.backgroundColor = 'green;*/
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
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
                        if (binding.arg == 'background') {
                            el.style.backgroundColor = binding.value;
                        } else {
                            el.style.color = binding.value;
                        }
                    }, delay);
                }
            }
        }
    }

</script>

<style>

</style>
