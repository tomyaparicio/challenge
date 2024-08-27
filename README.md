# Challenge Vue 2 - Sistema de Autenticación - Ed Machina

Este proyecto es una aplicación web desarrollada en Vue.js 2 y Vuetify 2, que incluye funcionalidades de autenticación como inicio de sesión, registro de usuarios, recuperación de contraseñas y un dashboard protegido. 

## Características

- **Pantalla de Inicio de Sesión (Login):** Permite a los usuarios autenticarse en la aplicación ingresando su correo electrónico y contraseña.
- **Pantalla de Registro (Register):** Los nuevos usuarios pueden registrarse proporcionando su nombre, correo electrónico y creando una contraseña.
- **Pantalla de Recuperación de Contraseña:** Los usuarios pueden recuperar su contraseña ingresando su correo electrónico para recibir instrucciones.
- **Dashboard:** Área protegida a la que solo pueden acceder los usuarios autenticados. Si el login es exitoso, el usuario es redirigido al dashboard.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- Node.js (versión 10 o superior)
- Vue CLI (opcional pero recomendado)

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tomyaparicio/challenge.git
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```
- Vue.js
- Vuetify
- Vue Router
- vue-chartjs

## Uso

### Desarrollar en Local

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run serve
```


## Documentacion

### Funciones Importantes 

 #### Log in

```
login() {
  // Inicia el proceso de autenticación.
  
  this.loading = true; 
  // Establece la variable `loading` a `true` para mostrar un indicador de carga (spinner).
  // Este indicador suele aparecer en el botón de "Iniciar sesión" para indicar que el sistema está procesando la solicitud.
  
  this.loginError = false; 
  // Restablece cualquier mensaje de error anterior relacionado con la autenticación.
  // `loginError` es una variable booleana que controla la visibilidad de un mensaje de error en la interfaz de usuario.
  
  setTimeout(() => {
    // Utiliza `setTimeout` para simular una llamada a una API o proceso de autenticación.
    // Este retraso simula el tiempo que tomaría realizar una verificación en un servidor.
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Recupera los datos de usuarios almacenados en el `localStorage`.
    // `localStorage` es un almacenamiento web que permite guardar datos clave-valor en el navegador.
    // Los datos se recuperan y se convierten de formato JSON a un objeto JavaScript.
    // Si no hay usuarios almacenados, se establece un array vacío como valor por defecto.
    
    const user = users.find(u => u.email === this.email && u.password === this.password);
    // Busca un usuario en el array `users` cuya dirección de correo electrónico (`email`) y contraseña (`password`) coincidan con los valores ingresados por el usuario en el formulario de inicio de sesión.
    // `find()` devuelve el primer usuario que cumple con las condiciones, o `undefined` si no se encuentra ninguno.
    
    if (user) {
      // Si se encuentra un usuario que coincide con las credenciales proporcionadas:
      
      localStorage.setItem('user', JSON.stringify(user));
      // Almacena la información del usuario autenticado en `localStorage` bajo la clave `user`.
      // Esto guarda los datos del usuario en formato JSON, lo que permite que la sesión persista entre recargas de página.
      
      this.$router.push('/'); 
      // Redirige al usuario a la página principal del dashboard.
      // `$router.push()` es una función de Vue Router que navega a una ruta específica, en este caso, la raíz `/`.
    } else {
      // Si no se encuentra un usuario que coincida con las credenciales:
      
      this.loginError = true;
      // Establece `loginError` a `true`, lo que hace que se muestre un mensaje de error en la interfaz de usuario.
      // Este mensaje informará al usuario que las credenciales ingresadas son incorrectas.
      
      this.loading = false;
      // Detiene el indicador de carga (spinner), ya que el proceso de autenticación ha fallado.
    }
  }, 2000); 
  // El retraso de 2000 milisegundos (2 segundos) simula el tiempo de espera de una llamada a un servidor.
}
```

 #### Register

