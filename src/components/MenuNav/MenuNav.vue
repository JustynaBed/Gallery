<template>
    <div>
        <b-navbar class="cl-effect-10" type="dark" variant="primary" toggleable>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
                <b-navbar-nav>
                    <b-nav-item href="../">HOME</b-nav-item>
                    <b-nav-item href="/gallery1">ALBUM I</b-nav-item>
                    <b-nav-item href="/gallery2">ALBUM II</b-nav-item>
                    <b-nav-item href="/gallery3">ALBUM III</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'menuNav'
    }
</script>

<style scoped>
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(231, 231, 231, 0.5);
        font-family: 'Merienda One', Arial, sans-serif;;
        font-size: 22px;
    }

    .navbar-dark .navbar-nav .nav-link:hover {
        color: #eece1a;
    }

    .bg-primary {
        background-color: #252525 !important;
        box-shadow: inset 0 -18px 8px -12px rgba(88, 75, 75, 0.77);
        border: none;
    }

    .navbar {
        padding: 0.5rem 1rem;
    }
</style>

