<script>
export default {
    name: 'Header',
    data() {
        return {
            MenuItems: [
                {
                    label: '',
                    routeName: 'Home'
                }
            ]
        }
    }
}


</script>



<template>
    <header>
        <nav class="navbar navbar-expand-md shadow-sm navigation">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="">
                    <div class="logo fw-bold">
                        <router-link :to="{ name: MenuItems[0].routeName }" class="nav-link" aria-current="page">DevHelpers</router-link>
                                
                                </div>

                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation'">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto ms-2">
                        <li class="nav-item">
                            <router-link :to="{ name: MenuItems[0].routeName }" class="nav-link" aria-current="page">Home</router-link>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto ms-2">
                        <!-- Authentication Links -->

                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:8000/login">Accedi</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:8000/register">Registrati</a>
                        </li>

                        <li class="nav-item dropdown">
                            <!-- <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                Auth::user()->name
                            </a> -->

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="http://127.0.0.1:8000/login">Accedi</a>
                                <a class="dropdown-item" href="http://127.0.0.1:8000/register">Registrati</a>
                                <!-- <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a> -->

                                <!-- <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    
                                </form> -->
                            </div>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
        <!-- nostra navbar -->
        <!-- <div class="container">
            <div class="row">
                <div class="head-bar d-flex justify-content-between">

                    <div class="logo ">DevHelpers</div>

                    <div class="navigation">

                        <div class="col sm-6">
                            <a href="http://127.0.0.1:8000/login">LOGIN</a>
                        </div>
                        <div class="col sm-6">
                            <a href="http://127.0.0.1:8000/register">REGISTER</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

    </header>
</template>



<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.navbar-collapse {
    background-color: $bkg-light;
    // padding: 10px;
}
.logo {
    color: $dark-green;
}
header {
    height: 60px;
    background-color: $bkg-light ;
}
</style>