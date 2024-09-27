function login (a,b)
{
    if(a === 'admin' && b === 'p@ssw0rd')
    {alert('LOGIN สำเร็จ')}
    else{alert('LOGIN ไม่สำเร็จ')}
}
let username = prompt('Input username');
let password = prompt('Input username');
login(username,password)