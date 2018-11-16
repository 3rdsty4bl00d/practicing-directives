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
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>
