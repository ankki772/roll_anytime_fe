export const signInFiels = [
    {
        id:3,
        name:'emailPhone',
        type:'text',
        placeholder:'enter email or phone',
        label:'Email or Phone',
        pattern:'^([6789][0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$',
        errMsg:'please enter valid phone or email'
    },
    {
        id:4,
        name:'password',
        type:'password',
        placeholder:'Password',
        label:'Password',
        pattern:'^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$',
        errMsg:'contains atleast 8 characters,a number, uppercase and lowercase letter'
    }
]