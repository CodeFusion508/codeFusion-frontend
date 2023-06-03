<template>
    <main>
        <nav-bar />
        <div class="d-flex justify-content-center">
            <div class="col-sm-10 col-12 col-xs-10 mt-5">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="col-sm-12" >
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item py-3">Contenido</li>
                                <li class="list-group-item py-3">Problemas</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-9" >
                       <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <nav-footer />
    </main>
</template>
