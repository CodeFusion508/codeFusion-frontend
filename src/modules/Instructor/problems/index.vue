<template>
    <main>
        <div class="row mx-0">
            <input type="text" class="form-control my-3" placeholder="Titulo del Problema">
            <textarea placeholder="Descripción del Problema" class="form-control my-2" rows="3"></textarea>
            <div class="col-sm-6 px-0">
                <select v-model="language" class="form-control">
                    <option selected>Lenguaje</option>
                    <option v-for="obj in languages" :value="obj">
                        {{ obj }}
                    </option>
                </select>
            </div>
            <div class="col-sm-6 px-0">
                <select class="form-control">
                    <option selected>Contenido del Dia</option>
                    <option value="1">Solución de problema</option>
                </select>
            </div>
        </div>
        <div class="mt-3" >
            <ul v-if="MultiLanguage.layout" class="nav justify-content-center">
                <li v-for="item in MultiLanguage.title" 
                role="button" class="nav-item">
                    <a class="nav-link">{{item}}</a>
                </li>
            </ul>
            <vue-monaco-editor 
            v-model:value="code[MultiLanguage.languageNow]" 
            :language="getLanguage" 
            :diffEditor="true" 
            theme="vs-dark"
            height="400px" />
        </div>
    </main>
</template>

<script>
export default {
    data: () => ({
        contentLosses: [],
        code: {
            html: ''
        },
        language: 'html',
        languages: [
            'html', 'css', 'javascript', 
            'html-css-javascript', 
            'html-css', 
            'html-javascript'
        ],
        MultiLanguage: {
            layout: false,
            title: [],
            languageNow: 'html'
        }
    }),
    computed: {
        getLanguage() {
            const language = (this.language).split('-')
            if(language.length >= 2) {
                this.MultiLanguage = {
                    title: language,
                    layout: true
                }
                language.forEach(lang => {
                    this.MultiLanguage.code[lang] = ''
                })
                return this.MultiLanguage.languageNow
            }
            return this.language
        }
    }
}
</script>