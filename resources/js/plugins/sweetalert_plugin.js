export default {
    install: (app, options) => {
        const swal = app.config.globalProperties.$swal;
        // Set main sweetAlert2 default values begin
        window.Swal = swal.mixin({
            allowOutsideClick: false,
            allowEscapeKey: false,
          //  confirmButtonClass: 'btn btn-danger',

       
            
            // confirmButtonColor: '#22c55e',
            // cancelButtonColor: '#ef4444',
            
        })
        // Set main sweetAlert2 default values end

        // Set toast sweetAlert2 default values begin
        window.Toast = swal.mixin({
            toast: true,
            position: 'top-end',
            // iconColor: 'white',
            // customClass: {
            //     popup: 'colored-toast'
            // },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', swal.stopTimer)
                toast.addEventListener('mouseleave', swal.resumeTimer)
            }
        });
    }
}