```
register() {
  // 1. Verifica si el formulario es válido utilizando las reglas de validación establecidas
  if (this.$refs.form.validate()) {

    // 2. Si el formulario es válido, activa el estado de carga (loading = true)
    this.loading = true;

    // 3. Simula un retardo de 1 segundo utilizando setTimeout, para imitar el tiempo de espera de una API
    setTimeout(() => {
      
      // 4. Crea un objeto llamado 'user' con las propiedades 'email' y 'password' obtenidas del formulario
      const user = {
        email: this.email,        // Asigna el valor actual de this.email al campo 'email' del objeto user
        password: this.password,  // Asigna el valor actual de this.password al campo 'password' del objeto user
      };

      // 5. Recupera el array de usuarios previamente guardado en localStorage.
      // JSON.parse se utiliza para convertir la cadena JSON guardada en localStorage en un array de objetos.
      // Si no hay usuarios guardados (null), inicializa un array vacío.
      let users = JSON.parse(localStorage.getItem('users')) || [];

      // 6. Agrega el nuevo objeto 'user' al array 'users'
      users.push(user);

      // 7. Convierte el array 'users' en una cadena JSON y lo guarda nuevamente en localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // 8. Establece 'userCreated' en true para mostrar el mensaje de éxito
      this.userCreated = true;

      // 9. Después de 2 segundos, redirige al usuario a la página de inicio de sesión si no está ya en ella
      setTimeout(() => {
        if (this.$route.path !== '/login') {
          this.$router.push('/login');  // Redirige al usuario a la página de inicio de sesión
        }
      }, 2000);
    }, 1000); // La función setTimeout espera 1 segundo (1000 ms) antes de ejecutar el bloque de código

  } else {
    // 10. Si la validación del formulario falla (no es válida), detiene el estado de carga
    this.loading = false;

    // 11. Muestra una alerta indicando que se deben ingresar un correo electrónico y una contraseña válidos
    alert('Please enter a valid email and password.');
  }
}
```
 #### verify And Update Password
```
verifyAndUpdatePassword() {
  // 1. Inicia el estado de carga, que puede ser usado para mostrar un spinner o indicador visual
  this.loading = true;

  // 2. Utilizamos setTimeout para simular una demora en la operación, como si fuera una llamada a una API
  setTimeout(() => {

    // 3. Recupera la lista de usuarios almacenados en localStorage, y si no hay usuarios, inicializa un array vacío
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 4. Busca en el array de usuarios un objeto que tenga un email que coincida con el ingresado
    const user = users.find(u => u.email === this.email);

    // 5. Verifica si se encontró un usuario con el email ingresado y si aún no se ha verificado
    if (user && !this.isVerified) {
      // 6. Si el correo está registrado y aún no se ha verificado:
      //    a. Marca el estado de verificación como verdadero, lo que permite al usuario ingresar una nueva contraseña
      this.isVerified = true;

      //    b. Establece `verificationFailed` en falso para ocultar cualquier mensaje de error previo
      this.verificationFailed = false;

    } else if (this.isVerified && this.newPassword) {
      // 7. Si el usuario ya ha sido verificado y ha ingresado una nueva contraseña:

      //    a. Actualiza la contraseña del usuario en el objeto correspondiente
      user.password = this.newPassword;

      //    b. Guarda el array de usuarios actualizado en localStorage
      localStorage.setItem('users', JSON.stringify(users));

      //    c. Establece `passwordUpdated` en verdadero para mostrar un mensaje de éxito
      this.passwordUpdated = true;

      //    d. Establece `verificationFailed` en falso para asegurar que no haya errores mostrados
      this.verificationFailed = false;
      
      // 8. Después de 1 segundo, redirige al usuario a la página de inicio de sesión
      setTimeout(() => {
        this.$router.push('/login');
      }, 1000);

    } else {
      // 9. Si la verificación falla (es decir, no se encuentra el usuario o no se ha ingresado una nueva contraseña):
      //    a. Establece `verificationFailed` en verdadero para mostrar un mensaje de error
      this.verificationFailed = true;
    }

    // 10. Finaliza el estado de carga, lo que puede ocultar cualquier indicador visual de carga
    this.loading = false;
  }, 2000); // 11. Simula una espera de 2 segundos antes de finalizar la operación
}
```

## Mejoras Futuras

- **Doble Autenticación:** Implementar doble autenticación para la creación y recuperación de contraseñas, mejorando la seguridad del sistema.
- **Uso de Vuex:** Migrar la gestión de estado desde `localStorage` a Vuex para una mejor arquitectura de la aplicación.
- **Librería de Componentes:** Utilizar una librería de componentes que se alinee mejor con los estándares de la empresa para mejorar la consistencia visual.
- **Base de Datos y API:** Integrar una base de datos y APIs para manejar la información, permitiendo una mayor escalabilidad y seguridad.

