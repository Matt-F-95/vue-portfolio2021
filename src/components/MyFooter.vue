<template>
    <div>
        <footer class="page-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col s12 socialMedia">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-twitter"></i>
                        
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col l12 s4 m4">
                    <a id="copyrightFooter" href="https://mattfelton.com/">Matt Felton</a> © 2021
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