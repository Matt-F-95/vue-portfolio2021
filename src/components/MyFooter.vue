<template>
    <div>
        <footer class="page-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col s12 socialMedia">
                        <a href="https://www.instagram.com/feltonweb" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.github.com/matt-f-95" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/feltonweb" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.twitter.com/felton_web" target="_blank"><i class="fab fa-twitter"></i></a>
                        
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container center-align">
                    <div class="row">
                        <div class="col l12 s12 m12">
                   <a id="copyrightFooter" href="https://mattfelton.com/">Built with <i class="fab fa-vuejs"></i> and <i class="fa fa-coffee"></i> by Matt Felton © 2021</a>
                   </div>
                   </div>
                </div>
            </div>
        </footer>
    </div>
</template>


<script>
    export default {
        name: 'MyFooter',
        props: {
            msg: String
        }
    }
</script>


<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    i:hover {
        color: #e31a6d;
        transition: 1s;
    }

    a:hover {
        color: #e31a6d;
        transition: 1s;
    }


    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
        text-transform: uppercase;
    }

    .page-footer {
        background: #1B232E;
    }

    .fa-instagram {
        color: #fff;
        font-size: 4rem;
    }

    .fa-github {
        color: #fff;
        font-size: 4rem;
    }

    .fa-linkedin {
        color: #fff;
        font-size: 4rem;
    }

    .fa-twitter {
        color: #fff;
        font-size: 4rem;
    }

    .fa-dev {
        color: #fff;
        font-size: 4rem;
    }

    .socialMedia {
        display: flex;
        flex-direction:row;
        justify-content: space-evenly;
    }

    #copyrightFooter {
        text-align:center;
    }
</style>