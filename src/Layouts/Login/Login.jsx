import { useEffect } from 'react'
import './LoginStyle.css'


const Login = () => {

    const e = document.querySelector(".Login")

    const handleLogin = (e) => {
        if (e.getAttribute("position") === "left") {
            setRight()
        } else {
            setLeft()
        }
    }

    const setLeft = () => e.setAttribute("position", 'left')
    const setRight = () => e.setAttribute("position", 'right')

    useEffect(()=>{
        setLeft()
    },[])

    return (
        <div className='Login'>
            <section>

                <button onClick={handleLogin}>
                    AAA
                </button>

                <article className="animatedLogin">
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" />

                    <label htmlFor="password">password</label>
                    <input type="password" name="password" />
                </article>

            </section>
        </div>
    )
}

export default Login