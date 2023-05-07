export const signUpFields = [
    {
        id:1,
        name:'username',
        type:'text',
        placeholder:'Username',
        label:'Username',
        pattern:'[A-Za-z]{1,32}',
        errMsg:"please enter username"

    },
    {
        id:2,
        name:'email',
        type:'email',
        placeholder:'Email',
        label:'Email',
        pattern:'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$',
        errMsg:'please enter valid email'

    },
    {
        id:3,
        name:'phone',
        type:'text',
        placeholder:'Phone',
        label:'Phone',
        pattern:'[6789][0-9]{9}',
        errMsg:'please enter valid phone number'
    },
    {
        id:4,
        name:'password',
        type:'password',
        placeholder:'Password',
        label:'Password',
        pattern:'(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
        errMsg:'contains atleast 8 characters,a number, uppercase and lowercase letter'
    }
]