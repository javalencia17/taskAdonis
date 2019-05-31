const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
    const View = use('View')

    View.global('appUrl',path =>{
        
        const Env = use('Env')

        const APP_URL = Env.get('APP_URL')

        return path ? `${APP_URL}/${path}` : APP_URL
    })

})